import { ServiceLayout } from "@/components/ServiceLayout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function BusinessConsultancyPage() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        title="Business Services & Consultancy"
        description="Expert guidance and tailored solutions to help your business thrive in a competitive landscape."
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <p>
            Our business consultancy services provide expert guidance to help
            you navigate challenges, identify opportunities, and achieve
            sustainable growth. We work with businesses of all sizes across
            various industries.
          </p>

          <h2 className="text-2xl font-semibold">Our Consultancy Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Business Strategy Development</li>
            <li>Process Optimization</li>
            <li>Market Research and Analysis</li>
            <li>Financial Planning</li>
            <li>Risk Management</li>
            <li>Growth and Expansion Planning</li>
          </ul>

          <h2 className="text-2xl font-semibold">Our Approach</h2>
          <p>
            We take a collaborative approach to consultancy, working closely
            with your team to understand your unique challenges and develop
            customized solutions that drive real results for your business.
          </p>
        </div>
      </ServiceLayout>
      <Footer />
    </>
  );
}
