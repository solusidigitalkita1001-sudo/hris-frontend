import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../utils/auth";
import api from "../utils/axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Gunakan axios instance yang sudah dikonfigurasi
      const response = await api.post("/login", {
        email: email,
        password: password,
        rememberMe: rememberMe,
      });
      console.log(response);

      // Destructure token dan user dari response
      const { token, user } = response.data;

      // Simpan token dan user data menggunakan authService
      authService.setToken(token);
      authService.setUser(user);

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      // Handle error message
      if (error.response) {
        // Server responded with error
        setError(
          error.response.data.message || "Login failed. Please try again."
        );
      } else if (error.request) {
        // Request made but no response
        setError("Network error. Please check your connection and try again.");
      } else {
        // Something else happened
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Floating Particles */}
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>

      {/* Left Side - Illustration */}
      <div className="login-left">
        <div className="illustration">
          <div className="hero-content">
            <div className="hero-icon">
              <div className="icon-circle">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="hero-text">
              <h1 className="hero-title">Welcome to HRIS</h1>
              <p className="hero-subtitle">
                Streamline your workforce management with our comprehensive HR
                solution
              </p>
              <div className="hero-features">
                <div className="feature-item">
                  <div className="feature-dot"></div>
                  <span>Employee Management</span>
                </div>
                <div className="feature-item">
                  <div className="feature-dot"></div>
                  <span>Payroll Processing</span>
                </div>
                <div className="feature-item">
                  <div className="feature-dot"></div>
                  <span>Performance Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="login-right">
        <div className="login-card">
          {/* Logo Area */}
          <div className="logo-area">
            <div className="logo-placeholder">
              <span>HRIS</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="login-title">HRIS Login</h1>
          <p className="login-subtitle">Human Resource Information System</p>

          {/* Error Message */}
          {error && <div className="error-message">{error}</div>}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            {/* Email/Username Input */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email / Username
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email or username"
                required
                disabled={isLoading}
              />
            </div>

            {/* Password Input */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="form-options">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="form-check-input"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isLoading}
                />
                <label htmlFor="rememberMe" className="form-check-label">
                  Remember me
                </label>
              </div>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className={`btn-login ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
