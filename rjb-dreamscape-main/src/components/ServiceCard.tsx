
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, url, icon }: ServiceCardProps) {
  return (
    <div className="glass-card glass-card-shimmer h-full p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg group">
      <div className="mb-4 text-primary dark:text-primary-foreground">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
      >
        Explore
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}
