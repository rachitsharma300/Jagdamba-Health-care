import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroPic1 from "../../assets/images/nurse-consultation-jagdamba-health-one.png";
import HeroPic2 from "../../assets/images/nurse-consultation-jagdamba-health-two.png";
import HeroPic3 from "../../assets/images/nurse-consultation-jagdamba-health-three.png";
import { motion } from "framer-motion";
import Avatar from "react-avatar";
import { FaWhatsapp, FaStar } from "react-icons/fa";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { src: HeroPic1, alt: "Professional nurse providing consultation" },
    { src: HeroPic2, alt: "Elderly care with compassion" },
    { src: HeroPic3, alt: "Home care services" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const sampleUsers = [
    { name: "Rahul Sharma", role: "Family Member" },
    { name: "Priya Patel", role: "Daughter" },
    { name: "Amit Singh", role: "Son" },
    { name: "Neha Gupta", role: "Caregiver" },
    { name: "Vikram Joshi", role: "Family Friend" },
  ];

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-blue-900 to-teal-700 text-white pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
      aria-label="Jagdamba Healthcare Hero Section"
    >
      {/* Background pattern with reduced opacity */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content - Fully Restored */}
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="text-teal-300">Dignified Care</span> for Your{" "}
              <span className="text-yellow-300">Loved Ones</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl mb-8 text-gray-100 max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Professional in-home senior care services with compassion,
              expertise, and 24/7 support across India.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-teal-400 hover:bg-teal-300 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="Explore our services"
              >
                Our Services
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="Get a free assessment"
              >
                Free Assessment
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center gap-4"
              variants={itemVariants}
            >
              <div className="flex -space-x-2 relative">
                {sampleUsers.map((user, index) => (
                  <div key={index} className="group relative">
                    <Avatar
                      name={user.name}
                      size="40"
                      round={true}
                      className="border-2 border-white hover:border-teal-300 transition-all duration-200 cursor-pointer"
                      color="#0d9488"
                      fgColor="#ffffff"
                      aria-label={`Happy client: ${user.name}`}
                    />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                      {user.name}
                      <br />
                      {user.role}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-medium">
                  Trusted by 500+ families across India
                </p>
                <div className="flex items-center justify-center sm:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      aria-label={`Rating star ${i + 1}`}
                    />
                  ))}
                  <span className="ml-1">4.9/5 (120+ reviews)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image - Fixed mobile display */}
          <motion.div
            className="lg:w-1/2 flex justify-center w-full"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-lg h-[300px] sm:h-[350px] md:h-[400px]">
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl object-cover object-center border-4 ${
                    index === currentImageIndex
                      ? "border-teal-300"
                      : "border-white/20"
                  } transition-all duration-300`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentImageIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.8 }}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
                <div className="text-gray-900 font-bold text-sm sm:text-lg">
                  24/7 Care Available
                </div>
                <div className="text-teal-600 text-xs sm:text-base">
                  Emergency Response: 30 mins
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full animate-pulse">
                  LIVE
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
