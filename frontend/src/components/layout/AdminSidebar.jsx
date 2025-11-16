import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <>
      <aside className="w-64 min-h-screen bg-gray-100 p-6 border-r">
        <h2 className="text-lg font-semibold mb-6">Admin Navigation</h2>

        <nav className="flex flex-col space-y-3">
          <Link to="/admin" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/admin/create" className="hover:underline">
            Create Post
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default AdminSidebar;
