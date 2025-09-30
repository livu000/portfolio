import { Heart, Twitter, Github, Linkedin, Dribbble } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/50 dark:bg-card py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="flex items-center text-muted-foreground text-center md:text-left mb-4 md:mb-0">
            Made with <Heart className="w-4 h-4 mx-1.5 text-red-500" /> by John Doe
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Dribbble className="w-5 h-5" />
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