import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Zukunft Welle Zine - Tech & Innovation Magazine",
  description = "Eine digitale Zeitschrift für junge Internationale mit Leidenschaft für STEAM, Technologie, Kunst und Kultur",
  keywords = "Tech, STEAM, Künstliche Intelligenz, Programmierung, Data Science, Robotik, Innovation, Zukunft",
  image = "/1.png",
  url = "https://zukunftwelle.com",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEOHead;