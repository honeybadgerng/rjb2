import { Link } from "react-router-dom";

interface Instructor {
  name: string;
  image: string;
  bio: string;
  specializations: string[];
}

interface InstructorCardProps {
  instructor: Instructor;
}

export default function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div className="glass-card p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <img
        src={instructor.image}
        alt={instructor.name}
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-center">{instructor.name}</h3>
      <p className="text-muted-foreground text-center mb-4">
        {instructor.specializations.join(", ")}
      </p>
      <Link
        to={`/academy/instructors/${instructor.name}`}
        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group"
      >
        View Profile
      </Link>
    </div>
  );
}
