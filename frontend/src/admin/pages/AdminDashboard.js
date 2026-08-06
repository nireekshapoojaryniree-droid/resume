import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import StatCard from "../components/StatCard";

function AdminDashboard() {
  const styles = {
    container: { display: "flex", background: "#f5f5f7", minHeight: "100vh" },
    main: { flex: 1 },
    content: { padding: "32px" },
    pageTitle: { fontSize: "24px", fontWeight: "700", color: "#1e1e2e", marginBottom: "8px" },
    subtitle: { fontSize: "14px", color: "#7a5060", marginBottom: "28px" },
    cards: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" },
  };

  return (
    <div style={styles.container}>
      <AdminSidebar />
      <div style={styles.main}>
        <AdminNavbar />
        <div style={styles.content}>
          <h1 style={styles.pageTitle}>Dashboard</h1>
          <p style={styles.subtitle}>Welcome back, Admin! Here's what's happening.</p>
          <div style={styles.cards}>
            <StatCard title="Total Candidates" value="500" icon="🎯" color="#9b4d6a" />
            <StatCard title="Companies" value="80" icon="🏢" color="#7a3050" />
            <StatCard title="Active Jobs" value="120" icon="💼" color="#b06080" />
            <StatCard title="Applications" value="1,500" icon="📋" color="#c08090" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
