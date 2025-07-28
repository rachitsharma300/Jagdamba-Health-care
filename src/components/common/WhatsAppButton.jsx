import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const phoneNumber = "9718381908";
  const defaultMessage = "Hello, I'm interested in JHC healthcare services";

  // JHC specific messages
  const messages = [
    "Need healthcare advice? We're here!",
    "JHC experts available to help you",
    // "Get personalized health consultation",
    "Ask about our healthcare services",
    "Your wellness is our priority",
    "Chat with JHC specialists now!",
    // "Professional medical guidance available",
    // "Discuss your health concerns with us",
    "Message our team for quick advice",
    "Quality care with JHC Health Services"
  ];

  // Rotate messages every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Show message bubble after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[999]">
      {/* Message Bubble */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-5 bg-white shadow-lg rounded-lg p-4 w-64 z-[999]"
          >
            <p className="text-gray-700 text-sm">{messages[currentMessageIndex]}</p>
            <div className="absolute right-0 -bottom-2 w-4 h-4 bg-white transform rotate-45 translate-x-3"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-16 bottom-2 bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg whitespace-nowrap z-[999]"
          >
            Chat with JHC!
            <div className="absolute right-0 top-1/2 w-2 h-2 bg-gray-800 transform rotate-45 -translate-y-1/2 translate-x-1"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg relative z-[999]"
        aria-label="Chat with JHC"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaWhatsapp size={28} />

        {/* Ping animation */}
        <motion.span
          className="absolute inset-0 border-2 border-[#25D366] rounded-full"
          animate={{
            scale: [1, 1.3],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* JHC badge */}
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          JHC
        </span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;