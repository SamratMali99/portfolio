import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="prose prose-lg mx-auto">
        <p className="text-gray-300 leading-relaxed text-xl mt-20">
  Hello, I'm Samrat - a passionate Computer Science student at ADCET. I have a strong enthusiasm for coding and problem-solving, and over the course of my academic journey, I've built a solid foundation in various programming languages, frameworks, and development tools. My strengths lie in Data Structures, Algorithms, and Object-Oriented Programming (OOP), and I'm well-versed in core computer science subjects such as Operating Systems and Database Management Systems (DBMS).
</p>
<p className="text-gray-300 leading-relaxed text-xl mt-10">
  Alongside my technical expertise, I've sharpened essential soft skills including effective communication, teamwork, and time management. I'm dedicated to applying my skills to create innovative and efficient solutions for real-world challenges, and I continuously seek opportunities to grow and stay current with emerging technologies.
</p> 
<p className="text-gray-300 leading-relaxed text-xl mt-10">
  Feel free to explore my portfolio and connect with me!
</p>

        </div>
      </div>
    </section>
  );
}

export default About;