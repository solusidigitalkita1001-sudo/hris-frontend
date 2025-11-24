// utils/auth.js

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const USER_KEY = "user_data";

export const authService = {
  // Simpan access token
  setAccessToken: (token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  },

  // Ambil access token
  getAccessToken: () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },

  // Simpan refresh token
  setRefreshToken: (token) => {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  },

  // Ambil refresh token
  getRefreshToken: () => {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },

  // Hapus semua data (logout)
  removeTokens: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
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
    const token = authService.getAccessToken();
    if (!token) return false;

    // Optional: Cek apakah token expired
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const isExpired = payload.exp * 1000 < Date.now();

      if (isExpired) {
        // Token expired, hapus semua data
        authService.removeTokens();
        return false;
      }

      return true;
    } catch (error) {
      // Token invalid
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

  // Get user permissions (helper method)
  getUserPermissions: () => {
    const user = authService.getUser();
    if (!user || !user.roles) return [];

    // Flatten permissions dari semua roles
    const permissions = [];
    user.roles.forEach((role) => {
      if (role.permissions) {
        role.permissions.forEach((permission) => {
          if (!permissions.includes(permission.name)) {
            permissions.push(permission.name);
          }
        });
      }
    });

    return permissions;
  },

  // Check if user has specific permission
  hasPermission: (permissionName) => {
    const permissions = authService.getUserPermissions();
    return permissions.includes(permissionName);
  },

  // Get user roles
  getUserRoles: () => {
    const user = authService.getUser();
    if (!user || !user.roles) return [];
    return user.roles.map((role) => role.name);
  },

  // Check if user has specific role
  hasRole: (roleName) => {
    const roles = authService.getUserRoles();
    return roles.includes(roleName);
  },

  // Backward compatibility
  setToken: (token) => {
    authService.setAccessToken(token);
  },

  getToken: () => {
    return authService.getAccessToken();
  },

  removeToken: () => {
    authService.removeTokens();
  },
};