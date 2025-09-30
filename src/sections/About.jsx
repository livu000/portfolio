export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A passionate developer with a love for creating beautiful and functional web experiences.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground">Who I am</h3>
            <p className="mt-4 text-muted-foreground">
              I am a front-end developer based in New York. I have a passion for web design and love to create for web and mobile devices. I am a self-taught developer with a passion for learning new things and solving problems.
            </p>
            <p className="mt-4 text-muted-foreground">
              I am always looking for new and exciting projects to work on. If you have a project in mind, I would love to hear from you.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">Skills</h3>
            <div className="mt-4 flex flex-wrap gap-4">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">React</span>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}