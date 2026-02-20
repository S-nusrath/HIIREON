export default function Navbar() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between">

      <h1 className="font-semibold text-lg">Dashboard</h1>

      <div className="flex gap-4 items-center">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
          Upgrade
        </button>

        <div className="w-10 h-10 rounded-full bg-gray-300"/>
      </div>

    </header>
  );
}
