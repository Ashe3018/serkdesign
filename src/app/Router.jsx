import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "../features/users/pages/ProductPage";
import Header from "../features/users/components/Header";
import LoginPage from "../features/users/pages/LoginPage";
import AdminProductsPage from "../features/users/pages/AdminProductsPage";
import ContactPage from "../features/users/pages/ContactPage";
import OneProduct from "../features/users/components/OneProduct";
import BrandPage from "../features/users/pages/BrandPage";
import Footer from "../features/users/components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/ourservice" element={<ProductPage />} />
        <Route path="/contact_us" element={<ProductPage />} />
        <Route path="/about_us" element={<ProductPage />} />
        <Route path="/ceramic/wall/china" element={<ProductPage />} />
        <Route path="/ceramic/wall/india" element={<ProductPage />} />
        <Route path="/ceramic/wall/dukem" element={<ProductPage />} />
        <Route path="/ceramic/wall/arerti" element={<ProductPage />} />
        <Route path="/ceramic/floor" element={<ProductPage />} />
        <Route path="/ceramic/floor/china" element={<ProductPage />} />
        <Route path="/ceramic/floor/india" element={<ProductPage />} />
        <Route path="/ceramic/floor/dukem" element={<ProductPage />} />
        <Route path="/ceramic/floor/arerti" element={<ProductPage />} />
        <Route path="/ceramic/cladding" element={<ProductPage />} />
        <Route path="/ceramic/cladding/china" element={<ProductPage />} />
        <Route path="/ceramic/cladding/india" element={<ProductPage />} />
        <Route path="/ceramic/cladding/dukem" element={<ProductPage />} />
        <Route path="/ceramic/cladding/arerti" element={<ProductPage />} />
        <Route path="/plumbing_accessory" element={<ProductPage />} />
        <Route path="/plumbing_accessory/ppr" element={<ProductPage />} />
        <Route path="/plumbing_accessory/ppr/pipe" element={<ProductPage />} />
        <Route
          path="/plumbing_accessory/ppr/accessory"
          element={<ProductPage />}
        />
        <Route path="/plumbing_accessory/pvc" element={<ProductPage />} />
        <Route path="/plumbing_accessory/pvc/upvc" element={<ProductPage />} />
        <Route path="/plumbing_accessory/pvc/pvc" element={<ProductPage />} />
        <Route path="/plumbing_accessory/pvc/hack" element={<ProductPage />} />
        <Route path="/adhesive_filler" element={<ProductPage />} />
        <Route path="/adhesive_filler/adhesive" element={<ProductPage />} />
        <Route path="/adhesive_filler/filler" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/manage-products" element={<AdminProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/leser" element={<ProductPage />} />
        <Route path="/paints" element={<ProductPage />} />
        <Route path="/product/:id" element={<OneProduct />} />
        <Route path="/brand" element={<BrandPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Router;