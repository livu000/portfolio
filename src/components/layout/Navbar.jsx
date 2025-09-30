import { useState } from 'react';
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = ({ toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg sm:inline-block font-serif">PORTFOLIO</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-base lg:gap-8">
          <a href="#about" className="text-foreground/60 transition-colors hover:text-foreground/80 font-medium">
            About
          </a>
          <a href="#projects" className="text-foreground/60 transition-colors hover:text-foreground/80 font-medium">
            Projects
          </a>
          <a href="#contact" className="text-foreground/60 transition-colors hover:text-foreground/80 font-medium">
            Contact
          </a>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="flex flex-col items-center gap-6 py-8">
            <a href="#about" className="text-foreground/80 transition-colors hover:text-foreground font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#projects" className="text-foreground/80 transition-colors hover:text-foreground font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" className="text-foreground/80 transition-colors hover:text-foreground font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};