import { useEffect, useState } from "react";
import { fetchInstructors } from "../../../api/instructors";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import InstructorCard from "@/components/Academy/InstructorCard"; // Import the InstructorCard component

interface Instructor {
  name: string;
  image: string;
  bio: string;
  specializations: string[];
}

export default function InstructorsPage() {
  const [instructors, setInstructors] = useState<Instructor[]>([]);

  useEffect(() => {
    fetchInstructors()
      .then((data) => setInstructors(data))
      .catch((error) => console.error("Error fetching instructors:", error));
  }, []);

  return (
    <div className="container mx-auto py-12">
      <Navbar />
      <h1 className="text-4xl font-bold mb-8 text-center">
        Meet Our Instructors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.name} instructor={instructor} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
