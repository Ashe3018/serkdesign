import { useState } from "react";

export default function BrandForm({ onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input
        className="border p-2 "
        placeholder="Brand name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="ml-2 bg-blue-600 text-white p-2">Add Brand</button>
    </form>
  );
}
