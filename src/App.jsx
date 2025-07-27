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
import NotFound from "./pages/NotFound";

import { ThemeProvider } from "./context/ThemeContext";

// Layouts
const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
    <WhatsAppButton />
    <ScrollToTopButton />
  </div>
);

const AdminLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-100">
    {children}
  </div>
);

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        {/* Home - all sections */}
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

        {/* Login */}
        <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminPanel />
            </AdminLayout>
          }
        />

        {/* Not Found */}
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
