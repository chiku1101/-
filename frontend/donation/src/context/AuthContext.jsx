import React, { createContext, useState, useEffect } from 'react';
import API from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Check if user is logged in on initial load
  useEffect(() => {
    if (token) {
      // Set the token in axios headers
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [token]);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.post('/auth/login', { email, password });
      const { token: newToken, user: userData } = response.data;
      
      // Save to state
      setToken(newToken);
      setUser(userData);
      
      // Save to localStorage
      localStorage.setItem('token', newToken);
      
      // Set token in axios headers
      API.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      
      setLoading(false);
      return true;
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
      setLoading(false);
      return false;
    }
  };

  // Register function
  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.post('/auth/register', userData);
      const { token: newToken, user: userData } = response.data;
      
      // Save to state
      setToken(newToken);
      setUser(userData);
      
      // Save to localStorage
      localStorage.setItem('token', newToken);
      
      // Set token in axios headers
      API.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      
      setLoading(false);
      return true;
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed');
      setLoading(false);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    // Remove from state
    setToken(null);
    setUser(null);
    
    // Remove from localStorage
    localStorage.removeItem('token');
    
    // Remove from axios headers
    delete API.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        login,
        register,
        logout,
        isAuthenticated: !!token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};