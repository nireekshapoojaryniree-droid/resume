import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend);

const stats = [
  { label: "Total Users", value: "535", icon: "👥", color: "#7a3050" },
  { label: "Companies", value: "80", icon: "🏢", color: "#9b4d6a" },
  { label: "Candidates", value: "450", icon: "🎯", color: "#b06080" },
  { label: "Jobs", value: "120", icon: "💼", color: "#c08090" },
  { label: "Applications", value: "1,540", icon: "📋", color: "#6b2a44" },
];

function Reports() {
  const chartBox = {
    background: "white", padding: "20px", borderRadius: "16px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
  };

  const barData = {
    labels: ["Infosys", "TCS", "Wipro", "Accenture"],
    datasets: [{ label: "Jobs Posted", data: [12, 18, 9, 15], backgroundColor: ["#7a3050", "#9b4d6a", "#b06080", "#c08090"] }],
  };
  const pieData = {
    labels: ["Candidates", "Companies", "Admins"],
    datasets: [{ data: [450, 80, 5], backgroundColor: ["#7a3050", "#b06080", "#d4a0b0"] }],
  };
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{ label: "Applications", data: [50, 80, 120, 170, 200, 250], borderColor: "#9b4d6a", backgroundColor: "rgba(155,77,106,0.1)", fill: true, tension: 0.4 }],
  };

  return (
    <div style={{ display: "flex", background: "#f5f5f7", minHeight: "100vh" }}>
      <AdminSidebar />
      <div style={{ flex: 1 }}>
        <AdminNavbar />
        <div style={{ padding: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1e1e2e", marginBottom: "6px" }}>Reports & Analytics</h2>
          <p style={{ fontSize: "14px", color: "#7a5060", marginBottom: "28px" }}>Overview of platform performance and activity.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "16px", marginBottom: "28px" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ background: "white", padding: "20px", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.07)", borderTop: `4px solid ${s.color}`, textAlign: "center" }}>
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>{s.icon}</div>
                <div style={{ fontSize: "12px", fontWeight: "600", color: "#7a5060", textTransform: "uppercase", letterSpacing: "0.5px" }}>{s.label}</div>
                <div style={{ fontSize: "28px", fontWeight: "800", color: s.color, marginTop: "4px" }}>{s.value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div style={chartBox}>
              <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#1e1e2e", marginBottom: "12px" }}>📊 Jobs Posted by Company</h3>
              <div style={{ height: "220px" }}>
                <Bar data={barData} options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
              </div>
            </div>
            <div style={chartBox}>
              <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#1e1e2e", marginBottom: "12px" }}>🥧 User Distribution</h3>
              <div style={{ height: "220px", display: "flex", justifyContent: "center" }}>
                <Pie data={pieData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
            <div style={{ ...chartBox, gridColumn: "1 / -1" }}>
              <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#1e1e2e", marginBottom: "12px" }}>📈 Monthly Applications</h3>
              <div style={{ height: "200px" }}>
                <Line data={lineData} options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
