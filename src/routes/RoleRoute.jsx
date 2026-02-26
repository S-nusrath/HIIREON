
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function RoleRoute({ children, role }) {
//   const { user } = useAuth();

//   // Not logged in → go to login
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   // Logged in but wrong role → block access
//   if (user.role !== role) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return children;
// }


// import { Navigate } from "react-router-dom";

// export default function RoleRoute({ children, role }) {
//   const userRole = localStorage.getItem("role");

//   if (!userRole) {
//     return <Navigate to="/login" replace />;
//   }

//   if (userRole !== role) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return children;
// }











import { Navigate } from "react-router-dom";

export default function RoleRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user"));  // 👈 FIX

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role?.toUpperCase() !== role?.toUpperCase()) { // 👈 FIX (case-safe)
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}


























