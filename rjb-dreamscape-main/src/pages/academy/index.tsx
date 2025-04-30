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
          🌟Click to Meet Our Expert Instructors 🌟
        </a>
      </div>
      <br />
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 font-mokoto">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-12">
            To decentralize access to high-quality digital skills — empowering
            individuals everywhere to thrive in the digital economy.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 font-mokoto">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-12">
            A world where every determined mind — regardless of background or
            geography — can unlock global opportunities through digital
            education.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 font-mokoto">
            About RJB Academy
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            <span className="font-bold">Welcome to RJB Academy</span> — where we
            believe that digital skills are the new currency of freedom. In a
            world rapidly shaped by technology, we’re on a mission to ensure no
            one is left behind. From the heart of Nigeria to the corners of
            Africa and beyond, we’re breaking the barriers that limit access to
            world-class digital education.
            <br />
            <br />
            With highly subsidized, globally recognized training from elite
            tutors around the world — starting from as low as{" "}
            <span className="font-bold">₦30,000</span> — we are building a
            future where tech opportunity is for all, not a few.
            <br />
            <br />
            This is more than education. It’s a movement. It’s{" "}
            <span className="font-bold">RJB Academy</span> —{" "}
            <em>Learn. Build. Rise.</em>
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="/academy/instructors"
            className="bg-gradient-to-r from-purple-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-red-600 transition duration-300 transform hover:scale-105"
          >
            🌟 click to Meet Our Expert Instructors 🌟
          </a>
        </div>
      </section>
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
          🌟click to Meet Our Expert Instructors 🌟
        </a>
      </div>
      <br />
      <Footer />
    </div>
  );
}
