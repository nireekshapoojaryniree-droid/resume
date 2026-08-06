import React from "react";

function AdminNavbar() {
  const styles = {
    navbar: {
      height: "64px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 28px",
      background: "linear-gradient(135deg, #1e1e2e 0%, #2a1a2e 100%)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
      borderBottom: "1px solid rgba(180,120,140,0.15)",
    },
    brand: {
      fontSize: "18px",
      fontWeight: "700",
      background: "linear-gradient(90deg, #c9849a, #e0a0b0)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "0.5px",
    },
    right: { display: "flex", alignItems: "center", gap: "16px" },
    adminBadge: {
      background: "rgba(180,120,140,0.15)",
      color: "#c9849a",
      padding: "6px 14px",
      borderRadius: "20px",
      fontSize: "13px",
      fontWeight: "600",
      border: "1px solid rgba(180,120,140,0.3)",
    },
    logoutBtn: {
      padding: "8px 18px",
      border: "none",
      background: "linear-gradient(135deg, #9b4d6a, #7a3050)",
      color: "white",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: "600",
      boxShadow: "0 2px 10px rgba(155,77,106,0.4)",
    },
  };

  return (
    <div style={styles.navbar}>
      <h3 style={styles.brand}>Smart Recruitment System</h3>
      <div style={styles.right}>
        <span style={styles.adminBadge}>👤 Admin</span>
        <button style={styles.logoutBtn}>Logout</button>
      </div>
    </div>
  );
}

export default AdminNavbar;
