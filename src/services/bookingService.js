import axios from 'axios';

const BASE_URL = "https://mugo-plumbing-solutions-final.onrender.com/api";

export const bookingService = {
  getBookings: async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${BASE_URL}/bookings`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Detailed booking error:', error);
      throw error;
    }
  }
}; 