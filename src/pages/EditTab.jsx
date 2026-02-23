function Input({ label, value }) {
  return (
    <div className="mb-3">
      <label className="text-sm text-gray-500">{label}</label>
      <input
        defaultValue={value}
        className="w-full border rounded-lg px-3 py-2 mt-1"
      />
    </div>
  );
}

export default function EditTab({ user }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-xl">
      <Input label="Name" value={user.name} />
      <Input label="Bio" value={user.bio} />
      <Input label="Location" value={user.location} />

      <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg">
        Save Changes
      </button>
    </div>
  );
}