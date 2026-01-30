import React from "react";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

    {/* ABOUT / BRAND */}
    <div>
      <h2 className="text-xl font-bold mb-4">TriCore It Solution</h2>
      <p className="text-gray-400 text-sm">
         TriCore IT Solution is dedicated to delivering cutting-edge digital solutions, including digital menu systems, website development, and comprehensive system management. Our mission is to empower businesses with modern, reliable, and innovative tools that drive growth and efficiency. 
      </p>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h2 className="text-xl font-bold mb-4">Quick Links</h2>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
        <li><a href="/about_us" className="hover:text-blue-500 transition">About Us</a></li>
        <li><a href="/ourservice" className="hover:text-blue-500 transition">Our Services</a></li>
         <li><a href="/company" className="hover:text-blue-500 transition">Company</a></li>
        <li><a href="/contact_us" className="hover:text-blue-500 transition">Contact</a></li>
      </ul>
    </div>

    {/* CONTACT US */}
    <div>
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li>📞 Phone: <a href="tel:+251900000000" className="hover:text-blue-500 transition">+251 900 000 000</a></li>
        <li>✉️ Email: <a href="mailto:info@ayubretail.com" className="hover:text-blue-500 transition">info@ayubretail.com</a></li>
      </ul>
    </div>

    {/* SOCIAL MEDIA */}
    <div>
      <h2 className="text-xl font-bold mb-4">Follow Us</h2>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5.03 3.66 9.19 8.44 9.88v-6.99H7.9v-2.89h2.54V9.91c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.89h-2.3v6.99C18.34 21.19 22 17.03 22 12z"/>
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3 4.8a4.28 4.28 0 0 0 1.32 5.71 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.28 4.28 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97A8.57 8.57 0 0 1 2 19.54a12.07 12.07 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.37-.02-.55A8.72 8.72 0 0 0 22.46 6z"/>
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 24h4.56V7.98H.22V24zM7.79 7.98v16.02h4.56v-8.91c0-2.13 2.64-2.3 2.64 0v8.91h4.56v-9.74c0-4.61-5.28-4.44-6.21-2.17V7.98H7.79z"/>
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.402a4.92 4.92 0 0 1 1.78 1.16 4.92 4.92 0 0 1 1.16 1.78c.162.46.346 1.26.402 2.43.058 1.265.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.402 2.43a4.92 4.92 0 0 1-1.16 1.78 4.92 4.92 0 0 1-1.78 1.16c-.46.162-1.26.346-2.43.402-1.265.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.402a4.92 4.92 0 0 1-1.78-1.16 4.92 4.92 0 0 1-1.16-1.78c-.162-.46-.346-1.26-.402-2.43C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.056-1.17.24-1.97.402-2.43a4.92 4.92 0 0 1 1.16-1.78 4.92 4.92 0 0 1 1.78-1.16c.46-.162 1.26-.346 2.43-.402C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.736 0 8.332.014 7.052.072 5.78.13 4.867.328 4.06.574a7.074 7.074 0 0 0-2.54 1.47A7.074 7.074 0 0 0 .574 4.06C.328 4.867.13 5.78.072 7.052.014 8.332 0 8.736 0 12c0 3.264.014 3.668.072 4.948.058 1.272.256 2.185.502 2.992a7.074 7.074 0 0 0 1.47 2.54 7.074 7.074 0 0 0 2.54 1.47c.807.246 1.72.444 2.992.502C8.332 23.986 8.736 24 12 24s3.668-.014 4.948-.072c1.272-.058 2.185-.256 2.992-.502a7.074 7.074 0 0 0 2.54-1.47 7.074 7.074 0 0 0 1.47-2.54c.246-.807.444-1.72.502-2.992.058-1.28.072-1.684.072-4.948s-.014-3.668-.072-4.948c-.058-1.272-.256-2.185-.502-2.992a7.074 7.074 0 0 0-1.47-2.54 7.074 7.074 0 0 0-2.54-1.47c-.807-.246-1.72-.444-2.992-.502C15.668.014 15.264 0 12 0z"/>
            <circle cx="12" cy="12" r="3.2"/>
          </svg>
        </a>
      </div>
    </div>
  </div>

  {/* COPYRIGHT */}
  <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
    &copy; {new Date().getFullYear()} TriCore It Solution. All rights reserved.
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
