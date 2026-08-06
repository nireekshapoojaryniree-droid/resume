import React from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";

function SkillMatching() {

  const skills = [
    ["React.js", 95],
    ["JavaScript", 90],
    ["Node.js", 80],
    ["MongoDB", 75],
    ["Python", 65]
  ];

  return (

    <div style={page}>

      <CandidateSidebar />

      <main style={main}>

        <CandidateNavbar />

        <div style={content}>

          <h1>
            Skill Matching ⭐
          </h1>

          <div style={card}>

            <h2>
              Overall Match
            </h2>

            <div style={score}>
              88%
            </div>

            <p>
              Your skills match this job very well.
            </p>

          </div>


          <div style={{
            ...card,
            marginTop: "20px"
          }}>

            <h2>
              Skill Analysis
            </h2>

            {skills.map((skill, index) => (

              <div key={index} style={{
                marginBottom: "20px"
              }}>

                <div style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}>
                  <span>{skill[0]}</span>
                  <span>{skill[1]}%</span>
                </div>

                <div style={{
                  height: "9px",
                  background: "#e5e7eb",
                  borderRadius: "10px"
                }}>

                  <div style={{
                    width: `${skill[1]}%`,
                    height: "100%",
                    background: "#2563eb",
                    borderRadius: "10px"
                  }} />

                </div>

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
  padding: "25px",
  borderRadius: "12px",
  border: "1px solid #e5e7eb"
};

const score = {
  fontSize: "50px",
  fontWeight: "bold",
  color: "#2563eb"
};

export default SkillMatching;