// // // import { useState } from "react";

// // // export default function ProfilePage({ user }) {
// // //   const [tab, setTab] = useState("overview");

// // //   const tabs = ["overview", "edit", "activity", "security"];

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 p-6">

// // //       {/* PROFILE HEADER */}
// // //       <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-6">
// // //         <img
// // //           src={user.photo}
// // //           alt="profile"
// // //           className="w-24 h-24 rounded-full object-cover border"
// // //         />

// // //         <div className="flex-1">
// // //           <h1 className="text-2xl font-bold">{user.name}</h1>
// // //           <p className="text-gray-500">{user.role}</p>
// // //           <p className="text-sm mt-2">{user.bio}</p>
// // //         </div>

// // //         <button className="bg-black text-white px-5 py-2 rounded-xl hover:scale-105 transition">
// // //           Edit Profile
// // //         </button>
// // //       </div>

// // //       {/* STATS */}
// // //       <div className="grid md:grid-cols-4 gap-4 mt-6">
// // //         {user.stats.map((item, i) => (
// // //           <div key={i} className="bg-white rounded-xl shadow p-4 text-center">
// // //             <p className="text-2xl font-bold">{item.value}</p>
// // //             <p className="text-gray-500 text-sm">{item.label}</p>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* TABS */}
// // //       <div className="flex gap-4 mt-8 border-b">
// // //         {tabs.map(t => (
// // //           <button
// // //             key={t}
// // //             onClick={() => setTab(t)}
// // //             className={`pb-2 capitalize ${
// // //               tab === t
// // //                 ? "border-b-2 border-black font-semibold"
// // //                 : "text-gray-500"
// // //             }`}
// // //           >
// // //             {t}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* TAB CONTENT */}
// // //       <div className="mt-6">

// // //         {/* OVERVIEW */}
// // //         {tab === "overview" && (
// // //           <div className="grid md:grid-cols-2 gap-6">

// // //             {/* USER VIEW */}
// // //             {user.role === "User" && (
// // //               <>
// // //                 <Section title="Career Info">
// // //                   <Info label="Preferred Role" value={user.preferredRole} />
// // //                   <Info label="Skills" value={user.skills.join(", ")} />
// // //                   <Info label="LinkedIn" value={user.linkedin} />
// // //                 </Section>

// // //                 <Section title="Progress">
// // //                   <Info label="Questions Practiced" value={user.progress.questions} />
// // //                   <Info label="Mock Interviews" value={user.progress.interviews} />
// // //                   <Info label="Profile Strength" value={user.progress.strength + "%"} />
// // //                 </Section>
// // //               </>
// // //             )}

// // //             {/* RECRUITER VIEW */}
// // //             {user.role === "Recruiter" && (
// // //               <>
// // //                 <Section title="Company Info">
// // //                   <Info label="Company" value={user.company} />
// // //                   <Info label="Industry" value={user.industry} />
// // //                   <Info label="Website" value={user.website} />
// // //                 </Section>

// // //                 <Section title="Hiring Stats">
// // //                   <Info label="Jobs Posted" value={user.jobs.posted} />
// // //                   <Info label="Applicants" value={user.jobs.applicants} />
// // //                   <Info label="Interviews" value={user.jobs.interviews} />
// // //                 </Section>
// // //               </>
// // //             )}
// // //           </div>
// // //         )}

// // //         {/* EDIT */}
// // //         {tab === "edit" && (
// // //           <div className="bg-white p-6 rounded-xl shadow max-w-xl">
// // //             <Input label="Name" value={user.name} />
// // //             <Input label="Bio" value={user.bio} />
// // //             <Input label="Location" value={user.location} />
// // //             <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg">
// // //               Save Changes
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* ACTIVITY */}
// // //         {tab === "activity" && (
// // //           <div className="bg-white rounded-xl shadow p-6">
// // //             {user.activity.map((a, i) => (
// // //               <p key={i} className="border-b py-2 text-sm">
// // //                 {a}
// // //               </p>
// // //             ))}
// // //           </div>
// // //         )}

