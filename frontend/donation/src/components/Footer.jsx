import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">MediShare</h3>
            <p className="text-gray-300">
              Connecting unused medicines with those in need. Our mission is to reduce medicine waste
              and help people access healthcare resources.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">Donate Medicine</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-teal-400" />
                <span className="text-gray-300">Vijayawada</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-teal-400" />
                <span className="text-gray-300">(+91) 8177968861</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-teal-400" />
                <span className="text-gray-300">chaitanyasonar339@gmail.com</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MediShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
