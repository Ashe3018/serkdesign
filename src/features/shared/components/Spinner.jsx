export default function Spinner({ size = 6, className = "" }) {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-t-4 border-gray-300 border-t-indigo-600 h-${size} w-${size} ${className}`}
    />
  );
}
