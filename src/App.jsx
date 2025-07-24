// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
// import CallButton from "./components/common/CallButton";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

import Hero from "./components/home/Hero";
import About from "./pages/About";
import Services from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Contact />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      {/* <CallButton /> */}
      <ScrollToTopButton />
    </div>
  );
};

export default App;
