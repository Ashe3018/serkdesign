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
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-16">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
        About Us
      </h1>
      <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
        TriCore IT Solution is dedicated to delivering cutting-edge digital solutions, including digital menu systems, website development, and comprehensive system management. Our mission is to empower businesses with modern, reliable, and innovative tools that drive growth and efficiency. </p>
    </div>

    {/* OUR STORY GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
      {/* Text */}
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">
          Our Story
        </h2>
        <p className="text-gray-600">
         TriCore IT Solution began with a simple vision: to provide innovative digital solutions that help businesses succeed. Over the years, we have grown into a trusted partner for companies seeking digital menu systems, website development, and comprehensive system management.  </p>
        <p className="text-gray-600">
         Innovation, reliability, and client satisfaction are at the core of everything we do. We strive to deliver solutions that truly make a difference for our clients’ businesses.       </p>
      </div>

      {/* Image */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/images/about.png"
          alt="Our Story"
          className="w-full max-w-md md:max-w-full rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>

    {/* OUR VALUES GRID */}
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow hover:shadow-xl p-6 flex flex-col items-center text-center">
          <img src="/images/quality.png" alt="Quality" className="h-20 mb-4" />
          <h3 className="font-semibold text-lg text-slate-800 mb-2">Quality</h3>
          <p className="text-gray-500 text-sm">
            We deliver top-quality materials and services that our clients can trust.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow hover:shadow-xl p-6 flex flex-col items-center text-center">
          <img src="/images/integrity.png" alt="Integrity" className="h-20 mb-4" />
          <h3 className="font-semibold text-lg text-slate-800 mb-2">Integrity</h3>
          <p className="text-gray-500 text-sm">
            Honesty and transparency are at the core of our operations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow hover:shadow-xl p-6 flex flex-col items-center text-center">
          <img src="/images/customer.png" alt="Customer Focus" className="h-20 mb-4" />
          <h3 className="font-semibold text-lg text-slate-800 mb-2">Customer Focus</h3>
          <p className="text-gray-500 text-sm">
            Our clients’ success drives everything we do, from product selection to service delivery.
          </p>
        </div>
      </div>
    </div>

    {/* TEAM GRID (Optional) */}
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <img src="/images/team1.png" alt="CEO" className="w-24 h-24 rounded-full mb-4 object-cover" />
          <h3 className="font-semibold text-lg text-slate-800">Jane Doe</h3>
          <p className="text-gray-500 text-sm">CEO & Founder</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <img src="/images/team2.png" alt="CTO" className="w-24 h-24 rounded-full mb-4 object-cover" />
          <h3 className="font-semibold text-lg text-slate-800">John Smith</h3>
          <p className="text-gray-500 text-sm">CTO</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <img src="/images/team3.png" alt="COO" className="w-24 h-24 rounded-full mb-4 object-cover" />
          <h3 className="font-semibold text-lg text-slate-800">Emily Brown</h3>
          <p className="text-gray-500 text-sm">COO</p>
        </div>
      </div>
    </div>

  </div>
</div>
  );
};

export default About;
