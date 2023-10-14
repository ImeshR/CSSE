import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Dashboard from "./pages/site-manager/Dashboard";
import PendinOrder from "./pages/site-manager/PendinOrder";
import AcceptedOrders from "./pages/site-manager/AcceptedOrders";
import StaffDashBoard from "./pages/staff/Dashboard";
import StaffPendingOrder from "./pages/staff/PendingOrders";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/site/manager" element={<Dashboard />} />
        <Route path="/site/manager/pending-order" element={<PendinOrder />} />
        <Route path="/site/manager/accepted-order" element={<AcceptedOrders />} />

        <Route path="/staff-manager" element={<StaffDashBoard />} />
        <Route path="/staff-manager/pending-order" element={<StaffPendingOrder />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

