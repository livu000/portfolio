import React from 'react';

const Card = ({ children, ...props }) => (
  <div {...props} className="rounded-lg border bg-card text-card-foreground shadow-sm">
    {children}
  </div>
);

const CardHeader = ({ children, ...props }) => (
  <div {...props} className="flex flex-col space-y-1.5 p-6">
    {children}
  </div>
);

const CardTitle = ({ children, ...props }) => (
  <h3 {...props} className="text-2xl font-semibold leading-none tracking-tight">
    {children}
  </h3>
);

const CardDescription = ({ children, ...props }) => (
  <p {...props} className="text-sm text-muted-foreground">
    {children}
  </p>
);

const CardContent = ({ children, ...props }) => (
  <div {...props} className="p-6 pt-0">
    {children}
  </div>
);

const CardFooter = ({ children, ...props }) => (
  <div {...props} className="flex items-center p-6 pt-0">
    {children}
  </div>
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };