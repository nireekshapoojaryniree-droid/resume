import React from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";

function InterviewHistory() {

  const interviews = [
    ["Frontend Developer", "Infosys", "85%", "Completed"],
    ["React Developer", "TCS", "90%", "Completed"],
    ["Software Engineer", "Wipro", "78%", "Completed"]
  ];

  return (

    <div style={page}>

      <CandidateSidebar />

      <main style={main}>

        <CandidateNavbar />

        <div style={content}>

          <h1>
            Interview History 🕐
          </h1>

          <div style={card}>

            {interviews.map((item, index) => (

              <div key={index} style={row}>

                <div>
                  <strong>{item[0]}</strong>
                  <p>{item[1]}</p>
                </div>

                <strong>
                  {item[2]}
                </strong>

                <span style={{
                  color: "#16a34a"
                }}>
                  {item[3]}
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
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr",
  padding: "15px",
  borderBottom: "1px solid #eee",
  alignItems: "center"
};

export default InterviewHistory;