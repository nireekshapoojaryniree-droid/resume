import React from "react";

function ComDashboardCard({ title, value, icon, color }) {

  const styles = {
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      padding: "20px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "250px",
      minHeight: "120px",
      transition: "0.3s",
      cursor: "pointer",
      borderLeft: `6px solid ${color}`,
    },

    left: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },

    title: {
      fontSize: "15px",
      color: "#6b7280",
      fontWeight: "500",
    },

    value: {
      fontSize: "34px",
      fontWeight: "bold",
      color: "#111827",
    },

    iconBox: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: color,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "28px",
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={styles.left}>
        <span style={styles.title}>{title}</span>

        <span style={styles.value}>{value}</span>
      </div>

      <div style={styles.iconBox}>
        {icon}
      </div>
    </div>
  );
}

export default ComDashboardCard;