import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [systemName, setSystemName] = useState("Smart Recruitment System");

  const card = {
    background: "white", padding: "28px", borderRadius: "16px",
    width: "580px", boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
    marginBottom: "20px", borderTop: "3px solid #9b4d6a",
  };
  const label = {
    fontSize: "12px", fontWeight: "600", color: "#7a5060",
    textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "8px",
  };
  const input = {
    width: "100%", padding: "10px 14px", marginBottom: "20px",
    border: "1.5px solid #e0d5d8", borderRadius: "10px", fontSize: "14px",
    outline: "none", background: "#faf8f9", boxSizing: "border-box",
  };
  const button = {
    background: "linear-gradient(135deg, #9b4d6a, #7a3050)", color: "white",
    border: "none", padding: "10px 24px", borderRadius: "10px",
    cursor: "pointer", fontWeight: "600", fontSize: "14px",
    boxShadow: "0 4px 12px rgba(155,77,106,0.3)",
  };

  return (
    <div style={{ display: "flex", background: "#f5f5f7", minHeight: "100vh" }}>
      <AdminSidebar />
      <div style={{ flex: 1 }}>
        <AdminNavbar />
        <div style={{ padding: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1e1e2e", marginBottom: "6px" }}>Admin Settings</h2>
          <p style={{ fontSize: "14px", color: "#7a5060", marginBottom: "28px" }}>Configure system preferences and security.</p>

          <div style={card}>
            <div style={{ fontSize: "16px", fontWeight: "700", color: "#1e1e2e", marginBottom: "20px" }}>🖥️ System Information</div>
            <label style={label}>System Name</label>
            <input value={systemName} onChange={(e) => setSystemName(e.target.value)} style={input} />
            <button style={button}>💾 Save Changes</button>
          </div>

          <div style={card}>
            <div style={{ fontSize: "16px", fontWeight: "700", color: "#1e1e2e", marginBottom: "20px" }}>🔔 Notification Settings</div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px", background: "#faf8f9", borderRadius: "10px" }}>
              <button
                onClick={() => setNotifications(!notifications)}
                style={{ width: "44px", height: "24px", borderRadius: "12px", cursor: "pointer", background: notifications ? "#9b4d6a" : "#e0d5d8", border: "none", transition: "background 0.2s" }}
              />
              <span style={{ fontSize: "14px", color: "#334155", fontWeight: "500" }}>
                Email Notifications — <strong style={{ color: "#9b4d6a" }}>{notifications ? "Enabled" : "Disabled"}</strong>
              </span>
            </div>
          </div>

          <div style={card}>
            <div style={{ fontSize: "16px", fontWeight: "700", color: "#1e1e2e", marginBottom: "20px" }}>🔒 Security</div>
            <label style={label}>Current Password</label>
            <input type="password" placeholder="Enter current password" style={input} />
            <label style={label}>New Password</label>
            <input type="password" placeholder="Enter new password" style={input} />
            <button style={button}>🔑 Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
