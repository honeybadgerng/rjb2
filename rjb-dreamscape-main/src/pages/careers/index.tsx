"use client";

import { useEffect, useState } from "react";
import { fetchJobVacancy, JobVacancy } from "@/api/jobVacancy";
import JobCard from "@/components/JobCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Career() {
  const [jobs, setJobs] = useState<JobVacancy[]>([]);

  useEffect(() => {
    fetchJobVacancy().then(setJobs);
  }, []);

  return (
    <div>
      <Navbar />
      <br />
      <div className="text-center mt-10">
        <h1 className="text-3xl font-mokoto">Join RJB Team</h1>
        <p className="text-lg text-gray-600 mt-2">
          Empower yourself by helping businesses go digital
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {jobs.map((job) => (
          <JobCard key={job.slug} job={job} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
