import React, { useEffect, useRef } from 'react';
import './Resume.css';

const Resume = () => {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );
        sectionsRef.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const addRef = (el) => {
        if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
    };

    const experience = [
        {
            title: 'Technical Head',
            company: '2Carvn',
            period: 'Jun 2026 – Present',
            points: [
                'Independently designed, developed, and deployed the official 2Carvn platform using Next.js and Express.js.',
                'Lead technical operations, website maintenance, and technology-related decision making.',
                'Develop digital solutions supporting educational initiatives and organizational activities.',
                'Train and mentor students in Grades 7–9 on HTML, CSS, and web development fundamentals.',
            ],
        },
        {
            title: 'Web Development Intern',
            company: 'Unified Mentor',
            period: 'Jul 2025 – Oct 2025',
            points: [
                'Developed responsive web applications using HTML, CSS, JavaScript, and modern frontend practices.',
                'Collaborated on debugging, Git workflows, deployment, and version control processes.',
                'Worked with real-world project workflows and deployment tools.',
                'Improved understanding of scalable web application architecture and SDLC.',
            ],
        },
    ];

    const projects = [
        {
            name: 'Smart Hostel Complaint & Maintenance System',
            stack: 'React.js · Spring Boot · MySQL',
            links: [{ label: 'Live', href: 'https://vercel.app' }, { label: 'GitHub', href: 'https://github.com' }],
            points: [
                'Full-stack hostel management platform with complaint registration and resolution workflows.',
                'Secure authentication and role-based access for students and administrators.',
                'Administrative dashboards with centralized monitoring and status updates.',
            ],
        },
        {
            name: 'Gas Agency Management System',
            stack: 'MongoDB · Express.js · React.js · Node.js',
            links: [{ label: 'GitHub', href: 'https://github.com/Gas-Agency' }],
            points: [
                'Full-stack gas booking platform with JWT-based auth and role-based access control.',
                'Integrated booking workflows, payment options, and email notification services.',
                'Admin features for order tracking and operational management.',
            ],
        },
        {
            name: 'Ecoyaan Checkout System',
            stack: 'Next.js · React',
            links: [{ label: 'GitHub', href: 'https://github.com/Ecoyaan-Checkout' }],
            points: [
                'End-to-end e-commerce checkout with SSR, form validation, and state management.',
                'Responsive modern UI with optimized checkout and order confirmation flows.',
            ],
        },
        {
            name: 'Student–Teacher Appointment Booking System',
            stack: 'MERN Stack',
            links: [{ label: 'Live', href: 'https://vercel.app' }, { label: 'GitHub', href: 'https://github.com' }],
            points: [
                'MERN-based appointment scheduling platform for students and teachers.',
                'RESTful APIs with MongoDB for persistent data, secure auth, and scheduling workflows.',
            ],
        },
    ];

    const skills = [
        { label: 'Languages', value: 'Java, JavaScript, C' },
        { label: 'Frontend', value: 'HTML5, CSS3, Bootstrap, React.js, Next.js' },
        { label: 'Backend', value: 'Node.js, Express.js, Spring Boot' },
        { label: 'Databases', value: 'MongoDB, MySQL' },
        { label: 'Tools & Platforms', value: 'Git, GitHub, VS Code, Postman, Vercel' },
        { label: 'Core Concepts', value: 'DBMS, REST APIs, Authentication, Responsive Design, Git Workflows' },
    ];

    return (
        <div className="resume-page">
            {/* Decorative bg blobs */}
            <div className="blob blob-1" aria-hidden="true" />
            <div className="blob blob-2" aria-hidden="true" />

            <div className="resume-container">
                {/* ── HEADER ── */}
                <header className="resume-header" ref={addRef}>
                    <div className="header-tag">Portfolio · Resume</div>
                    <h1>Nikhil Reddy<br /><span>Chittepu</span></h1>
                    <p className="resume-role">Full-Stack Developer · B.Tech IT · Anurag University</p>
                    <div className="contact-strip">
                        <a href="tel:+917995214340">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                            +91 79952 14340
                        </a>
                        <a href="mailto:nikhilreddynikhil988@gmail.com">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            nikhilreddynikhil988@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/chittepu-nikhil-reddy-3a78172b6" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                            LinkedIn
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                            GitHub
                        </a>
                        <a href="/pdf/Resume.pdf" download="Nikhil_Reddy_Resume.pdf" className="download-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            Download PDF
                        </a>
                    </div>
                </header>

                {/* ── SUMMARY ── */}
                <section className="resume-section" ref={addRef}>
                    <h2><span className="section-num">01</span>Summary</h2>
                    <p className="summary-text">
                        Full-Stack Developer and B.Tech Information Technology student skilled in React.js, Next.js,
                        Spring Boot, Node.js, MongoDB, and MySQL. Experienced in building and deploying production-ready
                        web applications, REST APIs, authentication systems, and responsive UIs. Passionate about
                        software engineering and solving real-world problems through technology.
                    </p>
                </section>

                {/* ── EDUCATION ── */}
                <section className="resume-section" ref={addRef}>
                    <h2><span className="section-num">02</span>Education</h2>
                    <div className="edu-card">
                        <div className="edu-left">
                            <div className="edu-icon">🎓</div>
                        </div>
                        <div className="edu-right">
                            <h3>B.Tech – Information Technology</h3>
                            <p className="edu-school">Anurag University, Hyderabad</p>
                            <span className="edu-period">2023 – 2027</span>
                        </div>
                    </div>
                </section>

                {/* ── EXPERIENCE ── */}
                <section className="resume-section" ref={addRef}>
                    <h2><span className="section-num">03</span>Experience</h2>
                    <div className="timeline">
                        {experience.map((exp, i) => (
                            <div className="timeline-item" key={i}>
                                <div className="timeline-dot" />
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <div>
                                            <h3>{exp.title}</h3>
                                            <span className="company">{exp.company}</span>
                                        </div>
                                        <span className="period">{exp.period}</span>
                                    </div>
                                    <ul>
                                        {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── PROJECTS ── */}
                <section className="resume-section" ref={addRef}>
                    <h2><span className="section-num">04</span>Projects</h2>
                    <div className="projects-grid">
                        {projects.map((proj, i) => (
                            <div className="project-card" key={i}>
                                <div className="project-card-header">
                                    <div>
                                        <h3>{proj.name}</h3>
                                        <span className="stack">{proj.stack}</span>
                                    </div>
                                    <div className="proj-links">
                                        {proj.links.map((l, j) => (
                                            <a key={j} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                                        ))}
                                    </div>
                                </div>
                                <ul>
                                    {proj.points.map((pt, j) => <li key={j}>{pt}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── SKILLS ── */}
                <section className="resume-section" ref={addRef}>
                    <h2><span className="section-num">05</span>Technical Skills</h2>
                    <div className="skills-table">
                        {skills.map((s, i) => (
                            <div className="skill-row" key={i}>
                                <span className="skill-label">{s.label}</span>
                                <span className="skill-value">{s.value}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CERTIFICATIONS ── */}
                <section className="resume-section" ref={addRef}>
                    <h2><span className="section-num">06</span>Certifications</h2>
                    <ul className="cert-list">
                        <li>
                            <span className="cert-icon">🏅</span>
                            <div>
                                <strong>Web Development Internship Certificate</strong>
                                <span>Unified Mentor</span>
                            </div>
                        </li>
                        <li>
                            <span className="cert-icon">🌐</span>
                            <div>
                                <strong>Networking Basics</strong>
                                <span>Cisco Networking Academy</span>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Resume;
