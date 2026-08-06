import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CandidateRoutes from "./candidate/routes/CandidateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/candidate/dashboard" replace />} />
        <Route path="/*" element={<CandidateRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;