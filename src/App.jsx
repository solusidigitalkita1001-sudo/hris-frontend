import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      {/* Redirect root ke login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Route tanpa layout (Login) */}
      <Route path="/login" element={<Login />} />

      {/* Route dengan layout */}
      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        {/* Tambah route lain di sini */}
      </Route>
    </Routes>
  )
}

export default App