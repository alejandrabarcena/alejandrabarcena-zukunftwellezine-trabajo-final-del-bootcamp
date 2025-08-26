import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './components/Auth/AuthProvider';
import Layout from './components/Layout/Layout';
import ServiceWorker from './components/Performance/ServiceWorker';
import { useAnalytics } from './hooks/useAnalytics';

import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import Shop from './pages/Shop';
import About from './pages/About';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import AuthCallback from './pages/AuthCallback';

function AppContent() {
  useAnalytics();

  return (
    <Routes>
      {/* Rutas fuera del layout (auth, callbacks) */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/auth/callback" element={<AuthCallback />} />

      {/* Rutas que comparten el Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:slug" element={<CategoryDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <ServiceWorker />
          <AppContent />
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}
