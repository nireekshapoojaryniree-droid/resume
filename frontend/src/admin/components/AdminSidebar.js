import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/admin/dashboard", label: "Dashboard", icon: "📊" },
  { to: "/admin/users", label: "Users", icon: "👥" },
  { to: "/admin/companies", label: "Companies", icon: "🏢" },
  { to: "/admin/candidates", label: "Candidates", icon: "🎯" },
  { to: "/admin/jobs", label: "Jobs", icon: "💼" },
  { to: "/admin/reports", label: "Reports", icon: "📈" },
  { to: "/admin/settings", label: "Settings", icon: "⚙️" },
  { to: "/admin/profile", label: "Profile", icon: "👤" },
];

function AdminSidebar() {
  const location = useLocation();

  const styles = {
    sidebar: {
      width: "240px",
      minHeight: "100vh",
      background: "linear-gradient(180deg, #1e1e2e 0%, #2a1a2e 100%)",
      color: "white",
      padding: "24px 12px",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      boxShadow: "4px 0 20px rgba(0,0,0,0.25)",
    },
    heading: {
      fontSize: "13px",
      fontWeight: "700",
      color: "#7a5060",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      padding: "0 12px",
      marginBottom: "12px",
    },
    divider: {
      height: "1px",
      background: "rgba(180,120,140,0.15)",
      margin: "12px 0",
    },
  };

  const getLinkStyle = (to) => {
    const isActive =
      location.pathname === to ||
      (to === "/admin/dashboard" && location.pathname === "/");
    return {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: isActive ? "#d4a0b0" : "#7a6070",
      textDecoration: "none",
      padding: "10px 14px",
      borderRadius: "10px",
      fontSize: "14px",
      fontWeight: isActive ? "600" : "400",
      background: isActive ? "rgba(180,120,140,0.15)" : "transparent",
      borderLeft: isActive ? "3px solid #9b4d6a" : "3px solid transparent",
    };
  };

  return (
    <div style={styles.sidebar}>
      <p style={styles.heading}>Admin Panel</p>
      <div style={styles.divider} />
      {navItems.map((item) => (
        <Link key={item.to} to={item.to} style={getLinkStyle(item.to)}>
          <span>{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default AdminSidebar;
