import React, { useState } from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";

function UploadResume() {

  const [file, setFile] = useState(null);

  const handleUpload = () => {

    if (!file) {
      alert("Please select a PDF resume.");
      return;
    }

    alert("Resume uploaded successfully!");

  };

  return (

    <div style={{
      minHeight: "100vh",
      background: "#f8fafc"
    }}>

      <CandidateSidebar />

      <main style={{ marginLeft: "250px" }}>

        <CandidateNavbar />

        <div style={{ padding: "30px" }}>

          <h1>
            Upload Resume
          </h1>

          <div style={{
            background: "white",
            padding: "35px",
            borderRadius: "12px",
            maxWidth: "650px",
            border: "1px solid #e5e7eb"
          }}>

            <div style={{
              border: "2px dashed #93c5fd",
              padding: "50px",
              textAlign: "center",
              borderRadius: "10px"
            }}>

              <div style={{
                fontSize: "45px"
              }}>
                📄
              </div>

              <h3>
                Upload your resume
              </h3>

              <p>
                PDF format recommended
              </p>

              <input
                type="file"
                accept=".pdf"
                onChange={(e) =>
                  setFile(e.target.files[0])
                }
              />

              {file && (
                <p>
                  Selected: {file.name}
                </p>
              )}

            </div>


            <button
              onClick={handleUpload}
              style={{
                marginTop: "20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "7px"
              }}
            >
              Upload Resume
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default UploadResume;