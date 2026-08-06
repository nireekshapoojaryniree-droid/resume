import React from "react";
import ComNavbar from "../components/ComNavbar";
import ComSidebar from "../components/ComSidebar";
import {
  FaBuilding,
  FaUserTie,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
  FaIndustry,
  FaUsers,
  FaCalendarAlt,
  FaLinkedin,
  FaEdit,
} from "react-icons/fa";

function CompanyProfile() {
  const company = {
    logo: "https://via.placeholder.com/120",
    companyName: "ABC Technologies",
    hrName: "John Smith",
    email: "hr@abctechnologies.com",
    phone: "+91 9876543210",
    website: "www.abctechnologies.com",
    industry: "Information Technology",
    companySize: "250 Employees",
    founded: "2018",
    location: "Bangalore, Karnataka",
    linkedin: "linkedin.com/company/abctechnologies",
    about:
      "ABC Technologies is an innovative software development company specializing in AI-powered recruitment, web applications, cloud solutions, and enterprise software.",
  };

  const styles = {
    page: {
      backgroundColor: "#f5f7fb",
      minHeight: "100vh",
    },

    content: {
      marginLeft: "260px",
      padding: "25px",
    },

    heading: {
      color: "#1e3a8a",
      marginBottom: "25px",
      fontSize: "30px",
      fontWeight: "bold",
    },

    card: {
      background: "#fff",
      borderRadius: "15px",
      padding: "30px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    },

    top: {
      display: "flex",
      alignItems: "center",
      gap: "25px",
      flexWrap: "wrap",
      marginBottom: "30px",
    },

    logo: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      border: "4px solid #2563eb",
    },

    companyName: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#1e3a8a",
    },

    infoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "20px",
      marginTop: "20px",
    },

    infoCard: {
      background: "#f8fafc",
      padding: "18px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    },

    icon: {
      color: "#2563eb",
      fontSize: "22px",
    },

    title: {
      fontWeight: "bold",
      color: "#111827",
    },

    aboutBox: {
      marginTop: "35px",
      background: "#f8fafc",
      padding: "20px",
      borderRadius: "10px",
      lineHeight: "1.8",
    },

    button: {
      marginTop: "30px",
      background: "#2563eb",
      color: "#fff",
      border: "none",
      padding: "12px 25px",
      borderRadius: "8px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "16px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.page}>
      <ComNavbar />
      <ComSidebar />

      <div style={styles.content}>
        <h1 style={styles.heading}>Company Profile</h1>

        <div style={styles.card}>
          <div style={styles.top}>
            <img
              src={company.logo}
              alt="Company Logo"
              style={styles.logo}
            />

            <div>
              <div style={styles.companyName}>
                {company.companyName}
              </div>

              <p>{company.industry}</p>
            </div>
          </div>

          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <FaUserTie style={styles.icon} />
              <div>
                <div style={styles.title}>HR Manager</div>
                <div>{company.hrName}</div>
              </div>
            </div>

            <div style={styles.infoCard}>
              <FaEnvelope style={styles.icon} />
              <div>
                <div style={styles.title}>Email</div>
                <div>{company.email}</div>
              </div>
            </div>

            <div style={styles.infoCard}>
              <FaPhone style={styles.icon} />
              <div>
                <div style={styles.title}>Phone</div>
                <div>{company.phone}</div>
              </div>
            </div>

            <div style={styles.infoCard}>
              <FaGlobe style={styles.icon} />
              <div>
                <div style={styles.title}>Website</div>
                <div>{company.website}</div>
              </div>
            </div>

            <div style={styles.infoCard}>
              <FaIndustry style={styles.icon} />
              <div>
                <div style={styles.title}>Industry</div>
                <div>{company.industry}</div>
              </div>
            </div>

            <div style={styles.infoCard}>
              <FaUsers style={styles.icon} />
              <div>
                <div style={styles.title}>Company Size</div>
                <div>{company.companySize}</div>
              </div>
            </div>

            <div style={styles.infoCard}>
              <FaCalendarAlt style={styles.icon} />
              <div>
                <div style={styles.title}>Founded</div>
                <div>{company.founded}</div>
              </div>
            </div>

            <div style={styles.infoCard}>
              <FaMapMarkerAlt style={styles.icon} />
              <div>
                <div style={styles.title}>Location</div>
                <div>{company.location}</div>
              </div>
            </div>

            <div style={styles.infoCard}>
              <FaLinkedin style={styles.icon} />
              <div>
                <div style={styles.title}>LinkedIn</div>
                <div>{company.linkedin}</div>
              </div>
            </div>

            <div style={styles.infoCard}>
              <FaBuilding style={styles.icon} />
              <div>
                <div style={styles.title}>Status</div>
                <div>Active Company</div>
              </div>
            </div>
          </div>

          <div style={styles.aboutBox}>
            <h3>About Company</h3>
            <p>{company.about}</p>
          </div>

          <button style={styles.button}>
            <FaEdit />
            Edit Profile
          </button>

        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;