import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function ComCharts() {

  const monthlyData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],

    datasets: [
      {
        label: "Applications",

        data: [22, 38, 45, 55, 72, 68],

        backgroundColor: "#2563eb",
      },
    ],
  };

  const candidateStatus = {
    labels: [
      "Selected",
      "Interview",
      "Shortlisted",
      "Rejected",
    ],

    datasets: [
      {
        data: [18, 24, 40, 18],

        backgroundColor: [
          "#22c55e",
          "#f59e0b",
          "#2563eb",
          "#ef4444",
        ],
      },
    ],
  };

  const styles = {

    container: {
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
      marginTop: "30px",
    },

    card: {
      flex: "1",
      minWidth: "400px",
      backgroundColor: "#ffffff",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,.1)",
    },

    heading: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#1e3a8a",
      marginBottom: "20px",
      textAlign: "center",
    },

  };

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <h2 style={styles.heading}>
          Monthly Applications
        </h2>

        <Bar data={monthlyData} />

      </div>

      <div style={styles.card}>

        <h2 style={styles.heading}>
          Candidate Status
        </h2>

        <Pie data={candidateStatus} />

      </div>

    </div>

  );

}

export default ComCharts;