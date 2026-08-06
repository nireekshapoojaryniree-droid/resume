import React from "react";
import { Routes, Route } from "react-router-dom";

import CandidateDashboard from "../Pages/CandidateDashboard";
import MyProfile from "../Pages/MyProfile";
import EditProfile from "../Pages/EditProfile";
import UploadResume from "../Pages/UploadResume";
import ATSChecker from "../Pages/ATSChecker";
import SkillMatching from "../Pages/SkillMatching";
import RecommendedJobs from "../Pages/RecommendedJobs";
import AppliedJobs from "../Pages/AppliedJobs";
import SavedJobs from "../Pages/SavedJobs";
import AIInterview from "../Pages/AIInterview";
import CodingTest from "../Pages/CodingTest";
import InterviewHistory from "../Pages/InterviewHistory";
import CandidateRanking from "../Pages/CandidateRanking";
import Notifications from "../Pages/Notifications";
import Chatbot from "../Pages/Chatbot";
import Settings from "../Pages/Settings";

function CandidateRoutes() {

  return (

    <Routes>

      <Route
        path="/candidate/dashboard"
        element={<CandidateDashboard />}
      />

      <Route
        path="/candidate/profile"
        element={<MyProfile />}
      />

      <Route
        path="/candidate/edit-profile"
        element={<EditProfile />}
      />

      <Route
        path="/candidate/resume"
        element={<UploadResume />}
      />

      <Route
        path="/candidate/ats"
        element={<ATSChecker />}
      />

      <Route
        path="/candidate/skills"
        element={<SkillMatching />}
      />

      <Route
        path="/candidate/jobs"
        element={<RecommendedJobs />}
      />

      <Route
        path="/candidate/applied"
        element={<AppliedJobs />}
      />

      <Route
        path="/candidate/saved"
        element={<SavedJobs />}
      />

      <Route
        path="/candidate/interview"
        element={<AIInterview />}
      />

      <Route
        path="/candidate/coding"
        element={<CodingTest />}
      />

      <Route
        path="/candidate/history"
        element={<InterviewHistory />}
      />

      <Route
        path="/candidate/ranking"
        element={<CandidateRanking />}
      />

      <Route
        path="/candidate/notifications"
        element={<Notifications />}
      />

      <Route
        path="/candidate/chatbot"
        element={<Chatbot />}
      />

      <Route
        path="/candidate/settings"
        element={<Settings />}
      />

    </Routes>

  );
}

export default CandidateRoutes;