import React from "react";
import ProductGrid from "../components/ProductGrid";
import { useLocation } from "react-router-dom";
import useCRUD from "../hooks/useCRUD";
const About = () => {
  const nav = useLocation();
  const { datas } = useCRUD(
    "https://www.ayu.server.ayubceramic.com/product",nav.pathname
  );
  
  return (
  <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
        About Us
      </h1>
      <p className=" mt-3 max-w-2xl mx-auto">
       <span style={{ fontFamily: "Noto Serif Ethiopic", fontWeight: 700 }}>
    ሠርክ
  </span>{" "}
  <span style={{ fontFamily: "Cinzel", fontWeight: 700 }}>
    Design
  </span> <span className="text-gray-600"> specializes in designing and creating unique Habesha traditional wear tailored to your style. We are committed to preserving cultural identity while delivering elegant, modern designs with exceptional quality. </span>     </p>
    </div>

    {/* OUR STORY */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
      {/* Text */}
     <div className="text-center mb-12">
  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
    Our Story
  </h1>

  <p className="mt-3 max-w-2xl mx-auto text-gray-600 leading-relaxed">
    <span style={{ fontFamily: "Noto Serif Ethiopic", fontWeight: 700 }}>
      ሠርክ
    </span>{" "}
    <span style={{ fontFamily: "Cinzel", fontWeight: 700 }}>
      Design
    </span>{" "}
    began with a simple vision — to celebrate Ethiopian heritage through
    thoughtfully designed Habesha traditional clothing. What started as a
    passion for culture and craftsmanship has grown into a trusted brand,
    creating custom-made designs tailored to each client’s unique style.
    <br />
    <br />
    Today, we remain committed to preserving cultural identity while blending
    elegance, modern design, and exceptional quality in every piece we create.
  </p>
</div>

      {/* Image */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/images/team.png"
          alt="Our Story"
          className="w-full max-w-md rounded-xl object-cover"
        />
      </div>
    </div>
  </div>
</div>
  );
};

export default About;
