import React from "react";

function CandidateNavbar() {

  const styles = {

    navbar: {
      height: "70px",
      background: "white",
      borderBottom: "1px solid #e5e7eb",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 30px"
    },

    search: {
      width: "300px",
      padding: "11px 15px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      outline: "none"
    },

    right: {
      display: "flex",
      alignItems: "center",
      gap: "20px"
    },

    notification: {
      fontSize: "20px",
      cursor: "pointer"
    },

    profile: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },

    avatar: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      background: "#2563eb",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold"
    }

  };

  return (

    <header style={styles.navbar}>

      <input
        type="text"
        placeholder="Search jobs..."
        style={styles.search}
      />

      <div style={styles.right}>

        <span style={styles.notification}>
          🔔
        </span>

        <div style={styles.profile}>

          <div style={styles.avatar}>
            C
          </div>

          <span>
            Candidate
          </span>

        </div>

      </div>

    </header>

  );
}

export default CandidateNavbar;