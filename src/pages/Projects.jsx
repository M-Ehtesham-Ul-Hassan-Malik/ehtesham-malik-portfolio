import React, { useState } from 'react';
import dataDoctor from '../assets/images/dataDoctor.png';
import mymovieverse from '../assets/images/mymovieverse.jpg';
import spamguardpro from '../assets/images/spamguardpro.png';

const projects = [
  {
    id: 1,
    title: 'My Movie Verse – AI-Powered Movie Recommendation',
    description: 'A content-based movie recommender built with Python, Streamlit, and Scikit-Learn. Suggests similar movies based on genres, descriptions, and cast using TMDB API and cosine similarity.',
    tags: ['Python', 'Streamlit', 'Machine Learning', 'Recommendation System', 'TMDB API'],
    img: mymovieverse,
    github: 'https://github.com/M-Ehtesham-Ul-Hassan-Malik/MovieVerse',
    live: 'https://mymovieverse.streamlit.app/',
  },
  {
    id: 2,
    title: 'SpamGuard Pro – AI SMS Spam Classifier',
    description: 'A sleek NLP-powered app that detects SMS spam using text preprocessing, CountVectorizer, and a trained ML model. Includes confidence levels and clean UI.',
    tags: ['Python', 'Streamlit', 'NLP', 'Spam Detection', 'Machine Learning'],
    img: spamguardpro,
    github: 'https://github.com/M-Ehtesham-Ul-Hassan-Malik/SpamGuard-Pro/',
    live: 'https://myspamguard.streamlit.app/',
  },
  {
    id: 3,
    title: 'The Data Doctor – Streamlined Data Cleaning & Visualization',
    description: 'A user-friendly Streamlit app for fast data cleaning and visualization. Features include missing value handling, outlier capping, column selection, and interactive plots.',
    tags: ['Python', 'Streamlit', 'Data Visualization', 'Data Cleaning'],
    img: dataDoctor,
    github: 'https://github.com/M-Ehtesham-Ul-Hassan-Malik/Data-Doctor/',
    live: 'https://mydatadoctor.streamlit.app/',
  },
];


const Projects = () => {
  const [previewImg, setPreviewImg] = useState(null);

  return (
    <section className="min-h-screen px-6 py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center dark:text-white mb-10">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setPreviewImg(project.img)}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-blue-600 dark:text-blue-400">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setPreviewImg(null)}
        >
          <div className="max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={previewImg}
              alt="Preview"
              className="w-full h-auto max-h-[90vh] rounded-lg shadow-lg object-contain"
            />
            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold"
              onClick={() => setPreviewImg(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
