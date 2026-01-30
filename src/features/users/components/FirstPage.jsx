import React from "react";

import { useLocation,useNavigate } from "react-router-dom";
import useCRUD from "../hooks/useCRUD";
const FirstPage = () => {
  const nav = useLocation();
   const navigate = useNavigate();
  const { datas } = useCRUD(
    "https://www.ayu.server.ayubceramic.com/product",nav.pathname
  );
  
  return (
      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center md:text-left z-10">
      <h1 className="text-3xl  md:mt-1 md:text-5xl font-bold text-slate-800 leading-tight">
        Smart Digital Solutions
        <span className="block text-blue-600">for Modern Businesses</span>
      </h1>

      <p className="text-gray-600 mt-4 max-w-xl mx-auto md:mx-0">
        We design and build digital menus, websites, and management systems
        that help businesses grow and operate efficiently.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
       <button
  onClick={() => window.open("https://t.me/tricoreitsolution", "_blank")}
  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition flex items-center gap-2"
>
  <span>Contact on</span>

  {/* Telegram Icon (SVG, NOT image) */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M22.05 1.577 1.287 9.432c-.96.37-.954.89-.176 1.133l5.336 1.665 2.05 6.344c.265.733.136 1.026.87 1.026.568 0 .82-.26 1.14-.566l2.73-2.65 5.68 4.193c1.046.577 1.8.28 2.06-.968L24 2.558c.346-1.533-.58-2.224-1.95-.98z" />
  </svg>

  <span>Telegram</span>
</button>

        <button onClick={() => navigate("/ourservice")} className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition ">
          View Our Services
          
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center md:justify-end">
      <img
        src="/images/man.png"
        alt="Smart Digital Solutions"
        className="
          w-full
          max-w-md
          md:max-w-none
          md:w-[130%]
          lg:w-[150%]
          h-auto
          object-contain
        "
      />
    </div>

  </div>
</div>
  );
};

export default FirstPage;
