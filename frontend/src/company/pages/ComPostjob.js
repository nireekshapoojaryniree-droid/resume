import React, { useState } from "react";
import ComNavbar from "../components/ComNavbar";
import ComSidebar from "../components/ComSidebar";
import ComFooter from "../components/ComFooter";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaGraduationCap,
  FaTools,
  FaCalendarAlt,
  FaUpload,
  FaSave,
  FaUndo,
} from "react-icons/fa";

function ComPostjob() {

  const [job, setJob] = useState({
    title: "",
    category: "",
    description: "",
    skills: "",
    experience: "",
    education: "",
    salary: "",
    type: "Full Time",
    mode: "On Site",
    location: "",
    vacancies: "",
    deadline: "",
    ats: true,
    aiMatching: true,
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setJob({
      ...job,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFile = (e) => {
    setJob({
      ...job,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(job);
    alert("Job Posted Successfully!");
  };

  const handleReset = () => {
    setJob({
      title: "",
      category: "",
      description: "",
      skills: "",
      experience: "",
      education: "",
      salary: "",
      type: "Full Time",
      mode: "On Site",
      location: "",
      vacancies: "",
      deadline: "",
      ats: true,
      aiMatching: true,
      file: null,
    });
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    marginTop: "8px",
    marginBottom: "20px",
    fontSize: "15px",
    boxSizing: "border-box",
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#1e3a8a",
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
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              color: "#1e3a8a",
              marginBottom: "30px",
            }}
          >
            <FaBriefcase /> Post New Job
          </h1>

          <form onSubmit={handleSubmit}>

            <label style={labelStyle}>
              Job Title
            </label>

            <input
              style={inputStyle}
              type="text"
              name="title"
              value={job.title}
              onChange={handleChange}
              placeholder="Frontend Developer"
            />

            <label style={labelStyle}>
              Job Category
            </label>

            <select
              style={inputStyle}
              name="category"
              value={job.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option>Software Development</option>
              <option>Web Development</option>
              <option>AI / ML</option>
              <option>Data Science</option>
              <option>UI/UX</option>
            </select>

            <label style={labelStyle}>
              Job Description
            </label>

            <textarea
              style={{
                ...inputStyle,
                height: "120px",
              }}
              name="description"
              value={job.description}
              onChange={handleChange}
              placeholder="Describe the job..."
            />

            <label style={labelStyle}>
              <FaTools /> Required Skills
            </label>

            <textarea
              style={{
                ...inputStyle,
                height: "90px",
              }}
              name="skills"
              value={job.skills}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB..."
            />

                        <label style={labelStyle}>
              Experience Required (Years)
            </label>

            <input
              style={inputStyle}
              type="number"
              name="experience"
              value={job.experience}
              onChange={handleChange}
              placeholder="2"
            />

            <label style={labelStyle}>
              <FaGraduationCap /> Education Required
            </label>

            <select
              style={inputStyle}
              name="education"
              value={job.education}
              onChange={handleChange}
            >
              <option value="">Select Education</option>
              <option>BCA</option>
              <option>B.Sc</option>
              <option>B.E / B.Tech</option>
              <option>MCA</option>
              <option>M.Tech</option>
              <option>Any Graduate</option>
            </select>

            <label style={labelStyle}>
              <FaMoneyBillWave /> Salary (Annual)
            </label>

            <input
              style={inputStyle}
              type="text"
              name="salary"
              value={job.salary}
              onChange={handleChange}
              placeholder="6 LPA"
            />

            <label style={labelStyle}>
              Employment Type
            </label>

            <select
              style={inputStyle}
              name="type"
              value={job.type}
              onChange={handleChange}
            >
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>

            <label style={labelStyle}>
              Work Mode
            </label>

            <select
              style={inputStyle}
              name="mode"
              value={job.mode}
              onChange={handleChange}
            >
              <option>On Site</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>

            <label style={labelStyle}>
              <FaMapMarkerAlt /> Job Location
            </label>

            <input
              style={inputStyle}
              type="text"
              name="location"
              value={job.location}
              onChange={handleChange}
              placeholder="Bangalore"
            />

            <label style={labelStyle}>
              Number of Vacancies
            </label>

            <input
              style={inputStyle}
              type="number"
              name="vacancies"
              value={job.vacancies}
              onChange={handleChange}
              placeholder="5"
            />

            <label style={labelStyle}>
              <FaCalendarAlt /> Application Deadline
            </label>

            <input
              style={inputStyle}
              type="date"
              name="deadline"
              value={job.deadline}
              onChange={handleChange}
            />

            <label style={labelStyle}>
              <FaUpload /> Upload Job Description (PDF)
            </label>

            <input
              style={inputStyle}
              type="file"
              accept=".pdf"
              onChange={handleFile}
            />

                        <div
              style={{
                display: "flex",
                gap: "40px",
                marginTop: "20px",
                marginBottom: "30px",
                flexWrap: "wrap",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: "bold",
                  color: "#1e3a8a",
                }}
              >
                <input
                  type="checkbox"
                  name="ats"
                  checked={job.ats}
                  onChange={handleChange}
                />
                Enable ATS Resume Screening
              </label>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: "bold",
                  color: "#1e3a8a",
                }}
              >
                <input
                  type="checkbox"
                  name="aiMatching"
                  checked={job.aiMatching}
                  onChange={handleChange}
                />
                Enable AI Skill Matching
              </label>
            </div>

            <div
              style={{
                background: "#eff6ff",
                borderLeft: "5px solid #2563eb",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "30px",
                color: "#1e3a8a",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>
                Recruitment Settings
              </h3>

              <p>
                • ATS automatically filters resumes based on required skills.
              </p>

              <p>
                • AI Skill Matching compares candidate skills with job
                requirements.
              </p>

              <p>
                • Uploaded Job Description PDF can be viewed by candidates.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "20px",
              }}
            >
              <button
                type="button"
                onClick={handleReset}
                style={{
                  background: "#6b7280",
                  color: "#fff",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                <FaUndo />
                Reset
              </button>

              <button
                type="submit"
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                <FaSave />
                Post Job
              </button>
            </div>

          </form>

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

  );

}

export default ComPostjob;