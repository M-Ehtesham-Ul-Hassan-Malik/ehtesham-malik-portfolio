// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, tags, img, github, live } = project;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <img src={img} alt={title} className="rounded-md w-full h-40 object-cover mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 my-2">{description}</p>

      {Array.isArray(tags) && (
        <div className="flex flex-wrap gap-2 my-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-sm bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex gap-4">
        <a href={github} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
          GitHub
        </a>
        <a href={live} target="_blank" rel="noreferrer" className="text-green-600 dark:text-green-400 hover:underline">
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
