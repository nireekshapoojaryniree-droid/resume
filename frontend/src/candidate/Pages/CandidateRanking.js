import React from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";

function CandidateRanking() {

  return (

    <div style={page}>

      <CandidateSidebar />

      <main style={main}>

        <CandidateNavbar />

        <div style={content}>

          <h1>
            Candidate Ranking 🏆
          </h1>

          <div style={hero}>

            <p>
              Your Current Ranking
            </p>

            <h2>
              #18
            </h2>

            <p>
              Among 250 candidates
            </p>

          </div>


          <div style={card}>

            <h2>
              Performance Breakdown
            </h2>

            <p>
              ATS Score
              <strong> 91%</strong>
            </p>

            <p>
              Skill Match
              <strong> 88%</strong>
            </p>

            <p>
              Interview
              <strong> 90%</strong>
            </p>

            <p>
              Coding
              <strong> 82%</strong>
            </p>

            <hr />

            <h2>
              Final Score: 87.75%
            </h2>

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

const hero = {
  background: "#2563eb",
  color: "white",
  padding: "30px",
  borderRadius: "12px",
  marginBottom: "20px"
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "12px"
};

export default CandidateRanking;