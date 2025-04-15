import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, LogIn, LogOut } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-teal-600 text-white py-4 px-6 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MediShare</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/donate">Donate</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {isAuthenticated ? (
            <button 
              onClick={handleLogout} 
              className="flex items-center hover:text-teal-200 transition-colors duration-300"
            >
              <LogOut size={18} className="mr-1" /> Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" className="flex items-center">
                <LogIn size={18} className="mr-1" /> Login
              </NavLink>
              <NavLink to="/register" className="flex items-center">
                Register
              </NavLink>
            </>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/donate" onClick={toggleMenu}>Donate</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
            {isAuthenticated ? (
              <button 
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }} 
                className="flex items-center text-lg hover:text-teal-200 transition-colors duration-300 w-full text-center py-2"
              >
                <LogOut size={18} className="mr-1" /> Logout
              </button>
            ) : (
              <>
                <MobileNavLink to="/login" onClick={toggleMenu}>
                  <div className="flex items-center justify-center">
                    <LogIn size={18} className="mr-1" /> Login
                  </div>
                </MobileNavLink>
                <MobileNavLink to="/register" onClick={toggleMenu}>
                  <div className="flex items-center justify-center">
                    Register
                  </div>
                </MobileNavLink>
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="hover:text-teal-200 transition-colors duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    className="text-lg hover:text-teal-200 transition-colors duration-300 w-full text-center py-2"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
