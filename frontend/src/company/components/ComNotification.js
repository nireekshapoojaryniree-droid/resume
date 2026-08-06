import React, { useState } from "react";

function ComNotification() {
  const [showNotifications, setShowNotifications] = useState(false);

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

  const styles = {
    container: {
      position: "relative",
    },

    bell: {
      fontSize: "24px",
      cursor: "pointer",
      position: "relative",
      userSelect: "none",
    },

    badge: {
      position: "absolute",
      top: "-6px",
      right: "-8px",
      backgroundColor: "#ef4444",
      color: "#fff",
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "11px",
      fontWeight: "bold",
    },

    dropdown: {
      position: "absolute",
      top: "45px",
      right: "0",
      width: "340px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      overflow: "hidden",
      zIndex: 1000,
    },

    header: {
      backgroundColor: "#2563eb",
      color: "#fff",
      padding: "15px",
      fontWeight: "bold",
      fontSize: "18px",
    },

    item: {
      padding: "15px",
      borderBottom: "1px solid #e5e7eb",
      cursor: "pointer",
    },

    title: {
      fontWeight: "bold",
      color: "#111827",
      marginBottom: "5px",
    },

    message: {
      fontSize: "14px",
      color: "#4b5563",
      marginBottom: "5px",
      lineHeight: "1.5",
    },

    time: {
      fontSize: "12px",
      color: "#9ca3af",
    },

    footer: {
      textAlign: "center",
      padding: "12px",
      backgroundColor: "#f9fafb",
      cursor: "pointer",
      fontWeight: "bold",
      color: "#2563eb",
    },
  };

  return (
    <div style={styles.container}>
      <div
        style={styles.bell}
        onClick={() => setShowNotifications(!showNotifications)}
      >
        🔔

        <span style={styles.badge}>
          {notifications.length}
        </span>
      </div>

      {showNotifications && (
        <div style={styles.dropdown}>
          <div style={styles.header}>
            Notifications
          </div>

          {notifications.map((notification, index) => (
            <div
              key={index}
              style={styles.item}
            >
              <div style={styles.title}>
                {notification.title}
              </div>

              <div style={styles.message}>
                {notification.message}
              </div>

              <div style={styles.time}>
                {notification.time}
              </div>
            </div>
          ))}

          <div style={styles.footer}>
            View All Notifications
          </div>
        </div>
      )}
    </div>
  );
}

export default ComNotification;