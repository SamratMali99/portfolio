import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      {/* <main> */}
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Skills />
      {/* </main> */}
      <Footer />
    </div>
  );
}

export default App;