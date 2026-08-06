import React from "react";

import CandidateSidebar from "../components/CandidateSidebar";
import CandidateNavbar from "../components/CandidateNavbar";
import DashboardCard from "../components/DashboardCard";
import JobCard from "../components/JobCard";
import ResumeCard from "../components/ResumeCard";
import InterviewCard from "../components/InterviewCard";
import ChatbotWidget from "../components/ChatbotWidget";

function CandidateDashboard() {

  const jobs = [
    {
      title: "Frontend Developer",
      company: "Infosys",
      location: "Bangalore",
      type: "Full Time",
      salary: "₹6-8 LPA"
    },
    {
      title: "React Developer",
      company: "TCS",
      location: "Pune",
      type: "Full Time",
      salary: "₹7-10 LPA"
    },
    {
      title: "Software Engineer",
      company: "Wipro",
      location: "Mysore",
      type: "Full Time",
      salary: "₹5-7 LPA"
    }
  ];

  return (

    <div style={{
      minHeight: "100vh",
      background: "#f8fafc"
    }}>

      <CandidateSidebar />

      <main style={{
        marginLeft: "250px"
      }}>

        <CandidateNavbar />

        <div style={{
          padding: "30px"
        }}>


          {/* Welcome */}

          <div style={{
            background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
            color: "white",
            padding: "30px",
            borderRadius: "14px",
            marginBottom: "25px"
          }}>

            <h1 style={{ marginTop: 0 }}>
              Welcome back, Candidate! 👋
            </h1>

            <p style={{
              color: "#dbeafe"
            }}>
              Continue your career journey and find your
              dream job.
            </p>

          </div>


          {/* Statistics */}

          <div style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4, 1fr)",
            gap: "18px",
            marginBottom: "25px"
          }}>

            <DashboardCard
              icon="📄"
              title="Resume Score"
              value="85%"
              subtitle="Good profile"
            />

            <DashboardCard
              icon="🎯"
              title="ATS Score"
              value="91%"
              subtitle="Excellent"
            />

            <DashboardCard
              icon="📋"
              title="Applications"
              value="12"
              subtitle="3 shortlisted"
            />

            <DashboardCard
              icon="🏆"
              title="Ranking"
              value="#18"
              subtitle="Among candidates"
            />

          </div>


          {/* Resume + Interview */}

          <div style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr",
            gap: "20px",
            marginBottom: "30px"
          }}>

            <ResumeCard />

            <InterviewCard />

          </div>


          {/* Recommended Jobs */}

          <section>

            <div style={{
              display: "flex",
              justifyContent: "space-between"
            }}>

              <h2>
                Recommended Jobs
              </h2>

              <span style={{
                color: "#2563eb"
              }}>
                View All
              </span>

            </div>


            <div style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3,1fr)",
              gap: "18px"
            }}>

              {jobs.map((job, index) => (

                <JobCard
                  key={index}
                  job={job}
                />

              ))}

            </div>

          </section>

        </div>

      </main>


      <ChatbotWidget />

    </div>
  );
}

export default CandidateDashboard;