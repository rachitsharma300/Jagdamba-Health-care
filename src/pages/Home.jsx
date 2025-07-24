import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home – PatientCare</title>
        <meta name="description" content="PatientCare home page. Trusted elderly and patient care services with professional nursing and consultations at your doorstep." />
      </Helmet>

      {/* <section className="text-center py-10"> */}
      <section id="hero" className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <h1 className="text-4xl font-bold text-primary">Welcome to Patient Care</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">Your trusted partner for senior and patient care services. Book your consultation today.</p>
        <button className="mt-6 px-6 py-3 bg-secondary text-white rounded-full">Book Consultation</button>
      </section>
    </>
  );
};

export default Home;
