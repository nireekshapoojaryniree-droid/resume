import React, { useState } from "react";
import ComNavbar from "../components/ComNavbar";
import ComSidebar from "../components/ComSidebar";

import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaEnvelope,
  FaCalendarAlt,
  FaVideo,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";

function ComInterviews() {

  const [search, setSearch] = useState("");

  const interviews = [
    {
      id: 1,
      candidate: "Rahul Sharma",
      job: "React Developer",
      interviewer: "Priya HR",
      date: "12 Aug 2026",
      time: "10:00 AM",
      mode: "Online",
      status: "Scheduled",
    },
    {
      id: 2,
      candidate: "Sneha Patil",
      job: "AI Engineer",
      interviewer: "Rohan HR",
      date: "14 Aug 2026",
      time: "02:00 PM",
      mode: "Offline",
      status: "Completed",
    },
    {
      id: 3,
      candidate: "Arjun Rao",
      job: "Node Developer",
      interviewer: "Anita HR",
      date: "15 Aug 2026",
      time: "11:30 AM",
      mode: "Online",
      status: "Cancelled",
    },
  ];

  const filteredInterviews = interviews.filter((interview) =>
    interview.candidate
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const cardStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    flex: 1,
    minWidth: "180px",
    textAlign: "center",
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
Interview Management
</h1>

{/* Summary Cards */}

<div
style={{
display:"flex",
gap:"20px",
flexWrap:"wrap",
marginBottom:"30px"
}}
>

<div style={cardStyle}>
<FaUsers size={35} color="#2563eb"/>
<h2>{interviews.length}</h2>
<p>Total Interviews</p>
</div>

<div style={cardStyle}>
<FaClock size={35} color="#f59e0b"/>
<h2>
{interviews.filter(i=>i.status==="Scheduled").length}
</h2>
<p>Scheduled</p>
</div>

<div style={cardStyle}>
<FaCheckCircle size={35} color="#16a34a"/>
<h2>
{interviews.filter(i=>i.status==="Completed").length}
</h2>
<p>Completed</p>
</div>

<div style={cardStyle}>
<FaTimesCircle size={35} color="#dc2626"/>
<h2>
{interviews.filter(i=>i.status==="Cancelled").length}
</h2>
<p>Cancelled</p>
</div>

</div>

{/* Search */}

<div
style={{
background:"#fff",
padding:"12px 20px",
borderRadius:"10px",
display:"flex",
alignItems:"center",
width:"350px",
marginBottom:"30px"
}}
>

<FaSearch color="#2563eb"/>

<input
type="text"
placeholder="Search Candidate..."
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

{/* Interview Table */}

<div
style={{
background:"#fff",
borderRadius:"12px",
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

<th style={{padding:"15px"}}>Candidate</th>

<th>Job</th>

<th>Interviewer</th>

<th>Date</th>

<th>Time</th>

<th>Mode</th>

<th>Status</th>

<th>Actions</th>

</tr>

</thead>

<tbody>
    
            {filteredInterviews.length > 0 ? (

              filteredInterviews.map((interview) => (

                <tr
                  key={interview.id}
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >

                  <td style={{ padding: "15px" }}>
                    {interview.candidate}
                  </td>

                  <td>{interview.job}</td>

                  <td>{interview.interviewer}</td>

                  <td>{interview.date}</td>

                  <td>{interview.time}</td>

                  <td>

                    <span
                      style={{
                        background:
                          interview.mode === "Online"
                            ? "#dbeafe"
                            : "#fef3c7",

                        color:
                          interview.mode === "Online"
                            ? "#1d4ed8"
                            : "#b45309",

                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      <FaVideo
                        style={{ marginRight: "5px" }}
                      />
                      {interview.mode}
                    </span>

                  </td>

                  <td>

                    <span
                      style={{
                        background:
                          interview.status === "Scheduled"
                            ? "#dbeafe"
                            : interview.status === "Completed"
                            ? "#dcfce7"
                            : "#fee2e2",

                        color:
                          interview.status === "Scheduled"
                            ? "#1d4ed8"
                            : interview.status === "Completed"
                            ? "#15803d"
                            : "#dc2626",

                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {interview.status}
                    </span>

                  </td>

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
                          background: "#16a34a",
                          color: "#fff",
                          border: "none",
                          padding: "8px 10px",
                          borderRadius: "6px",
                          cursor: "pointer",
                        }}
                        title="Edit Interview"
                      >
                        <FaEdit />
                      </button>

                      <button
                        style={{
                          background: "#2563eb",
                          color: "#fff",
                          border: "none",
                          padding: "8px 10px",
                          borderRadius: "6px",
                          cursor: "pointer",
                        }}
                        title="Send Email"
                      >
                        <FaEnvelope />
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
                        title="Cancel Interview"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="8"
                  style={{
                    padding: "30px",
                    textAlign: "center",
                    color: "#6b7280",
                  }}
                >
                  No interviews found.
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

export default ComInterviews;