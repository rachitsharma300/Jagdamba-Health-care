import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

import Hero from "./components/home/Hero";
import About from "./pages/About";
import Services from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import { ThemeProvider } from "./context/ThemeContext";
import NotFound from "./pages/NotFound";

// Layout component for regular pages (with navbar and footer)
const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
    <WhatsAppButton />
    <ScrollToTopButton />
  </div>
);

// Layout component for admin pages (without navbar and footer)
const AdminLayout = ({ children }) => (
  <div className="min-h-screen">
    {children}
  </div>
);

const App = () => {
  return (
      <ThemeProvider>
    <Routes>
      {/* Home route with all sections */}
      <Route
        path="/"
        element={
          <MainLayout>
            <>
              <Hero />
              <About />
              <Services />
              <Contact />
            </>
          </MainLayout>
        }
      />
      
      {/* Login page with main layout */}
      <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
      
      {/* Admin panel with special layout (no navbar/footer) */}
      <Route path="/admin" element={<AdminLayout><AdminPanel /></AdminLayout>} />
      
      {/* 404 page with main layout */}
      <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
    </Routes>
    </ThemeProvider>
  );
};

export default App;