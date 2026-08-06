import { useRoutes } from "react-router-dom";

import Landing from "../pages/Landing";
import ComDashboard from "../pages/ComDashboard";
import CompanyProfile from "../pages/CompanyProfile";
import ComPostjob from "../pages/ComPostjob";
import ComManagejobs from "../pages/ComManagejobs";
import ComApplicants from "../pages/ComApplicants";
import ComCandidateDetails from "../pages/ComCandidateDetails";
import ComAnalytics from "../pages/ComAnalytics";
import ComNotifications from "../pages/ComNotifications";
import ComInterviews from "../pages/ComInterviews";
import ComRejectedCandidates from "../pages/ComRejectedCandidates";
import ComShortlistedCandidates from "../pages/ComShortlistedCandidates";
import ComSettings from "../pages/ComSettings";

function CompanyRoutes() {
  return useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/dashboard", element: <ComDashboard /> },
    { path: "/profile", element: <CompanyProfile /> },
    { path: "/post-job", element: <ComPostjob /> },
    { path: "/manage-jobs", element: <ComManagejobs /> },
    { path: "/applicants", element: <ComApplicants /> },
    { path: "/candidate-details", element: <ComCandidateDetails /> },
    { path: "/analytics", element: <ComAnalytics /> },
    { path: "/notifications", element: <ComNotifications /> },
    { path: "/interviews", element: <ComInterviews /> },
    { path: "/shortlisted", element: <ComShortlistedCandidates /> },
    { path: "/rejected", element: <ComRejectedCandidates /> },
    { path: "/settings", element: <ComSettings /> },
  ]);
}

export default CompanyRoutes;
