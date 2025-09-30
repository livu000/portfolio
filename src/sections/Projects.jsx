import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Code Assistant",
    description: "A VS Code extension that uses machine learning to provide intelligent code completions and suggestions.",
    image: "https://images.unsplash.com/photo-1593432839908-a4a73a3c9a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
  },
  {
    title: "Real-Time Collaborative Editor",
    description: "A web-based platform for teams to write and edit documents together in real-time, built with WebSockets.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
  },
  {
    title: "Serverless GraphQL API",
    description: "A scalable and efficient GraphQL API for a mobile application, deployed on AWS Lambda.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
  },
  {
    title: "Interactive Data Visualization Dashboard",
    description: "A web app that turns complex datasets into beautiful and interactive charts and graphs using D3.js.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
  },
  {
    title: "Cloud-Native E-commerce Platform",
    description: "A modern e-commerce site built on a microservices architecture, ensuring high availability and scalability.",
    image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
  },
  {
    title: "Cross-Platform Mobile App",
    description: "A productivity app for iOS and Android, built with React Native for a seamless user experience.",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            My Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl font-roboto">
            A collection of my most recent and impactful projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-card rounded-2xl shadow-lg overflow-hidden group border border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/80 font-roboto mb-4 h-24">{project.description}</p>
                <Button asChild size="default" className="w-full sm:w-auto shadow-md transform transition-transform hover:scale-105 bg-primary/90 hover:bg-primary">
                  <a href={project.link} className="flex items-center justify-center">
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2" />
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