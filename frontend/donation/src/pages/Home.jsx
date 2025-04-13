import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative bg-teal-500 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Share Unused Medicine, Save Lives
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join our mission to reduce medical waste and help those in need access vital medications.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to="/donate" className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
              Donate Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              number="1"
              title="Donate Unused Medicine"
              description="Safely donate your unexpired, unopened medications through our secure platform."
              delay={0.2}
            />
            <FeatureCard 
              number="2"
              title="We Verify & Sort"
              description="Our pharmacists verify all donations for safety and sort them for distribution."
              delay={0.4}
            />
            <FeatureCard 
              number="3"
              title="Medicines Reach Those in Need"
              description="We distribute medications to community clinics, shelters, and disaster relief programs."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StatCard number="50,000+" label="Donations Collected" />
            <StatCard number="$2.5M+" label="Value of Medicine Donated" />
            <StatCard number="10,000+" label="People Helped" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Make a Difference?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your unused medications can help someone in need. Join our network of donors today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate" className="bg-teal-600 text-white font-bold py-3 px-8 rounded-md hover:bg-teal-700 transition-colors duration-300">
              Donate Medicine
            </Link>
            <Link to="/about" className="bg-white text-teal-600 border border-teal-600 font-bold py-3 px-8 rounded-md hover:bg-gray-50 transition-colors duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const FeatureCard = ({ number, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-lg text-center"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const StatCard = ({ number, label }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-4xl font-bold mb-2">{number}</h3>
      <p className="text-xl">{label}</p>
    </motion.div>
  );
};

export default Home;