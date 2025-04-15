import { useEffect, useState } from "react";
import { fetchInstructors } from "../../../api/instructors";
import { FC } from "react";

interface Instructor {
  name: string;
  image: string;
  bio: string;
  specializations: string[];
}

interface InstructorCardProps {
  instructor: {
    name: string;
    image: string;
    bio: string;
    specializations: string[];
  };
}

const InstructorCard: FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <div>
      <img src={instructor.image} alt={instructor.name} />
      <h2>{instructor.name}</h2>
      <p>{instructor.bio}</p>
      <ul>
        {instructor.specializations.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
    </div>
  );
};

export default function InstructorsPage() {
  const [instructors, setInstructors] = useState<Instructor[]>([]);

  useEffect(() => {
    fetchInstructors()
      .then((data) => setInstructors(data))
      .catch((error) => console.error("Error fetching instructors:", error));
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Meet Our Instructors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.name} instructor={instructor} />
        ))}
      </div>
    </div>
  );
}
