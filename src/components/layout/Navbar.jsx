import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold text-gray-800">AI Portfolio</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#hero" onClick={() => smoothScroll('hero')} className="text-gray-600 hover:text-purple-600 transition duration-300">Home</a>
          <a href="#about" onClick={() => smoothScroll('about')} className="text-gray-600 hover:text-purple-600 transition duration-300">About</a>
          <a href="#skills" onClick={() => smoothScroll('skills')} className="text-gray-600 hover:text-purple-600 transition duration-300">Skills</a>
          <a href="#projects" onClick={() => smoothScroll('projects')} className="text-gray-600 hover:text-purple-600 transition duration-300">Projects</a>
          <a href="#contact" onClick={() => smoothScroll('contact')} className="text-gray-600 hover:text-purple-600 transition duration-300">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-purple-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="#hero" onClick={() => smoothScroll('hero')} className="text-gray-600 hover:text-purple-600 transition duration-300">Home</a>
            <a href="#about" onClick={() => smoothScroll('about')} className="text-gray-600 hover:text-purple-600 transition duration-300">About</a>
            <a href="#skills" onClick={() => smoothScroll('skills')} className="text-gray-600 hover:text-purple-600 transition duration-300">Skills</a>
            <a href="#projects" onClick={() => smoothScroll('projects')} className="text-gray-600 hover:text-purple-600 transition duration-300">Projects</a>
            <a href="#contact" onClick={() => smoothScroll('contact')} className="text-gray-600 hover:text-purple-600 transition duration-300">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;