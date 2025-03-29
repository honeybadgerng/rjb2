
import { Zap, Shield, Star } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-takoto">About RJB Group</h2>
          <p className="text-lg text-muted-foreground">
            We're not just a service provider, but a partner in your journey to success. With innovative thinking and cutting-edge technology, we help transform businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
            <p className="text-muted-foreground">
              We push boundaries and challenge the status quo to deliver forward-thinking solutions.
            </p>
          </div>

          <div className="bg-background dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-muted-foreground">
              We never compromise on quality, ensuring every project exceeds expectations.
            </p>
          </div>

          <div className="bg-background dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Client Success</h3>
            <p className="text-muted-foreground">
              Your success is our success. We are committed to helping you reach your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
