import React from "react";

function ResumeCard() {

  return (

    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #e5e7eb"
    }}>

      <h3>
        My Resume
      </h3>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>

        <div>

          <p>
            📄 My_Resume.pdf
          </p>

          <small style={{ color: "#6b7280" }}>
            Uploaded recently
          </small>

        </div>

        <button style={{
          padding: "9px 14px",
          border: "none",
          borderRadius: "6px",
          background: "#2563eb",
          color: "white"
        }}>
          View
        </button>

      </div>

    </div>

  );
}

export default ResumeCard;