// // // import StatCard from "../../components/dashboard/StatCard";


// // export default function ProfileHeader({ user }) {
// //   return (
// //     <>
// //       <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-6">
// //         <img
// //           src={user.photo}
// //           alt="profile"
// //           className="w-24 h-24 rounded-full object-cover border"
// //         />

// //         <div className="flex-1">
// //           <h1 className="text-2xl font-bold">{user.name}</h1>
// //           <p className="text-gray-500">{user.role}</p>
// //           <p className="text-sm mt-2">{user.bio}</p>
// //         </div>

// //         <button className="bg-black text-white px-5 py-2 rounded-xl hover:scale-105 transition">
// //           Edit Profile
// //         </button>
// //       </div>

// //       {/* Stats */}
// //       <div className="grid md:grid-cols-4 gap-4 mt-6">
// //         {user.stats.map((stat, i) => (
// //           <StatCard key={i} label={stat.label} value={stat.value} />
// //         ))}
// //       </div>
// //     </>
// //   );
// // }
// import StatCard from "../components/dashboard/StatCard";
// import { motion } from "framer-motion";

// export default function ProfileHeader({ user }) {
//   return (
//     <div className="space-y-6">

//       {/* PROFILE CARD */}
//       <motion.div
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center md:items-start gap-6"
//       >
//         {/* Avatar */}
//         <div className="relative">
//           <img
//             src={user?.photo || `https://ui-avatars.com/api/?name=${user?.name}`}
//             alt="profile"
//             className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 shadow"
//           />

//           {/* status dot */}
//           <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
//         </div>

//         {/* INFO */}
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-2xl font-bold tracking-tight">
//             {user?.name}
//           </h1>

//           <p className="text-gray-500 capitalize">{user?.role}</p>

//           <p className="text-sm mt-2 text-gray-600 max-w-lg">
//             {user?.bio || "No bio added yet"}
//           </p>

//           {/* meta info */}
//           <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500 justify-center md:justify-start">
//             {user?.location && <span>📍 {user.location}</span>}
//             {user?.linkedin && (
//               <a
//                 href={`https://${user.linkedin}`}
//                 target="_blank"
//                 className="hover:text-black transition"
//               >
//                 🔗 LinkedIn
//               </a>
//             )}
//           </div>
//         </div>

//         {/* ACTION BUTTON */}
//         <button className="bg-black text-white px-5 py-2 rounded-xl hover:scale-105 active:scale-95 transition">
//           Edit Profile
//         </button>
//       </motion.div>

//       {/* STATS GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {user?.stats?.map((stat, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.05 }}
//           >
//             <StatCard label={stat.label} value={stat.value} />
//           </motion.div>
//         ))}
//       </div>

//     </div>
//   );
// }
import StatCard from "../components/dashboard/StatCard";

export default function ProfileHeader({ user }) {

  /* SAFETY CHECK */
  if (!user) return null;

  return (
    <div>

      {/* PROFILE CARD */}
      <div className="bg-white rounded-xl shadow p-6 flex items-center gap-6">

        <img
          src={user.photo}
          alt="avatar"
          className="w-24 h-24 rounded-full border"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.role}</p>
          <p className="text-sm mt-2">{user.bio}</p>
        </div>

        <button className="bg-black text-white px-5 py-2 rounded-lg">
          Edit Profile
        </button>

      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-4 mt-6">
        {user.stats?.map((stat, i) => (
          <StatCard key={i} label={stat.label} value={stat.value} />
        ))}
      </div>

    </div>
  );
}