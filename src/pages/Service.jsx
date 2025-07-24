import React from "react";
import { motion } from "framer-motion";
import serviceBackground from "../assets/images/serviceBackground.png";

const services = [
  {
    title: "In-Home Senior Care",
    description:
      "Compassionate caregivers providing daily living assistance, companionship, and personalized care.",
    icon: "👵",
    features: [
      "Personal care",
      "Meal preparation",
      "Medication reminders",
      "Mobility assistance",
    ],
  },
  {
    title: "Specialized Nursing Care",
    description:
      "Skilled nursing services for post-operative care, chronic conditions, and medical needs.",
    icon: "💉",
    features: [
      "Wound care",
      "IV therapy",
      "Pain management",
      "Health monitoring",
    ],
  },
  {
    title: "Dementia & Alzheimer's Care",
    description:
      "Specialized care programs designed for memory-impaired seniors with trained professionals.",
    icon: "🧠",
    features: [
      "Cognitive exercises",
      "Behavior management",
      "Safety supervision",
      "Family support",
    ],
  },
  {
    title: "Respite Care",
    description:
      "Temporary relief for family caregivers with professional care for their loved ones.",
    icon: "⏳",
    features: [
      "Short-term care",
      "Flexible scheduling",
      "Peace of mind",
      "Continuity of care",
    ],
  },
  {
    title: "Palliative Care",
    description:
      "Comfort-focused care for seniors with serious illnesses, emphasizing quality of life.",
    icon: "🕊️",
    features: [
      "Pain relief",
      "Emotional support",
      "Symptom management",
      "Family counseling",
    ],
  },
  {
    title: "Post-Hospital Care",
    description:
      "Transitional care to help seniors recover safely at home after hospitalization.",
    icon: "🏥",
    features: [
      "Recovery monitoring",
      "Therapy coordination",
      "Prevent readmissions",
      "Rehabilitation support",
    ],
  },
];

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-teal-600">Comprehensive Care</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored care solutions designed to meet the unique needs of each
            senior we serve.
          </p>
        </motion.div>

        {/* New image here */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <img
            src={serviceBackground} // replace with your actual path
            alt="Caring senior services"
            className="w-full rounded-lg shadow-md object-cover max-h-96 mx-auto"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-teal-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="text-teal-600 font-medium flex items-center group">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
