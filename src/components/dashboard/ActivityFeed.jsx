// import { motion } from "framer-motion";
// import { CheckCircle, Briefcase, Trophy } from "lucide-react";

// const iconMap = {
//   job: Briefcase,
//   success: CheckCircle,
//   reward: Trophy,
// };

// export default function ActivityFeed({ activities }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-md p-6">
//       <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>

//       <div className="space-y-4">
//         {activities.map((item, i) => {
//           const Icon = iconMap[item.type];

//           return (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: i * 0.05 }}
//               className="flex items-center gap-4"
//             >
//               <div className="p-2 bg-indigo-100 rounded-full">
//                 <Icon size={18} className="text-indigo-600" />
//               </div>

//               <div>
//                 <p className="text-sm font-medium">{item.text}</p>
//                 <span className="text-xs text-gray-400">{item.time}</span>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import { motion } from "framer-motion";
import {
  CheckCircle,
  Briefcase,
  Trophy,
  AlertCircle,
  User
} from "lucide-react";

/* ---------- ICON MAP ---------- */

const iconMap = {
  job: Briefcase,
  success: CheckCircle,
  reward: Trophy,
  alert: AlertCircle,
  profile: User
};

/* ---------- COLOR MAP ---------- */

const colorMap = {
  job: "bg-blue-100 text-blue-600",
  success: "bg-green-100 text-green-600",
  reward: "bg-purple-100 text-purple-600",
  alert: "bg-red-100 text-red-500",
  profile: "bg-gray-100 text-gray-600"
};

/* ---------- COMPONENT ---------- */

export default function ActivityFeed({
  activities = [],
  loading = false,
  compact = false
}) {
  /* ---------- LOADING STATE ---------- */
  if (loading) {
    return (
      <div className="bg-white rounded-2xl border p-6 animate-pulse">
        <div className="h-5 w-40 bg-gray-200 rounded mb-6" />
        <div className="space-y-4">
          {[1,2,3].map(i => (
            <div key={i} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-200"/>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-gray-200 rounded w-3/4"/>
                <div className="h-2 bg-gray-100 rounded w-1/3"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ---------- EMPTY STATE ---------- */
  if (!activities.length) {
    return (
      <div className="bg-white rounded-2xl border p-6 text-center text-gray-500">
        <p className="font-medium">No recent activity</p>
        <p className="text-sm mt-1">Your actions will appear here</p>
      </div>
    );
  }

  /* ---------- MAIN ---------- */

  return (
    <div className="bg-white rounded-2xl border p-6 hover:shadow-lg transition">

      {/* HEADER */}
      {!compact && (
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-semibold text-lg">Recent Activity</h3>
            <p className="text-sm text-gray-500">
              Your latest actions
            </p>
          </div>

          <span className="text-xs text-gray-400">
            {activities.length} events
          </span>
        </div>
      )}

      {/* TIMELINE */}
      <div className="relative space-y-6">

        {/* vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-100"/>

        {activities.map((item, i) => {
          const Icon = iconMap[item.type] || User;
          const color = colorMap[item.type] || colorMap.profile;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 relative"
            >
              {/* ICON */}
              <div
                className={`p-2 rounded-full border bg-white shadow-sm z-10 ${color}`}
                aria-label={item.type}
              >
                <Icon size={16}/>
              </div>

              {/* CONTENT */}
              <div className="flex-1 group">

                <p className="text-sm font-medium text-gray-800 group-hover:text-black transition">
                  {item.text}
                </p>

                <span className="text-xs text-gray-400">
                  {item.time}
                </span>

              </div>

            </motion.div>
          );
        })}
      </div>

    </div>
  );
}