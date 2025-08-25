/*
  # Esquema inicial para Zukunft Welle

  1. Nuevas Tablas
    - `profiles` - Perfiles de usuario
    - `categories` - Categorías de artículos  
    - `articles` - Artículos del blog
    - `comments` - Comentarios en artículos
    - `article_likes` - Likes de artículos
    - `products` - Productos de la tienda
    - `cart_items` - Items del carrito

  2. Seguridad
    - RLS habilitado en todas las tablas
    - Políticas para usuarios autenticados
    - Políticas públicas para lectura
*/

-- Habilitar extensiones
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla de perfiles de usuario
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  username text UNIQUE NOT NULL,
  first_name text DEFAULT '',
  last_name text DEFAULT '',
  avatar_url text,
  bio text DEFAULT '',
  role text DEFAULT 'user' CHECK (role IN ('user', 'admin', 'editor', 'author')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabla de categorías
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  color text DEFAULT 'from-blue-500 to-cyan-500',
  icon text DEFAULT 'Tag',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabla de artículos
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text DEFAULT '',
  content text NOT NULL,
  cover_image text,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  author_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  featured boolean DEFAULT false,
  views_count integer DEFAULT 0,
  likes_count integer DEFAULT 0,
  read_time text DEFAULT '5 min',
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabla de tags de artículos
CREATE TABLE IF NOT EXISTS article_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid REFERENCES articles(id) ON DELETE CASCADE,
  tag text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Tabla de comentarios
CREATE TABLE IF NOT EXISTS comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content text NOT NULL,
  article_id uuid REFERENCES articles(id) ON DELETE CASCADE,
  author_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  parent_id uuid REFERENCES comments(id) ON DELETE CASCADE,
  status text DEFAULT 'published' CHECK (status IN ('published', 'pending', 'spam')),
  likes_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabla de likes de artículos
CREATE TABLE IF NOT EXISTS article_likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid REFERENCES articles(id) ON DELETE CASCADE,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(article_id, user_id)
);

-- Tabla de productos
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  price decimal(10,2) NOT NULL,
  original_price decimal(10,2),
  category text NOT NULL,
  image text,
  images text[] DEFAULT '{}',
  colors text[] DEFAULT '{}',
  sizes text[] DEFAULT '{}',
  tags text[] DEFAULT '{}',
  rating decimal(2,1) DEFAULT 0,
  reviews_count integer DEFAULT 0,
  stock integer DEFAULT 0,
  featured boolean DEFAULT false,
  in_stock boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabla de items del carrito
CREATE TABLE IF NOT EXISTS cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  quantity integer DEFAULT 1,
  selected_color text,
  selected_size text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, product_id, selected_color, selected_size)
);

-- Habilitar RLS en todas las tablas
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

-- Políticas para profiles
CREATE POLICY "Usuarios pueden ver perfiles públicos"
  ON profiles FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Usuarios pueden actualizar su propio perfil"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Políticas para categories (públicas)
CREATE POLICY "Categorías son públicas"
  ON categories FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Solo admins pueden modificar categorías"
  ON categories FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() 
      AND role IN ('admin', 'editor')
    )
  );

-- Políticas para articles
CREATE POLICY "Artículos publicados son públicos"
  ON articles FOR SELECT
  TO authenticated, anon
  USING (status = 'published');

CREATE POLICY "Autores pueden ver sus propios artículos"
  ON articles FOR SELECT
  TO authenticated
  USING (author_id = auth.uid());

CREATE POLICY "Autores pueden crear artículos"
  ON articles FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = author_id AND
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() 
      AND role IN ('admin', 'editor', 'author')
    )
  );

CREATE POLICY "Autores pueden actualizar sus artículos"
  ON articles FOR UPDATE
  TO authenticated
  USING (
    author_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() 
      AND role IN ('admin', 'editor')
    )
  );

-- Políticas para article_tags
CREATE POLICY "Tags son públicos"
  ON article_tags FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Autores pueden gestionar tags de sus artículos"
  ON article_tags FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM articles 
      WHERE id = article_id 
      AND (author_id = auth.uid() OR EXISTS (
        SELECT 1 FROM profiles 
        WHERE id = auth.uid() 
        AND role IN ('admin', 'editor')
      ))
    )
  );

