import React from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";
import NotificationCard from "../components/NotificationCard";

function Notifications() {

  const notifications = [
    {
      title: "Application Shortlisted",
      message: "Your application for Frontend Developer has been shortlisted.",
      time: "2 hours ago"
    },
    {
      title: "Interview Scheduled",
      message: "Your AI interview is scheduled for tomorrow.",
      time: "Yesterday"
    },
    {
      title: "New Job Recommendation",
      message: "We found 5 new jobs matching your skills.",
      time: "2 days ago"
    }
  ];

  return (

    <div style={page}>

      <CandidateSidebar />

      <main style={main}>

        <CandidateNavbar />

        <div style={content}>

          <h1>
            Notifications 🔔
          </h1>

          <div style={{
            maxWidth: "800px"
          }}>

            {notifications.map((item, index) => (

              <NotificationCard
                key={index}
                title={item.title}
                message={item.message}
                time={item.time}
              />

            ))}

          </div>

        </div>

      </main>

    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "#f8fafc"
};

const main = {
  marginLeft: "250px"
};

const content = {
  padding: "30px"
};

export default Notifications;