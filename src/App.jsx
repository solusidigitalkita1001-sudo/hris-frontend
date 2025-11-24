import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/settings/Users";
import RolePermission from "./pages/settings/RolePermission";
import Office from "./pages/settings/Office";
import Division from "./pages/settings/Division";
import Department from "./pages/settings/Department";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { authService } from "./utils/auth";

function App() {
  return (
    <Routes>
      {/* Redirect root ke dashboard jika sudah login, atau ke login jika belum */}
      <Route
        path="/"
        element={
          authService.isAuthenticated() ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Route tanpa layout (Login) */}
      <Route path="/login" element={<Login />} />

      {/* Route dengan layout dan protection */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        {/* Dashboard - accessible by all authenticated users */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Settings Routes - with specific permissions */}
        <Route
          path="/users"
          element={
            <ProtectedRoute requiredPermission="employee.update">
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="/role-permission"
          element={
            <ProtectedRoute requiredPermission="role.manage">
              <RolePermission />
            </ProtectedRoute>
          }
        />

        <Route path="/office" element={<Office />} />
        <Route path="/division" element={<Division />} />
        <Route path="/department" element={<Department />} />
      </Route>

      {/* 404 Page - Optional */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;