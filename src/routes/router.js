import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import AdManagement from "../pages/AdManagement";
import DashBoard from "../pages/DashBoard";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="/manage" element={<AdManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
