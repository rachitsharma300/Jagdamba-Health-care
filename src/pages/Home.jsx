import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import HeroImage from '../assets/images/nurse-consultation-jagdamba-health-one.png'; // Add your hero image

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Jagdamba Healthcare - Premium Senior Care Services</title>
        <meta 
          name="description" 
          content="Jagdamba Healthcare provides compassionate in-home senior care services including nursing, dementia care, and daily assistance. Serving families across India with 24/7 support." 
        />
        <meta name="keywords" content="senior care, home nursing, elderly care, dementia care, caregiver services, in-home care India" />
        <meta property="og:title" content="Jagdamba Healthcare - Premium Senior Care Services" />
        <meta property="og:description" content="Compassionate in-home senior care services with professional caregivers and nurses." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://jagdambahealthcare.com" />
      </Helmet>

      <section 
        id="hero" 
        className="relative bg-gradient-to-br from-blue-900 to-teal-700 text-white py-24 md:py-32 overflow-hidden"
        aria-label="Jagdamba Healthcare Hero Section"
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/50"></div>
          <img
            src={HeroImage}
            alt="Professional caregiver assisting elderly patient"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-teal-300">Dignified Care</span> for Your <span className="text-yellow-300">Loved Ones</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Professional in-home senior care services with compassion, expertise, and 24/7 support across India.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/services"
                className="inline-flex items-center justify-center bg-teal-400 hover:bg-teal-300 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="Explore our services"
              >
                Our Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="Get a free assessment"
              >
                Free Assessment
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;