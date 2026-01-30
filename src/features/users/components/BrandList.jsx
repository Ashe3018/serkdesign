export default function BrandList({ brands, onUpdate, onDelete }) {
  return (
    <div>
      <table className="border w-full mt-6">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">ID</th>
          <th className="p-2">Brand Name</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>

      <tbody>
        {brands.map((b) => (
          <tr key={b.id}>
            <td className="p-2">{b.id}</td>
            <td className="p-2">{b.name}</td>
            <td className="p-2">
              <button
                className="bg-yellow-500 px-2 text-white mr-2"
               // onClick={() => onUpdate(b.id, { name: prompt("New name:") })}
              >
                Edit
              </button>

              <button
                className="bg-red-600 px-2 text-white"
                onClick={() => onDelete(b.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table></div>
    
  );
}
