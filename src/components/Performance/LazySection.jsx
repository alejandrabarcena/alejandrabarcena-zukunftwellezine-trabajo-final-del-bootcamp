import React, { useState, useRef, useEffect } from 'react';

const LazySection = ({ 
  children, 
  className = "",
  threshold = 0.1,
  rootMargin = "50px",
  fallback = null,
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={sectionRef} className={className} {...props}>
      {isVisible ? children : (fallback || <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>)}
    </div>
  );
};

export default LazySection;