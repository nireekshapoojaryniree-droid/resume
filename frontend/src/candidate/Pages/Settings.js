import React, { useState } from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";

function Settings() {

  const [notifications, setNotifications] = useState(true);

  return (

    <div style={page}>

      <CandidateSidebar />

      <main style={main}>

        <CandidateNavbar />

        <div style={content}>

          <h1>
            Settings ⚙️
          </h1>

          <div style={card}>

            <h3>
              Notification Preferences
            </h3>

            <label>

              <input
                type="checkbox"
                checked={notifications}
                onChange={() =>
                  setNotifications(!notifications)
                }
              />

              {" "}Receive job notifications

            </label>

            <hr />

            <h3>
              Account
            </h3>

            <button style={button}>
              Change Password
            </button>

            <button style={{
              ...button,
              background: "#dc2626",
              marginLeft: "10px"
            }}>
              Logout
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
  maxWidth: "700px",
  borderRadius: "12px"
};

const button = {
  marginTop: "15px",
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "6px"
};

export default Settings;