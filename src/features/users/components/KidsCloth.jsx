import { useState ,React} from "react";
import ProductGrid from "../components/ProductGrid";
import { useLocation,useNavigate } from "react-router-dom";
import useCRUD from "../hooks/useCRUD";

const KidsCloth = () => {
  const nav = useLocation();
   const navigate = useNavigate();
  const { datas } = useCRUD(
    "https://www.ayu.server.ayubceramic.com/product",nav.pathname
  );
  const mensCloths = [
  { id: 1, image: "/images/ki.png", title: "Habesha Kemis" },
  { id: 2, image: "/images/ki1.png", title: "Traditional Gabi" },
  { id: 3, image: "/images/ki3.png", title: "Cultural Outfit" },
  { id: 4, image: "/images/ki4.png", title: "Handwoven Cloth" },
  
];
 const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? mensCloths : mensCloths.slice(0, 8);
  
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      
      {/* Section Header */}
      <div className=" text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
          Kid’s Cultural Cloths
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Authentic Habesha traditional wear crafted with heritage and elegance.
        </p>
      </div>

      {/* Grid */}
     <div className=" max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
  {displayedItems.map((item) => (
  <div
  key={item.id}
  onClick={() => navigate(`/product/${item.id}`)}
  className="
    group cursor-pointer
    bg-white rounded-2xl
    shadow hover:shadow-xl transition
    overflow-hidden flex flex-col
    border-b-2 border-amber-700
    h-[300px]
  "
>
  {/* IMAGE AREA (FIXED HEIGHT) */}
  <div className="h-64 w-full flex items-center justify-center bg-gray-50">
    <img
      src={item.image}
      alt={item.title}
      className="
        max-h-full
        max-w-full
        object-contain
        transition-transform
        duration-500
        group-hover:scale-105
      "
    />
  </div>

  {/* TITLE (FIXED AT BOTTOM) */}
  <div className="h-20 flex items-center justify-center px-4 border-t border-amber-100">
    <h3 className="font-semibold text-slate-800 text-sm md:text-base text-center">
      {item.title}
    </h3>
  </div>
</div>
    
  ))}
</div>


      {/* View More / View Less Button */}
      {mensCloths.length > 9 && (
        <div className="mt-12 text-center">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="bg-amber-700 text-white px-10 py-3 rounded-lg
              hover:bg-amber-800 transition font-semibold tracking-wide shadow-lg"
            >
              View More
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="bg-gray-300 text-gray-800 px-10 py-3 rounded-lg
              hover:bg-gray-400 transition font-semibold tracking-wide shadow-lg"
            >
              View Less
            </button>
          )}
        </div>
      )}
    </div>
   
  );
};

export default KidsCloth;
