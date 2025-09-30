import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div className="group">
      <section id="contact" className="py-20 sm:py-28 bg-background border-b border-transparent group-hover:border-black dark:group-hover:border-white transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl font-roboto">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-2xl shadow-lg border border-border/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Contact Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-primary" />
                      <span className="text-lg text-foreground/80 font-roboto">your.email@example.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-primary" />
                      <span className="text-lg text-foreground/80 font-roboto">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6 text-primary" />
                      <span className="text-lg text-foreground/80 font-roboto">New York, USA</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
                  <p className="text-lg text-foreground/80 font-roboto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Send me a message</h3>
                <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <Input type="text" name="name" id="name" placeholder="Your Name" className="bg-input border-border/50" />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <Input type="email" name="email" id="email" placeholder="Your Email" className="bg-input border-border/50" />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <Textarea name="message" id="message" rows={5} placeholder="Your Message" className="bg-input border-border/50" />
                  </div>
                  <div className="text-center">
                    <Button type="submit" size="lg" className="w-full shadow-md transform transition-transform hover:scale-105 bg-primary/90 hover:bg-primary">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}