import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'AICTE Eduskills',
    position: 'Google AI-ML Intern',
    period: 'Jan-2025 - March-2025',
    // description: 'Developed and maintained various client projects using React, Node.js, and AWS.',
    // image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=500',
    responsibilities: ['Gained hands-on experience with Machine Learning algorithms.', 
                        'Learned how to utilize Convolutional Neural Network (CNN) to enhance image classification models.'],
    technologies: ['ML', 'CNN', 'Google Colab'],
    // website: 'https://example.com'
  },
  {
    company: 'Technohacks Edutech',
    position: 'Python programmer',
    period: 'Apr-2024 - May-2024',
    // description: 'Created responsive web applications and implemented UI/UX designs.',
    // image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500',
    responsibilities: ['One-month virtual task-driven internship.',
                       'Worked with basic built-in Python libraries to generate passwords.',     
                        'Developed Calculator and Temperature Converter programs.'],
    technologies: ['Python', 'PyCharm'],
    // website: 'https://example.com'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden shadow-md shadow-yellow-400 hover:scale-105 duration-500">
              {/* <img
                src={exp.image}
                alt={exp.company}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Briefcase className="w-5 h-5 text-indigo-400 mr-2" />
                  <p className="text-lg text-indigo-400">{exp.company}</p>
                </div>
                {/* <p className="text-gray-300 mb-4">{exp.description}</p> */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Description:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-indigo-400 mt-4"
                >
                  <ExternalLink size={20} className="mr-1" />
                  Visit Website
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;