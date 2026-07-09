import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const location = useLocation();

  // Common typo corrections and redirects
  const routeRedirects: Record<string, string> = {
    '/service': '/services',
    '/servic': '/services',
    '/servces': '/services',
    '/serivces': '/services',
    '/serviecs': '/services',
    '/home': '/',
    '/main': '/',
    '/index': '/',
    '/about': '/',
    '/contact': '/',
    '/pricing': '/',
    '/process': '/',
    '/testimonials': '/',
    '/stats': '/',
    '/brands': '/',
    '/work': '/',
    '/projects': '/',
  };

  useEffect(() => {
    // Log navigation for debugging
    console.log('Route accessed:', location.pathname);
  }, [location.pathname]);

  // Check for redirects
  const redirectPath = routeRedirects[location.pathname];
  if (redirectPath) {
    console.log(`Redirecting ${location.pathname} to ${redirectPath}`);
    return <Navigate to={redirectPath} replace />;
  }

  // Handle service detail routes with invalid IDs
  if (location.pathname.startsWith('/services/')) {
    const serviceId = location.pathname.split('/')[2];
    if (!serviceId || serviceId === 'undefined' || serviceId === 'null') {
      console.log('Invalid service ID, redirecting to services list');
      return <Navigate to="/services" replace />;
    }
  }

  return <>{children}</>;
};

export default RouteGuard;
