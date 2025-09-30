import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section id="contact" className="container py-12">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <form className="mt-4 max-w-xl space-y-4">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Textarea placeholder="Message" />
        <Button type="submit">Send</Button>
      </form>
    </section>
  );
};

export default Contact;