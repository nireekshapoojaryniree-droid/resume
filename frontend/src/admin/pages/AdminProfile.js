import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

function AdminProfile() {
  const [edit, setEdit] = useState(false);
  const [admin, setAdmin] = useState({
    name: "Admin User",
    email: "admin@smartrecruitment.com",
    phone: "9876543210",
    role: "Super Admin",
  });

  const handleChange = (e) => setAdmin({ ...admin, [e.target.name]: e.target.value });

  const styles = {
    card: {
      width: "480px", background: "white", padding: "32px",
      borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      borderTop: "4px solid #9b4d6a",
    },
    avatar: {
      width: "90px", height: "90px", borderRadius: "50%",
      background: "linear-gradient(135deg, #7a3050, #c08090)",
      display: "flex", justifyContent: "center", alignItems: "center",
      margin: "0 auto 20px", fontSize: "36px", color: "white",
      fontWeight: "700", boxShadow: "0 4px 16px rgba(155,77,106,0.35)",
    },
    label: {
      fontSize: "12px", fontWeight: "600", color: "#7a5060",
      textTransform: "uppercase", letterSpacing: "0.5px",
      marginBottom: "6px", display: "block",
    },
    input: {
      width: "100%", padding: "10px 14px", margin: "0 0 16px",
      border: "1.5px solid #e8dde2", borderRadius: "10px",
      fontSize: "14px", outline: "none", boxSizing: "border-box", background: "#faf8f9",
    },
    infoRow: { padding: "10px 0", borderBottom: "1px solid #f0eaec", fontSize: "14px", color: "#334155" },
    infoLabel: { fontWeight: "600", color: "#9b4d6a", marginRight: "8px" },
    button: {
      padding: "10px 24px", border: "none",
      background: "linear-gradient(135deg, #9b4d6a, #7a3050)",
      color: "white", borderRadius: "10px", cursor: "pointer",
      fontWeight: "600", fontSize: "14px", marginTop: "16px",
      boxShadow: "0 4px 12px rgba(155,77,106,0.3)",
    },
  };

  return (
    <div style={{ display: "flex", background: "#f5f5f7", minHeight: "100vh" }}>
      <AdminSidebar />
      <div style={{ flex: 1 }}>
        <AdminNavbar />
        <div style={{ padding: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1e1e2e", marginBottom: "24px" }}>Admin Profile</h2>
          <div style={styles.card}>
            <div style={styles.avatar}>A</div>
            {edit ? (
              <>
                <label style={styles.label}>Name</label>
                <input name="name" value={admin.name} onChange={handleChange} style={styles.input} />
                <label style={styles.label}>Email</label>
                <input name="email" value={admin.email} onChange={handleChange} style={styles.input} />
                <label style={styles.label}>Phone</label>
                <input name="phone" value={admin.phone} onChange={handleChange} style={styles.input} />
              </>
            ) : (
              <>
                <div style={styles.infoRow}><span style={styles.infoLabel}>Name:</span>{admin.name}</div>
                <div style={styles.infoRow}><span style={styles.infoLabel}>Email:</span>{admin.email}</div>
                <div style={styles.infoRow}><span style={styles.infoLabel}>Phone:</span>{admin.phone}</div>
                <div style={styles.infoRow}><span style={styles.infoLabel}>Role:</span>{admin.role}</div>
              </>
            )}
            <button style={styles.button} onClick={() => setEdit(!edit)}>
              {edit ? "💾 Save Profile" : "✏️ Edit Profile"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
