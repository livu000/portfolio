import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A web application that does amazing things. Built with React and Firebase, this project showcases my ability to create dynamic and scalable applications.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with a focus on user experience. This project demonstrates my skills in building complex user interfaces and managing application state.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project Three',
    description: 'A data visualization dashboard using D3.js. This project highlights my ability to work with data and create compelling visualizations.',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveUrl: '#',
    sourceUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.liveUrl} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">Live Demo</a>
                  <a href={project.sourceUrl} className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full transition duration-300">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;