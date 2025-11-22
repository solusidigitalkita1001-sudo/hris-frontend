// utils/axios.js
import axios from "axios";
import { authService } from "./auth";

// Buat instance axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://192.168.1.148:3000/api", // Sesuaikan dengan backend URL kamu
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - Tambahkan token ke setiap request
api.interceptors.request.use(
  (config) => {
    const token = authService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle token expired
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Jika token expired atau unauthorized
    if (error.response?.status === 401) {
      authService.removeToken();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
