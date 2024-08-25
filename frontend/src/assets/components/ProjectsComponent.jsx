// Projects.jsx
import React, { useState } from 'react';
import '../Styles/Projects.css';
import projects from '../projects';
import { Link } from 'react-router-dom'

const truncateDescription = (description, maxLength = 100) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + '...';
};

const ProjectsComponent = () => {
    const [expandedProject, setExpandedProject] = useState(null);

    return (
        <div className="projects-container">
            <h2 className="projects-title">Projects</h2>
            <a href="/projects">
                <Link to='/projects' className="projects-link-btn">Go to Bright's Projects</Link>
            </a>
            <div className="projects-list">
                {projects.map((proj, index) => (
                    <div key={proj.title} className={`project-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
                        <h3 className="project-title">{proj.title}</h3>
                        <p className="project-date">{proj.date}</p>
                        <div className="project-technologies">
                            {proj.technologies.map((tech, i) => (
                                <span key={i} className="technology-tag">{tech}</span>
                            ))}
                        </div>
                        <p className="project-description">
                            {expandedProject === proj.title
                                ? proj.description
                                : truncateDescription(proj.description)}
                        </p>
                        <button
                            className="read-more-btn"
                            onClick={() => setExpandedProject(
                                expandedProject === proj.title ? null : proj.title
                            )}
                        >
                            {expandedProject === proj.title ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsComponent;