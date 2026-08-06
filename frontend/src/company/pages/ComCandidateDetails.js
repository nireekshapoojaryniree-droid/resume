import React, { useState } from "react";
import ComNavbar from "../components/ComNavbar";
import ComSidebar from "../components/ComSidebar";
import ComFooter from "../components/ComFooter";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaDownload,
  FaCheck,
  FaTimes,
  FaCalendarAlt
} from "react-icons/fa";

function ComCandidateDetails() {

const [notes,setNotes]=useState("");

const candidate={

name:"Rahul Sharma",

email:"rahul@gmail.com",

phone:"+91 9876543210",

location:"Bangalore",

education:"MCA",

experience:"2 Years",

skills:"React, Node.js, MongoDB, Express",

ats:92,

skillMatch:95

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
Candidate Details
</h1>

<div
style={{
display:"flex",
gap:"30px",
alignItems:"flex-start",
flexWrap:"wrap"
}}
>

{/* Profile Card */}

<div
style={{
background:"#fff",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
width:"320px",
textAlign:"center"
}}
>

<img

src="https://via.placeholder.com/150"

alt="Candidate"

style={{
width:"150px",
height:"150px",
borderRadius:"50%",
marginBottom:"20px"
}}
/>

<h2>{candidate.name}</h2>

<p>
<FaEnvelope color="#2563eb"/> {candidate.email}
</p>

<p>
<FaPhone color="#16a34a"/> {candidate.phone}
</p>

<p>
<FaMapMarkerAlt color="#ef4444"/> {candidate.location}
</p>

</div>

{/* Details Card */}

<div
style={{
background:"#fff",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
flex:1
}}
>

<h2
style={{
marginBottom:"20px",
color:"#1e3a8a"
}}
>
Professional Details
</h2>

<p>

<FaGraduationCap color="#2563eb"/>

<b> Education :</b>

{candidate.education}

</p>

<br/>

<p>

<FaBriefcase color="#16a34a"/>

<b> Experience :</b>

{candidate.experience}

</p>

<br/>

<p>

<FaTools color="#f59e0b"/>

<b> Skills :</b>

{candidate.skills}

</p>

<br/>

<div
style={{
display:"flex",
gap:"30px",
flexWrap:"wrap",
marginTop:"25px"
}}
>

<div
style={{
background:"#dbeafe",
padding:"20px",
borderRadius:"10px",
flex:1,
textAlign:"center"
}}
>

<h2>{candidate.ats}%</h2>

<p>ATS Score</p>

</div>

<div
style={{
background:"#dcfce7",
padding:"20px",
borderRadius:"10px",
flex:1,
textAlign:"center"
}}
>

<h2>{candidate.skillMatch}%</h2>

<p>AI Skill Match</p>

</div>

</div>

            {/* Resume Section */}

            <div
              style={{
                marginTop: "30px",
              }}
            >

              <h2
                style={{
                  color: "#1e3a8a",
                  marginBottom: "15px",
                }}
              >
                Resume
              </h2>

              <button
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "15px",
                }}
              >
                <FaDownload />
                Download Resume
              </button>

            </div>

            {/* HR Notes */}

            <div
              style={{
                marginTop: "35px",
              }}
            >

              <h2
                style={{
                  color: "#1e3a8a",
                  marginBottom: "15px",
                }}
              >
                HR Notes
              </h2>

              <textarea
                rows="6"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Write interview observations, candidate strengths, weaknesses, remarks..."
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  fontSize: "15px",
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
              />

            </div>

            {/* Action Buttons */}

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "35px",
                flexWrap: "wrap",
              }}
            >

              <button
                style={{
                  background: "#16a34a",
                  color: "#fff",
                  border: "none",
                  padding: "12px 22px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: "bold",
                }}
              >
                <FaCheck />
                Shortlist
              </button>

              <button
                style={{
                  background: "#dc2626",
                  color: "#fff",
                  border: "none",
                  padding: "12px 22px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: "bold",
                }}
              >
                <FaTimes />
                Reject
              </button>

              <button
                style={{
                  background: "#f59e0b",
                  color: "#fff",
                  border: "none",
                  padding: "12px 22px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: "bold",
                }}
              >
                <FaCalendarAlt />
                Schedule Interview
              </button>

            </div>

          </div>

                </div>

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

export default ComCandidateDetails;