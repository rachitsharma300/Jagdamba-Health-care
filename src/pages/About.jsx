import React from "react";
import { motion } from "framer-motion";
import AboutPic from "../assets/images/demo.png";

const About = () => {
  const milestones = [
    { year: "2010", title: "Founded", description: "Started with a single caregiver serving local families" },
    { year: "2014", title: "Expanded Services", description: "Added specialized nursing care and dementia programs" },
    { year: "2018", title: "Quality Certification", description: "Received national accreditation for care standards" },
    { year: "2022", title: "1000+ Families Served", description: "Milestone of serving over 1000 families in our community" },
    { year: "Today", title: "Continuing Excellence", description: "Ongoing commitment to compassionate, professional care" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-teal-600">Story</span> & Values
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <img
              src={AboutPic}
              alt="About our senior care services"
              className="w-full rounded-xl shadow-xl object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg w-3/4">
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm">To enhance quality of life for seniors through compassionate, personalized care.</p>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Providing <span className="text-teal-600">Dignified Care</span> Since 2010
              </h3>
              <p className="text-gray-600 mb-6">
                At our core, we believe every senior deserves to age with dignity, comfort, and respect in their own home. Our team of certified caregivers, nurses, and care managers are dedicated to delivering exceptional care tailored to each individual's needs.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-4 mb-8"
            >
              {[
                { title: "Compassion", icon: "❤️", desc: "Treating every client like family" },
                { title: "Expertise", icon: "🎓", desc: "Highly trained professional staff" },
                { title: "Reliability", icon: "⏱️", desc: "Consistent, dependable care" },
                { title: "Integrity", icon: "🤝", desc: "Honest, ethical practices" }
              ].map((value, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl mb-2">{value.icon}</div>
                  <h4 className="font-bold text-gray-800">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-4 h-full w-0.5 bg-teal-500"></div>
              {milestones.map((milestone, i) => (
                <div key={i} className="relative pl-12 pb-8 last:pb-0">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-teal-600 border-4 border-white flex items-center justify-center text-white font-bold shadow-md">
                    {milestone.year}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1">{milestone.title}</h4>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;