import React from "react";
import ProductGrid from "../components/ProductGrid";
import { useLocation } from "react-router-dom";
import useCRUD from "../hooks/useCRUD";
const ContactUs = () => {
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
        Contact Us
      </h1>
      <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
        Have a project in mind or need more information?  
        We’d love to hear from you.
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

      {/* LEFT – CONTACT INFO */}
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

  {/* Card 1 – Address */}
  <div className="bg-white rounded-2xl shadow p-6 border-b-2 border-l-2  border-amber-700">
    <h3 className="font-semibold text-slate-800 mb-2">📍 Address</h3>
    <p className="text-gray-500 text-sm">
      TRICORE IT SOLUTION
      Addis Ababa, Ethiopia
    </p>
  </div>

  {/* Card 2 – Phone */}
  <div className="bg-white rounded-2xl shadow p-6 border-b-2 border-r-2  border-amber-700">
    <h3 className="font-semibold text-slate-800 mb-2">📞 Phone</h3>
    <p className="text-gray-500 text-sm">
      +251 999401010
      
    </p>
    <p className="text-gray-500 text-sm">
      
      +251 989230801
    </p>
  </div>

  {/* Card 3 – Email */}
  <div className="bg-white rounded-2xl shadow p-6 border-b-2 border-l-2  border-amber-700">
    <h3 className="font-semibold text-slate-800 mb-2">✉️ Email</h3>
    <p className="text-gray-500 text-sm">
      tricoreitsolution99@gmail.com
    </p>
  </div>

  {/* Card 4 – Working Hours */}
  <div className="bg-white rounded-2xl shadow p-6 border-b-2 border-r-2  border-amber-700">
    <h3 className="font-semibold text-slate-800 mb-2">⏰ Working Hours</h3>
    <p className="text-gray-500 text-sm">
      Mon – Sat: 8:30 AM – 6:30 PM
    </p>
  </div>

  {/* Google Map – spans full width of left contact info */}
  <div className="col-span-1 sm:col-span-2 bg-white rounded-2xl shadow overflow-hidden">
    {/* Google Map Embed */}
    <iframe
      title="Ayub Retail Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.164563122614!2d38.74606837414363!3d9.015386593379197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cc1aa3d4e5%3A0x123456789abcdef!2sAddis%20Ababa%20CMC!5e0!3m2!1sen!2set!4v1706480000000!5m2!1sen!2set"
      width="100%"
      height="250"
      className="border-0"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    {/* End of Google Map */}
  </div>

</div>



      {/* RIGHT – CONTACT FORM */}
     <div className="bg-white rounded-2xl shadow p-8 border-b-2  border-amber-700">
  <h2 className="text-xl font-semibold text-slate-800 mb-6">
    Send us a message
  </h2>

  <form className="space-y-4">

    {/* Full Name */}
    <div className="flex items-center gap-4">
      <label className="w-28 text-sm text-gray-600">
        Full Name
      </label>
      <input
        type="text"
        placeholder="Your name"
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>

    {/* Email */}
    <div className="flex items-center gap-4">
      <label className="w-28 text-sm text-gray-600">
        Email
      </label>
      <input
        type="email"
        placeholder="you@example.com"
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>

    {/* Message (SMALL) */}
    <div className="flex items-start gap-4">
      <label className="w-28 text-sm text-gray-600 mt-2">
        Message
      </label>
      <textarea
        rows="2"
        placeholder="Your message..."
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
      ></textarea>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
    >
      Send Message
    </button>

  </form>
</div>

    </div>
  </div>
</div>
  );
};

export default ContactUs;
