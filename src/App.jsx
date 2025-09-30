import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { useEffect } from "react";

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'contact'];
    const sectionElements = sections.map(id => document.getElementById(id));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = 'hero';

      for (const section of sectionElements) {
        if (section && scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      }

      const titleMap = {
        hero: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
      };

      document.title = titleMap[currentSection] || 'Portfolio';
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial title

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`min-h-screen font-sans antialiased ${theme}`}>
      <Navbar toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
