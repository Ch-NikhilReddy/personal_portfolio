import React from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="container resume-container">
        <div className="resume-card">
          <header className="resume-header">
            <div className="resume-title-block">
              <h1>Nikhil Reddy Chittepu</h1>
              <p className="resume-subtitle">
                Full-Stack Developer | React.js | Next.js | Spring Boot | Node.js
              </p>
            </div>

            <div className="contact-info">
              <span>📞 <a href="tel:+917995214340">+91 7995214340</a></span>
              <span>📧 <a href="mailto:nikhil@example.com">nikhil@example.com</a></span>
              <span>
                💼
                <a
                  href="https://www.linkedin.com/in/chittepu-nikhil-reddy-3a78172b6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              <span>
                💻
                <a
                  href="https://github.com/Ch-NikhilReddy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </span>
            </div>

            <div className="header-actions">
              <a href="/pdf/Resume.pdf" download className="btn btn-primary">
                Download Resume
              </a>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </header>

          <main className="resume-main">
            <section className="resume-section">
              <h2>Professional Summary</h2>
              <p>
                Full-Stack Developer and B.Tech Information Technology student
                skilled in React.js, Next.js, Spring Boot, Node.js, MongoDB, and
                MySQL. Experienced in building and deploying production-ready web
                applications, REST APIs, authentication systems, and responsive
                user interfaces.
              </p>
            </section>

            <section className="resume-section split-section">
              <div>
                <h2>Education</h2>
                <div className="education-item">
                  <h3>B.Tech – Information Technology</h3>
                  <p>Anurag University, Hyderabad</p>
                  <p className="date">2023 – 2027</p>
                </div>
              </div>

              <div>
                <h2>Certifications</h2>
                <ul className="resume-list">
                  <li>Machine Learning Course (Started May 2025)</li>
                  <li>Full-Stack Web Development Self-Learning</li>
                </ul>
              </div>
            </section>

            <section className="resume-section">
              <h2>Technical Skills</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <strong>Languages</strong>
                  <p>Java, JavaScript, C</p>
                </div>
                <div className="skill-category">
                  <strong>Frontend</strong>
                  <p>HTML5, CSS3, Bootstrap, React.js, Next.js</p>
                </div>
                <div className="skill-category">
                  <strong>Backend</strong>
                  <p>Node.js, Express.js, Spring Boot</p>
                </div>
                <div className="skill-category">
                  <strong>Databases</strong>
                  <p>MongoDB, MySQL</p>
                </div>
                <div className="skill-category">
                  <strong>Tools</strong>
                  <p>Git, GitHub, VS Code, Postman, Vercel</p>
                </div>
                <div className="skill-category">
                  <strong>Concepts</strong>
                  <p>DBMS, REST APIs, Authentication, Full-Stack Development</p>
                </div>
              </div>
            </section>

            <section className="resume-section">
              <h2>Projects & Experience</h2>
              <div className="project-list">
                <div className="project-item">
                  <h3>Civic Issue Reporting System</h3>
                  <p>
                    Developed a platform for reporting civic issues with issue
                    tracking, status updates, and location-based reporting.
                  </p>
                </div>
                <div className="project-item">
                  <h3>Student–Teacher Appointment Booking System</h3>
                  <p>
                    Built an appointment system with dashboards for pending,
                    approved, and rejected booking status.
                  </p>
                </div>
                <div className="project-item">
                  <h3>Gas Agency Management System</h3>
                  <p>
                    Designed an online booking system with secure registration,
                    login, and booking management features.
                  </p>
                </div>
              </div>
            </section>

            <section className="resume-section">
              <h2>Strengths</h2>
              <ul className="resume-list">
                <li>Strong problem-solving skills</li>
                <li>Quick learner and self-motivated</li>
                <li>Excellent communication and teamwork</li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Resume;
