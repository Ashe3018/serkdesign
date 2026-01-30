import React from "react";
import { useEffect } from "react";
import OurService from "../components/OurService";
import Compayn from "../components/Compayn";
import ContactUs from "../components/ContactUs";
import FirstPage from "../components/FirstPage";
import About from "../components/About";
import { useLocation } from "react-router-dom";
import useCRUD from "../hooks/useCRUD";
const ProductPage = () => {
  const nav = useLocation();
  
  const { datas } = useCRUD(
    "https://www.ayu.server.ayubceramic.com/product",nav.pathname
  );
  
  useEffect(() => {
    // Map of paths to section IDs
    const pathToId = {
      "/": "firstPage",
      "/ourservice": "ourService",
      "/contact_us": "contactUs",
      "/about_us": "about",
       "/company": "Company",
    };

    const sectionId = pathToId[nav.pathname];
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [nav.pathname]);


  return (
    <center className="">
   
   <div id="firstPage">
        <FirstPage />
      </div>
   <div id="ourService">
        <OurService />
      </div>
<div id="Company">
        <Compayn />
      </div>
  <div id="contactUs">
        <ContactUs />
      </div>
<div id="about">
  <About />
</div>



    </center>
  );
};

export default ProductPage;
