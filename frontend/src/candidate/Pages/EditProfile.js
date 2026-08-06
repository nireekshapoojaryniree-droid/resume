import React, { useState } from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";

function EditProfile() {

  const [name, setName] = useState("Candidate Name");
  const [email, setEmail] = useState("candidate@example.com");
  const [phone, setPhone] = useState("9876543210");
  const [skills, setSkills] = useState("React, JavaScript, Node.js");

  const saveProfile = () => {
    alert("Profile updated successfully!");
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
            Edit Profile
          </h1>

          <div style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            maxWidth: "700px"
          }}>

            <label>Name</label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />


            <label>Email</label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />


            <label>Phone</label>

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={inputStyle}
            />


            <label>Skills</label>

            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              style={{
                ...inputStyle,
                height: "100px"
              }}
            />


            <button
              onClick={saveProfile}
              style={buttonStyle}
            >
              Save Profile
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "11px",
  margin: "8px 0 18px",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  boxSizing: "border-box"
};

const buttonStyle = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "11px 20px",
  borderRadius: "6px",
  cursor: "pointer"
};

export default EditProfile;