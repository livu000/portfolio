import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center text-center bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">John Doe</span>
          <span className="block text-primary">Creative Developer</span>
        </h1>
        <p className="mt-4 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-6 md:max-w-xl">
          I design and build beautiful, user-friendly web applications with a passion for creating amazing user experiences.
        </p>
        <div className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row justify-center gap-4 md:mt-8">
            <Button size="lg" asChild className="shadow-lg transform transition-transform hover:scale-105">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-lg transform transition-transform hover:scale-105">
              <a href="#projects">View my work</a>
            </Button>
        </div>
      </div>
    </section>
  );
}