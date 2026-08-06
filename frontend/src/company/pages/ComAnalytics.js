import React from "react";

import ComNavbar from "../components/ComNavbar";
import ComSidebar from "../components/ComSidebar";

import {
Bar,
Pie
} from "react-chartjs-2";

import {

Chart as ChartJS,

CategoryScale,

LinearScale,

BarElement,

ArcElement,

Tooltip,

Legend

} from "chart.js";

ChartJS.register(

CategoryScale,

LinearScale,

BarElement,

ArcElement,

Tooltip,

Legend

);

function ComAnalytics(){

const barData={

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"
],

datasets:[

{

label:"Applications",

data:[
35,
48,
56,
72,
61,
80
],

backgroundColor:"#2563eb"

}

]

};

const pieData={

labels:[
"Pending",
"Shortlisted",
"Rejected"
],

datasets:[

{

data:[
35,
45,
20
],

backgroundColor:[
"#f59e0b",
"#16a34a",
"#dc2626"
]

}

]

};

const cardStyle={

background:"#fff",

padding:"20px",

borderRadius:"12px",

boxShadow:"0 4px 10px rgba(0,0,0,0.1)",

textAlign:"center",

flex:1,

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
Analytics Dashboard
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
<h2>25</h2>
<p>Total Jobs Posted</p>
</div>

<div style={cardStyle}>
<h2>180</h2>
<p>Total Applicants</p>
</div>

<div style={cardStyle}>
<h2>65</h2>
<p>Shortlisted</p>
</div>

<div style={cardStyle}>
<h2>89%</h2>
<p>Average ATS Score</p>
</div>

</div>

{/* Charts */}

<div
style={{
display:"flex",
gap:"25px",
flexWrap:"wrap"
}}
>

{/* Bar Chart */}

<div
style={{
background:"#fff",
padding:"20px",
borderRadius:"12px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
flex:"2",
minWidth:"600px"
}}
>

<h2
style={{
marginBottom:"20px",
color:"#1e3a8a"
}}
>
Monthly Applications
</h2>

<Bar data={barData} />

</div>

{/* Pie Chart */}

<div
style={{
background:"#fff",
padding:"20px",
borderRadius:"12px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
flex:"1",
minWidth:"320px"
}}
>

<h2
style={{
marginBottom:"20px",
color:"#1e3a8a"
}}
>
Application Status
</h2>

<Pie data={pieData} />

</div>

</div>

{/* Top Performing Jobs */}

<div
style={{
marginTop:"30px",
background:"#fff",
padding:"25px",
borderRadius:"12px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
}}
>

<h2
style={{
marginBottom:"20px",
color:"#1e3a8a"
}}
>
Top Performing Jobs
</h2>

<table
style={{
width:"100%",
borderCollapse:"collapse"
}}
>

<thead>

<tr
style={{
background:"#2563eb",
color:"#fff"
}}
>

<th style={{padding:"15px"}}>Job Title</th>

<th>Applications</th>

<th>Status</th>

</tr>

</thead>

<tbody>

<tr>

<td style={{padding:"15px"}}>React Developer</td>

<td>45</td>

<td style={{color:"green"}}>High</td>

</tr>

<tr>

<td style={{padding:"15px"}}>Node.js Developer</td>

<td>32</td>

<td style={{color:"orange"}}>Medium</td>

</tr>

<tr>

<td style={{padding:"15px"}}>AI Engineer</td>

<td>28</td>

<td style={{color:"green"}}>High</td>

</tr>

<tr>

<td style={{padding:"15px"}}>UI/UX Designer</td>

<td>19</td>

<td style={{color:"red"}}>Low</td>

</tr>

</tbody>

</table>

</div>

      {/* Recruitment Summary */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >

        <div
          style={{
            background: "#fff",
            flex: 1,
            minWidth: "280px",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "#1e3a8a",
              marginBottom: "15px",
            }}
          >
            Recruitment Summary
          </h2>

          <p style={{ marginBottom: "10px" }}>
            ✅ Total Interviews Scheduled: <b>42</b>
          </p>

          <p style={{ marginBottom: "10px" }}>
            ⭐ Candidates Hired: <b>18</b>
          </p>

          <p style={{ marginBottom: "10px" }}>
            📈 Hiring Success Rate: <b>72%</b>
          </p>

          <p>
            ⏱ Average Hiring Time: <b>12 Days</b>
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            flex: 1,
            minWidth: "280px",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "#1e3a8a",
              marginBottom: "15px",
            }}
          >
            HR Insights
          </h2>

          <ul
            style={{
              paddingLeft: "20px",
              lineHeight: "2",
            }}
          >
            <li>React Developer received the highest applications.</li>
            <li>AI Engineer has the highest ATS average score.</li>
            <li>UI/UX Designer needs more promotion.</li>
            <li>Overall recruitment performance is improving.</li>
          </ul>
        </div>

      </div>

    </div>

  </div>

);

}

export default ComAnalytics;
