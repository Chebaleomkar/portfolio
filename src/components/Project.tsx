import React, { useState } from 'react';
import { projects } from '../../constants';
import ProjectCard from './ProjectCard';
import Title from './Title';

const Project = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsToShow = showAllProjects ? projects : projects.slice(0, 6); // Change the number to limit the initial display

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div>
      <Title id='projects' title='Projects' />
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
        <button
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
          onClick={toggleShowAllProjects}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Project;
