import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/components/Button";
import AlertOrderNow from "./AlertOrderNow";




// Sample data
const mensCloths = [
  { id: 1, image: "/images/we1.png", title: "Habesha Kemis", price: 1200 },
  { id: 2, image: "/images/we2.png", title: "Traditional Gabi", price: 95 },
  { id: 3, image: "/images/we3.png", title: "Cultural Outfit", price: 150 },
  { id: 4, image: "/images/we4.png", title: "Handwoven Cloth", price: 110 },
  { id: 5, image: "/images/we5.png", title: "Modern Habesha", price: 130 },
  { id: 6, image: "/images/we6.png", title: "Wedding Wear", price: 180 },
  { id: 7, image: "/images/we7.png", title: "Classic Kemis", price: 125 },
  { id: 8, image: "/images/we8.png", title: "Elegant Gabi", price: 100 },
  { id: 9, image: "/images/we9.png", title: "Cultural Style", price: 115 },
  { id: 10, image: "/images/we.png", title: "Premium Habesha", price: 200 },

   { id: 11, image: "/images/se.png", title: "Habesha Kemis", price: 1200 },
  { id: 12, image: "/images/se1.png", title: "Traditional Gabi", price: 95 },
  { id: 13, image: "/images/se2.png", title: "Cultural Outfit", price: 150 },
  { id: 14, image: "/images/se3.png", title: "Handwoven Cloth", price: 110 },
  { id: 15, image: "/images/se4.png", title: "Modern Habesha", price: 130 },
  { id: 16, image: "/images/se5.png", title: "Wedding Wear", price: 180 },
  { id: 17, image: "/images/se6.png", title: "Classic Kemis", price: 125 },
  { id: 18, image: "/images/se7.png", title: "Elegant Gabi", price: 100 },
  { id: 19, image: "/images/se8.png", title: "Cultural Style", price: 115 },
  { id: 20, image: "/images/se9png", title: "Premium Habesha", price: 200 },

  { id: 21, image: "/images/ki.png", title: "Classic Kemis", price: 125 },
  { id: 22, image: "/images/ki1.png", title: "Elegant Gabi", price: 100 },
  { id: 23, image: "/images/ki2.png", title: "Cultural Style", price: 115 },
  { id: 24, image: "/images/ki3.png", title: "Premium Habesha", price: 200 },
];

export default function OneProduct() {
  const [open, setOpen] = useState(false);
  
  const [tab, setTab] = useState("description");
  
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const res = await axios.get("https://www.ayu.server.ayubceramic.com/product");
      setData(res.data?.find(r => r.Id === parseInt(id)));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData()
  },[])

const { id } = useParams();
  const item = mensCloths.find((c) => c.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!item) return <div className="p-20 text-center text-red-500">Cloth not found</div>;

  const total = item.price * quantity;
  return (
    
    <div className="App mt-14 bg-white w-full min-h-screen">
      <div className=" flex flex-col lg:flex-row p-8 gap-10">
        {/* Left Image */}

        <div className="flex-1 flex justify-center">
          <img
            src={item?.image}
            alt="product"
            className="w-[400px] h-[500px] object-cover rounded-xl"
            style={{ border: "solid 1px black" }}
          />
        </div>

       {/* Right Details */}
<div className="flex-1 space-y-6">

  {/* Title */}
  <h1 className="text-3xl font-extrabold text-slate-900 tracking-wide">
    {(item?.title + "").toUpperCase()}
  </h1>

  {/* Price */}
  <div className="flex items-center justify-between">
    <span className="text-4xl font-bold text-amber-700">
      {item?.price} Birr
    </span>

    <span className="px-4 py-1 rounded-full text-sm font-semibold
      bg-green-100 text-green-700">
      In Stock
    </span>
  </div>

  {/* Divider */}
  <div className="border-t border-gray-200" />

  {/* Quantity & Total */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-6">

    {/* Quantity Selector */}
    <div className="flex items-center border rounded-lg overflow-hidden">
      <button
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        className="px-5 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100"
      >
        −
      </button>

      <div className="px-6 py-2 font-semibold text-slate-800">
        {quantity}
      </div>

      <button
        onClick={() => setQuantity(quantity + 1)}
        className="px-5 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100"
      >
        +
      </button>
    </div>

    {/* Total */}
    <div className="text-xl text-slate-700">
      Total:
      <span className="ml-2 font-bold text-amber-700">
        {total} Birr
      </span>
    </div>
  </div>

  {/* Action Button */}
  <div className="pt-4">
    <button
          onClick={() => setOpen(true)}
          className="bg-amber-700 text-white px-8 py-3 rounded-lg shadow-lg
          hover:bg-amber-800 transition font-semibold tracking-wide"
        >
          Order Now
        </button>
    
  </div>

  {/* Description Box */}
  <div className="mt-10 bg-[#F7EFE3] rounded-2xl p-6 space-y-4">

    <h2 className="text-xl font-semibold text-slate-800">
      Product Description
    </h2>

    <p className="text-gray-700 leading-relaxed">
      {item?.description}
    </p>

    {/* Meta Info */}
    <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">

      <div className="flex items-center gap-2">
        <span className="font-semibold">Availability:</span>
        <span className="text-green-700 font-semibold">
          {item?.quantity} in stock
        </span>
      </div>

      {item?.model && (
        <div className="flex items-center gap-2">
          <span className="font-semibold">Model:</span>
          <span>{item?.model}</span>
        </div>
      )}

      {item?.brand && (
        <div className="flex items-center gap-2">
          <span className="font-semibold">Brand:</span>
          <span>{item?.brand}</span>
        </div>
      )}
    </div>
  </div>
</div>
      </div>
      <AlertOrderNow open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
