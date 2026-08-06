import React from "react";
import ComSearchBar from "./ComSearchbar";
import ComNotification from "./ComNotification";
import {
  FaBars,
  FaBriefcase,
  FaCaretDown,
  FaUserCircle,
} from "react-icons/fa";


function ComNavbar() {
  const styles = {
    navbar: {
      height: "70px",
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 30px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: "1000",
    },

    left: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },

    menu:{
    fontSize:"22px",
    cursor:"pointer",
    color:"#1e3a8a"
},

    logo:{
    fontSize:"28px",
    color:"#2563eb"
},

    title: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#1e3a8a",
    },

    center: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      padding: "0 40px",
    },

    right: {
      display: "flex",
      alignItems: "center",
      gap: "25px",
    },

    notification: {
      position: "relative",
      fontSize: "24px",
      cursor: "pointer",
    },

    badge: {
      position: "absolute",
      top: "-6px",
      right: "-6px",
      background: "red",
      color: "white",
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "11px",
    },

    profile: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
    },

    avatar: {
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      backgroundColor: "#2563eb",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
    },

    details: {
      display: "flex",
      flexDirection: "column",
    },

    company: {
      fontWeight: "bold",
      fontSize: "15px",
      color: "#1f2937",
    },

    role: {
      fontSize: "12px",
      color: "#6b7280",
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Left */}

      <div style={styles.left}>
        <FaBars style={styles.menu} />

<FaBriefcase style={styles.logo} />

<span style={styles.title}>
  Smart Recruitment
</span>
      </div>

      {/* Center */}

      <div style={styles.center}>
        <ComSearchBar />
      </div>

      {/* Right */}

      <div style={styles.right}>
       <ComNotification />

        <div style={styles.profile}>
          <FaUserCircle
  size={45}
  color="#2563eb"
/>

          <div style={styles.details}>
            <span style={styles.company}>
              ABC Technologies
            </span>

            <span style={styles.role}>
              HR Manager
            </span>
          </div>

          <FaCaretDown color="#6b7280" />
        </div>
      </div>
    </nav>
  );
}

export default ComNavbar;
