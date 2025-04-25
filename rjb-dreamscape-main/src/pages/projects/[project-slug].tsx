import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProjects } from "../../api/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ReactMarkdown from "react-markdown";

type Project = {
  slug: string;
  title: string;
  image: string;
  description: string;
  techStacks: string[];
  liveLink: string; // Add this field
};

export default function ProjectDetailsPage() {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetchProjects().then((data: Project[]) => {
      const foundProject = data.find((p) => p.slug === projectSlug);
      setProject(foundProject || null);
    });
  }, [projectSlug]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-12">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="prose">
        <p>
          <ReactMarkdown>{project.description}</ReactMarkdown>
        </p>
        <h2>Tech Stacks</h2>
        <ul>
          {project.techStacks.map((stack, index) => (
            <li key={index}>{stack}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          View Live
        </a>
      </div>
      <br />
      <Footer />
    </div>
  );
}
