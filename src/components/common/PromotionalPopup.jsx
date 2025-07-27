import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

const PromotionalPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const phoneNumber = "9718381908";
  const offerMessage = "Hello, I'm interested in your special offer!";

  useEffect(() => {
    // Show popup after 2-3 seconds (randomized between 2000-3000ms)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000 + Math.random() * 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full relative overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Close popup"
            >
              <FaTimes size={18} />
            </button>

            {/* Offer Content */}
            <div className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Special Offer!
                </h3>
                <p className="text-gray-700 mb-4">
                  Get 20% off on all healthcare services this week! Limited time
                  offer.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-700">
                  <strong>Hurry!</strong> Offer ends soon. Contact us now to
                  avail this discount.
                </p>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  offerMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
              >
                <FaWhatsapp className="mr-2" size={20} />
                Contact Now
              </a>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-3 text-center text-sm text-gray-500">
              Limited time offer. Terms and conditions apply.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PromotionalPopup;
