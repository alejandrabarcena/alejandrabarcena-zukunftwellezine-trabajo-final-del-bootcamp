import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('articles')
        .select(`
          *,
          categories (name, slug),
          profiles (first_name, last_name, username, avatar_url)
        `)
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Transform data to match expected format
      const transformedArticles = data?.map(article => ({
        id: article.id,
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        content: article.content,
        coverImage: article.cover_image,
        category: article.categories?.name || 'Sin categoría',
        categorySlug: article.categories?.slug || 'general',
        author: {
          name: `${article.profiles?.first_name || ''} ${article.profiles?.last_name || ''}`.trim() || article.profiles?.username || 'Anónimo',
          avatar: article.profiles?.avatar_url || 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        publishedAt: article.published_at || article.created_at,
        views: article.views_count || 0,
        likes: article.likes_count || 0,
        readTime: article.read_time || '5 min',
        tags: [], // Tags will be fetched separately if needed
        featured: article.featured || false,
        status: article.status
      })) || [];

      setArticles(transformedArticles);
    } catch (error) {
      console.error('Error fetching articles:', error);
      setError(error.message);
      
      // Fallback to static articles if API fails
      const { articles: staticArticles } = await import('../data/articles');
      setArticles(staticArticles);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return {
    articles,
    loading,
    error,
    refetch: fetchArticles
  };
};

export const useArticle = (id) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('articles')
          .select(`
            *,
            categories (name, slug),
            profiles (first_name, last_name, username, avatar_url)
          `)
          .eq('id', id)
          .eq('status', 'published')
          .single();

        if (error) throw error;

        const transformedArticle = {
          id: data.id,
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt,
          content: data.content,
          coverImage: data.cover_image,
          category: data.categories?.name || 'Sin categoría',
          categorySlug: data.categories?.slug || 'general',
          author: {
            name: `${data.profiles?.first_name || ''} ${data.profiles?.last_name || ''}`.trim() || data.profiles?.username || 'Anónimo',
            avatar: data.profiles?.avatar_url || 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
          },
          publishedAt: data.published_at || data.created_at,
          views: data.views_count || 0,
          likes: data.likes_count || 0,
          readTime: data.read_time || '5 min',
          tags: [],
          featured: data.featured || false,
          status: data.status
        };

        setArticle(transformedArticle);
      } catch (error) {
        console.error('Error fetching article:', error);
        setError(error.message);
        
        // Fallback to static articles
        const { articles: staticArticles } = await import('../data/articles');
        const fallbackArticle = staticArticles.find(a => a.id === id);
        setArticle(fallbackArticle || null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  return {
    article,
    loading,
    error
  };
};