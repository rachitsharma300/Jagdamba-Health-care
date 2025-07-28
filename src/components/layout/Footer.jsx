import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaWhatsapp />, url: "#" }
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" }
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: "+91 97183 81908" },
    { icon: <FaEnvelope />, text: "info@jagdambahealthcare.com" },
    { icon: <FaMapMarkerAlt />, text: "Delhi, Patparganj, India" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-teal-800 text-white pt-12 pb-6">
      <motion.div 
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {/* Brand */}
        <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-teal-300">JAGDAMBA</span> Health Care
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Your trusted partner for elderly & patient care services. We ensure comfort and professional attention at your doorstep.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4 border-b border-teal-300 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.to} 
                  className="hover:text-teal-300 transition-colors duration-300 flex items-center text-gray-300"
                >
                  <span className="w-2 h-2 bg-teal-300 rounded-full mr-2"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4 border-b border-teal-300 pb-2 inline-block">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-teal-300 mt-1">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="mt-6 flex space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-teal-300 hover:text-gray-900 transition-all duration-300"
                aria-label={`Social media link ${index}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4 border-b border-teal-300 pb-2 inline-block">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to our newsletter for the latest updates and health tips.
          </p>
          <form className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 rounded bg-white bg-opacity-10 border border-gray-600 focus:outline-none focus:border-teal-300 text-white placeholder-gray-400"
              required
            />
            <button 
              type="submit" 
              className="bg-teal-300 hover:bg-teal-400 text-gray-900 font-medium py-2 px-4 rounded transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Admin Link */}
          <Link
            to="/admin"
            className="text-sm text-gray-400 hover:text-teal-300 transition-colors duration-300 mb-4 md:mb-0"
          >
            Admin Portal
          </Link>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} JAGDAMBA Health Care. All rights reserved.
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