// // //         {/* SECURITY */}
// // //         {tab === "security" && (
// // //           <div className="bg-white rounded-xl shadow p-6 max-w-md">
// // //             <button className="w-full bg-gray-900 text-white py-2 rounded-lg mb-3">
// // //               Change Password
// // //             </button>
// // //             <button className="w-full border py-2 rounded-lg">
// // //               Logout All Devices
// // //             </button>
// // //           </div>
// // //         )}

// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // /* reusable components */

// // // function Section({ title, children }) {
// // //   return (
// // //     <div className="bg-white rounded-xl shadow p-6">
// // //       <h2 className="font-semibold mb-4">{title}</h2>
// // //       {children}
// // //     </div>
// // //   );
// // // }

// // // function Info({ label, value }) {
// // //   return (
// // //     <p className="text-sm mb-2">
// // //       <span className="text-gray-500">{label}:</span> {value}
// // //     </p>
// // //   );
// // // }

// // // function Input({ label, value }) {
// // //   return (
// // //     <div className="mb-3">
// // //       <label className="text-sm text-gray-500">{label}</label>
// // //       <input
// // //         defaultValue={value}
// // //         className="w-full border rounded-lg px-3 py-2 mt-1"
// // //       />
// // //     </div>
// // //   );
// // // }
// // // import { useState } from "react";
// // // // import ProfileHeader from "./ProfileHeader";
// // // // import ProfileTabs from "./ProfileTabs";
// // // // import OverviewTab from "./OverviewTab";
// // // // import EditTab from "./EditTab";
// // // // import SecurityTab from "./SecurityTab";
// // // // import ActivityFeed from "../../components/dashboard/ActivityFeed";
// // // import ActivityFeed from "../components/dashboard/ActivityFeed";
// // // import StatCard from "../components/dashboard/StatCard";
// // // import SkillChart from "../components/dashboard/SkillChart";

// // // export default function ProfilePage({ user }) {
// // //   const [tab, setTab] = useState("overview");

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 p-6">

// // //       <ProfileHeader user={user} />

// // //       <ProfileTabs tab={tab} setTab={setTab} />

// // //       <div className="mt-6">
// // //         {tab === "overview" && <OverviewTab user={user} />}
// // //         {tab === "edit" && <EditTab user={user} />}
// // //         {tab === "activity" && <ActivityFeed activities={user.activity} />}
// // //         {tab === "security" && <SecurityTab />}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import { useState } from "react";

// // import ProfileHeader from "./ProfileHeader";
// // import ProfileTabs from "./ProfileTabs";
// // import OverviewTab from "./OverviewTab";
// // import EditTab from "./EditTab";
// // import SecurityTab from "./SecurityTab";

// // import ActivityFeed from "../components/dashboard/ActivityFeed";

// // export default function ProfilePage({ user }) {
// //   const [tab, setTab] = useState("overview");

// //   // safety check (prevents crash if user not loaded yet)
// //   if (!user) {
// //     return (
// //       <div className="flex items-center justify-center h-screen text-gray-500">
// //         Loading profile...
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">

// //       {/* HEADER */}
// //       <ProfileHeader user={user} />

// //       {/* TABS */}
// //       <ProfileTabs tab={tab} setTab={setTab} />

// //       {/* TAB CONTENT */}
// //       <div className="mt-6">

// //         {tab === "overview" && <OverviewTab user={user} />}

// //         {tab === "edit" && <EditTab user={user} />}

// //         {tab === "activity" && (
// //           <ActivityFeed activities={user.activity} />
// //         )}

// //         {tab === "security" && <SecurityTab />}

// //       </div>

// //     </div>
// //   );
// // }
// import { useState } from "react";

// import ProfileHeader from "./ProfileHeader";
// import ProfileTabs from "./ProfileTabs";
// import OverviewTab from "./OverviewTab";
// import EditTab from "./EditTab";
// import SecurityTab from "./SecurityTab";

