import React from "react";

function NotificationCard({ title, message, time }) {

  return (

    <div style={{
      background: "white",
      border: "1px solid #e5e7eb",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "10px"
    }}>

      <strong>
        {title}
      </strong>

      <p style={{
        margin: "6px 0",
        color: "#4b5563"
      }}>
        {message}
      </p>

      <small style={{
        color: "#9ca3af"
      }}>
        {time}
      </small>

    </div>

  );
}

export default NotificationCard;