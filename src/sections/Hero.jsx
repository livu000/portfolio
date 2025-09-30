import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          <span className="block">John Doe</span>
          <span className="block text-primary">Creative Developer</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-5 md:max-w-3xl">
          I design and build beautiful and user-friendly web applications. I am passionate about creating amazing user experiences.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Button variant="outline" asChild>
              <a href="#projects">View my work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}