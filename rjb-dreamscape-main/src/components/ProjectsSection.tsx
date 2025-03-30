import { StartupCard } from "./StartupCard";
import { Home, Building, Monitor, ShoppingBag, HardHat } from "lucide-react";

export function ProjectsSection() {
  const startups = [
    {
      title: "Xclusive Cleaning Services",
      description:
        "Providing premium cleaning solutions including laundry, deep cleaning, fumigation and more.",
      url: "#",
      icon: <HardHat className="h-8 w-8" />,
    },
    {
      title: "Xclusive Properties",
      description:
        "A full-service real estate company offering property management and investment opportunities.",
      url: "#",
      icon: <Home className="h-8 w-8" />,
    },
    {
      title: "Xclusive Digital Agency",
      description:
        "A creative digital agency delivering top-tier design, development, and marketing services.",
      url: "#",
      icon: <Monitor className="h-8 w-8" />,
    },
    {
      title: "XStore",
      description:
        "An innovative e-commerce platform offering a seamless shopping experience with a wide range of products.",
      url: "#",
      icon: <ShoppingBag className="h-8 w-8" />,
    },
  ];

  return (
    <section
      id="projects"
      className="container-section bg-secondary/50 dark:bg-gray-900/50"
    >
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mokoto">
          Our Startups
        </h2>
        <p className="text-lg text-muted-foreground">
          Beyond services, we've built successful businesses across various
          industries, each delivering exceptional value to customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {startups.map((startup, index) => (
          <StartupCard
            key={index}
            title={startup.title}
            description={startup.description}
            url={startup.url}
            icon={startup.icon}
          />
        ))}
      </div>
    </section>
  );
}
