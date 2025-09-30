import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; 2024 John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;