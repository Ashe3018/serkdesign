import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const HomeLayout = ({ children }) => {
  return (
    <div className="bg-gray-300 ">
      <div>
        <Header />
      </div>

      <div className=" min-h-screen flex justify-center pt-16">
        <center>{children}</center>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(HomeLayout);
