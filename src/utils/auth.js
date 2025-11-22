// utils/auth.js

const TOKEN_KEY = "auth_token";
const USER_KEY = "user_data";

export const authService = {
  // Simpan token
  setToken: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  },

  // Ambil token
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },

  // Hapus token (logout)
  removeToken: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  // Simpan user data
  setUser: (userData) => {
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  },

  // Ambil user data
  getUser: () => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  // Cek apakah user sudah login
  isAuthenticated: () => {
    const token = authService.getToken();
    if (!token) return false;

    // Optional: Cek apakah token expired
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const isExpired = payload.exp * 1000 < Date.now();

      if (isExpired) {
        authService.removeToken();
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  },

  // Decode JWT token
  decodeToken: (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (error) {
      return null;
    }
  },
};
