import React, { useState } from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";

function CodingTest() {

  const [code, setCode] = useState(
`function add(a, b) {
  return a + b;
}`
  );

  return (

    <div style={page}>

      <CandidateSidebar />

      <main style={main}>

        <CandidateNavbar />

        <div style={content}>

          <h1>
            Coding Test 💻
          </h1>

          <div style={card}>

            <h2>
              Question
            </h2>

            <p>
              Write a function to add two numbers.
            </p>

            <select style={input}>
              <option>JavaScript</option>
              <option>Python</option>
              <option>Java</option>
              <option>C++</option>
            </select>

            <textarea
              value={code}
              onChange={(e) =>
                setCode(e.target.value)
              }
              style={{
                width: "100%",
                height: "300px",
                background: "#111827",
                color: "#f9fafb",
                padding: "15px",
                boxSizing: "border-box",
                fontFamily: "monospace",
                borderRadius: "8px"
              }}
            />

            <button style={button}>
              Run Code
            </button>

            <button style={{
              ...button,
              marginLeft: "10px",
              background: "#16a34a"
            }}>
              Submit Test
            </button>

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
  borderRadius: "12px"
};

const input = {
  padding: "10px",
  marginBottom: "15px"
};

const button = {
  marginTop: "15px",
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "11px 20px",
  borderRadius: "7px"
};

export default CodingTest;