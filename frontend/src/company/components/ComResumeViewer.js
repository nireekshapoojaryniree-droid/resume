import React from "react";
import {
  FaFilePdf,
  FaEye,
  FaDownload,
  FaUserGraduate,
  FaBriefcase,
  FaTools,
} from "react-icons/fa";

function ComResumeViewer() {
  const resume = {
    candidateName: "Rahul Sharma",
    jobRole: "Frontend Developer",
    education: "B.E. Computer Science",
    experience: "2 Years",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
    ],
    resumeFile: "Resume_RahulSharma.pdf",
  };

  return (
    <div
      style={{
        background: "#fff",
        marginTop: "30px",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          color: "#1e3a8a",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "25px",
        }}
      >
        <FaFilePdf />
        Resume Viewer
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Resume Preview */}

        <div
          style={{
            flex: 1,
            minWidth: "350px",
            border: "2px dashed #cbd5e1",
            borderRadius: "12px",
            height: "420px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "#f8fafc",
          }}
        >
          <FaFilePdf
            size={80}
            color="#dc2626"
          />

          <h3
            style={{
              marginTop: "15px",
            }}
          >
            {resume.resumeFile}
          </h3>

          <p
            style={{
              color: "#6b7280",
            }}
          >
            Resume Preview
          </p>

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              gap: "15px",
            }}
          >
            <button
              style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaEye />
              View Resume
            </button>

            <button
              style={{
                background: "#16a34a",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaDownload />
              Download
            </button>
          </div>
        </div>

        {/* Candidate Details */}

        <div
          style={{
            flex: 1,
            minWidth: "320px",
          }}
        >
          <h3
            style={{
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            {resume.candidateName}
          </h3>

          <div
            style={{
              marginBottom: "18px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaBriefcase color="#2563eb" />

            <span>
              <strong>Job Role :</strong> {resume.jobRole}
            </span>
          </div>

          <div
            style={{
              marginBottom: "18px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaUserGraduate color="#2563eb" />

            <span>
              <strong>Education :</strong> {resume.education}
            </span>
          </div>

          <div
            style={{
              marginBottom: "18px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaBriefcase color="#2563eb" />

            <span>
              <strong>Experience :</strong> {resume.experience}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <FaTools
              color="#2563eb"
              style={{ marginTop: "5px" }}
            />

            <div>
              <strong>Skills</strong>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                {resume.skills.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      background: "#2563eb",
                      color: "#fff",
                      padding: "8px 14px",
                      borderRadius: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComResumeViewer;
