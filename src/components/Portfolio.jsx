import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import newsy from "../assets/newsy.png";
import sorting from "../assets/sorting.png";
import restaurant from "../assets/restaurant.png";
import amazon from "../assets/amazon.png";

const projects = [
  {
    title: 'Newsy',
    description: 'Designed attractive React web application which helps people to read top headlines from various news portals. Integrated News API with JavaScript to fetch real-time news from multiple sources and utilized Bootstrap for styling. Implemented category-based classification to improve content accessibility and user experience.',
    image: newsy,
    github: 'https://github.com/SamratMali99/newsy',
    demo: 'https://example.com',
    tags: ['React', 'JavaScript', 'BootStrap','API Integration'],
    style : 'hidden'
  },
  {
    title: 'Restaurant Management System',
    description: 'Developed desktop application using Python and Tkinter. Implemented user signup, Login functionality using MySQL Database. Calculate total bill, apply tax, and save bill in .txt format.',
    image: restaurant,
    github: 'https://github.com/SamratMali99/Restaurant-management-system',
    demo: 'https://example.com',
    tags: ['Python, tkinter, Mysql, sql'],
    style : 'hidden'
  },
  {
    title: 'Sorting Algorithms Visualizer',
    description: 'Designed a web application to visualize sorting algorithms. Implemented dynamic animations using HTML, CSS, and JavaScript and features such as adjustable array size to provide flexibility and enhance visualization experience.',
    image: sorting,
    github: 'https://github.com/SamratMali99/Sorting_Algorithms_Visualizer',
    demo: 'https://sort-visu.netlify.app/',
    tags: ['JavaScipt, HTML, CSS'],
    style : 'text-white'
  },
  {
    title: 'Amazon UI Clone',
    description: 'Developed a user-interface clone of the Amazon website for learning purposes. Focused on replicating the layout, design to enhance front-end development skills and improve UI/UX understanding.',
    image: amazon,
    github: 'https://github.com/SamratMali99/Amazon-clone-',
    demo: 'https://amazonbysamrat.netlify.app/',
    tags: ['JavaScipt, HTML, CSS'],
    style : 'text-white'
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index,style) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden shadow-md shadow-blue-900 hover:scale-105 duration-500">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-indigo-400"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-gray-300 hover:text-indigo-400 ${project.style}`}  >
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;