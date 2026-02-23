// import { motion } from "framer-motion";

// export default function StatCard({ title, value, icon: Icon, color, trend }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center transition"
//     >
//       <div>
//         <p className="text-gray-500 text-sm">{title}</p>

//         <h2 className="text-3xl font-bold mt-1">{value}</h2>

//         {trend && (
//           <p className={`text-sm mt-2 ${trend > 0 ? "text-green-500" : "text-red-500"}`}>
//             {trend > 0 ? "▲" : "▼"} {Math.abs(trend)}%
//           </p>
//         )}
//       </div>

//       <div className={`p-3 rounded-xl ${color}`}>
//         <Icon className="text-white" size={22} />
//       </div>
//     </motion.div>
//   );
// }
// export default function StatCard({ label, value }) {
//   return (
//     <div className="bg-white rounded-xl shadow p-4 text-center">
//       <p className="text-2xl font-bold">{value}</p>
//       <p className="text-gray-500 text-sm">{label}</p>
//     </div>
//   );
// }
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  trendValue,
  color = "black",
  loading = false
}) {
  const colorStyles = {
    black: "text-black",
    green: "text-green-600",
    blue: "text-blue-600",
    red: "text-red-500",
    purple: "text-purple-600"
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border p-5 animate-pulse">
        <div className="h-4 w-24 bg-gray-200 rounded mb-4" />
        <div className="h-8 w-20 bg-gray-300 rounded mb-3" />
        <div className="h-3 w-16 bg-gray-200 rounded" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border p-5 transition hover:shadow-lg hover:-translate-y-1">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm text-gray-500">{label}</p>

        {Icon && (
          <div className="p-2 bg-gray-100 rounded-lg">
            <Icon size={18} />
          </div>
        )}
      </div>

      {/* VALUE */}
      <h2 className={`text-3xl font-bold ${colorStyles[color]}`}>
        {value}
      </h2>

      {/* TREND */}
      {trend && (
        <div className="flex items-center gap-1 mt-2 text-xs font-medium">

          {trend === "up" ? (
            <ArrowUpRight size={14} className="text-green-600" />
          ) : (
            <ArrowDownRight size={14} className="text-red-500" />
          )}

          <span
            className={
              trend === "up" ? "text-green-600" : "text-red-500"
            }
          >
            {trendValue}
          </span>

          <span className="text-gray-400 ml-1">vs last week</span>
        </div>
      )}

    </div>
  );
}