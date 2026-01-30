export default function Checkbox({ label, checked, onChange }) {
  return (
    <label className="inline-flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="rounded border-gray-300"
      />
      <span>{label}</span>
    </label>
  );
}
