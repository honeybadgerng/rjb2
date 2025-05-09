import { useEffect, useState } from "react";
import { fetchProjects } from "../../api/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then((data: any[]) => setProjects(data));
  }, []);

  return (
    <div className="container mx-auto py-12">
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-black">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.excerpt}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
