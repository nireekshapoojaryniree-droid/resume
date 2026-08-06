import React, { useState } from "react";

import ComNavbar from "../components/ComNavbar";
import ComSidebar from "../components/ComSidebar";

import {
  FaSearch,
  FaTimesCircle,
  FaDownload,
  FaEnvelope,
  FaRedo,
  FaUsers
} from "react-icons/fa";

function ComRejectedCandidates() {

  const [search, setSearch] = useState("");

  const candidates = [

    {
      id:1,
      name:"Arjun Rao",
      job:"Node.js Developer",
      ats:74,
      skill:78,
      reason:"Low Technical Score",
      email:"arjun@gmail.com"
    },

    {
      id:2,
      name:"Kiran Kumar",
      job:"React Developer",
      ats:69,
      skill:72,
      reason:"Insufficient Experience",
      email:"kiran@gmail.com"
    },

    {
      id:3,
      name:"Neha Shetty",
      job:"UI/UX Designer",
      ats:71,
      skill:75,
      reason:"Communication Skills",
      email:"neha@gmail.com"
    }

  ];

  const filteredCandidates = candidates.filter((candidate)=>
    candidate.name.toLowerCase().includes(search.toLowerCase())
  );

  const cardStyle = {
    background:"#fff",
    padding:"20px",
    borderRadius:"12px",
    boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
    flex:1,
    minWidth:"180px",
    textAlign:"center"
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
Rejected Candidates
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
<h2>{candidates.length}</h2>
<p>Total Rejected</p>
</div>

<div style={cardStyle}>
<FaTimesCircle size={35} color="#dc2626"/>
<h2>
{
candidates.filter(c=>c.reason==="Low Technical Score").length
}
</h2>
<p>Technical Rejections</p>
</div>

<div style={cardStyle}>
<h2>
{
Math.round(
candidates.reduce((sum,c)=>sum+c.ats,0)/candidates.length
)
}%
</h2>
<p>Average ATS</p>
</div>

<div style={cardStyle}>
<h2>
{
Math.round(
candidates.reduce((sum,c)=>sum+c.skill,0)/candidates.length
)
}%
</h2>
<p>Average Skill Match</p>
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

{/* Rejected Candidates Table */}

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

<th>ATS</th>

<th>Skill Match</th>

<th>Reason</th>

<th>Email</th>

<th>Actions</th>

</tr>

</thead>

<tbody>


              {filteredCandidates.length > 0 ? (

                filteredCandidates.map((candidate) => (

                  <tr
                    key={candidate.id}
                    style={{
                      textAlign: "center",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >

                    <td style={{ padding: "15px" }}>
                      {candidate.name}
                    </td>

                    <td>
                      {candidate.job}
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
                        {candidate.ats}%
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
                        {candidate.skill}%
                      </span>

                    </td>

                    <td>

                      <span
                        style={{
                          background: "#fee2e2",
                          color: "#dc2626",
                          padding: "6px 12px",
                          borderRadius: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {candidate.reason}
                      </span>

                    </td>

                    <td>
                      {candidate.email}
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
                            background: "#2563eb",
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
                            background: "#dc2626",
                            color: "#fff",
                            border: "none",
                            padding: "8px 10px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                          title="Send Rejection Email"
                        >
                          <FaEnvelope />
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
                          title="Reconsider Candidate"
                        >
                          <FaRedo />
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
                    No rejected candidates found.
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

export default ComRejectedCandidates;