-- Políticas para comments
CREATE POLICY "Comentarios publicados son públicos"
  ON comments FOR SELECT
  TO authenticated, anon
  USING (status = 'published');

CREATE POLICY "Usuarios autenticados pueden comentar"
  ON comments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Usuarios pueden actualizar sus comentarios"
  ON comments FOR UPDATE
  TO authenticated
  USING (
    author_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() 
      AND role IN ('admin', 'editor')
    )
  );

-- Políticas para article_likes
CREATE POLICY "Likes son públicos"
  ON article_likes FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Usuarios pueden dar like"
  ON article_likes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuarios pueden quitar su like"
  ON article_likes FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Políticas para products (públicos)
CREATE POLICY "Productos son públicos"
  ON products FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Solo admins pueden gestionar productos"
  ON products FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() 
      AND role IN ('admin', 'editor')
    )
  );

-- Políticas para cart_items
CREATE POLICY "Usuarios pueden ver su carrito"
  ON cart_items FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Usuarios pueden gestionar su carrito"
  ON cart_items FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Insertar categorías iniciales
INSERT INTO categories (name, slug, description, color, icon) VALUES
  ('Codechaos', 'codechaos', 'El desorden donde nace lo nuevo - Softwareentwicklung', 'from-purple-500 to-pink-500', 'Code'),
  ('Datenjunkies', 'datenjunkies', 'Los que no pueden soltar los datos - Data Science', 'from-blue-500 to-cyan-500', 'BarChart3'),
  ('Maschinengeflüster', 'maschinengefluster', 'Susurros de las máquinas - Künstliche Intelligenz', 'from-green-500 to-emerald-500', 'Brain'),
  ('Stahlrebellen', 'stahlrebellen', 'Rebeldes de acero - Robotik', 'from-gray-500 to-slate-500', 'Bot'),
  ('Orakel 2.0', 'orakel-2-0', 'El oráculo actualizado - Prognose', 'from-indigo-500 to-purple-500', 'Crystal'),
  ('Grenzsprenger', 'grenzsprenger', 'Los que rompen límites - Kunst', 'from-pink-500 to-rose-500', 'Palette'),
  ('Techgeil', 'techgeil', 'Obsesión tecnológica - Gadget-Shop', 'from-lime-500 to-green-500', 'Smartphone')
ON CONFLICT (slug) DO NOTHING;

-- Insertar productos iniciales
INSERT INTO products (name, description, price, original_price, category, image, colors, sizes, tags, rating, reviews_count, stock, featured, in_stock) VALUES
  ('Zukunft Welle T-Shirt Premium', 'Hochwertiges Bio-Baumwoll T-Shirt mit dem exklusiven Zukunft Welle Logo. Nachhaltig produziert und super bequem.', 29.99, 39.99, 'clothing', 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=600', '{"Schwarz","Weiß","Navy","Grau"}', '{"S","M","L","XL","XXL"}', '{"Bio-Baumwolle","Nachhaltig","Unisex"}', 4.8, 124, 50, true, true),
  ('KI-Programmier-Tasse "Code & Coffee"', 'Keramiktasse mit inspirierenden KI-Zitaten für Entwickler. Perfekt für lange Coding-Sessions.', 19.99, null, 'accessories', 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600', '{"Weiß","Schwarz"}', '{}', '{"Keramik","Spülmaschinenfest","Entwickler"}', 4.6, 89, 30, false, true),
  ('Smart Watch "Future Time"', 'Smartwatch mit Gesundheitsmonitoring, GPS und 7 Tage Akkulaufzeit. Wasserdicht bis 50m.', 199.99, 249.99, 'tech', 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=600', '{"Schwarz","Silber","Gold"}', '{}', '{"Wasserdicht","GPS","Herzfrequenz"}', 4.4, 312, 15, true, true)
ON CONFLICT DO NOTHING;

-- Funciones para actualizar timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para actualizar timestamps
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_comments_updated_at BEFORE UPDATE ON comments FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_cart_items_updated_at BEFORE UPDATE ON cart_items FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();