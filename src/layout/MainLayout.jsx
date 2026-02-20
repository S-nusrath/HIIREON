// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import { Outlet } from "react-router-dom";

// export default function MainLayout() {
//   return (
//     <div className="flex h-screen bg-gray-100">

//       <Sidebar />

//       <div className="flex flex-col flex-1">
//         <Navbar />
//         <main className="p-6 overflow-y-auto">
//           <Outlet />
//         </main>
//       </div>

//     </div>
//   );
// }
// import { Outlet } from "react-router-dom";

// export default function MainLayout() {
//   return (
//     <div className="flex min-h-screen">

//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-900 text-white p-6">
//         <h1 className="text-xl font-bold mb-6">HireOn</h1>
//         <p>Dashboard</p>
//         <p>Jobs</p>
//         <p>Profile</p>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 bg-gray-100 p-6">
//         <Outlet />
//       </main>

//     </div>
//   );
// }
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Bell } from "lucide-react";

export default function MainLayout() {

  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">HireOn</h1>

        <nav className="space-y-3">
          <Link to="/" className="block hover:text-indigo-400">
            Dashboard
          </Link>
        </nav>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">

          <h2 className="font-semibold text-lg">
            Dashboard
          </h2>

          {!user ? (
            <div className="flex gap-3">

              <Link
                to="/login"
                className="px-4 py-2 text-sm border rounded hover:bg-gray-100"
              >
                Log In
              </Link>

              <Link
                to="/signup"
                className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Get Started
              </Link>

            </div>
          ) : (
            <div className="flex items-center gap-5 relative">

              {/* Notification */}
              <Bell className="cursor-pointer text-gray-600" size={20} />

              {/* Avatar */}
              <div
                onClick={() => setOpen(!open)}
                className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full cursor-pointer"
              >
                {user.email.charAt(0).toUpperCase()}
              </div>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 top-10 w-40 bg-white shadow-lg rounded p-3 space-y-2 text-sm">

                  <p className="text-gray-500">
                    {user.email}
                  </p>

                  <button className="block w-full text-left hover:text-indigo-600">
                    Profile
                  </button>

                  <button className="block w-full text-left hover:text-indigo-600">
                    Settings
                  </button>

                  <button
                    onClick={logout}
                    className="block w-full text-left text-red-500 hover:text-red-600"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          )}

        </header>

        {/* Content */}
        <main className="p-6 flex-1">
          <Outlet />
        </main>

      </div>

    </div>
  );
}
