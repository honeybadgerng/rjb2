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
      <HeroSection title="Explore at RJB Academy" />
      <div className="flex justify-center mt-8">
        <a
          href="/academy/instructors"
          className="bg-gradient-to-r from-purple-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-red-600 transition duration-300 transform hover:scale-105"
        >
          🌟 Meet Our Expert Instructors 🌟
        </a>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
        <p className="mb-8">Explore our wide range of courses.</p>
        <p className="mb-8"></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="/academy/instructors"
          className="bg-gradient-to-r from-purple-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-red-600 transition duration-300 transform hover:scale-105"
        >
          🌟 Meet Our Expert Instructors 🌟
        </a>
      </div>
      <br />
      <Footer />
    </div>
  );
}
