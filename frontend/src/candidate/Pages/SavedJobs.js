import React from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";
import JobCard from "../components/JobCard";

function SavedJobs() {

  const jobs = [
    {
      title: "Full Stack Developer",
      company: "Accenture",
      location: "Bangalore",
      type: "Full Time",
      salary: "₹8-12 LPA"
    },
    {
      title: "React Developer",
      company: "Tech Mahindra",
      location: "Hyderabad",
      type: "Full Time",
      salary: "₹6-9 LPA"
    }
  ];

  return (

    <div style={page}>

      <CandidateSidebar />

      <main style={main}>

        <CandidateNavbar />

        <div style={content}>

          <h1>
            Saved Jobs 🔖
          </h1>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px"
          }}>

            {jobs.map((job, index) => (
              <JobCard
                key={index}
                job={job}
              />
            ))}

          </div>

        </div>

      </main>

    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "#f8fafc"
};

const main = {
  marginLeft: "250px"
};

const content = {
  padding: "30px"
};

export default SavedJobs;