import { useEffect, useState } from "react";
import { getDashboardData } from "../api/dashboardApi";

import StatCard from "../components/dashboard/StatCard";
import SkillChart from "../components/dashboard/SkillChart";
import ActivityFeed from "../components/dashboard/ActivityFeed";

import { Target, Briefcase, Flame, Brain } from "lucide-react";

export default function Dashboard() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);

      const res = await getDashboardData();
      setData(res);

    } catch (err) {
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // 🔴 Error Screen
  if (error)
    return (
      <div className="text-center mt-20">
        <p className="text-red-500 text-lg">{error}</p>

        <button
          onClick={fetchData}
          className="mt-4 bg-black text-white px-4 py-2 rounded"
        >
          Retry
        </button>
      </div>
    );

  // 🟡 Loading Screen
  if (loading)
    return (
      <p className="text-center text-gray-500 mt-20">
        Loading dashboard...
      </p>
    );

  return (
    <div className="space-y-8 w-full max-w-7xl mx-auto">

      {/* Header + Refresh */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h1>

        <button
          onClick={fetchData}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Refresh
        </button>
      </div>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Match Score"
          value={`${data.score}%`}
          icon={Target}
          color="bg-indigo-500"
          trend={6}
        />

        <StatCard
          title="Applications"
          value={data.applications}
          icon={Briefcase}
          color="bg-green-500"
        />

        <StatCard
          title="Streak"
          value={`${data.streak} Days`}
          icon={Flame}
          color="bg-orange-500"
        />

        <StatCard
          title="Skills"
          value={data.skills.length}
          icon={Brain}
          color="bg-purple-500"
        />

      </section>

      {/* Chart + Activity */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2">
          <SkillChart skills={data.skills}/>
        </div>

        <div>
          <ActivityFeed activities={data.activities}/>
        </div>

      </section>

    </div>
  );
}
