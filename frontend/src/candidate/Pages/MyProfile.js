import React from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";

function MyProfile() {

  return (

    <div style={{
      minHeight: "100vh",
      background: "#f8fafc"
    }}>

      <CandidateSidebar />

      <main style={{
        marginLeft: "250px"
      }}>

        <CandidateNavbar />

        <div style={{
          padding: "30px"
        }}>

          <h1>
            My Profile
          </h1>

          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb"
          }}>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "20px"
            }}>

              <div style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: "#2563eb",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "35px"
              }}>
                C
              </div>

              <div>

                <h2>
                  Candidate Name
                </h2>

                <p>
                  candidate@example.com
                </p>

                <p>
                  Software Developer
                </p>

              </div>

            </div>


            <hr />


            <h3>
              Skills
            </h3>

            <p>
              React.js • JavaScript • Node.js • MongoDB • Python
            </p>


            <h3>
              Education
            </h3>

            <p>
              MCA - Computer Applications
            </p>


            <h3>
              Experience
            </h3>

            <p>
              Fresher / Entry Level
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default MyProfile;