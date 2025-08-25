import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics tracking
export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
    });
  }
};

export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Custom hook for page tracking
export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return {
    trackEvent,
    trackPageView,
  };
};

// Specific tracking functions
export const trackArticleView = (articleId, title) => {
  trackEvent('view_article', 'engagement', title, articleId);
};

export const trackCategoryView = (category) => {
  trackEvent('view_category', 'navigation', category);
};

export const trackSearch = (searchTerm) => {
  trackEvent('search', 'engagement', searchTerm);
};

export const trackNewsletterSignup = (email) => {
  trackEvent('newsletter_signup', 'conversion', email);
};

export const trackUserRegistration = () => {
  trackEvent('sign_up', 'conversion', 'user_registration');
};

export const trackUserLogin = () => {
  trackEvent('login', 'engagement', 'user_login');
};