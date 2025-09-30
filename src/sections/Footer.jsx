import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="flex items-center text-muted-foreground text-center md:text-left">
            Made with <Heart className="w-4 h-4 mx-1.5 text-red-500" /> by John Doe
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="text-muted-foreground mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}