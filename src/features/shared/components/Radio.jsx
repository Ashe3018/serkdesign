export function Radio({ label, name, value, checked, onChange }) {
  return (
    <label className="inline-flex items-center gap-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="border-gray-300"
      />
      <span>{label}</span>
    </label>
  );
}
