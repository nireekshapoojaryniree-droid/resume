import React, { useState } from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";

function AIInterview() {

  const [started, setStarted] = useState(false);

  const [answer, setAnswer] = useState("");

  return (

    <div style={page}>

      <CandidateSidebar />

      <main style={main}>

        <CandidateNavbar />

        <div style={content}>

          <h1>
            AI Interview 🤖
          </h1>

          {!started ? (

            <div style={card}>

              <h2>
                Practice Interview with AI
              </h2>

              <p>
                Select your preferred role and start an
                AI-powered mock interview.
              </p>

              <select style={input}>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>Python Developer</option>
              </select>

              <button
                onClick={() => setStarted(true)}
                style={button}
              >
                Start Interview
              </button>

            </div>

          ) : (

            <div style={card}>

              <span style={{
                color: "#16a34a"
              }}>
                Question 1 of 10
              </span>

              <h2>
                Explain the concept of React components.
              </h2>

              <textarea
                value={answer}
                onChange={(e) =>
                  setAnswer(e.target.value)
                }
                placeholder="Type your answer..."
                style={{
                  ...input,
                  height: "180px"
                }}
              />

              <button style={button}>
                Submit Answer
              </button>

            </div>

          )}

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
  padding: "30px",
  borderRadius: "12px",
  maxWidth: "750px"
};

const input = {
  width: "100%",
  padding: "12px",
  margin: "12px 0 20px",
  boxSizing: "border-box",
  border: "1px solid #d1d5db",
  borderRadius: "7px"
};

const button = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "7px"
};

export default AIInterview;