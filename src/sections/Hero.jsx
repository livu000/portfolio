import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="text-center text-white bg-black bg-opacity-50 p-10 rounded-lg">
        <h2 className="text-5xl font-extrabold mb-4">John Doe</h2>
        <p className="text-2xl mb-8">AI Developer & Web Enthusiast</p>
        <a 
          href="#contact" 
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;