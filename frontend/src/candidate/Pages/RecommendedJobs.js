import React from "react";
import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";
import JobCard from "../components/JobCard";

function RecommendedJobs() {

  const jobs = [
    {
      title: "React Developer",
      company: "TCS",
      location: "Pune",
      type: "Full Time",
      salary: "₹7-10 LPA"
    },
    {
      title: "Frontend Engineer",
      company: "Infosys",
      location: "Bangalore",
      type: "Full Time",
      salary: "₹6-9 LPA"
    },
    {
      title: "Software Developer",
      company: "Wipro",
      location: "Mysore",
      type: "Full Time",
      salary: "₹5-8 LPA"
    }
  ];

  return (

    <div style={page}>

      <CandidateSidebar />

      <main style={main}>

        <CandidateNavbar />

        <div style={content}>

          <h1>
            Recommended Jobs 💼
          </h1>

          <div style={jobsContainer}>

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

const jobsContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px"
};

export default RecommendedJobs;