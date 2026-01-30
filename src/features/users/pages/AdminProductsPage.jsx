import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import useCRUD from "../hooks/useCRUD";
import Alerts from "../components/Alerts";
const AdminProductsPage = () => {
  const { datas, createData, updateData, updateDataFile, deleteData, loading } =
    useCRUD("https://www.ayu.server.ayubceramic.com/product");
  const [isEditing, setIsEditing] = useState(false);
  const [deletedId, setDeletedId] = useState(0);
  const [alertOpen, setAlertOpen] = useState(false);
  const [form, setForm] = useState({
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
    file: "",
  });
  if (loading) return <p>Loading!!!</p>;
  const handleDeletes = (id) => {
    setDeletedId(id);
    setAlertOpen(true);
  };
  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-10">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          🛍️ Admin Product Management
        </h2>
        <Alerts
          type=""
          open={alertOpen}
          handleClose={() => {
            setAlertOpen(false);
            setDeletedId(0);
          }}
          handleDelete={() => {
            deleteData(deletedId);
            setAlertOpen(false);
            setDeletedId(0);
          }}
        />
        
        {/* Side-by-side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-6">
          {/* LEFT SIDE — Product Form */}
          <ProductForm
            onSubmit={createData}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            form={form}
            setForm={setForm}
            onUpdate={updateData}
            onUpdateFile={updateDataFile}
          />

          {/* RIGHT SIDE — Product Table */}

          <ProductList
            products={datas}
            setForm={setForm}
            setIsEditing={setIsEditing}
            onDelete={handleDeletes}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProductsPage;
