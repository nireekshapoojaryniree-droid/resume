import React from "react";
import { FaFileAlt, FaCheckCircle } from "react-icons/fa";

function ComATSScore() {

  const candidates = [
    {
      name: "Rahul Sharma",
      score: 92,
    },
    {
      name: "Priya Nair",
      score: 88,
    },
    {
      name: "Arjun Kumar",
      score: 81,
    },
    {
      name: "Sneha Reddy",
      score: 95,
    },
  ];

  const styles = {

    container: {
      background: "#ffffff",
      borderRadius: "15px",
      padding: "25px",
      marginTop: "30px",
      boxShadow: "0 5px 15px rgba(0,0,0,.1)",
    },

    heading: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "24px",
      color: "#1e3a8a",
      marginBottom: "25px",
      fontWeight: "bold",
    },

    card: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px",
      marginBottom: "15px",
      border: "1px solid #e5e7eb",
      borderRadius: "10px",
      background: "#f9fafb",
    },

    left: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },

    icon: {
      fontSize: "28px",
      color: "#2563eb",
    },

    name: {
      fontSize: "17px",
      fontWeight: "600",
    },

    progress: {
      width: "180px",
      height: "10px",
      background: "#e5e7eb",
      borderRadius: "10px",
      overflow: "hidden",
      marginTop: "8px",
    },

    fill: {
      height: "100%",
      background: "#22c55e",
      borderRadius: "10px",
    },

    right: {
      textAlign: "center",
    },

    score: {
      fontSize: "24px",
      color: "#2563eb",
      fontWeight: "bold",
    },

    selected: {
      color: "#16a34a",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      justifyContent: "center",
      marginTop: "5px",
    },

  };

  return (

    <div style={styles.container}>

      <div style={styles.heading}>
        <FaFileAlt />
        ATS Resume Scores
      </div>

      {candidates.map((candidate, index) => (

        <div key={index} style={styles.card}>

          <div style={styles.left}>

            <FaFileAlt style={styles.icon} />

            <div>

              <div style={styles.name}>
                {candidate.name}
              </div>

              <div style={styles.progress}>

                <div
                  style={{
                    ...styles.fill,
                    width: `${candidate.score}%`,
                  }}
                ></div>

              </div>

            </div>

          </div>

          <div style={styles.right}>

            <div style={styles.score}>
              {candidate.score}%
            </div>

            {candidate.score >= 85 && (

              <div style={styles.selected}>

                <FaCheckCircle />

                Qualified

              </div>

            )}

          </div>

        </div>

      ))}

    </div>

  );

}

export default ComATSScore;