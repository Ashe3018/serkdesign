import React from "react";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

  

    {/* QUICK LINKS */}
    <div>
      <h2 className="text-xl font-bold mb-4">Quick Links</h2>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
        <li><a href="/men" className="hover:text-blue-500 transition">Men</a></li>
        <li><a href="/women" className="hover:text-blue-500 transition">Women</a></li>
        <li><a href="/kids" className="hover:text-blue-500 transition">Kids</a></li>
        <li><a href="/about_us" className="hover:text-blue-500 transition">About Us</a></li>
        <li><a href="/contact_us" className="hover:text-blue-500 transition">Contact</a></li>
      </ul>
    </div>

    {/* CONTACT US */}
    <div>
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li>📞 Phone: <a href="tel:+251900000000" className="hover:text-blue-500 transition">+251 999401010</a></li>
        <li>✉️ Email: <a href="mailto:info@ayubretail.com" className="hover:text-blue-500 transition">tricoreitsolution99@gmail.com</a></li>
       <li>
      💬 Telegram:{" "}
      <a
        href="https://t.me/tricoreitsolution"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition"
      >
        @tricoreitsolution
      </a>
    </li></ul>
    </div>

    {/* SOCIAL MEDIA */}
    <div>
      <h2 className="text-xl font-bold mb-4">Follow Us</h2>
      <div className="flex space-x-4">
        <a
  href="https://www.tiktok.com/@tricoreitsolution"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-black transition"
>
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M21 8.06a7.6 7.6 0 0 1-4.3-1.4 7.54 7.54 0 0 1-2.33-3.5h-3.2v11.1a2.73 2.73 0 1 1-2.73-2.73c.3 0 .6.05.87.14V8.2a6.02 6.02 0 1 0 6.02 6.02V8.96a11.03 11.03 0 0 0 5.67 1.55z"/>
  </svg>
</a>
 <a
  href="https://t.me/tricoreitsolution"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-blue-500 transition"
>
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M9.036 15.464l-.375 5.29c.537 0 .77-.23 1.047-.505l2.514-2.39 5.205 3.805c.954.527 1.635.25 1.878-.885L23.4 3.857c.314-1.46-.527-2.03-1.43-1.69L1.114 9.948c-1.42.55-1.4 1.32-.242 1.68l5.338 1.665L18.6 6.63c.585-.37 1.12-.165.68.205z"/>
  </svg>
</a>
 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.402a4.92 4.92 0 0 1 1.78 1.16 4.92 4.92 0 0 1 1.16 1.78c.162.46.346 1.26.402 2.43.058 1.265.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.402 2.43a4.92 4.92 0 0 1-1.16 1.78 4.92 4.92 0 0 1-1.78 1.16c-.46.162-1.26.346-2.43.402-1.265.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.402a4.92 4.92 0 0 1-1.78-1.16 4.92 4.92 0 0 1-1.16-1.78c-.162-.46-.346-1.26-.402-2.43C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.056-1.17.24-1.97.402-2.43a4.92 4.92 0 0 1 1.16-1.78 4.92 4.92 0 0 1 1.78-1.16c.46-.162 1.26-.346 2.43-.402C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.736 0 8.332.014 7.052.072 5.78.13 4.867.328 4.06.574a7.074 7.074 0 0 0-2.54 1.47A7.074 7.074 0 0 0 .574 4.06C.328 4.867.13 5.78.072 7.052.014 8.332 0 8.736 0 12c0 3.264.014 3.668.072 4.948.058 1.272.256 2.185.502 2.992a7.074 7.074 0 0 0 1.47 2.54 7.074 7.074 0 0 0 2.54 1.47c.807.246 1.72.444 2.992.502C8.332 23.986 8.736 24 12 24s3.668-.014 4.948-.072c1.272-.058 2.185-.256 2.992-.502a7.074 7.074 0 0 0 2.54-1.47 7.074 7.074 0 0 0 1.47-2.54c.246-.807.444-1.72.502-2.992.058-1.28.072-1.684.072-4.948s-.014-3.668-.072-4.948c-.058-1.272-.256-2.185-.502-2.992a7.074 7.074 0 0 0-1.47-2.54 7.074 7.074 0 0 0-2.54-1.47c-.807-.246-1.72-.444-2.992-.502C15.668.014 15.264 0 12 0z"/>
            <circle cx="12" cy="12" r="3.2"/>
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5.03 3.66 9.19 8.44 9.88v-6.99H7.9v-2.89h2.54V9.91c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.89h-2.3v6.99C18.34 21.19 22 17.03 22 12z"/>
          </svg>
        </a>
      
        
       
      </div>
    </div>

      {/* ABOUT / BRAND */}
    <div>
  <h2 className="text-xl font-bold mb-4">Developed by TriCore IT Solution</h2>
  <p className="text-gray-400 text-sm mb-2">
    Delivering cutting-edge digital solutions including websites, digital menus, and system management.
  </p>
  <p className="text-gray-400 text-sm">
    <strong>Contact Us:</strong> <br />
    Email: <a href="mailto:tricoreitsolution99@gmail.com" className="text-amber-700 hover:underline">tricoreitsolution99@gmail.com</a> <br />
    Phone: <a href="tel:+251999401010" className="text-amber-700 hover:underline">+251 999 40 10 10</a> <br />
    Website: <a href="https://www.tricore.com" target="_blank" className="text-amber-700 hover:underline">www.tricore.com</a>
  </p>
