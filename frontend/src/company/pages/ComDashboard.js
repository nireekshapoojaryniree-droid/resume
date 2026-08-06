import React from "react";

import ComNavbar from "../components/ComNavbar";
import ComSidebar from "../components/ComSidebar";
import ComDashboardcard from "../components/ComDashboardcard";
import ComCharts from "../components/ComCharts";
import ComInterviewSchedule from "../components/ComInterviewSchedule";
import ComCandidateTable from "../components/ComCandidateTable";
import ComFooter from "../components/ComFooter";

function ComDashboard() {

  return (

    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >

      <ComNavbar />

      <ComSidebar />

      <div
        style={{
          marginLeft: "260px",
          padding: "30px",
        }}
      >

        <h1
          style={{
            color: "#1e3a8a",
            marginBottom: "10px",
          }}
        >
          Company Dashboard
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "30px",
          }}
        >
          Welcome back! Here's an overview of your recruitment activities.
        </p>

        <ComDashboardcard />

                {/* Charts */}

        <div
          style={{
            marginTop: "30px",
          }}
        >

          <div
            style={{
              background: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >

            <h2
              style={{
                color: "#1e3a8a",
                marginBottom: "20px",
              }}
            >
              Recruitment Analytics
            </h2>

            <ComCharts />

          </div>

        </div>

        {/* Recent Applicants & Interview Schedule */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginTop: "30px",
          }}
        >

          <div
            style={{
              background: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >

            <h2
              style={{
                color: "#1e3a8a",
                marginBottom: "20px",
              }}
            >
              Recent Applicants
            </h2>

            <ComCandidateTable />

          </div>

          <div
            style={{
              background: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >

            <h2
              style={{
                color: "#1e3a8a",
                marginBottom: "20px",
              }}
            >
              Upcoming Interviews
            </h2>

            <ComInterviewSchedule />

          </div>

        </div>

                {/* AI Recruitment Insights */}

        <div
          style={{
            background: "#ffffff",
            marginTop: "30px",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >

          <h2
            style={{
              color: "#1e3a8a",
              marginBottom: "20px",
            }}
          >
            AI Recruitment Insights
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >

            <div
              style={{
                background: "#eff6ff",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h3 style={{ color: "#2563eb" }}>Best Performing Job</h3>
              <p>React Developer</p>
            </div>

            <div
              style={{
                background: "#ecfdf5",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h3 style={{ color: "#16a34a" }}>Average ATS Score</h3>
              <p>82%</p>
            </div>

            <div
              style={{
                background: "#fef9c3",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h3 style={{ color: "#ca8a04" }}>Interview Success Rate</h3>
              <p>76%</p>
            </div>

            <div
              style={{
                background: "#fdf2f8",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h3 style={{ color: "#db2777" }}>Hiring Recommendation</h3>
              <p>Increase Frontend Developer hiring this month.</p>
            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <div
          style={{
            background: "#ffffff",
            marginTop: "30px",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >

          <h2
            style={{
              color: "#1e3a8a",
              marginBottom: "20px",
            }}
          >
            Quick Actions
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >

            <button
              style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Post Job
            </button>

            <button
              style={{
                background: "#16a34a",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Manage Jobs
            </button>

            <button
              style={{
                background: "#f59e0b",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              View Applicants
            </button>

            <button
              style={{
                background: "#7c3aed",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Analytics
            </button>

          </div>

        </div>

        {/* Footer */}

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <ComFooter />
        </div>

      </div>

    </div>

  );

}

export default ComDashboard;