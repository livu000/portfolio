import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Project 1</CardTitle>
            <CardDescription>A brief description of the project.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <a href="#">Live Demo</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#">Source Code</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project 2</CardTitle>
            <CardDescription>A brief description of the project.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <a href="#">Live Demo</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#">Source Code</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Projects;