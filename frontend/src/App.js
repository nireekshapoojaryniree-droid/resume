import React from "react";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";

import CompanyRoutes from "./company/CompanyRoutes/CompanyRoutes";
=======
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CandidateRoutes from "./candidate/routes/CandidateRoutes";
>>>>>>> afd437aa6ccd840bb56bf98ae34069a2826ed0a3

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <CompanyRoutes />
=======
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
>>>>>>> afd437aa6ccd840bb56bf98ae34069a2826ed0a3
    </BrowserRouter>
  );

}

export default App;