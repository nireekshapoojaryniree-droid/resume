import React from "react";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CandidateRoutes from "./candidate/routes/CandidateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/candidate/dashboard" replace />} />
        <Route path="/*" element={<CandidateRoutes />} />
      </Routes>
=======
import { BrowserRouter } from "react-router-dom";
import AdminRoutes from "./admin/routes/AdminRoutes";

function App(){

  return(
    <BrowserRouter>
      <AdminRoutes />
>>>>>>> 74124b1eea38ba2fad7d6f98cb3b6dc22d5ddb97
    </BrowserRouter>
  );

}

export default App;