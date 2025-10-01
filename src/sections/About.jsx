import {
  FaReact, FaNodeJs, FaFigma, FaPython, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt, FaJsSquare, FaNpm, FaLinux
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFirebase, SiVite, SiNextdotjs, SiPostgresql, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={32} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare size={32} className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript size={32} className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={32} className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-teal-400" /> },
  { name: "Firebase", icon: <SiFirebase size={32} className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 size={32} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={32} className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt size={32} className="text-red-500" /> },
  { name: "Figma", icon: <FaFigma size={32} className="text-pink-500" /> },
  { name: "Python", icon: <FaPython size={32} className="text-blue-400" /> },
  { name: "Vite", icon: <SiVite size={32} className="text-purple-500" /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} className="text-white" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={32} className="text-blue-300" /> },
  { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-400" /> },
  { name: "Docker", icon: <FaDocker size={32} className="text-blue-500" /> },
  { name: "NPM", icon: <FaNpm size={32} className="text-red-600" /> },
  { name: "Linux", icon: <FaLinux size={32} className="text-yellow-300" /> },
];

export function About() {
  return (
    <div className="group">
      <section id="about" className="py-20 sm:py-28 bg-background border-b border-transparent group-hover:border-black dark:group-hover:border-white transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl font-roboto">
              A passionate developer who loves building beautiful and functional web applications.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 bg-card p-8 rounded-2xl shadow-lg space-y-6 border border-transparent hover:border-primary transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Who I Am</h3>
              <p className="text-lg text-foreground/80 font-roboto">
                I am a full-stack web developer based in India, with a passion for web design and creating for web and mobile devices. I am a self-taught developer who is always eager to learn new things and solve complex problems.
              </p>
              <p className="text-lg text-foreground/80 font-roboto">
                I am always on the lookout for new and exciting projects. If you have a project in mind, I would love to hear from you.
              </p>
            </div>
            <div className="lg:col-span-3 bg-card p-8 rounded-2xl shadow-lg border border-transparent hover:border-primary transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-6">My Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="group bg-background/50 border border-border/50 rounded-lg p-4 flex flex-col items-center justify-center gap-2 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-primary/10">
                    {skill.icon}
                    <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}