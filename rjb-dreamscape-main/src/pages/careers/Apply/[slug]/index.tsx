"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { fetchJobVacancy, JobVacancy } from "@/api/jobVacancy";

export default function ApplyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [job, setJob] = useState<JobVacancy | null>(null);

  useEffect(() => {
    fetchJobVacancy().then((jobs) => {
      const match = jobs.find((j) => j.slug === slug);
      setJob(match || null);
    });
  }, [slug]);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">
          Apply for {job?.title || "Loading..."}
        </h1>
        <p className="text-muted-foreground mb-6">
          {job?.location} | {job?.type}
        </p>

        <form
          action="https://formsubmit.co/rjbxclusive@gmail.com"
          method="POST"
          encType="multipart/form-data"
          className="space-y-6 max-w-2xl mx-auto bg-white p-6 rounded-xl shadow"
        >
          {/* HIDDEN FIELDS FOR TRACKING */}
          <input type="hidden" name="Job Title" value={job?.title || ""} />
          <input
            type="hidden"
            name="_subject"
            value="New Job Application - RJB World"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://www.rjbworld.org/careers/thank-you"
          />

          {/* PERSONAL INFORMATION */}
          <div>
            <label className="block font-semibold mb-1">Full Name *</label>
            <input
              type="text"
              name="Full Name"
              required
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="e.g. Moshood Onabanji Raji"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="Email"
                required
                className="w-full border border-gray-300 p-3 rounded"
                placeholder="e.g. example@gmail.com"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Phone Number *</label>
              <input
                type="tel"
                name="Phone Number"
                required
                className="w-full border border-gray-300 p-3 rounded"
                placeholder="e.g. 08012345678"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Gender *</label>
              <select
                name="Gender"
                required
                className="w-full border border-gray-300 p-3 rounded"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Date of Birth *
              </label>
              <input
                type="date"
                name="date_of_birth"
                className="w-full border border-gray-300 p-3 rounded"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Marital Status *
              </label>
              <select
                name="Marital Status"
                required
                className="w-full border border-gray-300 p-3 rounded"
              >
                <option value="">Select Marital Status</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Age Range *</label>
              <select
                name="Age Range"
                required
                className="w-full border border-gray-300 p-3 rounded"
              >
                <option value="">Select Age Range</option>
                <option>18–24</option>
                <option>25–34</option>
                <option>35–44</option>
                <option>45+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Residential Address *
            </label>
            <input
              type="text"
              name="Address"
              required
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Your current address"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">City/Town *</label>
              <input
                type="text"
                name="City"
                required
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">State *</label>
              <select
                name="State"
                required
                className="w-full border border-gray-300 p-3 rounded"
              >
                <option value="">Select State</option>
                <option>Lagos</option>
                <option>Ogun</option>
                <option>Abuja</option>
                <option>Oyo</option>
                <option>Edo</option>
                <option>Kano</option>
                <option>Others</option>
              </select>
            </div>
          </div>

          {/* PROFESSIONAL BACKGROUND */}
          <div>
            <label className="block font-semibold mb-1">
              Educational Qualification *
            </label>
            <select
              name="Qualification"
              required
              className="w-full border border-gray-300 p-3 rounded"
            >
              <option value="">Select Qualification</option>
              <option>SSCE</option>
              <option>Diploma / OND</option>
              <option>HND / BSc</option>
              <option>Masters</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Do you have previous sales/marketing experience? *
            </label>
            <select
              name="Sales Experience"
              required
              className="w-full border border-gray-300 p-3 rounded"
            >
              <option value="">Select an option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              LinkedIn Profile (Optional)
            </label>
            <input
              type="url"
              name="LinkedIn"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="https://linkedin.com/in/yourname"
            />
          </div>

          {/* MOTIVATION + AVAILABILITY */}
          <div>
            <label className="block font-semibold mb-1">
              Why do you want this job? *
            </label>
            <textarea
              name="Motivation"
              rows={4}
              required
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Describe your motivation and what you hope to achieve..."
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              When can you start?
            </label>
            <input
              type="date"
              name="Availability Date"
              className="w-full border border-gray-300 p-3 rounded"
            />
          </div>

          {/* CV UPLOAD */}
          <div>
            <label className="block font-semibold mb-1">Upload Your CV *</label>
            <input
              type="file"
              name="attachment"
              accept=".pdf,.doc,.docx"
              required
              className="w-full border border-gray-300 p-3 rounded bg-white"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/80 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
