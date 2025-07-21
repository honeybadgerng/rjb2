import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { fetchJobVacancy, JobVacancy } from "@/api/jobVacancy";

export default function Apply() {
  const { slug } = useParams<{ slug: string }>();
  const [job, setJob] = useState<JobVacancy | null>(null);

  useEffect(() => {
    if (slug) {
      fetchJobVacancy().then((jobs) => {
        const match = jobs.find((j) => j.slug === slug);
        setJob(match || null);
      });
    }
  }, [slug]);

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">Apply for {job?.title}</h1>
        <p className="text-muted-foreground mb-6">
          {job?.location} | {job?.type}
        </p>

        <form
          action="https://formsubmit.co/YOUR_EMAIL@example.com"
          method="POST"
          encType="multipart/form-data"
          className="space-y-4"
        >
          {/* Hidden field for job title */}
          <input type="hidden" name="Job Title" value={job?.title || ""} />

          <div>
            <label className="block font-medium">Full Name *</label>
            <input
              type="text"
              name="Full Name"
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Email *</label>
            <input
              type="email"
              name="Email"
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Phone Number *</label>
            <input
              type="tel"
              name="Phone Number"
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">
              LinkedIn Profile (optional)
            </label>
            <input
              type="url"
              name="LinkedIn"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">
              Why do you want this role?
            </label>
            <textarea
              name="Motivation"
              rows={4}
              className="w-full border p-2 rounded"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium">Upload CV *</label>
            <input
              type="file"
              name="attachment"
              accept=".pdf,.doc,.docx"
              required
              className="w-full"
            />
          </div>

          {/* FormSubmit hidden fields */}
          <input
            type="hidden"
            name="_subject"
            value="New Job Application - RJB World"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://yourdomain.com/thank-you"
          />

          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary/80 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
