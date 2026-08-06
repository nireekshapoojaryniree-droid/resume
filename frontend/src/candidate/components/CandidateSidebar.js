import React from "react";
import { NavLink } from "react-router-dom";

function CandidateSidebar() {

  const menuItems = [
    { name: "Dashboard", path: "/candidate/dashboard", icon: "⌂" },
    { name: "My Profile", path: "/candidate/profile", icon: "👤" },
    { name: "Edit Profile", path: "/candidate/edit-profile", icon: "✏️" },
    { name: "Upload Resume", path: "/candidate/resume", icon: "📄" },
    { name: "ATS Checker", path: "/candidate/ats", icon: "🎯" },
    { name: "Skill Matching", path: "/candidate/skills", icon: "⭐" },
    { name: "Recommended Jobs", path: "/candidate/jobs", icon: "💼" },
    { name: "Applied Jobs", path: "/candidate/applied", icon: "📋" },
    { name: "Saved Jobs", path: "/candidate/saved", icon: "🔖" },
    { name: "AI Interview", path: "/candidate/interview", icon: "🤖" },
    { name: "Coding Test", path: "/candidate/coding", icon: "💻" },
    { name: "Interview History", path: "/candidate/history", icon: "🕐" },
    { name: "My Ranking", path: "/candidate/ranking", icon: "🏆" },
    { name: "Notifications", path: "/candidate/notifications", icon: "🔔" },
    { name: "AI Chatbot", path: "/candidate/chatbot", icon: "💬" },
    { name: "Settings", path: "/candidate/settings", icon: "⚙️" }
  ];

  const styles = {
    sidebar: {
      width: "250px",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0,
      background: "#111827",
      color: "white",
      padding: "20px 12px",
      boxSizing: "border-box",
      overflowY: "auto"
    },

    logo: {
      fontSize: "20px",
      fontWeight: "bold",
      padding: "10px",
      marginBottom: "20px",
      borderBottom: "1px solid #374151"
    },

    logoBlue: {
      color: "#60a5fa"
    },

    link: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "#d1d5db",
      textDecoration: "none",
      padding: "11px 12px",
      marginBottom: "4px",
      borderRadius: "7px",
      fontSize: "14px"
    }
  };

  return (
    <aside style={styles.sidebar}>

      <div style={styles.logo}>
        Smart<span style={styles.logoBlue}>Recruit</span>
      </div>

      {menuItems.map((item) => (

        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            ...styles.link,
            background: isActive ? "#2563eb" : "transparent",
            color: isActive ? "white" : "#d1d5db"
          })}
        >

          <span>{item.icon}</span>

          <span>{item.name}</span>

        </NavLink>

      ))}

    </aside>
  );
}

export default CandidateSidebar;