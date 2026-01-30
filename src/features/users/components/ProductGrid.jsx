import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router";
import AlertOrderNow from "./AlertOrderNow";

const ProductGrid = ({products}) => {
  const [open, setOpen] = useState(false);
  let nav = useLocation();
  return (
    <div className="max-w-7xl -mr-2 ml-2 pl-2 py-10 flex flex-col md:flex-row gap-4">
      {nav.pathname !== "/" ? (
        <div className="items-center justify-center flex md:items-start md:justify-start md:block ">
          <Sidebar nav={nav.pathname} />
        </div>
      ) : (
        <></>
      )}

      <main className="flex-1">
        <div className="md:grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mr-6">
          {products?.map((p) => (
            <ProductCard key={p.name} data={p} onClick={()=>setOpen(true)} />
          ))}
        </div>
      </main>
      <AlertOrderNow open={open} onClose={()=>setOpen(false)}/>
    </div>
  );
};

export default ProductGrid;
