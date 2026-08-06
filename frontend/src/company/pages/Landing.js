import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const styles = {

    page: {
      fontFamily: "Segoe UI, Arial, sans-serif",
      background: "#f5f7fb",
      color: "#222",
    },

    navbar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      background: "#ffffff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 8%",
      boxShadow: "0 3px 12px rgba(0,0,0,.08)",
    },

    logo: {
      display: "flex",
      alignItems: "center",
      fontSize: "26px",
      fontWeight: "bold",
      color: "#1e3a8a",
      cursor: "pointer",
    },

    logoIcon: {
      fontSize: "34px",
      marginRight: "10px",
    },

    menu: {
      display: "flex",
      gap: "35px",
      alignItems: "center",
    },

    menuItem: {
      cursor: "pointer",
      fontWeight: "600",
      color: "#333",
    },

    buttons: {
      display: "flex",
      gap: "15px",
    },

    loginBtn: {
      padding: "10px 24px",
      borderRadius: "8px",
      border: "2px solid #2563eb",
      background: "white",
      color: "#2563eb",
      cursor: "pointer",
      fontWeight: "bold",
    },

    registerBtn: {
      padding: "10px 24px",
      borderRadius: "8px",
      border: "none",
      background: "#2563eb",
      color: "white",
      cursor: "pointer",
      fontWeight: "bold",
    },

    hero: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "80px 8%",
      background: "linear-gradient(135deg,#0f172a,#1d4ed8,#2563eb)",
      color: "white",
    },

    left: {
      flex: 1,
      minWidth: "350px",
    },

    heading: {
      fontSize: "56px",
      fontWeight: "bold",
      lineHeight: "1.2",
    },

    blue: {
      color: "#7dd3fc",
    },

    paragraph: {
      marginTop: "25px",
      fontSize: "19px",
      lineHeight: "1.8",
      color: "#dbeafe",
    },

    heroButtons: {
      marginTop: "40px",
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
    },

    primary: {
      background: "white",
      color: "#2563eb",
      padding: "15px 35px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "16px",
    },

    secondary: {
      background: "transparent",
      color: "white",
      border: "2px solid white",
      padding: "15px 35px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "16px",
    },

    right: {
      flex: 1,
      minWidth: "350px",
      display: "flex",
      justifyContent: "center",
      marginTop: "30px",
    },

    card: {
      width: "420px",
      background: "rgba(255,255,255,.15)",
      backdropFilter: "blur(8px)",
      borderRadius: "20px",
      padding: "40px",
      textAlign: "center",
      boxShadow: "0 15px 30px rgba(0,0,0,.3)",
    },

    cardIcon: {
      fontSize: "80px",
    },

    cardTitle: {
      marginTop: "20px",
      fontSize: "30px",
      fontWeight: "bold",
    },

    cardText: {
      marginTop: "15px",
      lineHeight: "1.8",
      color: "#e5e7eb",
    },

  };

  return (

    <div style={styles.page}>

      <nav style={styles.navbar}>

        <div
          style={styles.logo}
          onClick={() => scrollToSection("home")}
        >
          <span style={styles.logoIcon}>💼</span>
          Smart Recruitment
        </div>

        <div style={styles.menu}>

          <span
            style={styles.menuItem}
            onClick={() => scrollToSection("home")}
          >
            Home
          </span>

          <span
            style={styles.menuItem}
            onClick={() => scrollToSection("about")}
          >
            About
          </span>

          <span
            style={styles.menuItem}
            onClick={() => scrollToSection("features")}
          >
            Features
          </span>

          <span
            style={styles.menuItem}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </span>

        </div>

        <div style={styles.buttons}>

          <button
            style={styles.loginBtn}
            onClick={() => navigate("/dashboard")}
          >
            Company Login
          </button>

          <button
            style={styles.registerBtn}
            onClick={() => navigate("/dashboard")}
          >
            Get Started
          </button>

        </div>

      </nav>

      <section id="home" style={styles.hero}>

        <div style={styles.left}>

          <h1 style={styles.heading}>
            Smart <span style={styles.blue}>Recruitment</span> System
          </h1>

          <p style={styles.paragraph}>
            An AI-powered recruitment platform connecting Companies,
            Candidates and Administrators in one intelligent hiring ecosystem.
          </p>

          <div style={styles.heroButtons}>

            <button
              style={styles.primary}
              onClick={() => navigate("/dashboard")}
            >
              Company Dashboard
            </button>

            <button
              style={styles.secondary}
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </button>

          </div>

        </div>

        <div style={styles.right}>

          <div style={styles.card}>

            <div style={styles.cardIcon}>🚀</div>

            <div style={styles.cardTitle}>
              Hire Smarter
            </div>

            <p style={styles.cardText}>
              ATS Resume Screening • Skill Matching • Interview Scheduling • Hiring Analytics • AI Recruitment
            </p>

          </div>

        </div>

      </section>

            {/* ================= ABOUT SECTION ================= */}

      <section
        id="about"
        style={{
          padding: "80px 8%",
          background: "#ffffff",
          textAlign: "center",
        }}
      >

        <h2
          style={{
            fontSize: "40px",
            color: "#1e3a8a",
            marginBottom: "20px",
          }}
        >
          About Smart Recruitment
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.9",
            fontSize: "18px",
            color: "#555",
          }}
        >
          Smart Recruitment System is an AI-powered hiring platform
          designed to simplify the recruitment process for companies,
          candidates, and administrators. It automates resume screening,
          skill matching, interview scheduling, and recruitment analytics,
          helping organizations hire the right candidates faster and more
          efficiently.
        </p>

      </section>

      {/* ================= FEATURES SECTION ================= */}

      <section
        id="features"
        style={{
          padding: "80px 8%",
          background: "#f4f8ff",
        }}
      >

        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            color: "#1e3a8a",
            marginBottom: "50px",
          }}
        >
          Our Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >

          {[
            {
              title: "ATS Resume Screening",
              desc: "Automatically filters resumes based on skills, experience and job requirements."
            },
            {
              title: "AI Skill Matching",
              desc: "Matches candidate skills with job requirements using Artificial Intelligence."
            },
            {
              title: "Job Management",
              desc: "Create, edit and manage multiple job postings from one dashboard."
            },
            {
              title: "Interview Scheduling",
              desc: "Schedule interviews and notify candidates instantly."
            },
            {
              title: "Recruitment Analytics",
              desc: "Track hiring progress with charts, reports and recruitment insights."
            },
            {
              title: "Secure Platform",
              desc: "Role-based authentication for Admin, Company and Candidate modules."
            }

          ].map((feature, index) => (

            <div
              key={index}
              style={{
                background: "#ffffff",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >

              <h3
                style={{
                  color: "#2563eb",
                  marginBottom: "15px",
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.8",
                }}
              >
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

            {/* ================= STATISTICS ================= */}

      <section
        style={{
          padding: "80px 8%",
          background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
          color: "#fff",
          textAlign: "center",
        }}
      >

        <h2
          style={{
            fontSize: "40px",
            marginBottom: "50px",
          }}
        >
          Platform Statistics
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "30px",
          }}
        >

          {[
            {
              number: "500+",
              title: "Companies"
            },
            {
              number: "12,000+",
              title: "Candidates"
            },
            {
              number: "3,500+",
              title: "Jobs Posted"
            },
            {
              number: "96%",
              title: "Hiring Success"
            }

          ].map((item,index)=>(

            <div
              key={index}
              style={{
                background:"rgba(255,255,255,0.12)",
                padding:"35px",
                borderRadius:"15px",
              }}
            >

              <h1
                style={{
                  fontSize:"50px",
                  marginBottom:"15px",
                }}
              >
                {item.number}
              </h1>

              <h3>
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section
        style={{
          padding:"80px 8%",
          background:"#ffffff",
        }}
      >

        <h2
          style={{
            textAlign:"center",
            fontSize:"40px",
            color:"#1e3a8a",
            marginBottom:"50px",
          }}
        >
          Why Choose Smart Recruitment?
        </h2>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
            gap:"30px",
          }}
        >

          <div
            style={{
              background:"#f8fbff",
              padding:"30px",
              borderRadius:"15px",
              boxShadow:"0 5px 15px rgba(0,0,0,.08)",
            }}
          >

            <h3 style={{color:"#2563eb"}}>
              ⚡ Faster Hiring
            </h3>

            <p
              style={{
                lineHeight:"1.8",
                color:"#555",
              }}
            >
              Reduce hiring time using AI-powered resume screening,
              ATS score evaluation and automated shortlisting.
            </p>

          </div>

          <div
            style={{
              background:"#f8fbff",
              padding:"30px",
              borderRadius:"15px",
              boxShadow:"0 5px 15px rgba(0,0,0,.08)",
            }}
          >

            <h3 style={{color:"#2563eb"}}>
              🤖 AI Powered
            </h3>

            <p
              style={{
                lineHeight:"1.8",
                color:"#555",
              }}
            >
              Smart AI algorithms recommend the best candidates
              according to skills, education and experience.
            </p>

          </div>

          <div
            style={{
              background:"#f8fbff",
              padding:"30px",
              borderRadius:"15px",
              boxShadow:"0 5px 15px rgba(0,0,0,.08)",
            }}
          >

            <h3 style={{color:"#2563eb"}}>
              🔒 Secure Platform
            </h3>

            <p
              style={{
                lineHeight:"1.8",
                color:"#555",
              }}
            >
              Separate secure login for Admin,
              Companies and Candidates with
              complete role-based access.
            </p>

          </div>

        </div>

      </section>

      {/* ================= AI HIGHLIGHTS ================= */}

      <section
        style={{
          padding:"80px 8%",
          background:"#eef5ff",
        }}
      >

        <h2
          style={{
            textAlign:"center",
            color:"#1e3a8a",
            fontSize:"40px",
            marginBottom:"50px",
          }}
        >
          AI Recruitment Highlights
        </h2>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
            gap:"25px",
          }}
        >

          <div
            style={{
              background:"#fff",
              padding:"30px",
              borderRadius:"15px",
              textAlign:"center",
              boxShadow:"0 4px 12px rgba(0,0,0,.08)",
            }}
          >

            <h3 style={{color:"#2563eb"}}>
              ATS Resume Score
            </h3>

            <p>
              Automatically ranks resumes based on job requirements.
            </p>

          </div>

          <div
            style={{
              background:"#fff",
              padding:"30px",
              borderRadius:"15px",
              textAlign:"center",
              boxShadow:"0 4px 12px rgba(0,0,0,.08)",
            }}
          >

            <h3 style={{color:"#16a34a"}}>
              Skill Matching
            </h3>

            <p>
              AI compares candidate skills with company requirements.
            </p>

          </div>

          <div
            style={{
              background:"#fff",
              padding:"30px",
              borderRadius:"15px",
              textAlign:"center",
              boxShadow:"0 4px 12px rgba(0,0,0,.08)",
            }}
          >

            <h3 style={{color:"#ea580c"}}>
              Hiring Analytics
            </h3>

            <p>
              Interactive dashboards help HR teams make better hiring decisions.
            </p>

          </div>

        </div>

      </section>

            {/* ================= CONTACT SECTION ================= */}

      <section
        id="contact"
        style={{
          padding: "80px 8%",
          background: "#ffffff",
          textAlign: "center",
        }}
      >

        <h2
          style={{
            fontSize: "40px",
            color: "#1e3a8a",
            marginBottom: "20px",
          }}
        >
          Contact Us
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            marginBottom: "50px",
          }}
        >
          We'd love to hear from you. Reach out to us anytime.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >

          <div
            style={{
              background: "#f8fbff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 12px rgba(0,0,0,.08)",
            }}
          >

            <h3 style={{ color: "#2563eb" }}>
              📧 Email
            </h3>

            <p>support@smartrecruitment.com</p>

          </div>

          <div
            style={{
              background: "#f8fbff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 12px rgba(0,0,0,.08)",
            }}
          >

            <h3 style={{ color: "#2563eb" }}>
              📞 Phone
            </h3>

            <p>+91 9876543210</p>

          </div>

          <div
            style={{
              background: "#f8fbff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 12px rgba(0,0,0,.08)",
            }}
          >

            <h3 style={{ color: "#2563eb" }}>
              📍 Address
            </h3>

            <p>Bangalore, Karnataka, India</p>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer
        style={{
          background: "#0f172a",
          color: "#fff",
          padding: "60px 8% 20px",
          marginTop: "0px",
        }}
      >

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "40px",
          }}
        >

          <div>

            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              💼 Smart Recruitment
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              Smart Recruitment System is an AI-powered recruitment
              platform that helps companies hire the best talent
              efficiently using ATS screening, AI skill matching,
              interview scheduling and recruitment analytics.
            </p>

          </div>

          <div>

            <h3>Quick Links</h3>

            <p>Home</p>
            <p>About</p>
            <p>Features</p>
            <p>Contact</p>

          </div>

          <div>

            <h3>Modules</h3>

            <p>Company</p>
            <p>Candidate</p>
            <p>Admin</p>

          </div>

          <div>

            <h3>Follow Us</h3>

            <p>LinkedIn</p>
            <p>GitHub</p>
            <p>Instagram</p>

          </div>

        </div>

        <hr
          style={{
            margin: "40px 0 20px",
            borderColor: "#334155",
          }}
        />

        <div
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "15px",
          }}
        >
          © 2026 Smart Recruitment System. All Rights Reserved.
        </div>

      </footer>

          </div>

  );

}

export default Landing;