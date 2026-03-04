// export default function AdminDashboard(){
//   return (
//     <div className="p-10 text-2xl font-bold">
//       Admin Dashboard 👑
//     </div>
//   );
// }
import { Link } from "react-router-dom";

export default function AdminDashboard(){

return(

<div className="p-6">

<h1 className="text-2xl font-bold mb-6">
Recruiter Dashboard
</h1>

<div className="space-y-4">

<Link
to="/admin/create-job"
className="block bg-blue-500 text-white p-3 rounded"
>
Create Job
</Link>

<Link
to="/admin/jobs"
className="block bg-green-500 text-white p-3 rounded"
>
Manage Jobs
</Link>

<Link
to="/admin/applicants"
className="block bg-purple-500 text-white p-3 rounded"
>
View Applicants
</Link>

</div>

</div>

)

}