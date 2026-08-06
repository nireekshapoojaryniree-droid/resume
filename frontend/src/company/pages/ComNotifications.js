import React from "react";
import ComNavbar from "../components/ComNavbar";
import ComSidebar from "../components/ComSidebar";

const notifications = [
  {
    title: "New Applicant",
    message: "Rahul Sharma applied for Frontend Developer.",
    time: "2 mins ago",
  },
  {
    title: "Interview Scheduled",
    message: "Interview with Priya is scheduled for tomorrow.",
    time: "1 hour ago",
  },
  {
    title: "Job Expiring",
    message: "Backend Developer job expires in 2 days.",
    time: "Today",
  },
  {
    title: "Profile Updated",
    message: "Company profile updated successfully.",
    time: "Yesterday",
  },
];

function ComNotifications() {
  return (
    <div style={{ background: "#f5f7fb", minHeight: "100vh" }}>
      <ComNavbar />
      <ComSidebar />
      <div style={{ marginLeft: "260px", padding: "30px" }}>
        <h1 style={{ color: "#1e3a8a", marginBottom: "20px" }}>Notifications</h1>
        <div style={{ background: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", overflow: "hidden" }}>
          {notifications.map((notification, index) => (
            <div
              key={index}
              style={{ padding: "20px 25px", borderBottom: "1px solid #e5e7eb" }}
            >
              <div style={{ fontWeight: "bold", color: "#111827", marginBottom: "5px" }}>
                {notification.title}
              </div>
              <div style={{ fontSize: "14px", color: "#4b5563", marginBottom: "5px" }}>
                {notification.message}
              </div>
              <div style={{ fontSize: "12px", color: "#9ca3af" }}>
                {notification.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComNotifications;
