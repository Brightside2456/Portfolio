// Projects.jsx
import React from 'react';
import '../Styles/Projects.css';
import projects from '../projects';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2 className="projects-title">Projects</h2>
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
                        <p className="project-description">{proj.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;