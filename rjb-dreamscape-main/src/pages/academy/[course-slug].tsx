import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCourses } from "../../api/courses";
import ReactMarkdown from "react-markdown";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CourseDescriptionPage() {
  const { courseSlug } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourses()
      .then(
        (
          courses: {
            slug: string;
            image: string;
            title: string;
            description: string;
            video?: string;
            instructor: string;
            instructorImage: string;
            price: string;
            link: string;
          }[]
        ) => {
          const selectedCourse = courses.find((c) => c.slug === courseSlug);
          setCourse(selectedCourse);
        }
      )
      .catch((error) => console.error("Error fetching course:", error));
  }, [courseSlug]);

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <Navbar />
      <div className="mb-8">
        <img
          src={course.image}
          alt={course.title}
          className="w-full rounded-lg"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-muted-foreground mb-6">
        <ReactMarkdown>{course.description}</ReactMarkdown>
      </p>
      {course.video && (
        <div className="mb-6">
          <video
            src={course.video}
            controls
            className="w-full rounded-lg"
          ></video>
        </div>
      )}
      <div className="flex items-center mb-6">
        <img
          src={course.instructorImage}
          alt={course.instructor}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{course.instructor}</h3>
          <p className="text-muted-foreground">{course.price}</p>
        </div>
      </div>
      <a
        href={course.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        Buy Now
      </a>
      <Footer />
    </div>
  );
}
