import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

export function ServiceCard({
  title,
  description,
  url,
  icon,
}: ServiceCardProps) {
  return (
    <div className="glass-card glass-card-shimmer h-full p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg group">
      <div className="mb-4 text-primary dark:text-primary-foreground">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Link
        to={url}
        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
        onClick={() => window.scrollTo(0, 0)}
      >
        Explore
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
