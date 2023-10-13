import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Dashboard from "./pages/site-manager/Dashboard";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/site/manager" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

