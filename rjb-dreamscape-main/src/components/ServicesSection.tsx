import { ServiceCard } from "./ServiceCard";
import {
  Globe,
  Smartphone,
  TrendingUp,
  Database,
  PenTool,
  Briefcase,
} from "lucide-react";
import { useEffect, useRef } from "react";

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if URL has #services hash when component mounts
    if (window.location.hash === "#services" && sectionRef.current) {
      // Add a slight delay to ensure proper scrolling after page loads
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const services = [
    {
      title: "Web & Mobile App Development",
      description:
        "Custom applications built with the latest technologies to deliver exceptional user experiences.",
      url: "/services/web-mobile-app",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns that boost your online presence and drive measurable results.",
      url: "/services/digital-marketing",
      icon: <TrendingUp className="h-8 w-8" />,
    },
    {
      title: "Web3 & Blockchain Solutions",
      description:
        "Innovative blockchain solutions that position your business at the forefront of technology.",
      url: "/services/web3-blockchain",
      icon: <Database className="h-8 w-8" />,
    },
    {
      title: "AI & Business Automation",
      description:
        "AI-driven tools and automation solutions that streamline operations and increase efficiency.",
      url: "/services/ai-automation",
      icon: <Smartphone className="h-8 w-8" />,
    },
    {
      title: "Graphics Design & Video Production",
      description:
        "Captivating visual content that elevates your brand and engages your audience.",
      url: "/services/graphics-design",
      icon: <PenTool className="h-8 w-8" />,
    },
    {
      title: "Business Services & Consultancy",
      description:
        "Expert guidance and tailored solutions to help your business thrive in a competitive landscape.",
      url: "/services/business-consultancy",
      icon: <Briefcase className="h-8 w-8" />,
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="container-section">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mokoto">
          Our Services
        </h2>
        <p className="text-lg text-muted-foreground">
          We offer a comprehensive suite of digital services designed to elevate
          your business and transform your ideas into reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            url={service.url}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
