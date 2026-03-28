// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
// import Dashboard from "../pages/Dashboard";

// export default function AppRoutes() {
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

import MainLayout from "../layout/MainLayout";

import Dashboard from "../pages/Dashboard";
import JobDetails from "../pages/JobDetail";
import ApplyJob from "../pages/ApplyJob";
import JobTracker from "../pages/JobTracker";

import AdminDashboard from "../pages/AdminDashboard";
import CreateJob from "../pages/CreateJob";
import ViewApplicants from "../pages/ViewApplicants";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER ROUTES */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Dashboard />} />

          {/* Job Details */}
          <Route path="/job/:id" element={<JobDetails />} />

          {/* Apply Job */}
          <Route path="/apply/:id" element={<ApplyJob />} />

          {/* Application Tracker */}
          <Route path="/tracker/:id" element={<JobTracker />} />

        </Route>


        {/* ADMIN ROUTES */}

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/admin/create-job" element={<CreateJob />} />

        <Route path="/admin/applicants" element={<ViewApplicants />} />

      </Routes>
    </BrowserRouter>
  );
}