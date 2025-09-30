import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Profile" 
              className="rounded-full shadow-lg w-64 h-64 object-cover mx-auto"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Hello! I'm John Doe, a passionate AI developer with a love for creating intuitive, dynamic, and beautiful web experiences. My journey into the world of programming began with a fascination for how technology can solve real-world problems. Today, I specialize in building intelligent applications with React, Node.js, and Firebase.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mt-4">
              When I'm not coding, you can find me exploring the latest advancements in artificial intelligence, contributing to open-source projects, or enjoying a good book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;