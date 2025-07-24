import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-6">Page Not Found</p>
      <Link to="/" className="text-secondary underline">Go Home</Link>
    </section>
  );
};

export default NotFound;
