
import SkillChart from "../components/dashboard/SkillChart";
import { motion } from "framer-motion";

/* ---------- Reusable UI ---------- */

function Section({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-sm border p-6"
    >
      <h2 className="font-semibold text-lg mb-4">{title}</h2>
      {children}
    </motion.div>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex justify-between text-sm py-1">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value || "—"}</span>
    </div>
  );
}

function SkillBadge({ skill }) {
  return (
    <span className="px-3 py-1 text-xs rounded-full bg-gray-100 border">
      {skill}
    </span>
  );
}

/* ---------- MAIN COMPONENT ---------- */

export default function OverviewTab({ user }) {
  if (!user) return null;

  return (
    <div className="grid lg:grid-cols-2 gap-6">

      {/* ================= USER VIEW ================= */}
      {user.role === "User" && (
        <>
          {/* Career Info */}
          <Section title="Career Info">
            <Info label="Preferred Role" value={user.preferredRole} />

            <div className="mt-3">
              <p className="text-gray-500 text-sm mb-1">Skills</p>
              <div className="flex flex-wrap gap-2">
                {user.skills?.length ? (
                  user.skills.map((skill, i) => (
                    <SkillBadge key={i} skill={skill} />
                  ))
                ) : (
                  <p className="text-sm text-gray-400">No skills added</p>
                )}
              </div>
            </div>

            <div className="mt-3">
              <Info label="LinkedIn" value={user.linkedin} />
            </div>
          </Section>

          {/* Progress */}
          <Section title="Progress">
            <Info label="Questions Solved" value={user.progress?.questions} />
            <Info label="Mock Interviews" value={user.progress?.interviews} />

            <div className="mt-3">
              <p className="text-sm text-gray-500 mb-1">Profile Strength</p>

              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-black h-2"
                  style={{ width: `${user.progress?.strength || 0}%` }}
                />
              </div>

              <p className="text-xs mt-1 text-gray-500">
                {user.progress?.strength || 0}% completed
              </p>
            </div>
          </Section>

          {/* Skill Analytics */}
          <Section title="Skill Analytics">
            <SkillChart skills={user.skills || []} />
          </Section>
        </>
      )}

      {/* ================= RECRUITER VIEW ================= */}
      {user.role === "Recruiter" && (
        <>
          <Section title="Company Info">
            <Info label="Company" value={user.company} />
            <Info label="Industry" value={user.industry} />
            <Info label="Website" value={user.website} />
          </Section>

          <Section title="Hiring Analytics">
            <Info label="Jobs Posted" value={user.jobs?.posted} />
            <Info label="Applicants" value={user.jobs?.applicants} />
            <Info label="Interviews" value={user.jobs?.interviews} />
          </Section>
        </>
      )}

    </div>
  );
}




















// import SkillChart from "../../components/dashboard/SkillChart";


// function Section({ title, children }) {
//   return (
//     <div className="bg-white rounded-xl shadow p-6">
//       <h2 className="font-semibold mb-4">{title}</h2>
//       {children}
//     </div>
//   );
// }

// function Info({ label, value }) {
//   return (
//     <p className="text-sm mb-2">
//       <span className="text-gray-500">{label}:</span> {value}
//     </p>
//   );
// }

// export default function OverviewTab({ user }) {
//   return (
//     <div className="grid md:grid-cols-2 gap-6">

//       {user.role === "User" && (
//         <>
//           <Section title="Career Info">
//             <Info label="Preferred Role" value={user.preferredRole} />
//             <Info label="Skills" value={user.skills.join(", ")} />
//             <Info label="LinkedIn" value={user.linkedin} />
//           </Section>

//           <Section title="Progress">
//             <Info label="Questions" value={user.progress.questions} />
//             <Info label="Mock Interviews" value={user.progress.interviews} />
//             <Info label="Profile Strength" value={user.progress.strength + "%"} />
//           </Section>

//           <Section title="Skill Analytics">
//             <SkillChart skills={user.skills} />
//           </Section>
//         </>
//       )}

//       {user.role === "Recruiter" && (
//         <>
//           <Section title="Company Info">
//             <Info label="Company" value={user.company} />
//             <Info label="Industry" value={user.industry} />
//             <Info label="Website" value={user.website} />
//           </Section>

//           <Section title="Hiring Stats">
//             <Info label="Jobs Posted" value={user.jobs.posted} />
//             <Info label="Applicants" value={user.jobs.applicants} />
//             <Info label="Interviews" value={user.jobs.interviews} />
//           </Section>
//         </>
//       )}

//     </div>
//   );
// }