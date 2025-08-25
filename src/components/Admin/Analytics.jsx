import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Eye, 
  Heart, 
  MessageSquare,
  Calendar,
  Users,
  BarChart3
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

const Analytics = () => {
  const [analytics, setAnalytics] = useState({
    totalViews: 0,
    totalLikes: 0,
    totalComments: 0,
    topArticles: [],
    viewsOverTime: [],
    categoryStats: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    fetchAnalytics();
  }, [timeRange]);

  const fetchAnalytics = async () => {
    try {
      setIsLoading(true);
      
      // Get date range
      const now = new Date();
      const daysAgo = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
      const startDate = new Date(now.getTime() - (daysAgo * 24 * 60 * 60 * 1000));

      // Total views
      const { data: articlesData } = await supabase
        .from('articles')
        .select('views_count, likes_count, title, slug, created_at')
        .eq('status', 'published');

      const totalViews = articlesData?.reduce((sum, article) => sum + (article.views_count || 0), 0) || 0;
      const totalLikes = articlesData?.reduce((sum, article) => sum + (article.likes_count || 0), 0) || 0;

      // Total comments
      const { count: totalComments } = await supabase
        .from('comments')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'published')
        .gte('created_at', startDate.toISOString());

      // Top articles
      const topArticles = articlesData
        ?.sort((a, b) => (b.views_count || 0) - (a.views_count || 0))
        .slice(0, 5) || [];

      // Category stats
      const { data: categoryData } = await supabase
        .from('articles')
        .select(`
          categories (name, slug),
          views_count
        `)
        .eq('status', 'published')
        .not('categories', 'is', null);

      const categoryStats = {};
      categoryData?.forEach(article => {
        const categoryName = article.categories?.name;
        if (categoryName) {
          if (!categoryStats[categoryName]) {
            categoryStats[categoryName] = {
              name: categoryName,
              slug: article.categories.slug,
              views: 0,
              articles: 0
            };
          }
          categoryStats[categoryName].views += article.views_count || 0;
          categoryStats[categoryName].articles += 1;
        }
      });

      const categoryStatsArray = Object.values(categoryStats)
        .sort((a, b) => b.views - a.views)
        .slice(0, 6);

      setAnalytics({
        totalViews,
        totalLikes,
        totalComments: totalComments || 0,
        topArticles,
        categoryStats: categoryStatsArray
      });

    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Vistas',
      value: analytics.totalViews.toLocaleString(),
      icon: Eye,
      color: 'from-blue-500 to-cyan-500',
      change: '+12%'
    },
    {
      title: 'Total Likes',
      value: analytics.totalLikes.toLocaleString(),
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      change: '+8%'
    },
    {
      title: 'Comentarios',
      value: analytics.totalComments.toLocaleString(),
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      change: '+15%'
    },
    {
      title: 'Engagement',
      value: '4.2%',
      icon: TrendingUp,
      color: 'from-purple-500 to-indigo-500',
      change: '+3%'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Analytics</h2>
          <p className="text-gray-600 text-sm">
            Analiza el rendimiento de tu contenido
          </p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="7d">Últimos 7 días</option>
          <option value="30d">Últimos 30 días</option>
          <option value="90d">Últimos 90 días</option>
        </select>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="text-gray-500 mt-2">Cargando analytics...</p>
        </div>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      {stat.change} vs período anterior
                    </p>
                  </div>
                  <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Artículos Más Vistos
              </h3>
              <div className="space-y-4">
                {analytics.topArticles.map((article, index) => (
                  <div key={article.slug} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          {article.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(article.created_at).toLocaleDateString('es-ES')}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {(article.views_count || 0).toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500">vistas</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Category Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Rendimiento por Categoría
              </h3>
              <div className="space-y-4">
                {analytics.categoryStats.map((category, index) => (
                  <div key={category.slug} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {category.views.toLocaleString()} vistas
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                        style={{
                          width: `${Math.min((category.views / Math.max(...analytics.categoryStats.map(c => c.views))) * 100, 100)}%`
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{category.articles} artículos</span>
                      <span>{Math.round(category.views / category.articles)} vistas/artículo</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default Analytics;