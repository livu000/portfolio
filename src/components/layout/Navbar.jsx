import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = ({ toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold sm:inline-block">Portfolio</span>
        </a>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <a href="#about" className="text-foreground/60 transition-colors hover:text-foreground/80">
            About
          </a>
          <a href="#projects" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Projects
          </a>
          <a href="#contact" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Contact
          </a>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};