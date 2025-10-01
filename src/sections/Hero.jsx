import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="group">
      <section id="hero" className="relative w-full min-h-screen flex items-center justify-center text-center bg-background border-b border-transparent group-hover:border-black dark:group-hover:border-white transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <p className="text-lg font-medium text-primary dark:text-white mb-2 sm:text-xl md:text-2xl font-roboto">
            Hello, I'm
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl font-inter">
            <span className="block">VISHWANATH VASAVA</span>
          </h1>
          <h2 className="text-3xl font-bold text-secondary-foreground sm:text-4xl md:text-5xl mt-2">
            <span className="block">Full-Stack Web Developer</span>
          </h2>
          <p className="mt-6 max-w-lg mx-auto text-lg text-foreground/90 sm:text-xl md:mt-8 md:max-w-2xl font-roboto">
          “I design and develop modern, user-friendly websites with the help of <b>AI</b> to bring ideas to life faster and smarter."
          </p>
          <div className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="shadow-lg transform transition-transform hover:scale-105">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="shadow-lg transform transition-transform hover:scale-105">
                <a href="#projects">View my work</a>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}