import React, { useState } from "react";
import { Link, useLocation,  } from "react-router-dom"; // optional if using React Router
import { BackspaceOutlined, MenuOutlined } from "@mui/icons-material";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleToggle = (menuName) => {
    setOpen(open === menuName ? null : menuName);
  }; const navigat = useLocation();
 
  const navLinks = [
  { label: "Home", to: "/" },
  { label: "Men", to: "/mens" },
  { label: "Women", to: "/women" },
  { label: "Kids", to: "/kids" },
  { label: "Contact", to: "/contact_us" },
  { label: "About Us", to: "/about" },
 
  
   {
      label: navigat.pathname === "/manage-products" ? "Logout" : "Login",
      to: navigat.pathname === "/manage-products" ? "/" : "/login",
    },
];
 
 
  const data = (localStorage.getItem("data"));
  if (navigat.pathname === "/manage-products" && !data) {
    window.location.replace("/");
  }
  if (navigat.pathname === "/") {
    localStorage.clear();
  }
  return (
  <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 border-b-2 border-amber-700">
  <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
    {/* Logo / Brand */}
    <Link to="/" className="flex items-center gap-3">
      <img
        src="/images/logo.jpg" // traditional logo
        alt="Habesha Cultural Wear"
        width={48}
        className="w-14 h-12 rounded-full object-cover"
      />
    <span className="text-2xl tracking-wide text-amber-700">
  <span style={{ fontFamily: "Noto Serif Ethiopic", fontWeight: 700 }}>
    ሠርክ
  </span>{" "}
  <span style={{ fontFamily: "Cinzel", fontWeight: 700 }}>
    Design
  </span>
</span>
    </Link>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center space-x-3">
      {navLinks.map((link) =>
        link.label === "Collections" ? (
          <div className="relative" key="collections">
            <button
              onClick={() => handleToggle("shop")}
              className={`flex items-center gap-1 px-4 py-2 rounded-md transition
              text-gray-800 hover:text-amber-700 ${
                open === "shop" ? "text-amber-700 font-semibold" : ""
              }`}
            >
              Collections
              <svg
                className={`w-4 h-4 transition-transform ${
                  open === "shop" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

           
          </div>
        ) : (
          <Link
            key={link.to}
            to={link.to}
            className={`px-4 py-2 rounded-md font-medium transition ${
              navigat.pathname === link.to ||
              navigat.pathname === link?.otherLink
                ? "text-amber-700 border-b-2 border-amber-700"
                : "text-gray-800 hover:text-amber-700"
            }`}
          >
            {link.label}
          </Link>
        )
      )}
    </nav>

    {/* Mobile Toggle */}
    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2 rounded hover:text-amber-700 transition"
      >
        {menuOpen ? <BackspaceOutlined /> : <MenuOutlined />}
      </button>
    </div>
  </div>

 {/* Mobile Menu Overlay */}
{menuOpen && (
  <div
    className="fixed inset-0 bg-black/40 z-40 md:hidden"
    onClick={() => setMenuOpen(false)}
  />
)}

{/* Mobile Left Drawer */}
<div
  className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg
  transform transition-transform duration-300 md:hidden
  ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
>
  {/* Drawer Header */}
  <div className="flex items-center justify-between px-4 py-4 border-b">
    <span className="text-lg font-bold text-amber-700">
      Habesha Cultural Wear
    </span>
    <button onClick={() => setMenuOpen(false)}>
      <BackspaceOutlined />
    </button>
  </div>

  {/* Drawer Links */}
  <nav className="flex flex-col space-y-2 px-4 py-4">
    {navLinks.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        onClick={() => setMenuOpen(false)}
        className={`px-3 py-2 rounded-md font-medium transition ${
          navigat.pathname === link.to ||
          navigat.pathname === link?.otherLink
            ? "bg-amber-100 text-amber-700"
            : "text-gray-800 hover:bg-amber-50 hover:text-amber-700"
        }`}
      >
        {link.label}
      </Link>
    ))}
     {/* Footer / Developer Info */}
   <div className="px-4 py-6 border-t border-gray-200 text-gray-500 text-sm space-y-1">
      <p>Developed by <span className="font-semibold text-amber-700">TriCore IT Solution</span></p>
      <p>Email: <a href="mailto:tricoreitsolution99@gmail.com" className="text-amber-700 hover:underline">tricoreitsolution99@gmail.com</a></p>
      <p>Phone: <a href="tel:+251999401010" className="text-amber-700 hover:underline">+251 999 40 10 10</a></p>
    </div>
  </nav>
</div>
</header>
    // <header className="bg-slate-300 shadow-md fixed top-0 left-0 w-full z-50 ">
    //   <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center">
    //     {/* Logo / Brand */}
    //     <Link to="/" style={{ float: "left" }}>
    //       {/* <div style={{ float: "left" }}>
    //         <img src="/images/p2.jpg" alt="logo" width={50} className="rounded-lg" />
    //       </div> */}
    //       <div
    //         style={{ float: "left" }}
    //         className="text-xl font-black text-black pt-2 pl-2"
    //       >
    //         AYUB CERAMIC
    //       </div>
    //     </Link>

    //     <nav className="hidden md:flex space-x-1 items-center">
    //       {navLinks.map((link) =>
    //         link.label === "Catagory" ? (
    //           <div className="relative">
    //             <button
    //               onClick={() => handleToggle("shop")}
    //               className="hover:text-blue-600 flex items-center gap-1"
    //             >
    //               Catagory
    //               <svg
    //                 className={`w-4 h-4 transition-transform ${
    //                   open === "shop" ? "rotate-180" : ""
    //                 }`}
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth={2}
    //                   d="M19 9l-7 7-7-7"
    //                 />
    //               </svg>
    //             </button>

    //             {open === "shop" && (
    //               <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
    //                 {options.map((option) => (
    //                   <Link
    //                     key={option.to}
    //                     to={option.to}
    //                     className="block px-4 py-2 hover:bg-gray-100"
    //                   >
    //                     {option.label}
    //                   </Link>
    //                 ))}
    //               </div>
    //             )}
    //           </div>
    //         ) : (
    //           <Link
    //             key={link.to}
    //             to={link.to}
    //             className={
    //               navigat.pathname === link.to ||
    //               navigat.pathname === link?.otherLink
    //                 ? "text-indigo-800 border-b-2 border-indigo-600 px-3 py-3 "
    //                 : "text-gray-800 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600 transition px-3 py-3"
    //             }
    //           >
    //             {link.label}
    //           </Link>
    //         )
    //       )}
    //     </nav>

    //     {/* Mobile Toggle */}
    //     <div className="md:hidden float-right">
    //       <button
    //         onClick={() => setMenuOpen(!menuOpen)}
    //         className=" text-gray-700 "
    //       >
    //         {menuOpen ? (
    //           <BackspaceOutlined fontWeight="small" />
    //         ) : (
    //           <MenuOutlined fontWeight="small" />
    //         )}
    //       </button>
    //     </div>
    //   </div>

    //   {/* Mobile Menu */}
    //   {menuOpen && (
    //     <div className="md:hidden bg-white border-t px-6 pb-4 shadow">
    //       <nav className="flex flex-col space-y-4 text-center">
    //         {navLinks.map((link) => (
    //           <Link
    //             key={link.to}
    //             to={link.to}
    //             className={
    //               navigat.pathname === link.to ||
    //               navigat.pathname === link?.otherLink
    //                 ? "text-gray-800 border-b-2 border-indigo-600 px-3 py-3 rounded-xl"
    //                 : "text-gray-800 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600 transition px-3 "
    //             }
    //             onClick={() => setMenuOpen(false)}
    //           >
    //             {link.label}
    //           </Link>
    //         ))}
    //       </nav>
    //     </div>
    //   )}
    // </header>
  );
};

export default React.memo(Header);
