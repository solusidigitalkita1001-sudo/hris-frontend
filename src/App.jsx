// // App.jsx
// import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute";
// import MainLayout from "./layouts/MainLayout";

// // Pages
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import RolePermission from "./pages/RolePermission";

// function App() {
//   return (
//     <Routes>

//       {/* LOGIN PAGE - tidak pakai layout */}
//       <Route path="/login" element={<Login />} />

//       {/* PROTECTED ROUTES */}
//         <Route element={<MainLayout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/role-permission" element={<RolePermission />} />
//         </Route>
//       {/* <Route element={<ProtectedRoute />}>
//       </Route> */}

//     </Routes>
//   );
// }

// export default App;

// App.jsx lama
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/settings/Users";
import RolePermission from "./pages/settings/RolePermission";
import Office from "./pages/settings/Office";
import Division from "./pages/settings/Division";
import Department from "./pages/settings/Department";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      {/* Redirect root ke login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Route tanpa layout (Login) */}
      <Route path="/login" element={<Login />} />

      {/* Route dengan layout - Semua route dalam satu MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/role-permission" element={<RolePermission />} />
        <Route path="/office" element={<Office />} />
        <Route path="/division" element={<Division />} />
        <Route path="/department" element={<Department />} />
        {/* Tambah route lain di sini */}
      </Route>
    </Routes>
  );
}


export default App;