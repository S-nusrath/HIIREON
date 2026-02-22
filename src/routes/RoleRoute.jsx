// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function RoleRoute({ children, role }) {

//   const { user } = useAuth();

//   if (!user) return <Navigate to="/login" />;

//   if (user.role !== role) return <Navigate to="/" />;

//   return children;
// }

import { Navigate } from "react-router-dom";

export default function RoleRoute({ children, role }) {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role !== role) {
    return <Navigate to="/login" />;
  }

  return children;
}