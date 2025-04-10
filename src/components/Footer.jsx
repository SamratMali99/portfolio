import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* <div className="flex space-x-6 mb-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-indigo-400">
              <Mail size={24} />
            </a>
          </div> */}
          <p className="text-gray-400 text-lg text-center">
            © {new Date().getFullYear()} Samrat Mali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;