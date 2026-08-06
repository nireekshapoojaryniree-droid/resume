import React from "react";

function ComCandidateTable() {

  const candidates = [
    {
      id: 1,
      name: "Rahul Sharma",
      job: "Frontend Developer",
      ats: "92%",
      status: "Shortlisted",
    },
    {
      id: 2,
      name: "Priya Nair",
      job: "Backend Developer",
      ats: "88%",
      status: "Interview",
    },
    {
      id: 3,
      name: "Arjun Kumar",
      job: "UI/UX Designer",
      ats: "81%",
      status: "Pending",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      job: "React Developer",
      ats: "95%",
      status: "Selected",
    },
  ];

  const styles = {
    container: {
      backgroundColor: "#ffffff",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      marginTop: "30px",
      overflowX: "auto",
    },

    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#1e3a8a",
      marginBottom: "20px",
    },

    table: {
      width: "100%",
      borderCollapse: "collapse",
    },

    th: {
      backgroundColor: "#2563eb",
      color: "#fff",
      padding: "15px",
      textAlign: "left",
      fontSize: "15px",
    },

    td: {
      padding: "15px",
      borderBottom: "1px solid #e5e7eb",
      color: "#374151",
    },

    button: {
      backgroundColor: "#2563eb",
      color: "#fff",
      border: "none",
      padding: "8px 15px",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Selected":
        return { color: "#16a34a", fontWeight: "bold" };

      case "Shortlisted":
        return { color: "#2563eb", fontWeight: "bold" };

      case "Interview":
        return { color: "#f59e0b", fontWeight: "bold" };

      default:
        return { color: "#ef4444", fontWeight: "bold" };
    }
  };

  return (
    <div style={styles.container}>

      <h2 style={styles.heading}>
        Recent Applicants
      </h2>

      <table style={styles.table}>

        <thead>
          <tr>
            <th style={styles.th}>Candidate</th>
            <th style={styles.th}>Job Role</th>
            <th style={styles.th}>ATS Score</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>

        <tbody>

          {candidates.map((candidate) => (

            <tr key={candidate.id}>

              <td style={styles.td}>
                {candidate.name}
              </td>

              <td style={styles.td}>
                {candidate.job}
              </td>

              <td style={styles.td}>
                {candidate.ats}
              </td>

              <td
                style={{
                  ...styles.td,
                  ...getStatusStyle(candidate.status),
                }}
              >
                {candidate.status}
              </td>

              <td style={styles.td}>

                <button style={styles.button}>
                  View
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ComCandidateTable;