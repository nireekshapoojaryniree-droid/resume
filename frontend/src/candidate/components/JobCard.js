import React from "react";

function JobCard({ job }) {

  return (

    <div style={{
      background: "white",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      padding: "20px"
    }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>

        <div style={{
          width: "45px",
          height: "45px",
          borderRadius: "8px",
          background: "#eff6ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#2563eb",
          fontWeight: "bold"
        }}>
          {job.company.charAt(0)}
        </div>

        <span>
          🔖
        </span>

      </div>

      <h3>
        {job.title}
      </h3>

      <p style={{ color: "#6b7280" }}>
        {job.company}
      </p>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        fontSize: "13px",
        color: "#4b5563"
      }}>

        <span>📍 {job.location}</span>
        <span>💼 {job.type}</span>
        <span>💰 {job.salary}</span>

      </div>

      <button style={{
        width: "100%",
        marginTop: "18px",
        padding: "10px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "7px",
        cursor: "pointer"
      }}>
        View Job
      </button>

    </div>

  );
}

export default JobCard;