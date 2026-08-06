import React from "react";
import { BrowserRouter } from "react-router-dom";

import CompanyRoutes from "./company/CompanyRoutes/CompanyRoutes";

function App() {
  return (
    <BrowserRouter>
      <CompanyRoutes />
    </BrowserRouter>
  );
}

export default App;