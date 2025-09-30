import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Project One",
    description: "A short description of the project.",
    image: "https://picsum.photos/seed/project1/600/400",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A short description of the project.",
    image: "https://picsum.photos/seed/project2/600/400",
    link: "#",
  },
  {
    title: "Project Three",
    description: "A short description of the project.",
    image: "https://picsum.photos/seed/project3/600/400",
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of my recent projects.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                <div className="mt-4">
                  <Button asChild>
                    <a href={project.link}>View Project</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}