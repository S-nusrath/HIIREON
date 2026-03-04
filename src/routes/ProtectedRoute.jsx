

// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function ProtectedRoute({ children }) {
//   const { user } = useAuth();
//   const token = localStorage.getItem("token");

//   // If neither token nor user exists, block access
//   if (!token || !user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }


// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function ProtectedRoute({ children }) {
//   const token = localStorage.getItem("token");
//     const { user } = useAuth();

//   if (!token || !user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

























// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function ProtectedRoute({ children }) {

//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/Login" />;
//   }

//   return children;
// }

// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {

//   const user = JSON.parse(localStorage.getItem("user"));

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// }
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function ProtectedRoute({ children }) {
//   const { user } = useAuth();

//   if (!user) return <Navigate to="/login" />;

//   return children;
// }
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const isLoggedIn = true; // TEMP BYPASS AUTH

//   return isLoggedIn ? children : <Navigate to="/login" />;
// }
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const isLoggedIn = true; // TEMP

//   return isLoggedIn ? children : <Navigate to="/login" />;
// }