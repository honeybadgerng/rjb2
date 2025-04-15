import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchInstructors } from "../../../api/instructors";

export default function InstructorProfilePage() {
  const { nameOrId } = useParams();
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    fetchInstructors()
      .then((instructors) => {
        const selectedInstructor = instructors.find(
          (inst) => inst.name === nameOrId || inst.id === nameOrId
        );
        setInstructor(selectedInstructor);
      })
      .catch((error) => console.error("Error fetching instructor:", error));
  }, [nameOrId]);

  if (!instructor) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center mb-8">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-24 h-24 rounded-full mr-6"
        />
        <div>
          <h1 className="text-4xl font-bold">{instructor.name}</h1>
          <p className="text-muted-foreground">
            {instructor.specializations.join(", ")}
          </p>
        </div>
      </div>
      <p className="text-lg mb-6">{instructor.bio}</p>
      {instructor.courses && instructor.courses.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Courses by {instructor.name}
          </h2>
          <ul className="list-disc list-inside">
            {instructor.courses.map((course) => (
              <li key={course.id}>
                <a
                  href={`/academy/${course.slug}`}
                  className="text-primary hover:underline"
                >
                  {course.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
