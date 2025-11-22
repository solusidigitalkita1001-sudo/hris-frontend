// components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { authService } from "../utils/auth";

const ProtectedRoute = () => {
  const isAuthenticated = authService.isAuthenticated();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
