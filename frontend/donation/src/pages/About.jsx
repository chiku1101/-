import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-teal-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            About MediShare
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Our story, mission, and impact in reducing medical waste and improving healthcare access
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              At MediShare, we're committed to addressing two critical challenges: reducing pharmaceutical waste and improving access to essential medications for those in need. Every year, millions of dollars worth of unused medications are wasted, while many individuals struggle to afford their prescribed treatments.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Our platform provides a safe, secure, and legal way for individuals to donate their unexpired, unopened medications. These donations are verified by licensed pharmacists and distributed to community clinics, shelters, and disaster relief programs where they can help those most in need.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Story
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              MediShare was founded in 2023 by a group of healthcare professionals who witnessed firsthand the vast amount of medication waste in the healthcare system, while simultaneously seeing patients who couldn't afford their prescribed medications.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              What began as a small community initiative has grown into a nationwide network of donors, pharmacists, and recipient organizations working together to ensure that good medicine doesn't go to waste and that more people have access to the treatments they need.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Today, MediShare operates with a commitment to transparency, safety, and efficiency, ensuring that every donation makes a meaningful impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TeamMember 
              name="Dr. Non Pattewar"
              role="Founder & CEO"
              bio="Former hospital pharmacist with 15 years experience in healthcare systems."
              delay={0.2}
            />
            <TeamMember 
              name="Sujal choti luli Pattu"
              role="Head of Operations"
              bio="Logistics expert specializing in healthcare supply chain management."
              delay={0.4}
            />
            <TeamMember 
              name="Dr Rand Reddy"
              role="Medical Director"
              bio="Board-certified physician ensuring all donations meet medical safety standards."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Partners</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Partner name="City Health Clinic" />
            <Partner name="Global Relief Initiative" />
            <Partner name="Neighborhood Pharmacy" />
            <Partner name="Healthcare Access Project" />
            <Partner name="County Medical Services" />
            <Partner name="Community Care Network" />
            <Partner name="National Pharmacy Association" />
            <Partner name="Medical Relief Foundation" />
          </div>
        </div>
      </section>

    </motion.div>
  );
};

const TeamMember = ({ name, role, bio, delay }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md text-center"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-1 text-gray-800">{name}</h3>
      <p className="text-teal-600 font-medium mb-3">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </motion.div>
  );
};

const Partner = ({ name }) => {
  return (
    <motion.div 
      className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-medium text-gray-700">{name}</p>
    </motion.div>
  );
};

export default About;
