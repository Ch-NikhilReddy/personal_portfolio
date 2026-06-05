import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-page">
            <div className="container">
                <header className="resume-header">
                    <h1>Nikhil Reddy Chittepu</h1>
                    <p className="resume-subtitle">Full-Stack Developer · B.Tech Information Technology</p>
                    <div className="contact-info">
                        <span>📍 Hyderabad, Telangana</span>
                        <span>📞 +91 7995214340</span>
                        <span>✉️ <a href="mailto:nikhilreddynikhil988@gmail.com">nikhilreddynikhil988@gmail.com</a></span>
                        <span>🔗 <a href="https://www.linkedin.com/in/chittepu-nikhil-reddy-3a78172b6" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
                        <span>🐙 <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                        <span>📄 <a href="/pdf/Resume.pdf" download="Nikhil_Reddy_Resume.pdf" className="resume-download-link">Download PDF</a></span>
                    </div>
                </header>

                <main className="resume-main">

                    <section className="resume-section">
                        <h2>Summary</h2>
                        <p>Full-Stack Developer and B.Tech Information Technology student skilled in React.js, Next.js, Spring Boot, Node.js, MongoDB, and MySQL. Experienced in building and deploying production-ready web applications, REST APIs, authentication systems, and responsive user interfaces. Passionate about software engineering and solving real-world problems through technology.</p>
                    </section>

                    <section className="resume-section">
                        <h2>Education</h2>
                        <div className="education-item">
                            <h3>B.Tech – Information Technology</h3>
                            <p>Anurag University, Hyderabad</p>
                            <p className="date">2023 – 2027</p>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Experience</h2>

                        <div className="education-item">
                            <h3>Technical Head — 2Carvn</h3>
                            <p className="date">Jun 2026 – Present</p>
                            <ul className="resume-list">
                                <li>Independently designed, developed, and deployed the official 2Carvn platform using Next.js and Express.js.</li>
                                <li>Lead technical operations, website maintenance, and technology-related decision making for the organization.</li>
                                <li>Develop digital solutions supporting educational initiatives and organizational activities.</li>
                                <li>Train and mentor students in Grades 7–9 on HTML, CSS, and web development fundamentals.</li>
                            </ul>
                        </div>

                        <div className="education-item" style={{marginTop: '24px'}}>
                            <h3>Web Development Intern — Unified Mentor</h3>
                            <p className="date">Jul 2025 – Oct 2025</p>
                            <ul className="resume-list">
                                <li>Developed responsive web applications using HTML, CSS, JavaScript, and modern frontend practices.</li>
                                <li>Collaborated on debugging, Git workflows, deployment, and version control processes.</li>
                                <li>Worked with real-world project workflows and deployment tools.</li>
                                <li>Improved understanding of scalable web application architecture and software development lifecycle.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Technical Skills</h2>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <strong>Languages:</strong> Java, JavaScript, C
                            </div>
                            <div className="skill-category">
                                <strong>Frontend:</strong> HTML5, CSS3, Bootstrap, React.js, Next.js
                            </div>
                            <div className="skill-category">
                                <strong>Backend:</strong> Node.js, Express.js, Spring Boot
                            </div>
                            <div className="skill-category">
                                <strong>Databases:</strong> MongoDB, MySQL
                            </div>
                            <div className="skill-category">
                                <strong>Tools &amp; Platforms:</strong> Git, GitHub, VS Code, Postman, Vercel
                            </div>
                            <div className="skill-category">
                                <strong>Core Concepts:</strong> DBMS, REST APIs, Authentication, Responsive Design, Full-Stack Development, Git Workflows
                            </div>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Projects</h2>

                        <div className="project-item">
                            <h3>
                                Smart Hostel Complaint &amp; Maintenance Management System &nbsp;·&nbsp;
                                <a href="https://vercel.app" target="_blank" rel="noopener noreferrer">Live</a>
                                &nbsp;|&nbsp;
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </h3>
                            <p><strong>Stack:</strong> React.js · Spring Boot · MySQL</p>
                            <ul className="resume-list">
                                <li>Developed a full-stack hostel management platform with complaint registration, tracking, and resolution workflows.</li>
                                <li>Implemented secure authentication and role-based access control for students and administrators.</li>
                                <li>Built administrative dashboards with centralized monitoring and status updates.</li>
                            </ul>
                        </div>

                        <div className="project-item">
                            <h3>
                                Gas Agency Management System &nbsp;·&nbsp;
                                <a href="https://github.com/Gas-Agency" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </h3>
                            <p><strong>Stack:</strong> MongoDB · Express.js · React.js · Node.js</p>
                            <ul className="resume-list">
                                <li>Built a full-stack gas booking platform with JWT-based authentication and role-based access control.</li>
                                <li>Integrated booking workflows, payment options, and email notification services.</li>
                                <li>Developed administrative features for order tracking and operational management.</li>
                            </ul>
                        </div>

                        <div className="project-item">
                            <h3>
                                Ecoyaan Checkout System &nbsp;·&nbsp;
                                <a href="https://github.com/Ecoyaan-Checkout" target="_blank" rel="noopener noreferrer">GitHub</li></a>
                            </h3>
                            <p><strong>Stack:</strong> Next.js · React</p>
                            <ul className="resume-list">
                                <li>Developed an end-to-end e-commerce checkout workflow with SSR, form validation, and state management.</li>
                                <li>Designed responsive UI with modern checkout and order confirmation flows.</li>
                            </ul>
                        </div>

                        <div className="project-item">
                            <h3>
                                Student–Teacher Appointment Booking System &nbsp;·&nbsp;
                                <a href="https://vercel.app" target="_blank" rel="noopener noreferrer">Live</a>
                                &nbsp;|&nbsp;
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </h3>
                            <p><strong>Stack:</strong> MongoDB · Express.js · React.js · Node.js</p>
                            <ul className="resume-list">
                                <li>Built a MERN-based appointment scheduling platform for students and teachers.</li>
                                <li>Developed RESTful APIs with MongoDB for persistent data and secure authentication.</li>
                                <li>Improved communication efficiency through centralized scheduling features.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Certifications</h2>
                        <ul className="resume-list">
                            <li>Web Development Internship Certificate — Unified Mentor</li>
                            <li>Networking Basics — Cisco Networking Academy</li>
                        </ul>
                    </section>

                    <section className="resume-section declaration">
                        <h2>Declaration</h2>
                        <p>I hereby declare that the information provided above is true to the best of my knowledge.</p>
                    </section>

                </main>
            </div>
        </div>
    );
};

export default Resume;
