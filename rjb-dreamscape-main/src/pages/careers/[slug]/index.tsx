import { useParams } from "react-router-dom"; // ✅ Correct import
import { useEffect, useState } from "react";
import { fetchJobVacancy, JobVacancy } from "@/api/jobVacancy";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function JobDetails() {
  const { slug } = useParams<{ slug: string }>(); // ✅ Correct typing
  const [job, setJob] = useState<JobVacancy | null>(null);

  useEffect(() => {
    if (slug) {
      fetchJobVacancy().then((jobs) => {
        const match = jobs.find((j) => j.slug === slug);
        setJob(match || null);
      });
    }
  }, [slug]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>

        <img src={job.image} alt={job.title} className="rounded-xl mb-6" />
        <p className="text-muted-foreground mb-1">
          {job.location} | {job.type}
        </p>
        <p className="text-sm mb-4">
          Posted: {job.postedDate} | Deadline: {job.applicationDeadline}
        </p>

        <p className="text-lg font-medium mb-4">{job.excerpt}</p>
        <p className="mb-6 text-base ">{job.bio}</p>

        <h2 className="text-2xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {job.responsibilities.map((item, idx) => (
            <li key={idx} className="">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {job.requirements.map((item, idx) => (
            <li key={idx} className="">
              {item}
            </li>
          ))}
        </ul>

        {job.benefits?.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              {job.benefits.map((benefit, idx) => (
                <li key={idx} className="">
                  {benefit}
                </li>
              ))}
            </ul>
          </>
        )}

        <a
          href={`/careers/Apply/${job.slug}`}
          className="inline-block mt-4 bg-primary text-white py-2 px-6 rounded-xl hover:bg-primary/80 transition"
        >
          Apply Now
        </a>
      </div>
      <Footer />
    </div>
  );
}
