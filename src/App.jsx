import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={`min-h-screen font-sans antialiased ${theme}`}>
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
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by a dedicated developer.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;