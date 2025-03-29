import { ServiceLayout } from "@/components/ServiceLayout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function DigitalMarketingPage() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        title="Digital Marketing"
        description="Strategic marketing campaigns that boost your online presence and drive measurable results."
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <p>
            Our digital marketing team delivers comprehensive strategies to help
            your business grow online. We create targeted campaigns that
            increase brand awareness, drive traffic, and generate quality leads.
          </p>

          <h2 className="text-2xl font-semibold">Our Services Include</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Search Engine Optimization (SEO)</li>
            <li>Social Media Marketing</li>
            <li>Pay-Per-Click (PPC) Advertising</li>
            <li>Content Marketing</li>
            <li>Email Marketing Campaigns</li>
            <li>Analytics and Reporting</li>
          </ul>

          <h2 className="text-2xl font-semibold">Our Approach</h2>
          <p>
            We take a data-driven approach to digital marketing, continuously
            analyzing performance metrics to optimize campaigns and maximize
            your return on investment.
          </p>
        </div>
      </ServiceLayout>
      <Footer />
    </>
  );
}
