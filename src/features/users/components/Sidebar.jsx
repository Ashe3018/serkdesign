import { ExpandOutlined, KeyboardArrowDownOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ nav }) => {
  const ceramic = [
    { link: "/ceramic/wall", label: "Wall" },
    { link: "/ceramic/floor", label: "Floor" },
    // { link: "/ceramic/cladding", label: "Cladding" },
  ];
  const location = [
    { link: "/china", label: "China" },
    { link: "/india", label: "India" },
    { link: "/dukem", label: "Dukem" },
    { link: "/arerti", label: "Arerti" },
  ];
  const plumbing_Accessory = [
    { link: "/plumbing_accessory/ppr", label: "Ppr" },
    { link: "/plumbing_accessory/pvc", label: "Pvc" },
  ];
  const ppr = [
    { link: "/pipe", label: "Pipe" },
    { link: "/accessory", label: "Accessory" },
  ];
  const pvc = [
    { link: "/upvc", label: "Upvc" },
    { link: "/pvc", label: "Pvc" },
    { link: "/hack", label: "Hack" },
  ];
  const adhesive_filler = [
    { link: "/adhesive_filler/adhesive", label: "Adhesive" },
    { link: "/adhesive_filler/filler", label: "Filler" },
  ];

  return (
    <div className="max-w-60 min-w-52 bg-white px-10 border rounded-2xl border-slate-950 md:min-h-96">
      <div className="py-2 mb-2">
        <h2 className="font-semibold text-lg mb-2 text-teal-800">Filter</h2>
        <div className="border border-black mb-1"></div>
        <ul className="space-y-2 text-gray-700 text-left">
          {nav === "/ceramic" &&
            ceramic.map((item) => (
              <li
                key={item.label}
                className={`hover:text-teal-600 cursor-pointer text-xl`}
              >
                <Link to={`${item.link}`} key={item.link}>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          {(nav === "/ceramic/wall" || nav === "/ceramic/floor") &&
            ceramic.map((item) => (
              <>
                <li
                  key={item.label}
                  className={`hover:text-teal-600 cursor-pointer text-xl ${
                    (nav + "").includes(item.link) ? "text-black font-bold" : ""
                  }`}
                >
                  <Link to={`${item.link}`} key={item.link}>
                    <span>
                      {(nav + "").includes(item.link) && (
                        <KeyboardArrowDownOutlined />
                      )}
                      {item.label}
                    </span>
                  </Link>
                </li>
                {(nav + "").includes(item.link) &&
                  location.map((item) => (
                    <li
                      key={item.label}
                      className={`hover:text-teal-600 cursor-pointer ml-10 text-base`}
                    >
                      <Link to={`${nav}${item.link}`} key={item.link}>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
              </>
            ))}
          {((nav + "").includes("/china") ||
            (nav + "").includes("/india") ||
            (nav + "").includes("/dukem") ||
            (nav + "").includes("/arerti")) &&
            ceramic.map((item) => (
              <>
                <li
                  key={item.label}
                  className={`hover:text-teal-600 cursor-pointer text-xl ${
                    (nav + "").includes(item.link) ? "text-black font-bold" : ""
                  }`}
                >
                  <Link to={`${item.link}`} key={item.link}>
                    <span>
                      {(nav + "").includes(item.link) && (
                        <KeyboardArrowDownOutlined />
                      )}
                      {item.label}
                    </span>
                  </Link>
                </li>
                {(nav + "").includes(item.link) &&
                  location.map((item) => (
                    <li
                      key={item.label}
                      className={`hover:text-teal-600 cursor-pointer ml-10 text-base ${
                        (nav + "").includes(item.link)
                          ? "text-black font-bold"
                          : ""
                      }`}
                    >
                      <Link
                        to={`${(nav + "")
                          .split("/")
                          .filter((r, i) => i < 3)
                          .join("/")}${item.link}`}
                        key={item.link}
                      >
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
              </>
            ))}
          {nav === "/plumbing_accessory" &&
            plumbing_Accessory.map((item) => (
              <li
                key={item.label}
                className={`hover:text-teal-600 cursor-pointer text-xl`}
              >
                <Link to={`${item.link}`} key={item.link}>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          {nav === "/plumbing_accessory/ppr" &&
            plumbing_Accessory.map((item) => (
              <>
                <li
                  key={item.label}
                  className={`hover:text-teal-600 cursor-pointer text-xl ${
                    (nav + "").includes(item.link) ? "text-black font-bold" : ""
                  }`}
                >
                  <Link to={`${item.link}`} key={item.link}>
                    <span>
                      {(nav + "").includes(item.link) && (
                        <KeyboardArrowDownOutlined />
                      )}
                      {item.label}
                    </span>
                  </Link>
                </li>
                {(nav + "").includes(item.link) &&
                  ppr.map((item) => (
                    <li
                      key={item.label}
                      className={`hover:text-teal-600 cursor-pointer ml-10 text-base`}
                    >
                      <Link to={`${nav}${item.link}`} key={item.link}>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
              </>
            ))}
          {nav === "/plumbing_accessory/pvc" &&
            plumbing_Accessory.map((item) => (
              <>
                <li
                  key={item.label}
                  className={`hover:text-teal-600 cursor-pointer text-xl ${
                    (nav + "").includes(item.link) ? "text-black font-bold" : ""
                  }`}
                >
                  <Link to={`${item.link}`} key={item.link}>
                    <span>
                      {(nav + "").includes(item.link) && (
                        <KeyboardArrowDownOutlined />
                      )}
                      {item.label}
                    </span>
                  </Link>
                </li>
                {(nav + "").includes(item.link) &&
                  pvc.map((item) => (
                    <li
                      key={item.label}
                      className={`hover:text-teal-600 cursor-pointer ml-10 text-base`}
                    >
                      <Link to={`${nav}${item.link}`} key={item.link}>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
              </>
            ))}
          {((nav + "").includes("/pipe") ||
            (nav + "").includes("/accessory") ||
            (nav + "").includes("/upvc") ||
            (nav + "").includes("/pvc") ||
            (nav + "").includes("/hack")) &&
            nav !== "/plumbing_accessory/pvc" &&
            plumbing_Accessory.map((items) => (
              <>
                <li
                  key={items.label}
                  className={`hover:text-teal-600 cursor-pointer text-xl ${
                    (nav + "").includes(items.link) ? "text-black font-bold" : ""
                  }`}
                >
                  <Link to={`${items.link}`} key={items.link}>
                    <span>
                      {(nav + "").includes(items.link) && (
                        <KeyboardArrowDownOutlined />
                      )}
                      {items.label}
                    </span>
                  </Link>
                </li>
                {(nav + "").includes(items.link) && (
                  <>
                    {(nav + "").includes("/ppr")
                      ? ppr.map((item) => (
                          <li
                            key={item.label}
                            className={`hover:text-teal-600 cursor-pointer ml-10 text-base ${
                              (nav + "").includes(item.link)
                                ? "text-black font-bold"
                                : ""
                            }`}
                          >
                            <Link
                              to={`${(nav + "")
                                .split("/")
                                .filter((r, i) => i < 3)
                                .join("/")}${item.link}`}
                              key={item.link}
                            >
                              <span>{item.label}</span>
                            </Link>
                          </li>
                        ))
                      : pvc.map((item) => (
                          <li
                            key={item.label}
                            className={`hover:text-teal-600 cursor-pointer ml-10 text-base ${
                              (nav + "")===(items.link+item.link)
                                ? "text-black font-bold"
                                : ""
                            }`}
                          >
                            <Link
                              to={`${(nav + "")
                                .split("/")
                                .filter((r, i) => i < 3)
                                .join("/")}${item.link}`}
                              key={item.link}
                            >
                              <span>{item.label}</span>
                            </Link>
                          </li>
                        ))}
                  </>
                )}
              </>
            ))}

          {nav === "/adhesive_filler" &&
            adhesive_filler.map((item) => (
              <li
                key={item.label}
                className={`hover:text-teal-600 cursor-pointer text-xl  ${
                  (nav + "").includes(item.link) ? "text-black font-bold" : ""
                }`}
              >
                <Link to={`${item.link}`} key={item.link}>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          {((nav !== "/adhesive_filler") && (
            (nav+"").includes("/adhesive")||(nav+"").includes("/filler")
           )) &&
            adhesive_filler.map((item) => (
              <li
                key={item.label}
                className={`hover:text-teal-600 cursor-pointer text-xl  ${
                  (nav + "").includes(item.link) ? "text-black font-bold" : ""
                }`}
              >
                <Link to={`${item.link}`} key={item.link}>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
//    return (
//   <div className="h-screen w-32 bg-slate-900 relative flex flex-col items-center py-4 space-y-6">
//   {/* CERAMIC */}
//   {nav.includes("/ceramic") && (
//   <div className="flex flex-col mt-2 space-y-1">
//     {ceramic.map((item) => (
//       <div key={item.link} className="flex flex-col">
//         <Link
//           to={item.link}
//           className={`flex items-center justify-start px-2 py-1 rounded
//             ${
//               nav.includes(item.link)
//                 ? "font-bold text-white bg-slate-700"
//                 : "text-gray-300 hover:bg-slate-700 hover:text-white"
//             }`}
//         >
//           <CategoryIcon fontSize="small" className="mr-2 text-gray-400" />
//           {item.label}
//           <KeyboardArrowRightIcon fontSize="small" className="ml-auto text-gray-400" />
//         </Link>

//         {/* Locations nested under Ceramic */}
//         {nav.includes(item.link) &&
//           location.map((loc) => (
//             <Link
//               key={loc.link}
//               to={`${item.link}${loc.link}`}
//               className={`block ml-6 mt-1 px-2 py-1 rounded text-sm
//                 ${
//                   nav.includes(loc.link)
//                     ? "text-teal-400 font-semibold"
//                     : "text-gray-400 hover:text-teal-300"
//                 }`}
//             >
//               {loc.label}
//             </Link>
//           ))}
//       </div>
//     ))}
//   </div>
// )}
// </div>
//   );
};

export default Sidebar;
