import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "919876543210";
  const message = "Hello, I'm interested in your healthcare services";

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-16 bottom-2 bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg whitespace-nowrap"
          >
            Chat with us!
            <div className="absolute right-0 top-1/2 w-2 h-2 bg-gray-800 transform rotate-45 -translate-y-1/2 translate-x-1"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg"
        aria-label="Chat on WhatsApp"
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
            opacity: [0.7, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;