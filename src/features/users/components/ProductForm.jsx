import { useEffect, useState } from "react";

export default function ProductForm({
  onSubmit,
  isEditing,
  setIsEditing,
  form,
  setForm,
  onUpdate,
  onUpdateFile,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setForm((prev) => ({
        ...prev,
        [name]: value,
        subCategory: "",
        location: "",
      }));
      return;
    }
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setForm({ ...form, file: file, preview: imageURL });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(form.price) < 0 || Number(form.quantity) < 0) return;
    const formData = new FormData();
    formData.append("file", form.file);
    formData.append("name", form.name);
    formData.append("price", parseFloat(form.price));
    formData.append("size", form.size);
    formData.append("quantity", parseFloat(form.quantity));
    formData.append("model", form.model);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("subCategory", form.subCategory);
    formData.append("location", form.location);
    formData.append("img_url", form.img_url);
    if (isEditing) {
      setIsEditing(false);
      if (!form?.file)
        onUpdate({
          ...form,
          price: parseFloat(form.price),
          quantity: parseFloat(form.quantity),
        });
      else {
        
        onUpdateFile({form,formData})
      };
    } else {
      onSubmit(formData);
    }
    setForm({
    Id: "",
    name: "",
    price: "",
    size: "",
    quantity: "",
    model: "",
    brand: "",
    description: "",
    category: "",
    subCategory: "",
    location: "",
    img_url: "",
    file:"",
  })
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-4 overflow-x-auto border rounded-xl h-[600px] overflow-y-scroll"
    >
      <div className="">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">
          {isEditing ? "✏️ Edit Product" : "➕ Add New Product"}
          {isEditing && (
            <button
              onClick={(e) => {
                setIsEditing(false);
                setForm({
                  Id: "",
                  name: "",
                  price: "",
                  size: "",
                  quantity: "",
                  model: "",
                  brand: "",
                  description: "",
                  category: "",
                  subCategory: "",
                  location: "",
                });
              }}
              className="float-right text-red-500 text-lg -mt-1 p-1 border border-red-500 bg-white rounded-lg "
            >
              ❌ Cancel
            </button>
          )}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Category</option>
          <option value="ceramic">Ceramic</option>
          <option value="sanitary">Sanitary</option>
          <option value="plumbing_accessory">Plumbing Accessory</option>
          <option value="adhesive_filler">Adhesive and Filler</option>
        </select>
        {form.category !== "" &&
        form.category !== "sanitary" &&
        form.category !== "ceramic" ? (
          <select
            name="subCategory"
            value={form.subCategory}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">
              Select{" "}
              {form.category === "adhesive_filler"
                ? "Adhesive and Filler"
                : "Plumbing Accessory"}{" "}
              Category
            </option>
            {form.category === "adhesive_filler" ? (
              <>
                <option value="adhesive">Adhesive</option>
                <option value="filler">Filler</option>
              </>
            ) : (
              <>
                <option value="ppr">Ppr</option>
                <option value="pvc">Pvc</option>
              </>
            )}
          </select>
        ) : form.category === "ceramic" ? (
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Origin</option>
            <option value="china">China</option>
            <option value="india">India</option>
            <option value="dukem">Dukem</option>
            <option value="arerti">Arerti</option>
          </select>
        ) : (
          <></>
        )}

        {form.subCategory !== "" &&
        form.subCategory !== "adhesive" &&
        form.subCategory !== "filler" &&
        form.subCategory !== "wall" &&
        form.subCategory !== "floor" ? (
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">
              Select{" "}
              {form.subCategory === "ppr" ? "Ppr Category" : "Pvc Category"}{" "}
            </option>
            {form.subCategory === "ppr" ? (
              <>
                <option value="pipe">Pipe</option>
                <option value="accessory">Accessory</option>
              </>
            ) : (
              <>
                <option value="upvc">Upvc</option>
                <option value="pvc">Pvc</option>
                <option value="hack">Hack</option>
              </>
            )}
          </select>
        ) : form.location === "china" ||
          form.location === "india" ||
          form.location === "dukem" ||
          form.location === "arerti" ? (
          <select
            name="subCategory"
            value={form.subCategory}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Ceramic Type</option>
            <option value="wall">Wall</option>
            <option value="floor">Floor</option>
          </select>
        ) : (
          <></>
        )}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="model"
          value={form.model}
          onChange={handleChange}
          placeholder="Product Model"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="size"
          value={form.size}
          onChange={handleChange}
          placeholder="Product Size"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          required
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Product Description"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        ></textarea>
        {form.preview && (
          <center>
            <div className="mt-1">
              <b className="text-sm text-gray-600 mb-1">Preview:</b>
              <img
                src={form.preview}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-md border"
              />
            </div>
          </center>
        )}
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
        >
          {isEditing ? "Update Product" : "Add Product"}
        </button>
      </div>
    </form>
  );
}
