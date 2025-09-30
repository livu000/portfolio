import { Heart, Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">John Doe</h3>
            <p className="max-w-md">
              A passionate developer creating modern and responsive web applications.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
            Made with <Heart className="w-5 h-5 mx-2 text-red-500" /> in React & Tailwind CSS.
          </p>
          <p>&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}