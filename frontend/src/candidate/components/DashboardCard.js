import React from "react";

function DashboardCard({ icon, title, value, subtitle }) {

  const styles = {

    card: {
      background: "white",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      padding: "20px",
      display: "flex",
      gap: "15px",
      alignItems: "center"
    },

    icon: {
      width: "48px",
      height: "48px",
      background: "#eff6ff",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "22px"
    },

    title: {
      margin: 0,
      color: "#6b7280",
      fontSize: "13px"
    },

    value: {
      margin: "5px 0",
      fontSize: "25px"
    },

    subtitle: {
      margin: 0,
      color: "#6b7280",
      fontSize: "12px"
    }

  };

  return (

    <div style={styles.card}>

      <div style={styles.icon}>
        {icon}
      </div>

      <div>

        <p style={styles.title}>
          {title}
        </p>

        <h2 style={styles.value}>
          {value}
        </h2>

        <p style={styles.subtitle}>
          {subtitle}
        </p>

      </div>

    </div>

  );
}

export default DashboardCard;