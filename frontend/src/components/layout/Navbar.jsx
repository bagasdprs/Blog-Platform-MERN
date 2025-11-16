// import React from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// function Navbar() {
//   const { user, logout } = useAuth();

//   return (
//     <>
//       <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
//         <Link to="/" className="text-xl font-semibold">
//           Boldly
//         </Link>

//         <div className="flex space-x-4">
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>

//           {user?.role === "admin" && (
//             <Link to="/admin" className="hover:underline">
//               Dashboard
//             </Link>
//           )}

//           {user ? (
//             <button onClick={logout} className="hover:underline text-red-600">
//               Logout
//             </button>
//           ) : (
//             <Link to="/login" className="hover:underline">
//               Login
//             </Link>
//           )}
//         </div>
//       </nav>
//       {/* <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
//         <Link to="/" className="text-xl font-semibold">
//           My Blog Apps
//         </Link>

//         <div className="flex space-x-4">
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>

//           {user ? (
//             <>
//               <Link to="/admin" className="hover:underline">
//                 Dashboard
//               </Link>
//               <button onClick={logout} className="hover:underline text-red-600">
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link to="/login" className="hover:underline">
//               Login
//             </Link>
//           )}
//         </div>
//       </nav> */}
//     </>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// function Navbar() {
//   const { user, logout } = useAuth();
//   // const [openMenu, setOpenMenu] = useState(false);

//   return (
//     <nav className="bg-white shadow-sm border border-gray-200 rounded-full mt-4 mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
//       {/* Left Logo */}
//       <Link to="/" className="text-xl font-bold">
//         <span className="text-indigo-600"></span> Boldly
//       </Link>

//       {/* Middle menu */}
//       <div className="hidden md:flex space-x-6 text-gray-700">
//         <Link to="/" className="hover:text-black">
//           Home
//         </Link>
//         <Link to="/" className="hover:text-black">
//           About
//         </Link>
//         <Link to="/" className="hover:text-black">
//           Changelog
//         </Link>
//       </div>

//       {/* Right side button */}
//       <div className="flex items-center space-x-4">
//         {user ? (
//           <>
//             {user.role === "admin" && (
//               <Link to="/admin" className="text-gray-700 hover:text-black">
//                 Dashboard
//               </Link>
//             )}

//             <button onClick={logout} className="px-4 py-1 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
//               Logout
//             </button>
//           </>
//         ) : (
//           <Link to="/login" className="px-5 py-1 border border-gray-300 rounded-full hover:bg-gray-100 transition">
//             Sign in
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useSearch } from "../../context/SearchContext";

function Navbar() {
  const { user, logout } = useAuth();
  const { search, setSearch } = useSearch();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm border border-gray-200 rounded-full mt-4 mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        {/* Left Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-1">
          <span className="text-indigo-600 text-3xl"></span> Boldly
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="px-4 py-1 border border-gray-300 rounded-full bg-gray-50 focus:bg-white focus:outline-none" />

          <Link to="/" className="hover:text-black text-gray-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-black text-gray-700">
            About
          </Link>
          <Link to="/contact" className="hover:text-black text-gray-700">
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-3">
          {user?.role === "admin" && (
            <Link to="/admin" className="text-gray-700 hover:text-black">
              Dashboard
            </Link>
          )}

          {user ? (
            <button onClick={logout} className="px-4 py-1 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
              Logout
            </button>
          ) : (
            <Link to="/login" className="px-5 py-1 border border-gray-300 rounded-full hover:bg-gray-100 transition">
              Sign in
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
          ☰
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border border-gray-200 rounded-xl mx-4 mt-3 p-4 space-y-4 animate-slideDown">
          <input type="text" placeholder="Search..." className="w-full px-4 py-2 border border-gray-300 rounded-full bg-gray-50 focus:bg-white" />

          <Link to="/" className="block text-gray-700 hover:text-black" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-black" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="block text-gray-700 hover:text-black" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>

          {user?.role === "admin" && (
            <Link to="/admin" className="block hover:text-black" onClick={() => setMobileOpen(false)}>
              Dashboard
            </Link>
          )}

          {user ? (
            <button
              onClick={() => {
                logout();
                setMobileOpen(false);
              }}
              className="block w-full px-4 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="block w-full px-4 py-2 text-center border border-gray-300 rounded-lg hover:bg-gray-100 transition" onClick={() => setMobileOpen(false)}>
              Sign in
            </Link>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
