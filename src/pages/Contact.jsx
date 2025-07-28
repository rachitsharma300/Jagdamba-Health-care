import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactBg from "../assets/images/demo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [activeTab, setActiveTab] = useState("form");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      description: "Speak directly with our care coordinators",
      details: "+91 97183 81908",
      action: "Call Now",
      actionLink: "+91 97183 81908",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      description: "Send us your questions or requests",
      details: "care@jagdambahealth.com",
      action: "Send Email",
      actionLink: "mailto:care@jagdambahealth.com",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      details: "Available 9AM-7PM",
      action: "Start Chat",
      actionLink: "#chat",
    },
  ];

  return (
    <section id="contact" className="relative py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm" />
        <img src={ContactBg} alt="Background" className="w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get in <span className="text-teal-300">Touch</span>
          </h2>
          <p className="text-md text-white/90 max-w-2xl mx-auto">
            We're here to answer your questions and discuss your care needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT: FORM TABS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-white/20"
          >
            <div className="flex border-b border-gray-200 mb-5">
              <button
                className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === "form" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("form")}
              >
                Send Message
              </button>
              <button
                className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === "callback" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("callback")}
              >
                <motion.span
                  className="mr-1"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28l1.498 4.493-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257 4.493 1.498V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.span>
                Request Callback
              </button>
            </div>

            {/* FORM FIELDS */}
            {activeTab === "form" ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                {["name", "email", "phone"].map((field) => (
                  <div key={field}>
                    <label className="block text-xs font-medium text-gray-700 mb-1 capitalize">{field} *</label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      required
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select a service</option>
                    <option value="senior-care">In-Home Senior Care</option>
                    <option value="nursing-care">Specialized Nursing Care</option>
                    <option value="dementia-care">Dementia & Alzheimer's Care</option>
                    <option value="respite-care">Respite Care</option>
                    <option value="palliative-care">Palliative Care</option>
                    <option value="post-hospital">Post-Hospital Care</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 text-sm rounded-lg shadow">
                  Send Message
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Preferred Callback Time</label>
                  <select className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option value="">Any time</option>
                    <option value="morning">Morning (9AM-12PM)</option>
                    <option value="afternoon">Afternoon (12PM-4PM)</option>
                    <option value="evening">Evening (4PM-7PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Any Notes</label>
                  <textarea className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" rows="2" />
                </div>
                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 text-sm rounded-lg shadow">
                  Request Callback
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT: INFO CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/90 p-5 rounded-xl shadow-lg border border-white/20">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Contact Information</h3>
              <div className="space-y-3">
                {contactMethods.map((method, i) => (
                  <div key={i} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                    <div className="mt-0.5">{method.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{method.title}</h4>
                      <p className="text-xs text-gray-600">{method.description}</p>
                      <p className="text-sm font-medium text-gray-800">{method.details}</p>
                      <a href={method.actionLink} className="text-xs text-teal-600 hover:text-teal-700 inline-block mt-1">
                        {method.action} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/90 p-5 rounded-xl shadow-lg border border-white/20">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Visit Us</h3>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-teal-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-800">Jagdamba Health Care</p>
                  <p className="text-xs text-gray-600">123 Patparganj, Delhi</p>
                  <p className="text-xs text-gray-600">Delhi, India - 800001</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-xs text-teal-600 hover:text-teal-700 inline-block mt-1">
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;