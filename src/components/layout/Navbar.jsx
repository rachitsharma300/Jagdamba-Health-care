import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'services', label: 'Services' },
    { to: 'contact', label: 'Contact' },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-blue-900 to-teal-800 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Brand with Logo */}
          <div className="flex-shrink-0 flex items-center">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="flex items-center cursor-pointer"
            >
              <img 
                src={logo} 
                alt="Jagdamba Health Care Logo" 
                className="h-20 w-auto mr-3" 
              />
              <div className="text-2xl font-bold tracking-wide text-white whitespace-nowrap">
                <span className="text-teal-300">JAGDAMBA</span>
                <span className="ml-1 text-white">HEALTH CARE</span>
              </div>
            </ScrollLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-teal-300"
                className="text-white hover:text-teal-300 cursor-pointer transition-colors duration-300 relative group font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
            ))}
            
            {/* Contact Button */}
            <RouterLink 
              to="/contact" 
              className="ml-4 bg-teal-400 hover:bg-teal-300 text-gray-900 font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
            >
              <FaPhoneAlt className="mr-2" />
              Contact Us
            </RouterLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-teal-300 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-gradient-to-b from-blue-900 to-teal-800 shadow-xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <motion.div className="px-2 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <motion.div key={link.to} variants={mobileItemVariants}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="block px-4 py-3 text-lg rounded-md text-white hover:bg-teal-700 cursor-pointer transition-colors duration-300 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </ScrollLink>
                </motion.div>
              ))}
              <motion.div variants={mobileItemVariants}>
                <RouterLink
                  to="/contact"
                  className="block px-4 py-3 text-lg rounded-md bg-teal-400 text-gray-900 hover:bg-teal-300 cursor-pointer transition-colors duration-300 flex items-center font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  <FaPhoneAlt className="mr-2" />
                  Contact Us
                </RouterLink>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;