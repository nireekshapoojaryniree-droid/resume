import React, { useState } from "react";
import ComNavbar from "../components/ComNavbar";
import ComSidebar from "../components/ComSidebar";

import {
  FaSearch,
  FaEye,
  FaDownload,
  FaCheck,
  FaTimes,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

function ComApplicants() {

  const [search, setSearch] = useState("");

  const applicants = [
    {
      id:1,
      name:"Rahul Sharma",
      job:"React Developer",
      ats:92,
      skill:95,
      status:"Pending",
      email:"rahul@gmail.com"
    },

    {
      id:2,
      name:"Priya Nair",
      job:"UI UX Designer",
      ats:88,
      skill:90,
      status:"Shortlisted",
      email:"priya@gmail.com"
    },

    {
      id:3,
      name:"Arjun Rao",
      job:"Node Developer",
      ats:75,
      skill:82,
      status:"Rejected",
      email:"arjun@gmail.com"
    },

    {
      id:4,
      name:"Sneha Patil",
      job:"AI Engineer",
      ats:96,
      skill:98,
      status:"Pending",
      email:"sneha@gmail.com"
    }

  ];

  const filteredApplicants = applicants.filter(applicant =>
    applicant.name.toLowerCase().includes(search.toLowerCase())
  );

  const cardStyle = {
    background:"#fff",
    padding:"20px",
    borderRadius:"10px",
    boxShadow:"0 3px 8px rgba(0,0,0,0.1)",
    flex:1,
    textAlign:"center",
    minWidth:"180px"
  };
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
            marginBottom: "30px",
          }}
        >
          Applicants
        </h1>

        {/* Summary Cards */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <div style={cardStyle}>
            <FaUsers size={35} color="#2563eb" />
            <h2>{applicants.length}</h2>
            <p>Total Applicants</p>
          </div>

          <div style={cardStyle}>
            <h2>
              {
                applicants.filter(
                  (a) => a.status === "Pending"
                ).length
              }
            </h2>
            <p>Pending</p>
          </div>

          <div style={cardStyle}>
            <h2>
              {
                applicants.filter(
                  (a) => a.status === "Shortlisted"
                ).length
              }
            </h2>
            <p>Shortlisted</p>
          </div>

          <div style={cardStyle}>
            <h2>
              {
                applicants.filter(
                  (a) => a.status === "Rejected"
                ).length
              }
            </h2>
            <p>Rejected</p>
          </div>
        </div>

        {/* Search */}

        <div
          style={{
            background: "#fff",
            padding: "12px 20px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            width: "350px",
            marginBottom: "25px",
          }}
        >
          <FaSearch color="#2563eb" />

          <input
            type="text"
            placeholder="Search Applicant..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              marginLeft: "10px",
              width: "100%",
              fontSize: "15px",
            }}
          />
        </div>

        {/* Applicants Table */}

        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead
              style={{
                background: "#2563eb",
                color: "#fff",
              }}
            >
              <tr>
                <th style={{ padding: "15px" }}>Candidate</th>
                <th>Job</th>
                <th>ATS</th>
                <th>Skill Match</th>
                <th>Status</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
                              {filteredApplicants.length > 0 ? (

                filteredApplicants.map((applicant) => (

                  <tr
                    key={applicant.id}
                    style={{
                      textAlign: "center",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >

                    <td style={{ padding: "18px" }}>
                      {applicant.name}
                    </td>

                    <td>
                      {applicant.job}
                    </td>

                    <td>
                      <span
                        style={{
                          background: "#dbeafe",
                          color: "#1d4ed8",
                          padding: "6px 12px",
                          borderRadius: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {applicant.ats}%
                      </span>
                    </td>

                    <td>
                      <span
                        style={{
                          background: "#dcfce7",
                          color: "#15803d",
                          padding: "6px 12px",
                          borderRadius: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {applicant.skill}%
                      </span>
                    </td>

                    <td>

                      <span
                        style={{
                          background:
                            applicant.status === "Pending"
                              ? "#fef3c7"
                              : applicant.status === "Shortlisted"
                              ? "#dcfce7"
                              : "#fee2e2",

                          color:
                            applicant.status === "Pending"
                              ? "#d97706"
                              : applicant.status === "Shortlisted"
                              ? "#15803d"
                              : "#dc2626",

                          padding: "6px 12px",
                          borderRadius: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {applicant.status}
                      </span>

                    </td>

                    <td>{applicant.email}</td>

                    <td>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "8px",
                          flexWrap: "wrap",
                        }}
                      >

                        <button
                          style={{
                            background: "#2563eb",
                            color: "#fff",
                            border: "none",
                            padding: "8px 10px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                          title="View Candidate"
                        >
                          <FaEye />
                        </button>

                        <button
                          style={{
                            background: "#7c3aed",
                            color: "#fff",
                            border: "none",
                            padding: "8px 10px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                          title="Download Resume"
                        >
                          <FaDownload />
                        </button>

                        <button
                          style={{
                            background: "#16a34a",
                            color: "#fff",
                            border: "none",
                            padding: "8px 10px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                          title="Shortlist"
                        >
                          <FaCheck />
                        </button>

                        <button
                          style={{
                            background: "#dc2626",
                            color: "#fff",
                            border: "none",
                            padding: "8px 10px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                          title="Reject"
                        >
                          <FaTimes />
                        </button>

                        <button
                          style={{
                            background: "#f59e0b",
                            color: "#fff",
                            border: "none",
                            padding: "8px 10px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                          title="Schedule Interview"
                        >
                          <FaCalendarAlt />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="7"
                    style={{
                      padding: "30px",
                      textAlign: "center",
                      color: "#6b7280",
                    }}
                  >
                    No applicants found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default ComApplicants;