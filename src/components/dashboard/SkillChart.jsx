// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// export default function SkillChart({ skills }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-md p-6">
//       <h3 className="font-semibold text-lg mb-4">Skill Strength</h3>

//       <ResponsiveContainer width="100%" height={250}>
//         <BarChart data={skills}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="level" radius={[6, 6, 0, 0]} />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function SkillChart({ skills = [], loading = false }) {
  
  /* ---------- Loading Skeleton ---------- */
  if (loading) {
    return (
      <div className="bg-white rounded-2xl border p-6 animate-pulse">
        <div className="h-5 w-40 bg-gray-200 rounded mb-6" />
        <div className="h-[250px] bg-gray-100 rounded-xl" />
      </div>
    );
  }

  /* ---------- Empty State ---------- */
  if (!skills.length) {
    return (
      <div className="bg-white rounded-2xl border p-6 text-center text-gray-500">
        <p className="font-medium">No skill data available</p>
        <p className="text-sm mt-1">Add skills to see analytics</p>
      </div>
    );
  }

  /* ---------- Calculations ---------- */
  const strongest = skills.reduce((a, b) => (a.level > b.level ? a : b));
  const average = Math.round(
    skills.reduce((acc, cur) => acc + cur.level, 0) / skills.length
  );

  return (
    <div className="bg-white rounded-2xl border p-6 hover:shadow-lg transition">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-semibold text-lg">Skill Analytics</h3>
          <p className="text-sm text-gray-500">
            Performance overview
          </p>
        </div>

        {/* Stats */}
        <div className="text-right">
          <p className="text-xs text-gray-400">Strongest</p>
          <p className="font-semibold">{strongest.name}</p>
          <p className="text-xs text-gray-400 mt-1">
            Avg: {average}%
          </p>
        </div>
      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={skills}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.05)" }}
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)"
            }}
          />

          {/* Gradient */}
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000" stopOpacity={0.9}/>
              <stop offset="100%" stopColor="#000" stopOpacity={0.3}/>
            </linearGradient>
          </defs>

          <Bar
            dataKey="level"
            fill="url(#barGradient)"
            radius={[8, 8, 0, 0]}
            animationDuration={800}
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}