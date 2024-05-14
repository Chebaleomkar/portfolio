import React, { useState } from 'react';
import { projects } from '../../constants';
import ProjectCard from './ProjectCard';

const Project = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsToShow = showAllProjects ? projects : projects.slice(0, 8);

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div>
      <h2>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projectsToShow.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.image}
            demoUrl={project.webapp}
            githubUrl={project?.github}
            TitleColor={project?.TitleColor}
          />
        ))}
      </div>
      {!showAllProjects && (
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md" onClick={toggleShowAllProjects}>
          Show More
        </button>
      )}
    </div>
  );
}

export default Project;