// import ActivityFeed from "../components/dashboard/ActivityFeed";

// export default function ProfilePage({ user }) {
//   const [tab, setTab] = useState("overview");

//   /* Prevent crash if user missing */
//   if (!user) {
//     return (
//       <div className="p-6 text-gray-500">
//         Loading profile...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">

//       {/* HEADER */}
//       <ProfileHeader user={user} />

//       {/* TABS */}
//       <ProfileTabs tab={tab} setTab={setTab} />

//       {/* CONTENT */}
//       <div className="mt-6">

//         {tab === "overview" && <OverviewTab user={user} />}

//         {tab === "edit" && <EditTab user={user} />}

//         {tab === "activity" && (
//           <ActivityFeed activities={user.activity} />
//         )}

//         {tab === "security" && <SecurityTab />}

//       </div>

//     </div>
//   );
// }
// export default function ProfilePage() {
//   return (
//     <div style={{ padding: 40, fontSize: 24 }}>
//       Profile Page Loaded Successfully ✅
//     </div>
//   );
// }
// import { useState } from "react";

// export default function ProfilePage() {
//   const [tab, setTab] = useState("overview");

//   return (
//     <div className="p-6">

//       <h1 className="text-2xl font-bold mb-6">
//         Profile Page ✅
//       </h1>

//       {/* Tabs */}
//       <div className="flex gap-4 mb-6">
//         <button onClick={() => setTab("overview")}>Overview</button>
//         <button onClick={() => setTab("edit")}>Edit</button>
//         <button onClick={() => setTab("activity")}>Activity</button>
//       </div>

//       {/* Content */}
//       {tab === "overview" && <div>Overview Content</div>}
//       {tab === "edit" && <div>Edit Content</div>}
//       {tab === "activity" && <div>Activity Content</div>}

//     </div>
//   );
// }

import { useState } from "react";
import ProfileHeader from "./ProfileHeader";

export default function ProfilePage() {
  const [tab, setTab] = useState("overview");

  /* SAFE DUMMY USER */
  const user = {
    name: "Mhd_rehan",
    role: "User",
    photo: "https://i.pravatar.cc/150",
    bio: "Aspiring Full Stack Developer",
    location: "India",
    stats: [
      { label: "Applications", value: 12 },
      { label: "Interviews", value: 3 },
      { label: "Saved Jobs", value: 7 },
      { label: "Score", value: "85%" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <ProfileHeader user={user} />

      {/* TABS */}
      <div className="flex gap-4 mt-8 border-b pb-2">
        <button onClick={() => setTab("overview")}>Overview</button>
        <button onClick={() => setTab("edit")}>Edit</button>
        <button onClick={() => setTab("activity")}>Activity</button>
        <button onClick={() => setTab("security")}>Security</button>
      </div>

      {/* CONTENT */}
      {/* <div className="mt-6 text-gray-700">

        {tab === "overview" && <p>Overview Content</p>}
        {tab === "edit" && <p>Edit Profile Content</p>}
        {tab === "activity" && <p>Activity Content</p>}
        {tab === "security" && <p>Security Settings</p>}

      </div> */}
    <div className="mt-6">

  {tab === "overview" && (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="font-semibold mb-4">Overview</h2>

      <p><b>Location:</b> {user.location}</p>
      <p><b>Role:</b> {user.role}</p>
      <p><b>Email:</b> rehan@email.com</p>
    </div>
  )}

  {tab === "edit" && (
    <div className="bg-white rounded-xl shadow p-6">
      Edit profile form coming soon...
    </div>
  )}

  {tab === "activity" && (
    <div className="bg-white rounded-xl shadow p-6">
      Activity timeline coming soon...
    </div>
  )}

  {tab === "security" && (
    <div className="bg-white rounded-xl shadow p-6">
      Security settings coming soon...
    </div>
  )}

</div>
    </div>
  );
}