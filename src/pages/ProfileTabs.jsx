export default function ProfileTabs({ tab, setTab }) {
  const tabs = ["overview", "edit", "activity", "security"];

  return (
    <div className="flex gap-4 mt-8 border-b">
      {tabs.map(t => (
        <button
          key={t}
          onClick={() => setTab(t)}
          className={`pb-2 capitalize ${
            tab === t
              ? "border-b-2 border-black font-semibold"
              : "text-gray-500"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}