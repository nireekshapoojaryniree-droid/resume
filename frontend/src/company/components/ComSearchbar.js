import React from "react";
import { FaSearch } from "react-icons/fa";

function ComSearchBar() {
  const styles = {
    container: {
      width: "100%",
      maxWidth: "450px",
      position: "relative",
    },

    input: {
      width: "100%",
      padding: "12px 18px 12px 45px",
      border: "1px solid #d1d5db",
      borderRadius: "30px",
      outline: "none",
      fontSize: "15px",
      backgroundColor: "#f8fafc",
      boxSizing: "border-box",
    },

    icon: {
      position: "absolute",
      left: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "18px",
      color: "#6b7280",
    },
  };

  return (
  <div style={styles.container}>
    <FaSearch style={styles.icon} />

    <input
      type="text"
      placeholder="Search candidates, jobs..."
      style={styles.input}
    />
  </div>
);
}

export default ComSearchBar;