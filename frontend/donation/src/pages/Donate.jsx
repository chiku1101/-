import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { donationService } from '../services/api.js';

const Donate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    medicineName: '',
    quantity: '',
    expiryDate: '',
    condition: 'unopened',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    
    try {
      console.log('Submitting donation:', formData);
      const response = await donationService.submitDonation(formData);
      console.log('Donation submitted successfully:', response);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        medicineName: '',
        quantity: '',
        expiryDate: '',
        condition: 'unopened',
        additionalInfo: ''
      });
      
      alert('Thank you for your donation! We will contact you soon to arrange pickup.');
    } catch (error) {
      console.error('Error submitting donation:', error);
      setSubmitError(error.response?.data?.message || 'Failed to submit donation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Donate Unused Medicine
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Your donation can help someone in need get essential medication they might otherwise go without
          </motion.p>
        </div>
      </section>

      {/* Donation Guidelines */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Donation Guidelines</h2>
          
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 text-gray-700">We accept medications that meet the following criteria:</p>
            
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Unexpired medications (at least 3 months before expiration date)</li>
              <li>Unopened, sealed packages in their original container</li>
              <li>Non-controlled substances only</li>
              <li>No refrigerated medications</li>
              <li>Over-the-counter medications are also accepted</li>
            </ul>
            
            <p className="text-gray-700">
              All donations are verified by licensed pharmacists before distribution. We comply with all state and federal regulations regarding medication redistribution.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Donation Form</h2>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you for your donation! We will contact you soon to arrange pickup.
              </div>
            )}
            
            {submitError && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {submitError}
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Donor Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Medication Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="medicineName" className="block text-sm font-medium text-gray-700 mb-1">Medicine Name</label>
                  <input
                    type="text"
                    id="medicineName"
                    name="medicineName"
                    value={formData.medicineName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 30 tablets, 2 bottles"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input
                    type="date"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                  <select
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="unopened">Unopened</option>
                    <option value="sealed">Sealed</option>
                    <option value="partial">Partial (unopened blister packs)</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Any additional details about the medication or special handling instructions"
                ></textarea>
              </div>
            </div>
            
            <div className="form-check mb-6">
              <input
                type="checkbox"
                className="form-check-input h-4 w-4 border border-gray-300 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                id="termsCheck"
                required
              />
              <label className="form-check-label text-gray-700" htmlFor="termsCheck">
                I confirm that all medications are unexpired, unopened, and meet the donation guidelines.
              </label>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-teal-600 text-white font-bold py-3 px-8 rounded-md hover:bg-teal-700 transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Donation'}
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <FAQ 
              question="Is donating unused medication legal?"
              answer="Yes, under specific conditions. MediShare operates in compliance with state and federal laws that permit the donation of unopened, unexpired medications following strict protocols."
            />
            <FAQ 
              question="How do I know my medications will be used safely?"
              answer="All donated medications are verified and inspected by licensed pharmacists before redistribution. We maintain a strict chain of custody and only distribute through authorized healthcare providers."
            />
            <FAQ 
              question="Can I donate prescription medications?"
              answer="Yes, you can donate prescription medications as long as they are not controlled substances and meet our other donation criteria (unopened, unexpired, etc.)."
            />
            <FAQ 
              question="Do you provide receipts for tax deductions?"
              answer="Yes, we provide donation receipts that you can use for tax purposes. The value listed will be based on the average wholesale price of the donated medications."
            />
            <FAQ 
              question="How are the medications collected?"
              answer="Depending on your location, we offer several options: drop-off at partner pharmacies, scheduled pick-ups, or mail-in donations with prepaid shipping labels."
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-4 border-b border-gray-200 pb-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        <span className="text-teal-600 text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-gray-600"
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Donate;