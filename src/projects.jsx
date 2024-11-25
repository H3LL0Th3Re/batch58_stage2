import { useState } from 'react';

function Projects() {
  const [projects] = useState([
    { id: 1, title: 'Project One', description: 'This is my first project.' },
    { id: 2, title: 'Project Two', description: 'This is my second project.' },
  ]);

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
