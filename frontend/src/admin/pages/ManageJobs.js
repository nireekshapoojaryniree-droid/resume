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

function ManageJobs() {
  const [search, setSearch] = useState("");
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Infosys", location: "Bangalore", applications: 45, status: "Active" },
    { id: 2, title: "Backend Developer", company: "TCS", location: "Hyderabad", applications: 32, status: "Pending" },
    { id: 3, title: "AI Engineer", company: "Wipro", location: "Mysore", applications: 20, status: "Closed" },
  ];

  const filtered = jobs.filter(
    (j) => j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase())
  );

  const badgeStyle = (status) => {
    const map = {
      Active: { bg: "#f0e8eb", color: "#9b4d6a" },
      Pending: { bg: "#fef9c3", color: "#ca8a04" },
      Closed: { bg: "#fee2e2", color: "#dc2626" },
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
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1e1e2e", marginBottom: "6px" }}>Manage Jobs</h2>
          <p style={{ fontSize: "14px", color: "#7a5060", marginBottom: "24px" }}>Approve, reject, or manage job postings.</p>
          <input
            type="text" placeholder="🔍 Search job title or company..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "320px", padding: "10px 16px", marginBottom: "20px", borderRadius: "10px", border: "1.5px solid #e0d5d8", fontSize: "14px", outline: "none", background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
          />
          <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
              <thead>
                <tr>{["ID", "Job Title", "Company", "Location", "Applications", "Status", "Actions"].map((h) => <th key={h} style={th}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {filtered.map((j) => (
                  <tr key={j.id}>
                    <td style={td}>{j.id}</td>
                    <td style={td}><strong>{j.title}</strong></td>
                    <td style={td}>{j.company}</td>
                    <td style={td}>{j.location}</td>
                    <td style={td}>{j.applications}</td>
                    <td style={td}><span style={badgeStyle(j.status)}>{j.status}</span></td>
                    <td style={td}>
                      <button style={btn("linear-gradient(135deg,#10b981,#059669)", "0 2px 8px rgba(16,185,129,0.3)")}>Approve</button>
                      <button style={btn("linear-gradient(135deg,#f59e0b,#d97706)", "0 2px 8px rgba(245,158,11,0.3)")}>Reject</button>
                      <button style={btn("linear-gradient(135deg,#ef4444,#dc2626)", "0 2px 8px rgba(239,68,68,0.3)")}>Delete</button>
                      <button style={btn("linear-gradient(135deg,#9b4d6a,#7a3050)", "0 2px 8px rgba(155,77,106,0.3)")}>View</button>
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

export default ManageJobs;
