import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

const th = {
  background: "linear-gradient(135deg, #1e1e2e, #2a1a2e)",
  color: "#c9a0b0", padding: "14px 16px", textAlign: "left",
  fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px",
};
const td = { padding: "14px 16px", borderBottom: "1px solid #f5f0f2", fontSize: "14px", color: "#334155" };
const btn = (bg, shadow) => ({
  background: bg, color: "white", border: "none", padding: "6px 14px",
  borderRadius: "8px", cursor: "pointer", fontSize: "12px", fontWeight: "600",
  marginRight: "6px", boxShadow: shadow,
});

function AtsBar({ score }) {
  const color = score >= 90 ? "#7a3050" : score >= 75 ? "#9b4d6a" : "#b06080";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{ width: "80px", height: "6px", background: "#ede0e4", borderRadius: "4px", overflow: "hidden" }}>
        <div style={{ width: `${score}%`, height: "100%", background: color, borderRadius: "4px" }} />
      </div>
      <span style={{ fontSize: "13px", fontWeight: "600", color }}>{score}%</span>
    </div>
  );
}

function ManageCandidates() {
  const [search, setSearch] = useState("");
  const candidates = [
    { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", skills: "React, Node.js", atsScore: 89, status: "Shortlisted" },
    { id: 2, name: "Priya Shetty", email: "priya@gmail.com", skills: "Java, SQL", atsScore: 76, status: "Pending" },
    { id: 3, name: "Aman Kumar", email: "aman@gmail.com", skills: "Python, AI", atsScore: 94, status: "Selected" },
  ];

  const filtered = candidates.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
  );

  const badgeStyle = (status) => {
    const map = {
      Shortlisted: { bg: "#f0e8eb", color: "#9b4d6a" },
      Selected: { bg: "#dcfce7", color: "#16a34a" },
      Pending: { bg: "#fef9c3", color: "#ca8a04" },
    };
    const c = map[status] || { bg: "#f1f5f9", color: "#64748b" };
    return { padding: "4px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: "600", background: c.bg, color: c.color };
  };

  return (
    <div style={{ display: "flex", background: "#f5f5f7", minHeight: "100vh" }}>
      <AdminSidebar />
      <div style={{ flex: 1 }}>
        <AdminNavbar />
        <div style={{ padding: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1e1e2e", marginBottom: "6px" }}>Manage Candidates</h2>
          <p style={{ fontSize: "14px", color: "#7a5060", marginBottom: "24px" }}>Track and manage candidate applications.</p>
          <input
            type="text" placeholder="🔍 Search candidate..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "320px", padding: "10px 16px", marginBottom: "20px", borderRadius: "10px", border: "1.5px solid #e0d5d8", fontSize: "14px", outline: "none", background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
          />
          <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
              <thead>
                <tr>{["ID", "Name", "Email", "Skills", "ATS Score", "Status", "Actions"].map((h) => <th key={h} style={th}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c.id}>
                    <td style={td}>{c.id}</td>
                    <td style={td}><strong>{c.name}</strong></td>
                    <td style={td}>{c.email}</td>
                    <td style={td}>{c.skills}</td>
                    <td style={td}><AtsBar score={c.atsScore} /></td>
                    <td style={td}><span style={badgeStyle(c.status)}>{c.status}</span></td>
                    <td style={td}>
                      <button style={btn("linear-gradient(135deg,#9b4d6a,#7a3050)", "0 2px 8px rgba(155,77,106,0.3)")}>View</button>
                      <button style={btn("linear-gradient(135deg,#10b981,#059669)", "0 2px 8px rgba(16,185,129,0.3)")}>Resume</button>
                      <button style={btn("linear-gradient(135deg,#ef4444,#dc2626)", "0 2px 8px rgba(239,68,68,0.3)")}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCandidates;
