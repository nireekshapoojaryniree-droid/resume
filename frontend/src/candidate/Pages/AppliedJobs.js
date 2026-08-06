import React from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";

function AppliedJobs() {

  const jobs = [
    ["Frontend Developer", "Infosys", "Shortlisted"],
    ["Software Engineer", "TCS", "Under Review"],
    ["React Developer", "Wipro", "Applied"]
  ];

  return (

    <div style={page}>

      <CandidateSidebar />

      <main style={main}>

        <CandidateNavbar />

        <div style={content}>

          <h1>
            Applied Jobs 📋
          </h1>

          <div style={card}>

            {jobs.map((job, index) => (

              <div key={index} style={row}>

                <div>

                  <h3>
                    {job[0]}
                  </h3>

                  <p>
                    {job[1]}
                  </p>

                </div>

                <span style={{
                  color:
                    job[2] === "Shortlisted"
                      ? "#16a34a"
                      : "#2563eb",
                  fontWeight: "bold"
                }}>
                  {job[2]}
                </span>

              </div>

            ))}

          </div>

        </div>

      </main>

    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "#f8fafc"
};

const main = {
  marginLeft: "250px"
};

const content = {
  padding: "30px"
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "12px"
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #eee",
  padding: "15px"
};

export default AppliedJobs;