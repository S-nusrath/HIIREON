// import { NavLink } from "react-router-dom";
// import { LayoutDashboard, Briefcase, User } from "lucide-react";

// const links = [
//   { name: "Dashboard", path: "/", icon: LayoutDashboard },
//   { name: "Jobs", path: "/jobs", icon: Briefcase },
//   { name: "Profile", path: "/profile", icon: User }
// ];

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-white shadow-lg hidden md:block">

//       <div className="p-6 text-2xl font-bold text-indigo-600">
//         HireOn
//       </div>

//       <nav className="mt-6">
//         {links.map(link => {
//           const Icon = link.icon;

//           return (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-6 py-3 transition
//                 ${isActive
//                   ? "bg-indigo-100 text-indigo-600 border-r-4 border-indigo-600"
//                   : "text-gray-600 hover:bg-gray-100"}`
//               }
//             >
//               <Icon size={20}/>
//               {link.name}
//             </NavLink>
//           );
//         })}
//       </nav>

//     </aside>
//   );
// }
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-white shadow-md p-6">
//       <h1 className="text-xl font-bold mb-6">HireOn</h1>

//       <nav className="space-y-3">
//         <Link to="/" className="block hover:text-indigo-600">Dashboard</Link>
//         <Link to="/jobs" className="block hover:text-indigo-600">Jobs</Link>
//         <Link to="/profile" className="block hover:text-indigo-600">Profile</Link>
//       </nav>
//     </aside>
//   );
// }
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  User,
  LogOut
} from "lucide-react";

export default function Sidebar() {
  const { pathname } = useLocation();

  const navItem = (path) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition text-sm font-medium ${
      pathname === path
        ? "bg-black text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col justify-between">

      {/* TOP */}
      <div className="p-6">

        {/* LOGO */}
        <h1 className="text-xl font-bold mb-8 tracking-tight">
          Hireon
        </h1>

        {/* PROFILE MINI CARD */}
        <div className="flex items-center gap-3 mb-8 p-3 rounded-xl bg-gray-50">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="font-semibold leading-none">Rehan</p>
            <p className="text-xs text-gray-500">User</p>
          </div>
        </div>

        {/* MENU LABEL */}
        <p className="text-xs text-gray-400 mb-2">MENU</p>

        {/* NAVIGATION */}
        <nav className="space-y-1">

          <Link to="/" className={navItem("/")}>
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link to="/jobs" className={navItem("/jobs")}>
            <Briefcase size={18} />
            Jobs
          </Link>

          <Link to="/profile" className={navItem("/profile")}>
            <User size={18} />
            Profile
          </Link>

        </nav>
      </div>

      {/* BOTTOM */}
      <div className="p-6 border-t">

        <button className="flex items-center gap-2 text-sm text-red-500 hover:underline">
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}