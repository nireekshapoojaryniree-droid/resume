import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../pages/AdminDashboard";
import ManageUsers from "../pages/ManageUsers";
import ManageCompanies from "../pages/ManageCompanies";
import ManageCandidates from "../pages/ManageCandidates";
import ManageJobs from "../pages/ManageJobs";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import AdminProfile from "../pages/AdminProfile";


function AdminRoutes(){

return(

<Routes>

<Route 
path="/"
element={<AdminDashboard/>}
/>

<Route 
path="/admin/dashboard"
element={<AdminDashboard/>}
/>

<Route 
path="/admin/users"
element={<ManageUsers/>}
/>

<Route 
path="/admin/companies"
element={<ManageCompanies/>}
/>

<Route 
path="/admin/candidates"
element={<ManageCandidates/>}
/>

<Route 
path="/admin/jobs"
element={<ManageJobs/>}
/>

<Route 
path="/admin/reports"
element={<Reports/>}
/>

<Route 
path="/admin/settings"
element={<Settings/>}
/>

<Route 
path="/admin/profile"
element={<AdminProfile/>}
/>


</Routes>

)

}

export default AdminRoutes;