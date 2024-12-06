import axios from 'axios';

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://mugo-plumbing-solutions-final.onrender.com/api";

export const authService = {
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      if (response.data.success) {
        // Store token if needed
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      throw error.response?.data || error;
    }
  }
}; 