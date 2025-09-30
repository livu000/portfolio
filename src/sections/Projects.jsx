import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Modern Portfolio Website",
    description: "A sleek, responsive portfolio built with React, Vite, and Tailwind CSS, showcasing my projects and skills.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description: "A feature-rich online store with a modern UI, product catalog, shopping cart, and secure checkout.",
    image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity app for organizing tasks, setting deadlines, and collaborating with team members.",
    image: "https://images.unsplash.com/photo-1586281380923-93c7b0a72448?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            My Work
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            A collection of my recent projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-card rounded-xl shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 duration-300 ease-in-out">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
                  <a href={project.link}>View Project</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}