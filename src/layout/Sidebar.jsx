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
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-6">
      <h1 className="text-xl font-bold mb-6">HireOn</h1>

      <nav className="space-y-3">
        <Link to="/" className="block hover:text-indigo-600">Dashboard</Link>
        <Link to="/jobs" className="block hover:text-indigo-600">Jobs</Link>
        <Link to="/profile" className="block hover:text-indigo-600">Profile</Link>
      </nav>
    </aside>
  );
}
