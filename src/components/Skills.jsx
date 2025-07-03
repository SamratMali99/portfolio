import React from 'react';

// const skills = [
//   'C++', 'Python', 'SQL', 'Power BI', 'HTML/CSS', 'Tailwind CSS', 'Git', 'React',
//   'MySQL', 'MongoDB', 'Core Java', 'Numpy', 'Pandas', 'Matplotlib', 'Machine Learning'
// ];
const skills = [
  'Python', 'SQL', 'Power BI', 'Power Query', 'Excel', 'Pandas', 'NumPy', 'Matplotlib',
  'JavaScript', 'MySQL', 'MongoDB', 'Git/GitHub', 'DAX', 'Data Cleaning', 'Data Visualization', 'Machine Learning'
];
const Style = [
  'shadow-md shadow-orange-400', 'shadow-md shadow-pink-400', 'shadow-md shadow-white', 'shadow-md shadow-gray-400', 'shadow-md shadow-blue-600', 'shadow-md shadow-pink-400', 'shadow-md shadow-gray-400', 'shadow-md shadow-white', 'shadow-md shadow-orange-500', 'shadow-md shadow-blue-500', 'shadow-md shadow-yellow-500', 'shadow-md shadow-white', 'shadow-md shadow-blue-600', 'shadow-md shadow-gray-400'
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-black via-black to-gray-800 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-4xl font-bold text-center mb-8">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div 
            key={index} 
            className="bg-gray-900 p-4 h-24 rounded-lg shadow-xl flex items-center justify-center hover:bg-gray-800 transition-colors hover:scale-105 duration-500"
          >
            <span className="text-indigo-200 font-medium">{skill}</span>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;