</div>
  </div>

  {/* COPYRIGHT */}
  <div className="mt-10 border-t border-amber-700 pt-6 text-center text-gray-400 text-sm">
    &copy; {new Date().getFullYear()}  <span style={{ fontFamily: "Noto Serif Ethiopic", fontWeight: 700 }}>
    ሠርክ
  </span>{" "}
  <span style={{ fontFamily: "Cinzel", fontWeight: 700 }}>
    Design
  </span> All rights reserved.
  </div>
</footer>
    // <footer className="bg-gray-900 text-white mt-10">
    //   <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    //     {/* Brand / About */}
    //     <div>
    //       <h3 className="text-xl font-bold mb-4">About</h3>
    //       <p className="text-sm text-gray-400">
    //         Ayu Ceramic supplies high-quality ceramic tiles designed for
    //         durability, style, and modern living. We serve residential and
    //         commercial projects with reliable products, competitive pricing, and
    //         customer-focused service.
    //       </p>
    //     </div>

    //     {/* Navigation */}
    //     <div>
    //       <h4 className="font-semibold mb-3">Quick Links</h4>
    //       <ul className="space-y-2 text-sm text-gray-300">
    //         <li>
    //           <a href="/ceramic" className="hover:text-white">
    //             Ceramic
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/sanitary" className="hover:text-white">
    //             Sanitary
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/plumbing_accessory" className="hover:text-white">
    //             Plumbing Accessories
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/adhesive_filler" className="hover:text-white">
    //             Adhesive & Filler
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/contact" className="hover:text-white">
    //             Contact Us
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Contact */}
    //     <div>
    //       <h4 className="font-semibold mb-3">Contact Us</h4>
    //       <ul className="text-sm text-gray-300 space-y-2">
    //         <li>
    //           Email:
    //           <a href="mailto:Ayub1450@gmail.com" className="hover:text-white">
    //             Ayub1450@gmail.com
    //           </a>
    //         </li>
    //         <li>
    //           Phone:{" "}
    //           <a href="tel:+251912345678" className="hover:text-white">
    //             +251913857900
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Social Media */}
    //     <div>
    //       <h4 className="font-semibold mb-3">Follow Us</h4>
    //       <ul className="space-y-2 text-sm text-gray-300">
    //         <li>
    //           <a
    //             href="https://www.facebook.com/share/1Bzw4oLDSA/"
    //             className="hover:text-white"
    //           >
    //             FACEBOOK
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://t.me/ayuceramic" className="hover:text-white">
    //             TELEGRAM
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="https://www.tiktok.com/@ayu.finishing.mat?_r=1&_t=ZM-92LWCy3bP8m"
    //             className="hover:text-white"
    //           >
    //             TIK TOK
    //           </a>
    //         </li>
    //         {/* <li>
    //           <a href="/adhesive_filler" className="hover:text-white">
    //             INSTAGRAM
    //           </a>
    //         </li> */}
    //       </ul>
    //     </div>
    //   </div>

    //   <div className="border-t border-gray-700 text-center text-sm text-gray-500 py-4">
    //     © {new Date().getFullYear()} Ayu Ceramic All rights reserved.
    //   </div>
    // </footer>
  );
};

export default React.memo(Footer);
