import React from "react";
import { FaUserCheck, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function ComSkillMatching() {

  const candidates = [
    {
      name: "Rahul Sharma",
      requiredSkills: ["React", "JavaScript", "HTML", "CSS"],
      matchedSkills: ["React", "JavaScript", "HTML", "CSS"],
      percentage: 100,
    },
    {
      name: "Priya Nair",
      requiredSkills: ["Node.js", "Express", "MongoDB", "REST API"],
      matchedSkills: ["Node.js", "Express", "MongoDB"],
      percentage: 75,
    },
    {
      name: "Arjun Kumar",
      requiredSkills: ["Figma", "UI Design", "Adobe XD"],
      matchedSkills: ["Figma", "UI Design"],
      percentage: 67,
    },
    {
      name: "Sneha Reddy",
      requiredSkills: ["React", "Node.js", "MongoDB"],
      matchedSkills: ["React", "Node.js", "MongoDB"],
      percentage: 100,
    },
  ];

  const getStatus = (percentage) => {
    if (percentage >= 90)
      return { text: "Excellent Match", color: "#16a34a" };

    if (percentage >= 70)
      return { text: "Good Match", color: "#2563eb" };

    return { text: "Average Match", color: "#f59e0b" };
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        marginTop: "30px",
        borderRadius: "15px",
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
        <FaUserCheck />
        Skill Matching
      </h2>

      {candidates.map((candidate, index) => {
        const status = getStatus(candidate.percentage);

        return (
          <div
            key={index}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h3 style={{ color: "#111827" }}>
              {candidate.name}
            </h3>

            <p>
              <strong>Required Skills:</strong>{" "}
              {candidate.requiredSkills.join(", ")}
            </p>

            <p>
              <strong>Matched Skills:</strong>{" "}
              {candidate.matchedSkills.join(", ")}
            </p>

            <div
              style={{
                marginTop: "12px",
                width: "100%",
                height: "10px",
                background: "#e5e7eb",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${candidate.percentage}%`,
                  height: "100%",
                  background: status.color,
                }}
              ></div>
            </div>

            <div
              style={{
                marginTop: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: status.color,
                }}
              >
                {candidate.percentage}% • {status.text}
              </span>

              {candidate.percentage >= 70 ? (
                <FaCheckCircle
                  color="#16a34a"
                  size={22}
                />
              ) : (
                <FaTimesCircle
                  color="#ef4444"
                  size={22}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ComSkillMatching;