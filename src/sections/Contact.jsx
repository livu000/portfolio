import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Me</h2>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">Send Message</button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Connect with Me</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition duration-300">
                <FaGithub size={40} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition duration-300">
                <FaLinkedin size={40} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition duration-300">
                <FaTwitter size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;