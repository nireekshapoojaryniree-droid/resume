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

function ManageUsers() {
  const [search, setSearch] = useState("");
  const users = [
    { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", role: "Candidate", status: "Active" },
    { id: 2, name: "ABC Technologies", email: "hr@abc.com", role: "Company", status: "Active" },
    { id: 3, name: "Priya Shetty", email: "priya@gmail.com", role: "Candidate", status: "Blocked" },
  ];

  const filtered = users.filter(
    (u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex", background: "#f5f5f7", minHeight: "100vh" }}>
      <AdminSidebar />
      <div style={{ flex: 1 }}>
        <AdminNavbar />
        <div style={{ padding: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1e1e2e", marginBottom: "6px" }}>Manage Users</h2>
          <p style={{ fontSize: "14px", color: "#7a5060", marginBottom: "24px" }}>View and manage all registered users.</p>
          <input
            type="text" placeholder="🔍 Search by name or email..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "320px", padding: "10px 16px", marginBottom: "20px", borderRadius: "10px", border: "1.5px solid #e0d5d8", fontSize: "14px", outline: "none", background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
          />
          <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
              <thead>
                <tr>{["ID", "Name", "Email", "Role", "Status", "Actions"].map((h) => <th key={h} style={th}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {filtered.map((u) => (
                  <tr key={u.id}>
                    <td style={td}>{u.id}</td>
                    <td style={td}><strong>{u.name}</strong></td>
                    <td style={td}>{u.email}</td>
                    <td style={td}>{u.role}</td>
                    <td style={td}>
                      <span style={{ padding: "4px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: "600", background: u.status === "Active" ? "#f0e8eb" : "#fee2e2", color: u.status === "Active" ? "#9b4d6a" : "#dc2626" }}>
                        {u.status}
                      </span>
                    </td>
                    <td style={td}>
                      <button style={btn("linear-gradient(135deg,#9b4d6a,#7a3050)", "0 2px 8px rgba(155,77,106,0.3)")}>View</button>
                      <button style={btn("linear-gradient(135deg,#f59e0b,#d97706)", "0 2px 8px rgba(245,158,11,0.3)")}>Block</button>
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

export default ManageUsers;
