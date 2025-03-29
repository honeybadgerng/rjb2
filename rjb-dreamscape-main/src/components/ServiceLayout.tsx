import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect } from "react";

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ServiceLayout({
  title,
  description,
  children,
}: ServiceLayoutProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" className="mb-8" asChild>
          <Link
            to="/#services"
            className="flex items-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-mokoto">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">{description}</p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
