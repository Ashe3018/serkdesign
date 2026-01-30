import React from "react";
import ProductGrid from "../components/ProductGrid";
import { useLocation,useNavigate } from "react-router-dom";
import useCRUD from "../hooks/useCRUD";
const OurService = () => {
  const nav = useLocation();
   const navigate = useNavigate();
  const { datas } = useCRUD(
    "https://www.ayu.server.ayubceramic.com/product",nav.pathname
  );
  
  return (
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
  {/* Header */}
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
      Our Services
    </h2>
    <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
      Practical digital solutions <span className="font-semibold">tailored</span> for your business.
    </p>
  </div>

  {/* Services Grid – FULL WIDTH */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 flex flex-col text-center">
       <img
          src="/images/menu.png"
          alt="Digital Menu Demo"
          className="rounded-lg mb-4 h-44 object-cover"
        />

      <h3 className="text-lg font-semibold text-slate-800">
        Digital Menu Systems
      </h3>

      <ul className="text-gray-500 text-sm mt-3 space-y-1 flex-1">
        <li>QR-based digital menus</li>
        <li>Easy updates</li>
        <li>Restaurant & café focused</li>
      </ul>

      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        Learn More
      </button>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 flex flex-col text-center">
      <img
        src="/images/web.png"
        alt="Website Development"
       className="rounded-lg mb-4 h-44 object-cover"
      />

      <h3 className="text-lg font-semibold text-slate-800">
        Website Development
      </h3>

      <ul className="text-gray-500 text-sm mt-3 space-y-1 flex-1">
        <li>Business websites</li>
        <li>Restaurant websites</li>
        <li>Mobile-friendly design</li>
      </ul>

      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        Learn More
      </button>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 flex flex-col text-center">
      <img
        src="/images/mn.png"
        alt="Management Systems"
       className="rounded-lg mb-4 h-44 object-cover"
      />

      <h3 className="text-lg font-semibold text-slate-800">
        Management Systems
      </h3>

      <ul className="text-gray-500 text-sm mt-3 space-y-1 flex-1">
        <li>Admin dashboards</li>
        <li>Branch management</li>
        <li>Reports & analytics</li>
      </ul>

      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        Learn More
      </button>
    </div>
  </div>

  {/* Bottom Custom Software Banner – FULL WIDTH */}
<div className="max-w-7xl mx-auto mt-8 bg-white rounded-2xl shadow p-6">
  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">

    {/* IMAGE (LEFT) */}
    <div className="flex justify-center md:justify-start">
      <img
        src="/images/mn.png"
        alt="Custom Software"
        className="h-12"
      />
    </div>

    {/* TEXT (CENTER) */}
    <div className="text-center">
      <h4 className="font-semibold text-slate-800">
        Custom Software
      </h4>
      <p className="text-gray-500 text-sm">
        Tailored systems based on your business needs.
      </p>
    </div>

    {/* BUTTON (RIGHT) */}
    <div className="flex justify-center md:justify-end">
      <button
        onClick={() => navigate("/contact_us")}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Contact Us
      </button>
    </div>

  </div>
</div>
</div>
  );
};

export default OurService;
