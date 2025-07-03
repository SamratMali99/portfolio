import React from 'react';
import { Github, Linkedin, Mail, FileText  } from 'lucide-react';
import heroimage from "../assets/heroimage.jpg";

const Hero = () => {
  return (
    <section id="hero" className="pt-5 pb-4 lg:pt-0 bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div name="home" className="h-fit w-full bg-gradient-to-b from-black via-black to-gray-800 pt-10 md:pt-24 ">  {/*add gradient from top to bottom}

      {/* Container for Home Page Words and Images */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        
        {/* Container for Title, Bio and Button */}
        <div className="flex flex-col justify-center h-full mx-10">

          {/* Title Text */}
          <h5 className="text-1xl sm:text-7xl font-bold text-white">
          Welcome..  
          </h5>

          {/* Paragraph Bio */}
          {/* <p className="text-gray-500 py-4 max-w-md">

          </p> */}
          <div className="mt-4 flex space-x-4">
              <a href="https://github.com/SamratMali99" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/samrat-mali-942449253?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7yiEBuwkRwK1PhQrRmiTcA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400">
                <Linkedin size={24} />
              </a>
              <a href="mailto:samratmali99@gmail.com" className="text-gray-300 hover:text-indigo-400">
                <Mail size={24} />
              </a>
              <a href="https://drive.google.com/file/d/1LFCSXVDF_nIXUrRlj1GpI7pUSA_34yVi/view?usp=sharing"  target="_blank" className="text-gray-300 hover:text-indigo-400">
                <FileText size={24} />
              </a>
            </div>

        </div>

        {/* Image Container */}
        <div className='p-5'>
          <img
            src={heroimage}
            alt="my profile"
            className="rounded-3xl mx-2 my-0 w-40 md:w-60 shadow-md shadow-yellow-400 hover:scale-105 duration-500"
          />
        </div>

      </div>
    </div>
    </section>
  );
}

export default Hero;