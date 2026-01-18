import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import BookConsultation from './pages/book-consultation';
import Contact from './pages/contact';
import ServicesHub from './pages/services-hub';
import AboutUs from './pages/about-us';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/book-consultation" element={<BookConsultation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services-hub" element={<ServicesHub />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
