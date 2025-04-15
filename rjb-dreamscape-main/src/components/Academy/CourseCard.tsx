import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="glass-card p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <img src={course.image} alt={course.title} className="rounded-lg mb-4" />
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-muted-foreground mb-4">{course.excerpt}</p>
      <div className="flex items-center">
        <img
          src={course.instructorImage}
          alt={course.instructor}
          className="w-10 h-10 rounded-full mr-2"
        />
        <span>{course.instructor}</span>
      </div>
      <Link
        to={`/academy/${course.slug}`}
        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group mt-4"
      >
        Learn More
      </Link>
    </div>
  );
}
