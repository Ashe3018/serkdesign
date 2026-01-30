import useCRUD from "../hooks/useCRUD";
import BrandList from "../components/BrandList";
import BrandForm from "../components/BrandForm";

export default function BrandPage() {
  const { datas, createData, updateData, deleteData } = useCRUD("brand");

  return (
    <div className="p-4 text-center mt-14">
      <h2 className="text-xl font-bold">Brand Management</h2>
      <div className="">
        <div className="border rounded-md bg-gray-400">
          <BrandList
            brands={datas}
            onUpdate={updateData}
            onDelete={deleteData}
          />
        </div>
        <div className="border rounded-md bg-gray-400">
          <BrandForm onSubmit={createData} />
        </div>
      </div>
    </div>
  );
}
