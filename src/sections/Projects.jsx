import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

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
    <section id="projects" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            My Work
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            A collection of my recent projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div key={project.title} className="bg-card rounded-2xl shadow-2xl overflow-hidden group">
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 h-24">{project.description}</p>
                <Button asChild size="lg" className="w-full sm:w-auto shadow-lg transform transition-transform hover:scale-105">
                  <a href={project.link} className="flex items-center justify-center">
                    View Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}