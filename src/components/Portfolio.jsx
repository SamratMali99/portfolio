import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import vpd from "../assets/vpd.png";
import sorting from "../assets/sorting.png";
import restaurant from "../assets/restaurant.png";
import zepto from "../assets/zepto.png";

const projects = [
  {
    title: 'Vendor Performance Dashboard',
    description: 'Developed ETL pipeline using Python and SQL to transform raw sales data into a structured, dashboard-ready format.Implemented CTEs(Common Table Expressions) to optimize SQL queries for faster and more efficient data processing.Created an interactive Power BI dashboard to identify low - performing brands and vendors requiring marketing focus.Displayed KPIs including Total Sales, Total Purchase, Gross Profit, and Profit Margin to enable quick performance assessment.Visualized top - performing brands and vendors by sales volume and evaluated the purchase contribution of key vendors in growth of business.',
    image: vpd,
    github: 'https://github.com/SamratMali99/vendor_performance_dashboard.git',
    demo: 'https://example.com',
    tags: ['Python', 'SQL', 'Power BI', 'Power Query'],
    style: 'hidden'
  },
  {
    title: 'Zepto Grocery - Sales Dashboard',
    description: 'Created an interactive Power BI dashboard using Zepto’s grocery dataset to display key metrics such as Total Sales, Average Sales, Average Rating, and Item Count based on Fat Content, Outlet Size, Establishment Year, Location, and Item Type. Identified sales trends and outlet performance patterns, helping to improve understanding of category-wise sales and support smarter business decisions. Used efficient DAX formulas to make the dashboard faster.',
    image: zepto,
    github: 'https://github.com/SamratMali99/zepto.git',
    demo: 'https://app.powerbi.com/view?r=eyJrIjoiNmY1ZTY1YjgtNzU4Yy00YzdmLTg4MjItYzc1YWIzMDk0M2IxIiwidCI6ImU4ZDkwNWNmLTkyNWQtNGM3Ny1iOTI0LWM5M2I5ZjdmZTMzYyJ9',
    tags: ['Power BI', 'Power Query', 'DAX'],
    // style: 'hidden'
  },

  // {
  //   title: 'Newsy',
  //   description: 'Designed attractive React web application which helps people to read top headlines from various news portals. Integrated News API with JavaScript to fetch real-time news from multiple sources and utilized Bootstrap for styling. Implemented category-based classification to improve content accessibility and user experience.',
  //   image: newsy,
  //   github: 'https://github.com/SamratMali99/newsy',
  //   demo: 'https://example.com',
  //   tags: ['React', 'JavaScript', 'BootStrap','API Integration'],
  //   style : 'hidden'
  // },
  // {
  //   title: 'Restaurant Management System',
  //   description: 'Developed desktop application using Python and Tkinter. Implemented user signup, Login functionality using MySQL Database. Calculate total bill, apply tax, and save bill in .txt format.',
  //   image: restaurant,
  //   github: 'https://github.com/SamratMali99/Restaurant-management-system',
  //   demo: 'https://example.com',
  //   tags: ['Python, tkinter, Mysql, sql'],
  //   style : 'hidden'
  // },
  {
    title: 'Sorting Algorithms Visualizer',
    description: 'Designed a web application to visualize sorting algorithms. Implemented dynamic animations using HTML, CSS, and JavaScript and features such as adjustable array size to provide flexibility and enhance visualization experience.',
    image: sorting,
    github: 'https://github.com/SamratMali99/Sorting_Algorithms_Visualizer',
    demo: 'https://sort-visu.netlify.app/',
    tags: ['JavaScipt, HTML, CSS'],
    style: 'text-white'
  },
  // {
  //   title: 'Amazon UI Clone',
  //   description: 'Developed a user-interface clone of the Amazon website for learning purposes. Focused on replicating the layout, design to enhance front-end development skills and improve UI/UX understanding.',
  //   image: amazon,
  //   github: 'https://github.com/SamratMali99/Amazon-clone-',
  //   demo: 'https://amazonbysamrat.netlify.app/',
  //   tags: ['JavaScipt, HTML, CSS'],
  //   style : 'text-white'
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index, style) => (
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




