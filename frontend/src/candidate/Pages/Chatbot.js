import React from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";
import ChatbotWidget from "../components/ChatbotWidget";

function Chatbot() {

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
            AI Career Assistant 🤖
          </h1>

          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            maxWidth: "800px"
          }}>

            <h2>
              Your AI Career Assistant
            </h2>

            <p>
              Ask about resumes, interviews, jobs,
              skills and career preparation.
            </p>

            <ul>
              <li>Resume improvement</li>
              <li>Interview preparation</li>
              <li>Job recommendations</li>
              <li>Skill development</li>
              <li>Career planning</li>
            </ul>

          </div>

        </div>

      </main>

      <ChatbotWidget />

    </div>
  );
}

export default Chatbot;