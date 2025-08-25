# 🚀 CONFIGURACIÓN DE SUPABASE - API REAL

## 📋 PASOS PARA CONFIGURAR LA BASE DE DATOS

### 1. 🏗️ Crear Proyecto en Supabase

1. **Ve a:** https://supabase.com/dashboard
2. **Clic en:** "New Project"
3. **Nombre:** "zukunft-welle-blog"
4. **Contraseña:** (guarda esta contraseña)
5. **Región:** Europe (más cercana)

### 2. 🔧 Configurar Variables de Entorno

1. **En Supabase Dashboard:**
   - Ve a "Settings" > "API"
   - Copia "Project URL" 
   - Copia "anon public key"

2. **Crea archivo `.env` en la raíz del proyecto:**
   ```env
   VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
   VITE_SUPABASE_ANON_KEY=tu_anon_key_aquí
   ```

### 3. 📊 Ejecutar Migración de Base de Datos

1. **En Supabase Dashboard:**
   - Ve a "SQL Editor"
   - Copia todo el contenido de `supabase/migrations/create_initial_schema.sql`
   - Pégalo y ejecuta (botón "Run")

### 4. 🔐 Configurar Autenticación

1. **En Supabase Dashboard:**
   - Ve a "Authentication" > "Settings"
   - **Site URL:** `http://localhost:5173`
   - **Redirect URLs:** `http://localhost:5173/auth/callback`
   - **Disable email confirmations** (para desarrollo)

### 5. ✅ Verificar que Funciona

1. **Reinicia el servidor:**
   ```bash
   npm run dev
   ```

2. **Ve a:** http://localhost:5173
3. **Deberías ver:** Los artículos cargando desde Supabase

## 🎯 FUNCIONALIDADES INCLUIDAS

### ✅ **ARTÍCULOS:**
- ✅ Crear artículos desde el navegador
- ✅ Editar artículos online
- ✅ Categorías dinámicas
- ✅ Tags personalizados
- ✅ Imágenes de portada
- ✅ Estados: borrador/publicado
- ✅ Contador de vistas y likes

### ✅ **USUARIOS:**
- ✅ Registro con email/password
- ✅ Login/logout
- ✅ Perfiles de usuario
- ✅ Roles: user/author/editor/admin
- ✅ Avatares personalizados

### ✅ **COMENTARIOS:**
- ✅ Comentarios en artículos
- ✅ Respuestas anidadas
- ✅ Moderación de comentarios
- ✅ Likes en comentarios

### ✅ **TIENDA:**
- ✅ Productos dinámicos
- ✅ Carrito de compras
- ✅ Gestión de stock
- ✅ Múltiples imágenes por producto

### ✅ **ADMIN PANEL:**
- ✅ Dashboard completo
- ✅ Gestión de artículos
- ✅ Gestión de categorías
- ✅ Analytics básicos
- ✅ Gestión de usuarios

## 🔧 COMANDOS ÚTILES

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build
```

## 🆘 TROUBLESHOOTING

**Error: "Missing Supabase environment variables"**
- Verifica que el archivo `.env` existe
- Verifica que las variables están correctas

**Error: "relation does not exist"**
- Ejecuta la migración SQL en Supabase Dashboard

**Error de autenticación:**
- Verifica las URLs de redirect en Supabase

## 🎉 ¡LISTO!

Ahora tienes una **API real** con:
- ✅ Base de datos PostgreSQL
- ✅ Autenticación real
- ✅ Tiempo real
- ✅ Escalable
- ✅ Gratis hasta 50,000 usuarios

**¡Tu blog ahora es completamente funcional!** 🚀