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

function ManageCompanies() {
  const [search, setSearch] = useState("");
  const companies = [
    { id: 1, company: "Infosys", email: "hr@infosys.com", jobs: 12, status: "Verified" },
    { id: 2, company: "TCS", email: "careers@tcs.com", jobs: 8, status: "Pending" },
    { id: 3, company: "Wipro", email: "hr@wipro.com", jobs: 15, status: "Verified" },
  ];

  const filtered = companies.filter(
    (c) => c.company.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
  );

  const badgeStyle = (verified) => ({
    padding: "4px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: "600",
    background: verified ? "#f0e8eb" : "#fef9c3",
    color: verified ? "#9b4d6a" : "#ca8a04",
  });

  return (
    <div style={{ display: "flex", background: "#f5f5f7", minHeight: "100vh" }}>
      <AdminSidebar />
      <div style={{ flex: 1 }}>
        <AdminNavbar />
        <div style={{ padding: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1e1e2e", marginBottom: "6px" }}>Manage Companies</h2>
          <p style={{ fontSize: "14px", color: "#7a5060", marginBottom: "24px" }}>Review and verify registered companies.</p>
          <input
            type="text" placeholder="🔍 Search company..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "320px", padding: "10px 16px", marginBottom: "20px", borderRadius: "10px", border: "1.5px solid #e0d5d8", fontSize: "14px", outline: "none", background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
          />
          <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
              <thead>
                <tr>{["ID", "Company", "Email", "Jobs Posted", "Status", "Actions"].map((h) => <th key={h} style={th}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c.id}>
                    <td style={td}>{c.id}</td>
                    <td style={td}><strong>{c.company}</strong></td>
                    <td style={td}>{c.email}</td>
                    <td style={td}>{c.jobs}</td>
                    <td style={td}><span style={badgeStyle(c.status === "Verified")}>{c.status}</span></td>
                    <td style={td}>
                      <button style={btn("linear-gradient(135deg,#10b981,#059669)", "0 2px 8px rgba(16,185,129,0.3)")}>Verify</button>
                      <button style={btn("linear-gradient(135deg,#ef4444,#dc2626)", "0 2px 8px rgba(239,68,68,0.3)")}>Reject</button>
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

export default ManageCompanies;
