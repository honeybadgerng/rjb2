import { useEffect, useState } from "react";
import { fetchCourses } from "../../api/courses";
import CourseCard from "../../components/Academy/CourseCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HeroSection from "../../components/Academy/HeroSection";

export default function AcademyPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses()
      .then(setCourses)
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection title="Explore Knowledge at RJB Academy" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
