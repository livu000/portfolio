import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm currently available for freelance work. If you have a project in mind, I'd love to hear from you.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <Input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <Textarea name="message" id="message" rows={4} placeholder="Message" />
            </div>
            <div>
              <Button type="submit" className="w-full">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}