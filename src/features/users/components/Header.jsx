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
    { label: "Our Services", to: "/ourservice" },
    { label: "Company", to: "/sanitary" },
    { label: "Contact Us", to: "/contact_us" },
    { label: "Abour Us", to: "/about_us" },
    {
      label: navigat.pathname === "/manage-products" ? "Logout" : "Login",
      to: navigat.pathname === "/manage-products" ? "/" : "/login",
    },
  ];
  const options = [
    { label: "Ceramic", to: "/" },
    { label: "Mirror", to: "/" },
    { label: "Cabinet", to: "/" },
  ];
 
  const data = (localStorage.getItem("data"));
  if (navigat.pathname === "/manage-products" && !data) {
    window.location.replace("/");
  }
  if (navigat.pathname === "/") {
    localStorage.clear();
  }
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
  <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
    {/* Logo / Brand */}
    <Link to="/" className="flex items-center gap-2">
      {/* Uncomment if you want a logo image */}
      <img src="/images/Tri.png" alt="logo" width={50} className="rounded-lg" />
      <span className="text-2xl font-bold text-blue-600">TRICORE IT SOLUTION</span>
    </Link>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center space-x-4">
      {navLinks.map((link) =>
        link.label === "Catagory" ? (
          <div className="relative" key="category">
            <button
              onClick={() => handleToggle("shop")}
              className={`flex items-center gap-1 px-4 py-2 rounded hover:bg-blue-600 transition text-gray-800 ${
                open === "shop" ? "bg-blue-600 font-semibold" : ""
              }`}
            >
              Catagory
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

            {open === "shop" && (
              <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                {options.map((option) => (
                  <Link
                    key={option.to}
                    to={option.to}
                    className="block px-4 py-2 text-blue-600 hover:text-blue-600 transition"
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={link.to}
            to={link.to}
            className={`px-4 py-2 rounded transition font-medium ${
              navigat.pathname === link.to || navigat.pathname === link?.otherLink
                ? "bg-indigo-600 text-white"
                : "text-gray-800 hover:text-blue-600 hover:text-indigo-700"
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
        className="p-2 rounded hover:text-blue-600 transition"
      >
        {menuOpen ? <BackspaceOutlined fontWeight="small" /> : <MenuOutlined fontWeight="small" />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-white border-t shadow">
      <nav className="flex flex-col space-y-2 py-4 text-center">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className={`px-4 py-2 rounded transition font-medium ${
              navigat.pathname === link.to || navigat.pathname === link?.otherLink
                ? "bg-indigo-600 text-white"
                : "text-gray-800 hover:text-blue-600 hover:text-indigo-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )}
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
