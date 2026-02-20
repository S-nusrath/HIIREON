// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import MainLayout from "./layout/MainLayout";
// // import Dashboard from "./pages/Dashboard";

// // export default function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route element={<MainLayout />}>
// //           <Route path="/" element={<Dashboard />} />
// //         </Route>
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from "./layout/MainLayout";
// import Dashboard from "./pages/Dashboard";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Dashboard />} />
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// }
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";

import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* USER DASHBOARD */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>

        {/* ADMIN PANEL */}
        <Route
          path="/admin"
          element={
            <RoleRoute role="admin">
              <AdminDashboard />
            </RoleRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
