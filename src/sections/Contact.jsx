import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            I'm currently available for freelance work. If you have a project in mind, I'd love to hear from you.
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-card p-6 sm:p-8 rounded-xl shadow-lg">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
              <Input type="text" name="name" id="name" placeholder="Your Name" className="bg-input" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <Input type="email" name="email" id="email" placeholder="Your Email" className="bg-input" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <Textarea name="message" id="message" rows={4} placeholder="Your Message" className="bg-input" />
            </div>
            <div className="text-center">
              <Button type="submit" size="lg" className="w-full sm:w-auto shadow-md transform transition-transform hover:scale-105">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}