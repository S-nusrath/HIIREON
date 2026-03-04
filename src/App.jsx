

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "./layout/MainLayout";

// import Dashboard from "./pages/Dashboard";
// import ProfilePage from "./pages/ProfilePage";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AdminDashboard from "./pages/AdminDashboard";

// import ProtectedRoute from "./routes/ProtectedRoute";
// import RoleRoute from "./routes/RoleRoute";
// import Unauthorized from "./pages/Unauthorized";
// import JobsPage from "./pages/JobsPages";
// import JobDetail from "./pages/JobDetail";

// export default function App() {

//   /* TEMP USER DATA — remove when backend ready */
//   const dummyUser = {
//     name: "Rehan",
//     role: "USER",
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
//     activity: [
//       "Applied to Google",
//       "Updated Resume",
//       "Completed Interview"
//     ],
//   };

//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* PUBLIC ROUTES */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//          <Route path="/unauthorized" element={<Unauthorized />} />
//          <Route path="/jobs" element={<JobsPage />} />
//         <Route path="/job/:id" element={<JobDetail />} />

//         {/* USER ROUTES (USER ONLY) */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <RoleRoute role="USER">
//                 <MainLayout />
//               </RoleRoute>
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<Dashboard />} />
//           <Route path="profile" element={<ProfilePage user={dummyUser} />} />
//           <Route path="jobs" element={<div className="p-6">Jobs Page</div>} />
//         </Route>

//         {/* ADMIN ROUTES (ADMIN ONLY) */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute>
//               <RoleRoute role="ADMIN">
//                 <AdminDashboard />
//               </RoleRoute>
//             </ProtectedRoute>
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





















// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // import MainLayout from "./layout/MainLayout";

// // import Dashboard from "./pages/Dashboard";
// // import ProfilePage from "./pages/ProfilePage";
// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";
// // import AdminDashboard from "./pages/AdminDashboard";

// // import ProtectedRoute from "./routes/ProtectedRoute";
// // import RoleRoute from "./routes/RoleRoute";

// // export default function App() {

// //   /* TEMP USER DATA — remove when backend ready */
// //   const dummyUser = {
// //     name: "Rehan",
// //     role: "User",
// //     photo: "https://i.pravatar.cc/150",
// //     bio: "Aspiring Full Stack Developer",
// //     location: "India",
// //     preferredRole: "Frontend Developer",
// //     skills: ["React", "JavaScript", "Tailwind"],
// //     linkedin: "linkedin.com/in/rehan",
// //     stats: [
// //       { label: "Applications", value: 32 },
// //       { label: "Interviews", value: 6 },
// //       { label: "Saved Jobs", value: 12 },
// //       { label: "Profile Score", value: "85%" }
// //     ],
// //     progress: { questions: 120, interviews: 8, strength: 85 },
// //     activity: [
// //       "Applied to Google",
// //       "Updated Resume",
// //       "Completed Interview"
// //     ],
// //   };

// //   return (
// //     <BrowserRouter>
// //       <Routes>

// //         {/* PUBLIC ROUTES */}
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />

// //         {/* PROTECTED USER ROUTES */}
// //         <Route
// //           path="/"
// //           element={
// //             <ProtectedRoute>
// //               <MainLayout />
// //             </ProtectedRoute>
// //           }
// //         >
// //           <Route index element={<Dashboard />} />

// //           {/* PROFILE */}
// //           <Route
// //             path="profile"
// //             element={<ProfilePage user={dummyUser} />}
// //           />

// //           {/* TEMP JOBS PAGE */}
// //           <Route path="jobs" element={<div className="p-6">Jobs Page</div>} />

// //         </Route>

// //         {/* ADMIN ROUTE */}
// //         <Route
// //           path="/admin"
// //           element={
// //             <RoleRoute role="ADMIN">
// //               <AdminDashboard />
// //             </RoleRoute>
// //           }
// //         />

// //         {/* 404 */}
// //         <Route
// //           path="*"
// //           element={
// //             <div className="flex items-center justify-center h-screen">
// //               <h1 className="text-3xl font-bold text-gray-700">
// //                 404 — Page Not Found
// //               </h1>
// //             </div>
// //           }
// //         />

// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }




// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "./layout/MainLayout";

// import Dashboard from "./pages/Dashboard";
// import ProfilePage from "./pages/ProfilePage";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AdminDashboard from "./pages/AdminDashboard";
// import JobsPage from "./pages/JobsPage";
// import JobDetail from "./pages/JobDetail";
// import Unauthorized from "./pages/Unauthorized";

// import ProtectedRoute from "./routes/ProtectedRoute";
// import RoleRoute from "./routes/RoleRoute";
// import ApplyJob from "./pages/ApplyJob";
// import JobTracker from "./pages/JobTracker";
// import CreateJob from "./pages/CreateJob";

// export default function App() {

//   const dummyUser = {
//     name: "Rehan",
//     role: "USER",
//   };

//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* PUBLIC */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/unauthorized" element={<Unauthorized />} />

//         {/* USER ROUTES */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <RoleRoute role="USER">
//                 <MainLayout />
//               </RoleRoute>
//             </ProtectedRoute>
//           }
//         >
//           <Route
//           path="/admin"
//   element={
//   <ProtectedRoute>
//   <RoleRoute role="ADMIN">
//   <AdminDashboard/>
//   </RoleRoute>
//   </ProtectedRoute>
//   }
// />
// <Route
// path="/admin/create-job"
// element={
// <ProtectedRoute>
// <RoleRoute role="ADMIN">
// <CreateJob/>
// </RoleRoute>
// </ProtectedRoute>
// }
// />
//           <Route index element={<Dashboard />} />
//           <Route path="profile" element={<ProfilePage user={dummyUser} />} />
//           <Route path="jobs" element={<JobsPage />} />
//           <Route path="job/:id" element={<JobDetail />} />
//           <Route path="/apply/:id" element={<ApplyJob />} />
// <Route path="/tracker/:id" element={<JobTracker />} />
//         </Route>

//         {/* ADMIN */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute>
//               <RoleRoute role="ADMIN">
//                 <AdminDashboard />
//               </RoleRoute>
//             </ProtectedRoute>
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
import JobsPage from "./pages/JobsPage";
import JobDetail from "./pages/JobDetail";
import Unauthorized from "./pages/Unauthorized";
import ApplyJob from "./pages/ApplyJob";
import JobTracker from "./pages/JobTracker";
import CreateJob from "./pages/CreateJob";

import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";

export default function App() {

  /* TEMP USER DATA */
  const dummyUser = {
    name: "Rehan",
    role: "USER", // change to ADMIN to test admin
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* USER ROUTES */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <RoleRoute role="USER">
                <MainLayout />
              </RoleRoute>
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<ProfilePage user={dummyUser} />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="job/:id" element={<JobDetail />} />
          <Route path="apply/:id" element={<ApplyJob />} />
          <Route path="tracker/:id" element={<JobTracker />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <RoleRoute role="ADMIN">
                <AdminDashboard />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/create-job"
          element={
            <ProtectedRoute>
              <RoleRoute role="ADMIN">
                <CreateJob />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}