import { Mail, MessageSquare, Send, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="container-section">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mokoto">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind or want to learn more about our services?
              We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <a
                    href="mailto:rjbxclusive@gmail.com"
                    className="text-muted-foreground underline hover:text-primary transition block"
                  >
                    rjbxclusive@gmail.com
                  </a>
                  <a
                    href="mailto:connect@rjbworld.org"
                    className="text-muted-foreground underline hover:text-primary transition block"
                  >
                    connect@rjbworld.org
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/10 rounded-full">
                  <Headset className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Call Us</h3>
                  <a
                    href="tel:+2348059522376"
                    className="text-muted-foreground underline hover:text-primary transition"
                  >
                    +2348059522376
                  </a>
                  <p className="text-muted-foreground">
                    Our support team is available 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/10 rounded-full">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">
                    Chat with Us On WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/2348059522376"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground underline hover:text-primary transition"
                  >
                    +2348059522376
                  </a>
                  <p className="text-muted-foreground">
                    Our support team is available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 md:p-8">
            <form
              action="https://formsubmit.co/618de9f3a1470cb9e07ae7c0d5ccd010"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden settings for FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://www.rjbworld.org/thank-you"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90"
              >
                Send Message
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
