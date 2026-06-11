import React, { useState } from 'react';
import './Projects.css';
import Modal from './Modal';

const projects = [
  {
    id: 1,
    title: 'Smart Hostel',
    description: 'Full-stack hostel complaint and maintenance management platform built with React.js, Spring Boot, and MySQL. Features secure authentication, role-based access control, complaint registration/tracking/resolution workflows, and administrative dashboards.',
    image: './images/p2.png',
    link: 'https://smart-hostel-nu.vercel.app'
  },
  {
    id: 2,
    title: 'Gas Agency',
    description: 'Full-stack gas booking and management platform using MongoDB, Express.js, React.js, and Node.js. Implements JWT-based authentication, role-based access control, booking workflows, payment options, email notifications, and admin features for order tracking.',
    image: './images/p2.png',
    link: 'https://gas-agency-ten.vercel.app/'
  },
  {
    id: 3,
    title: 'Ecoyaan Checkout',
    description: 'End-to-end e-commerce checkout workflow built with Next.js and React. Features server-side rendering, form validation, state management, responsive user interfaces, and optimized navigation with structured checkout and order confirmation flows.',
    image: './images/p1.png',
    link: 'https://ecoyaan-checkout-three-ebon.vercel.app'
  },
  {
    id: 4,
    title: 'Student–Teacher Booking',
    description: 'MERN-based appointment scheduling platform for students and teachers. Features secure authentication, appointment management workflows, RESTful APIs, MongoDB for persistent storage, and centralized scheduling for improved communication.',
    image: './images/p4.png',
    link: 'https://student-teacher-shym.vercel.app/'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id} onClick={() => openModal(project)}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a></p>
            </div>
          ))}
        </div>
        <Modal project={selectedProject} onClose={closeModal} />
      </div>
    </section>
  );
}

export default Projects;
