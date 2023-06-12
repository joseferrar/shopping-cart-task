import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import AppLayout from "../components/AppLayout";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/carts" element={<CartPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
