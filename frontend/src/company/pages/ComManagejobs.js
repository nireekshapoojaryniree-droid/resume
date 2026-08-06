import React, { useState } from "react";
import ComNavbar from "../components/ComNavbar";
import ComSidebar from "../components/ComSidebar";

import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
  FaLock,
  FaBriefcase,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

function ComManageJobs() {

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const jobs = [
    {
      id:1,
      title:"React Developer",
      location:"Bangalore",
      type:"Full Time",
      status:"Active",
      applicants:45
    },
    {
      id:2,
      title:"Node.js Developer",
      location:"Mangalore",
      type:"Internship",
      status:"Closed",
      applicants:18
    },
    {
      id:3,
      title:"UI UX Designer",
      location:"Remote",
      type:"Full Time",
      status:"Active",
      applicants:27
    },
    {
      id:4,
      title:"AI Engineer",
      location:"Hyderabad",
      type:"Full Time",
      status:"Active",
      applicants:64
    }
  ];

  const filteredJobs = jobs.filter((job)=>{

      const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
      filter==="All" || job.status===filter;

      return matchesSearch && matchesFilter;

  });

  const cardStyle={
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
        background:"#f5f7fb",
        minHeight:"100vh"
      }}
    >

      <ComNavbar />
      <ComSidebar />

      <div
        style={{
          marginLeft:"260px",
          padding:"30px"
        }}
      >

        <h1
          style={{
            color:"#1e3a8a",
            marginBottom:"30px"
          }}
        >
          Manage Jobs
        </h1>

        {/* Dashboard Cards */}

        <div
          style={{
            display:"flex",
            gap:"20px",
            flexWrap:"wrap",
            marginBottom:"30px"
          }}
        >

          <div style={cardStyle}>
            <FaBriefcase
              size={35}
              color="#2563eb"
            />
            <h2>{jobs.length}</h2>
            <p>Total Jobs</p>
          </div>

          <div style={cardStyle}>
            <FaCheckCircle
              size={35}
              color="#16a34a"
            />
            <h2>
              {jobs.filter(job=>job.status==="Active").length}
            </h2>
            <p>Active Jobs</p>
          </div>

          <div style={cardStyle}>
            <FaTimesCircle
              size={35}
              color="#ef4444"
            />
            <h2>
              {jobs.filter(job=>job.status==="Closed").length}
            </h2>
            <p>Closed Jobs</p>
          </div>

          <div style={cardStyle}>
            <FaUsers
              size={35}
              color="#f59e0b"
            />
            <h2>
              {jobs.reduce((sum,job)=>sum+job.applicants,0)}
            </h2>
            <p>Total Applicants</p>
          </div>

        </div>

        {/* Search & Filter */}

        <div
          style={{
            display:"flex",
            justifyContent:"space-between",
            gap:"20px",
            marginBottom:"30px",
            flexWrap:"wrap"
          }}
        >

          <div
            style={{
              display:"flex",
              alignItems:"center",
              background:"#fff",
              padding:"10px 15px",
              borderRadius:"8px",
              width:"350px"
            }}
          >

            <FaSearch color="#2563eb"/>

            <input
              type="text"
              placeholder="Search Jobs..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              style={{
                border:"none",
                outline:"none",
                marginLeft:"10px",
                width:"100%",
                fontSize:"15px"
              }}
            />

          </div>

          <select
            value={filter}
            onChange={(e)=>setFilter(e.target.value)}
            style={{
              padding:"10px",
              borderRadius:"8px",
              border:"1px solid #ccc",
              width:"180px"
            }}
          >
            <option>All</option>
            <option>Active</option>
            <option>Closed</option>
          </select>

        </div>

        {/* Job Table */}

        <div
          style={{
            background:"#fff",
            borderRadius:"10px",
            overflow:"hidden",
            boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
          }}
        >

          <table
            style={{
              width:"100%",
              borderCollapse:"collapse"
            }}
          >

            <thead
              style={{
                background:"#2563eb",
                color:"#fff"
              }}
            >

              <tr>

                <th style={{padding:"15px"}}>Job</th>

                <th>Location</th>

                <th>Type</th>

                <th>Status</th>

                <th>Applicants</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

{filteredJobs.length > 0 ? (

    filteredJobs.map((job) => {

  return (

                  <tr
                    key={job.id}
                    style={{
                      textAlign: "center",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >

                    <td style={{ padding: "18px" }}>
                      {job.title}
                    </td>

                    <td>
                      {job.location}
                    </td>

                    <td>
                      {job.type}
                    </td>

                    <td>

                      <span
                        style={{
                          background:
                            job.status === "Active"
                              ? "#dcfce7"
                              : "#fee2e2",

                          color:
                            job.status === "Active"
                              ? "#15803d"
                              : "#dc2626",

                          padding: "6px 12px",

                          borderRadius: "20px",

                          fontWeight: "bold",
                        }}
                      >
                        {job.status}
                      </span>

                    </td>

                    <td>
                      {job.applicants}
                    </td>

                    <td>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "12px",
                        }}
                      >

                        <button
                          style={{
                            background: "#2563eb",
                            color: "#fff",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                        >
                          <FaEye />
                        </button>

                        <button
                          style={{
                            background: "#16a34a",
                            color: "#fff",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                        >
                          <FaEdit />
                        </button>

                        <button
                          style={{
                            background: "#ef4444",
                            color: "#fff",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                        >
                          <FaTrash />
                        </button>

                        <button
                          style={{
                            background: "#f59e0b",
                            color: "#fff",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                        >
                          <FaLock />
                        </button>

                      </div>

                    </td>

                  </tr>

                );

})

              ) : (

                <tr>

                  <td
                    colSpan="6"
                    style={{
                      padding: "30px",
                      textAlign: "center",
                      color: "#6b7280",
                    }}
                  >
                    No jobs found.
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

export default ComManageJobs;
