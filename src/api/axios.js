import axios from "axios";

const api = axios.create({
  baseURL: "https://mugo-plumbing-solutions-final.onrender.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
