import axios from 'axios';

// Create an axios instance with default config
const API = axios.create({
  baseURL: 'http://localhost:5003/api', // Match the backend port from .env
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth related API calls
export const authService = {
  // Login user
  login: async (credentials) => {
    try {
      const response = await API.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },
  
  // Register user
  register: async (userData) => {
    try {
      const response = await API.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },
};

// Donation related API calls
export const donationService = {
  // Submit a new donation
  submitDonation: async (donationData) => {
    try {
      const response = await API.post('/donations', donationData);
      return response.data;
    } catch (error) {
      console.error('Error submitting donation:', error);
      throw error;
    }
  },
  
  // Get all donations (admin only)
  getAllDonations: async (token) => {
    try {
      const response = await API.get('/donations', {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching donations:', error);
      throw error;
    }
  },
  
  // Get user's donations
  getUserDonations: async (token) => {
    try {
      const response = await API.get('/donations/user', {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user donations:', error);
      throw error;
    }
  },
};

export default API;