import React from 'react';
import { FaCode, FaTools, FaRobot, FaChartBar } from 'react-icons/fa';

const skills = [
  {
    title: 'Languages',
    icon: <FaCode className="text-4xl text-blue-500 mb-4" />,
    items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  },
   {
    title: 'Frameworks',
    icon: <FaCode className="text-4xl text-cyan-500 mb-4" />,
    items: ['React', 'FastAPI','LangChain', 'Streamlit'],
  },
  {
    title: 'Developer Tools',
    icon: <FaTools className="text-4xl text-green-500 mb-4" />,
    items: ['Git/GitHub','Docker', 'VS Code', 'PyCharm', 'IntelliJ'],
  },
  {
    title: 'Machine Learning',
    icon: <FaRobot className="text-4xl text-purple-500 mb-4" />,
    items: ['TensorFlow', 'Scikit-learn', 'Data Preprocessing', 'Model Optimization'],
  },
  {
    title: 'Deep Learning',
    icon: <FaRobot className="text-4xl text-purple-500 mb-4" />,
    items: ['PyTorch', 'TensorFlow', 'Keras', 'CNNs', 'RNNs', 'LSTMs', 'Transformers'],
  },
  {
    title: 'LLM & RAG Systems',
    icon: <FaRobot className="text-4xl text-purple-500 mb-4" />,
    items: ['LangChain', 'RAG', 'Pinecone', 'Qdrant','FAISS', 'ChromaDB', 'Prompt Engineering'],
  },
  {
    title: 'Data Analysis',
    icon: <FaChartBar className="text-4xl text-yellow-500 mb-4" />,
    items: ['Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
  },
  {
    title: 'Soft Skills',
    icon: <FaChartBar className="text-4xl text-pink-500 mb-4" />,
    items: ['Teamwork', 'Problem Solving', 'Good Communication', 'Time Management'],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="flex flex-col items-center text-center">
                {skill.icon}
                <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
                <ul className="text-gray-700 dark:text-gray-300">
                  {skill.items.map((item, i) => (
                    <li key={i} className="my-1">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
