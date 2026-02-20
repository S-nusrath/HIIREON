import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function SkillChart({ skills }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="font-semibold text-lg mb-4">Skill Strength</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={skills}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="level" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
