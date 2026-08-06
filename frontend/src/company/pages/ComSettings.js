import React, { useState } from "react";
import ComNavbar from "../components/ComNavbar";
import ComSidebar from "../components/ComSidebar";

import {
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
  FaLock,
  FaBell,
  FaMoon,
  FaSave,
  FaUndo,
} from "react-icons/fa";

function ComSettings() {
  const [settings, setSettings] = useState({
    companyName: "Tech Solutions Pvt Ltd",
    email: "company@gmail.com",
    phone: "+91 9876543210",
    website: "www.techsolutions.com",
    address: "Bangalore, Karnataka",
    password: "",
    notifications: true,
    darkMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleReset = () => {
    setSettings({
      companyName: "Tech Solutions Pvt Ltd",
      email: "company@gmail.com",
      phone: "+91 9876543210",
      website: "www.techsolutions.com",
      address: "Bangalore, Karnataka",
      password: "",
      notifications: true,
      darkMode: false,
    });
  };

  return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <ComNavbar />
      <ComSidebar />

      <div
        style={{
          marginLeft: "260px",
          padding: "30px",
        }}
      >
        <h1
          style={{
            color: "#1e3a8a",
            marginBottom: "30px",
          }}
        >
          Company Settings
        </h1>

        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          {/* GRID START */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(300px,1fr))",
              gap: "20px",
            }}
          >
            {/* Company Name */}
            <div>
              <label>
                <FaBuilding /> Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={settings.companyName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label>
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            {/* Phone */}
            <div>
              <label>
                <FaPhone /> Phone
              </label>
              <input
                type="text"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            {/* Website */}
            <div>
              <label>
                <FaGlobe /> Website
              </label>
              <input
                type="text"
                name="website"
                value={settings.website}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            {/* Address */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label>
                <FaMapMarkerAlt /> Address
              </label>
              <input
                type="text"
                name="address"
                value={settings.address}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            {/* Password */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label>
                <FaLock /> Change Password
              </label>
              <input
                type="password"
                name="password"
                value={settings.password}
                onChange={handleChange}
                placeholder="Enter new password"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            {/* Notification */}
            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 0",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <label
                style={{
                  display: "flex",
                  gap: "10px",
                  fontWeight: "bold",
                }}
              >
                <FaBell color="#2563eb" />
                Email Notifications
              </label>

              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />
            </div>

            {/* Dark Mode */}
            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 0",
              }}
            >
              <label
                style={{
                  display: "flex",
                  gap: "10px",
                  fontWeight: "bold",
                }}
              >
                <FaMoon />
                Dark Mode
              </label>

              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
              />
            </div>

            {/* Buttons */}
            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              <button
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaSave /> Save
              </button>

              <button
                onClick={handleReset}
                style={{
                  background: "#6b7280",
                  color: "#fff",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaUndo /> Reset
              </button>
            </div>
          </div>
          {/* GRID END */}
        </div>
      </div>
    </div>
  );
}

export default ComSettings;