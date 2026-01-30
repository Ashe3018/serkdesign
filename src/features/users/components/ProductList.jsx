export default function ProductList({products,  setForm,setIsEditing, onDelete }) {
   
  return (
    <div className="overflow-x-auto border rounded-xl h-[600px] overflow-y-scroll">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100 sticky top-0 z-10">
          <tr>
            <th className="py-2 px-4 border-b text-left">Image</th>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">
                <img
                  src={`https://www.ayu.server.ayubceramic.com/${p.img_url}`}
                  alt={p?.name}
                  className="w-12 h-12 object-cover rounded-md border"
                />
              </td>
              <td className="py-2 px-4 border-b">{p?.name}</td>
              <td className="py-2 px-4 border-b text-center">{p?.category}</td>
              <td className="py-2 px-4 border-b text-center">
                {p?.price} Birr
              </td>
              <td className="py-2 px-4 border-b text-center">{p?.quantity}</td>
              <td className="py-2 px-4 border-b space-x-2 text-center">
                <button
                  onClick={() => {
                    setForm(p);
                    setIsEditing(true);
                  }}
                  className="text-blue-600 hover:text-blue-800 hover:border-b-2 hover:border-blue-700"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => onDelete(p?.Id)}
                  className="text-red-600 hover:text-red-800 hover:border-b-2 hover:border-red-700 "
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
