import React from 'react';

const educationData = [
  {
    degree: 'BS Software Engineering',
    institution: 'FAST NUCES, Karachi',
    duration: '2022 – 2026 (Expected)',
    description:
      'Focused on core programming, databases, software design, and AI. Member of multiple tech clubs and winner of intra-university competitions.'
  },
  {
    degree: 'FSc Pre-Engineering',
    institution: 'Fazaia Degree College Base Faisal, Karachi',
    duration: '2020 – 2022',
    description:
      'Completed on a 100% scholarship. Excelled in Physics, Chemistry, and Mathematics. Member of the editorial board of the college magazine "Uqab". Participated in science exhibitions and inter-collegiate competitions. Maintained top academic ranking.'
  },
  {
    degree: 'IGCSE O Levels',
    institution: 'The Hub Cadet College, Karachi',
    duration: '2016 – 2020',
    description:
      'Completed on a 100% scholarship. Achieved 6 As, 2 A*s, and 2 Bs. Active member of the Debate Club. Participated in Table Tennis, Football, Chess, and Cricket. Also part of the Student Entrepreneurship Program.'
  },
];

const Education = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Education Timeline</h2>

        <div className="relative border-l border-blue-500 pl-8 space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline marker */}
              <div className="absolute -left-[10px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>

              {/* Content */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow-md transition hover:shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600">{edu.degree}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{edu.duration}</p>
                <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
