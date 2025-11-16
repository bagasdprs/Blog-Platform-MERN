import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import PostDetails from "../pages/PostDetails";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";

import AdminDashboard from "../pages/AdminDashboard";
import AdminCreate from "../pages/AdminCreate";
import AdminEdit from "../pages/AdminEdit";
import AdminRoute from "../components/routes/AdminRoutes";

// import { useAuth } from "../context/AuthContext";

// Protected Route component
// function ProtectedRoute({ children }) {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" />;
// }

export default function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* ADMIN PROTECTED ROUTES */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/create"
        element={
          <AdminRoute>
            <AdminCreate />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/edit/:id"
        element={
          <AdminRoute>
            <AdminEdit />
          </AdminRoute>
        }
      />

      {/* FALLBACK ROUTE */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
