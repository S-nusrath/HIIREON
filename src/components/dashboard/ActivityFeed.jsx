import { motion } from "framer-motion";
import { CheckCircle, Briefcase, Trophy } from "lucide-react";

const iconMap = {
  job: Briefcase,
  success: CheckCircle,
  reward: Trophy,
};

export default function ActivityFeed({ activities }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>

      <div className="space-y-4">
        {activities.map((item, i) => {
          const Icon = iconMap[item.type];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4"
            >
              <div className="p-2 bg-indigo-100 rounded-full">
                <Icon size={18} className="text-indigo-600" />
              </div>

              <div>
                <p className="text-sm font-medium">{item.text}</p>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
