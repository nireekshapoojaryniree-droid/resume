import React from "react";
import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope } from "react-icons/fa";

function ComFooter() {

  const currentYear = new Date().getFullYear();

  return (

    <footer
      style={{
        background: "#ffffff",
        marginTop: "40px",
        padding: "20px 30px",
        borderTop: "1px solid #e5e7eb",
        borderRadius: "12px",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.05)",
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >

        {/* Left Side */}

        <div>

          <h3
            style={{
              color: "#2563eb",
              margin: 0,
            }}
          >
            Smart Recruitment Platform
          </h3>

          <p
            style={{
              marginTop: "8px",
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            Company (HR) Dashboard
          </p>

        </div>

        {/* Center */}

        <div
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "14px",
          }}
        >
          © {currentYear} Smart Recruitment Platform
          <br />
          All Rights Reserved.
        </div>

        {/* Right Side */}

        <div
          style={{
            display: "flex",
            gap: "18px",
            fontSize: "22px",
          }}
        >

          <FaGlobe
            style={{
              cursor: "pointer",
              color: "#2563eb",
            }}
          />

          <FaEnvelope
            style={{
              cursor: "pointer",
              color: "#16a34a",
            }}
          />

          <FaLinkedin
            style={{
              cursor: "pointer",
              color: "#0a66c2",
            }}
          />

          <FaGithub
            style={{
              cursor: "pointer",
              color: "#111827",
            }}
          />

        </div>

      </div>

      <hr
        style={{
          margin: "20px 0",
          border: "none",
          borderTop: "1px solid #e5e7eb",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          color: "#6b7280",
          fontSize: "13px",
          gap: "10px",
        }}
      >

        <span>Version 1.0.0</span>

        <span>
          Developed for Smart Recruitment Platform
        </span>

      </div>

    </footer>

  );

}

export default ComFooter;