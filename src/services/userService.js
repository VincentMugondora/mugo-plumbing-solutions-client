import axios from "axios";

const API_URL = "https://mugo-plumbing-solutions-final.onrender.com/api/users";

export const userService = {
  async getProfile() {
    try {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error; // Rethrow or handle as needed
    }
  },

  async updateProfile(userData) {
    try {
      const response = await axios.put(`${API_URL}/profile`, userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error; // Rethrow or handle as needed
    }
  },

  async updatePassword(passwordData) {
    try {
      const response = await axios.put(`${API_URL}/password`, passwordData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error updating password:", error);
      throw error; // Rethrow or handle as needed
    }
  },

  async uploadProfileImage(formData) {
    try {
      const response = await axios.post(`${API_URL}/profile/image`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error uploading profile image:", error);
      throw error; // Rethrow or handle as needed
    }
  },
};
