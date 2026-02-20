import { motion } from "framer-motion";

export default function StatCard({ title, value, icon: Icon, color, trend }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center transition"
    >
      <div>
        <p className="text-gray-500 text-sm">{title}</p>

        <h2 className="text-3xl font-bold mt-1">{value}</h2>

        {trend && (
          <p className={`text-sm mt-2 ${trend > 0 ? "text-green-500" : "text-red-500"}`}>
            {trend > 0 ? "▲" : "▼"} {Math.abs(trend)}%
          </p>
        )}
      </div>

      <div className={`p-3 rounded-xl ${color}`}>
        <Icon className="text-white" size={22} />
      </div>
    </motion.div>
  );
}
