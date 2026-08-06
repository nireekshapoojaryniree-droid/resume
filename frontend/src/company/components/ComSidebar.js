import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaPlusCircle,
  FaSuitcase,
  FaUsers,
  FaUserTie,
  FaChartBar,
  FaFileAlt,
  FaClipboardCheck,
  FaCalendarAlt,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function ComSidebar() {
  const navigate = useNavigate();

  const menuItems = [
  { icon: <FaHome />, name: "Dashboard", path: "/dashboard" },
  { icon: <FaBuilding />, name: "Company Profile", path: "/profile" },
  { icon: <FaPlusCircle />, name: "Post Job", path: "/post-job" },
  { icon: <FaSuitcase />, name: "Manage Jobs", path: "/manage-jobs" },
  { icon: <FaUsers />, name: "Applicants", path: "/applicants" },
  { icon: <FaUserTie />, name: "Candidate Details", path: "/candidate-details" },
  { icon: <FaChartBar />, name: "Analytics", path: "/analytics" },
  { icon: <FaCalendarAlt />, name: "Interview Schedule", path: "/interviews" },
  { icon: <FaBell />, name: "Notifications", path: "/notifications" },
  { icon: <FaCog />, name: "Settings", path: "/settings" },
  { icon: <FaSignOutAlt />, name: "Logout", path: "/" },
];

  const styles = {
    sidebar: {
      width: "260px",
      height: "calc(100vh - 70px)",
      backgroundColor: "#1e3a8a",
      color: "white",
      position: "fixed",
      left: 0,
      top: "70px",
      overflowY: "auto",
      paddingTop: "20px",
      boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
    },

    title: {
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "20px",
      borderBottom: "1px solid rgba(255,255,255,0.2)",
      paddingBottom: "15px",
    },

    menu: {
      display: "flex",
      flexDirection: "column",
    },

    item: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      padding: "15px 25px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "0.3s",
    },

    icon: {
      fontSize: "20px",
      width: "25px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.title}>
        Company Dashboard
      </div>

      <div style={styles.menu}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={styles.item}
            onClick={() => navigate(item.path)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#2563eb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <span style={styles.icon}>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComSidebar;