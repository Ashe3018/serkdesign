import {React,useEffect,useState} from "react";

import { useLocation,useNavigate } from "react-router-dom";
import useCRUD from "../hooks/useCRUD";
 const images = [
    "/images/se10.png",
    "/images/se.png",
    "/images/we2.png",
    "/images/we1.png",
  ];
const FirstPage = () => {
  const nav = useLocation();
   const navigate = useNavigate();
  const { datas } = useCRUD(
    "https://www.ayu.server.ayubceramic.com/product",nav.pathname
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 5000ms = 5s

    return () => clearInterval(interval);
  }, []);
  return (
     <div className="relative min-h-screen flex items-center overflow-hidden">
  {/* Animated Tibeb Background */}
  <div className="absolute inset-0 tibeb-hero opacity-10" />

  {/* Soft Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white" />

  <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center">
    
    {/* LEFT CONTENT */}
    <div className="text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight tracking-wide">
         ሠርክ Design 
        <span className="block text-amber-700">
         Authentic Habesha Cultural Wear
        </span>
      </h1>

      <p className="text-gray-700 mt-5 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed">
        የሀበሻ ልብሶችን በፈለጉት ዲዛይን እንሰራለን
         
      </p>
       <p className="text-gray-700 mt-5 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed">
       
          We design and create Habesha traditional clothing tailored to your preference.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        {/* Primary CTA */}
        <button
          onClick={() => navigate("/collections")}
          className="bg-amber-700 text-white px-8 py-3 rounded-lg shadow-lg
          hover:bg-amber-800 transition font-semibold tracking-wide"
        >
          Explore Collections
        </button>

        {/* Secondary CTA */}
        <button
          onClick={() => navigate("/about")}
          className="bg-white text-amber-700 px-8 py-3 rounded-lg shadow
          hover:bg-amber-50 transition font-semibold"
        >
          Our Heritage
        </button>
      </div>
    </div>

    <div className="relative flex justify-center md:justify-end mt-12 md:mt-0">
      {/* Glow */}
      <div className="absolute -inset-6 bg-amber-200/20 blur-3xl rounded-full" />

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Habesha Clothing ${currentIndex + 1}`}
        className="relative w-full max-w-md md:w-[120%] lg:w-[140%] h-auto object-contain drop-shadow-2xl transition-opacity duration-700 ease-in-out"
      />

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex gap-2 justify-center w-full">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex ? "bg-amber-700 scale-125" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>

  </div>
</div>
  );
};

export default FirstPage;
