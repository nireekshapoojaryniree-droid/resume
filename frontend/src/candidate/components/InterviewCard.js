import React from "react";

function InterviewCard() {

  return (

    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #e5e7eb"
    }}>

      <h3>
        Upcoming Interview
      </h3>

      <h4>
        Frontend Developer
      </h4>

      <p>
        🏢 Infosys
      </p>

      <p>
        📅 20 August 2026
      </p>

      <p>
        ⏰ 10:30 AM
      </p>

      <button style={{
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "6px",
        padding: "9px 15px"
      }}>
        View Details
      </button>

    </div>

  );
}

export default InterviewCard;