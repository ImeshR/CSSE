import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Dashboard from "./pages/site-manager/Dashboard";
import PendinOrder from "./pages/site-manager/PendinOrder";
import AcceptedOrders from "./pages/site-manager/AcceptedOrders";
import StaffDashBoard from "./pages/staff/Dashboard";
import WorkingSites from "./pages/staff/WorkingSites";
import ManageEmployee from "./pages/staff/ManageEmployee";
import PendingOrder from "./pages/staff/PendingOrder";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/site/manager" element={<Dashboard />} />
        <Route path="/site/manager/pending-order" element={<PendinOrder />} />
        <Route path="/site/manager/accepted-order" element={<AcceptedOrders />} />

        <Route path="/staff-manager" element={<StaffDashBoard />} />
        <Route path="/staff-manager/employee-manage" element={<ManageEmployee />} />
        <Route path="/staff-manager/working-sites" element={<WorkingSites />} />
        <Route path="/staff-manager/orders-review" element={<PendingOrder/>} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

