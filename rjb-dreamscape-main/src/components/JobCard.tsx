import { Link } from "react-router-dom";
import { JobVacancy } from "@/api/jobVacancy";

interface Props {
  job: JobVacancy;
}

export default function JobCard({ job }: Props) {
  return (
    <div className="glass-card p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <img src={job.image} alt={job.title} className="rounded-lg mb-4" />
      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
      <p className="text-muted-foreground mb-4">{job.excerpt}</p>
      <Link
        to={`/careers/${job.slug}`}
        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group mt-4"
      >
        Apply Now
      </Link>
    </div>
  );
}
