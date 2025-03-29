import { ServiceLayout } from "@/components/ServiceLayout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function GraphicsDesignPage() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        title="Graphics Design & Video Production"
        description="Captivating visual content that elevates your brand and engages your audience."
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <p>
            Our creative team produces stunning visual content that helps your
            brand stand out in a crowded marketplace. From eye-catching graphics
            to engaging videos, we create assets that effectively communicate
            your message.
          </p>

          <h2 className="text-2xl font-semibold">
            Our Design & Production Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Brand Identity Design</li>
            <li>Marketing Collateral</li>
            <li>Social Media Graphics</li>
            <li>Motion Graphics</li>
            <li>Video Production and Editing</li>
            <li>Animation</li>
          </ul>

          <h2 className="text-2xl font-semibold">Our Creative Process</h2>
          <p>
            We work closely with clients to understand their vision and brand
            guidelines, creating custom visual solutions that align with their
            goals and resonate with their target audience.
          </p>
        </div>
      </ServiceLayout>
      <Footer />
    </>
  );
}
