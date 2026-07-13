import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import RouteGuard from "@/components/RouteGuard";
import ScrollToTop from "@/components/ScrollToTop";
import { ContactFormProvider } from "@/components/ContactFormModal";

const Index = lazy(() => import("./pages/Index"));
const ServicesList = lazy(() => import("./pages/ServicesList"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ContactFormProvider>
          <ScrollToTop />
          <RouteGuard>
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen bg-background">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold border-t-transparent" />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<ServicesList />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </RouteGuard>
          </ContactFormProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
