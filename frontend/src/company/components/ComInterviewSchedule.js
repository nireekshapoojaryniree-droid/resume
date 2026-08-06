import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaLaptop,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ComInterviewSchedule() {

  const interviews = [
    {
      id: 1,
      candidate: "Rahul Sharma",
      job: "Frontend Developer",
      date: "12 Aug 2026",
      time: "10:00 AM",
      mode: "Online",
      location: "Google Meet",
      status: "Scheduled",
    },
    {
      id: 2,
      candidate: "Priya Nair",
      job: "Backend Developer",
      date: "13 Aug 2026",
      time: "02:30 PM",
      mode: "Offline",
      location: "Company Office",
      status: "Scheduled",
    },
    {
      id: 3,
      candidate: "Arjun Kumar",
      job: "UI/UX Designer",
      date: "14 Aug 2026",
      time: "11:30 AM",
      mode: "Online",
      location: "Microsoft Teams",
      status: "Completed",
    },
  ];

  const getStatusColor = (status) => {
    if (status === "Scheduled") return "#2563eb";
    if (status === "Completed") return "#16a34a";
    return "#ef4444";
  };

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "25px",
        borderRadius: "15px",
        marginTop: "30px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#1e3a8a",
          marginBottom: "25px",
        }}
      >
        <FaCalendarAlt />
        Interview Schedule
      </h2>

      {interviews.map((interview) => (

        <div
          key={interview.id}
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "20px",
            background: "#f9fafb",
          }}
        >

          <h3
            style={{
              marginBottom: "15px",
              color: "#111827",
            }}
          >
            {interview.candidate}
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "15px",
            }}
          >

            <div>
              <FaUser color="#2563eb" />{" "}
              <strong>Job:</strong> {interview.job}
            </div>

            <div>
              <FaCalendarAlt color="#2563eb" />{" "}
              <strong>Date:</strong> {interview.date}
            </div>

            <div>
              <FaClock color="#2563eb" />{" "}
              <strong>Time:</strong> {interview.time}
            </div>

            <div>
              <FaLaptop color="#2563eb" />{" "}
              <strong>Mode:</strong> {interview.mode}
            </div>

            <div>
              <FaMapMarkerAlt color="#2563eb" />{" "}
              <strong>Location:</strong> {interview.location}
            </div>

            <div>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color: getStatusColor(interview.status),
                  fontWeight: "bold",
                }}
              >
                {interview.status}
              </span>
            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default ComInterviewSchedule;