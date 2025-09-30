import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <form className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 border rounded-lg"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;