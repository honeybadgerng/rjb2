import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-16 relative overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/30 dark:bg-rjb-purple/20 rounded-full filter blur-3xl opacity-70 animate-float"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-500/30 dark:bg-rjb-red/20 rounded-full filter blur-3xl opacity-70 animate-float animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-mokoto">
            Welcome to
            <br />
            <em className="font-mokoto-glitch font-medium not-italic gradient-text">
              RJB World
            </em>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground italic">
            ...where dreams are born.
          </p>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            We transform ideas into digital masterpieces through cutting-edge
            services and innovative solutions that elevate businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Get in touch
            </a>
            <a
              href="#services"
              className="px-8 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium rounded-full transition-colors inline-flex items-center justify-center group"
            >
              Our services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
