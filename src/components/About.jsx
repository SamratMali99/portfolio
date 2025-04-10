import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-300 leading-relaxed text-xl mt-20">
          Hello, I'm Samrat Kumar Mali, a final-year Computer Science and Engineering student at ADCET college, with a strong passion for coding and problem-solving. Throughout my academic journey, I have built a solid foundation in various programming languages, frameworks, and development tools. I have a strong grasp of Data Structures, Algorithms, and Object-Oriented Programming (OOP), and I am well-versed in core computer science subjects such as Operating Systems and Database Management Systems (DBMS).          </p>
          <p className="text-gray-300 leading-relaxed text-xl">
          In addition to my technical skills, I have developed essential soft skills including effective communication, teamwork, and time management. I am committed to leveraging my knowledge and abilities to create innovative and efficient solutions for real-world problems. I continuously seek opportunities to learn and stay updated with emerging technologies.
          </p>
          <p className="text-gray-300 leading-relaxed text-xl">
          Feel free to explore my portfolio and connect with me for potential collaborations or projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;