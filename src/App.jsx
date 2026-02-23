// // // // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // // import MainLayout from "./layout/MainLayout";
// // // // import Dashboard from "./pages/Dashboard";

// // // // export default function App() {
// // // //   return (
// // // //     <BrowserRouter>
// // // //       <Routes>
// // // //         <Route element={<MainLayout />}>
// // // //           <Route path="/" element={<Dashboard />} />
// // // //         </Route>
// // // //       </Routes>
// // // //     </BrowserRouter>
// // // //   );
// // // // }
// // // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // import MainLayout from "./layout/MainLayout";
// // // import Dashboard from "./pages/Dashboard";

// // // export default function App() {
// // //   return (
// // //     <BrowserRouter>
// // //       <Routes>

// // //         <Route element={<MainLayout />}>
// // //           <Route path="/" element={<Dashboard />} />
// // //         </Route>

// // //       </Routes>
// // //     </BrowserRouter>
// // //   );
// // // }
// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // import MainLayout from "./layout/MainLayout";
// // import Dashboard from "./pages/Dashboard";
// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";
// // import AdminDashboard from "./pages/AdminDashboard";

// // import ProtectedRoute from "./routes/ProtectedRoute";
// // import RoleRoute from "./routes/RoleRoute";

// // export default function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>

// //         {/* PUBLIC ROUTES */}
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />
// //          <Route path="/dashboard" element={<Dashboard />} />

// //         {/* USER DASHBOARD */}
// //         <Route
// //           path="/"
// //           element={
// //             <ProtectedRoute>
// //               <MainLayout />
// //             </ProtectedRoute>
// //           }
// //         >
// //           <Route index element={<Dashboard />} />
// //         </Route>

// //         {/* ADMIN PANEL */}
// //         <Route
// //           path="/admin"
// //           element={
// //             <RoleRoute role="admin">
// //               <AdminDashboard />
// //             </RoleRoute>
// //           }
// //         />

// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "./layout/MainLayout";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AdminDashboard from "./pages/AdminDashboard";

// import ProtectedRoute from "./routes/ProtectedRoute";
// import RoleRoute from "./routes/RoleRoute";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* PUBLIC ROUTES */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* PROTECTED USER ROUTES */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <MainLayout />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<Dashboard />} />
//         </Route>

//         {/* ADMIN ROUTE */}
//         <Route
//           path="/admin"
//           element={
//             <RoleRoute role="admin">
//               <AdminDashboard />
//             </RoleRoute>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "./layout/MainLayout";

// import Dashboard from "./pages/Dashboard";
// import ProfilePage from "./pages/ProfilePage";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AdminDashboard from "./pages/AdminDashboard";

// import ProtectedRoute from "./routes/ProtectedRoute";
// import RoleRoute from "./routes/RoleRoute";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* ================= PUBLIC ROUTES ================= */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* ================= PROTECTED USER ROUTES ================= */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <MainLayout />
//             </ProtectedRoute>
//           }
//         >
//           {/* Default Route → Dashboard */}
//           <Route index element={<Dashboard />} />

//           {/* Profile Page */}
//           <Route path="profile" element={<ProfilePage />} />
//         </Route>

//         {/* ================= ADMIN ROUTE ================= */}
//         <Route
//           path="/admin"
//           element={
//             <RoleRoute role="admin">
//               <AdminDashboard />
//             </RoleRoute>
//           }
//         />

//         {/* ================= 404 FALLBACK ================= */}
//         <Route
//           path="*"
//           element={
//             <div className="flex items-center justify-center h-screen">
//               <h1 className="text-3xl font-bold text-gray-700">
//                 404 — Page Not Found
//               </h1>
//             </div>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "./layout/MainLayout";

// import Dashboard from "./pages/Dashboard";
// // import ProfilePage from "./pages/profile/ProfilePage";
// import ProfilePage from "./pages/ProfilePage";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AdminDashboard from "./pages/AdminDashboard";

// import ProtectedRoute from "./routes/ProtectedRoute";
// import RoleRoute from "./routes/RoleRoute";

// export default function App() {

//   /* TEMP USER DATA — replace with backend later */
//   const user = {
//     name: "Rehan",
//     role: "User",
//     photo: "https://i.pravatar.cc/150",
//     bio: "Aspiring Full Stack Developer",
//     location: "India",
//     preferredRole: "Frontend Developer",
//     skills: ["React", "JavaScript", "Tailwind"],
//     linkedin: "linkedin.com/in/rehan",
//     stats: [
//       { label: "Applications", value: 32 },
//       { label: "Interviews", value: 6 },
//       { label: "Saved Jobs", value: 12 },
//       { label: "Profile Score", value: "85%" }
//     ],
//     progress: { questions: 120, interviews: 8, strength: 85 },
//     activity: ["Applied to Google", "Updated Resume", "Completed Interview"],
//   };

//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* PUBLIC ROUTES */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* USER ROUTES */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <MainLayout />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<Dashboard />} />

//           {/* PROFILE */}
//           <Route
//             path="profile"
//             element={<ProfilePage user={user} />}
//           />
//         </Route>

//         {/* ADMIN ROUTE */}
//         <Route
//           path="/admin"
//           element={
//             <RoleRoute role="admin">
//               <AdminDashboard />
//             </RoleRoute>
//           }
//         />

//         {/* 404 */}
//         <Route
//           path="*"
//           element={
//             <div className="flex items-center justify-center h-screen">
//               <h1 className="text-3xl font-bold text-gray-700">
//                 404 — Page Not Found
//               </h1>
//             </div>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";

import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";

export default function App() {

  /* TEMP USER DATA — remove when backend ready */
  const dummyUser = {
    name: "Rehan",
    role: "User",
    photo: "https://i.pravatar.cc/150",
    bio: "Aspiring Full Stack Developer",
    location: "India",
    preferredRole: "Frontend Developer",
    skills: ["React", "JavaScript", "Tailwind"],
    linkedin: "linkedin.com/in/rehan",
    stats: [
      { label: "Applications", value: 32 },
      { label: "Interviews", value: 6 },
      { label: "Saved Jobs", value: 12 },
      { label: "Profile Score", value: "85%" }
    ],
    progress: { questions: 120, interviews: 8, strength: 85 },
    activity: [
      "Applied to Google",
      "Updated Resume",
      "Completed Interview"
    ],
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* PROTECTED USER ROUTES */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />

          {/* PROFILE */}
          <Route
            path="profile"
            element={<ProfilePage user={dummyUser} />}
          />

          {/* TEMP JOBS PAGE */}
          <Route path="jobs" element={<div className="p-6">Jobs Page</div>} />

        </Route>

        {/* ADMIN ROUTE */}
        <Route
          path="/admin"
          element={
            <RoleRoute role="admin">
              <AdminDashboard />
            </RoleRoute>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-3xl font-bold text-gray-700">
                404 — Page Not Found
              </h1>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}