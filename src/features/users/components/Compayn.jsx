import React from "react";
import ProductGrid from "../components/ProductGrid";
import { useLocation } from "react-router-dom";
import useCRUD from "../hooks/useCRUD";
const Compayn = () => {
  const nav = useLocation();
  const { datas } = useCRUD(
    "https://www.ayu.server.ayubceramic.com/product",nav.pathname
  );
  
  return (
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
  <div className="max-w-7xl mx-auto px-4">

    {/* SECTION TITLE */}
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-4xl font-bold text-slate-800">
        Prepared by  <span className="text-blue-600">TriCore IT Solution</span>
      </h2>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* CARD 1 */}
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col">
        <img
          src="/images/WOW.png"
          alt="Digital Menu Demo"
          className="rounded-lg mb-4 h-44 object-cover"
        />

        <h3 className="text-lg font-semibold text-slate-800">
          Digital Menu For WOW Burger
        </h3>

        <ul className="text-gray-500 text-sm mt-3 space-y-1 flex-1">
          <li>QR-based digital menus</li>
          <li>Easy updates</li>
          <li>Restaurant & café focused</li>
        </ul>

        <button className="mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col">
        <img
          src="/images/ss.png"
          alt="Admin Dashboard Demo"
          className="rounded-lg mb-4 h-44 object-cover"
        />

        <h3 className="text-lg font-semibold text-slate-800">
          Management Systems For SatSolar
        </h3>

        <ul className="text-gray-500 text-sm mt-3 space-y-1 flex-1">
          <li>Brand personalization</li>
          <li>Mobile-friendly design</li>
          <li>Real-time analytics</li>
        </ul>

        <button className="mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col">
        <img
          src="/images/p1.png"
          alt="Website Demo"
          className="rounded-lg mb-4 h-44 object-cover"
        />

        <h3 className="text-lg font-semibold text-slate-800">
          Website For Ayu Ceramic
        </h3>

        <ul className="text-gray-500 text-sm mt-3 space-y-1 flex-1">
          <li>Custom websites</li>
          <li>Fast & responsive</li>
          <li>Long-term support</li>
        </ul>

        <button className="mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>

    </div>
  </div>
</div>
  );
};

export default Compayn;
