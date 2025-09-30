import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            I'm currently available for freelance work. If you have a project in mind, I'd love to hear from you.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-card p-8 rounded-2xl shadow-2xl">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
              <Input type="text" name="name" id="name" placeholder="Your Name" className="bg-input" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
              <Input type="email" name="email" id="email" placeholder="Your Email" className="bg-input" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
              <Textarea name="message" id="message" rows={5} placeholder="Your Message" className="bg-input" />
            </div>
            <div className="text-center">
              <Button type="submit" size="lg" className="w-full sm:w-auto shadow-lg transform transition-transform hover:scale-105">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}