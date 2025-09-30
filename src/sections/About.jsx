export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            A passionate developer who loves building beautiful and functional web experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Who I Am</h3>
            <p className="text-lg text-muted-foreground">
              I am a front-end developer based in New York, with a passion for web design and creating for web and mobile devices. I am a self-taught developer who is always eager to learn new things and solve complex problems.
            </p>
            <p className="text-lg text-muted-foreground">
              I am always on the lookout for new and exciting projects. If you have a project in mind, I would love to hear from you.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">My Skills</h3>
            <div className="flex flex-wrap gap-4">
              {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Firebase'].map((skill) => (
                <span key={skill} className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-base font-semibold shadow-md transform transition-transform hover:scale-110">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}