export default function SecurityTab() {
  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-md">
      <button className="w-full bg-gray-900 text-white py-2 rounded-lg mb-3">
        Change Password
      </button>

      <button className="w-full border py-2 rounded-lg">
        Logout All Devices
      </button>
    </div>
  );
}