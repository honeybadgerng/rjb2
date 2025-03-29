import { ServiceLayout } from "@/components/ServiceLayout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function WebMobileAppPage() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        title="Web & Mobile App Development"
        description="Custom applications built with the latest technologies to deliver exceptional user experiences."
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <p>
            Our expert team of developers creates custom web and mobile
            applications tailored to your unique business needs. We leverage the
            latest technologies and frameworks to build scalable, responsive,
            and user-friendly solutions.
          </p>

          <h2 className="text-2xl font-semibold">Our Process</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Requirements gathering and analysis</li>
            <li>UI/UX design and prototyping</li>
            <li>Development and testing</li>
            <li>Deployment and maintenance</li>
            <li>Ongoing support and updates</li>
          </ul>

          <h2 className="text-2xl font-semibold">Technologies</h2>
          <p>
            We work with a wide range of technologies including React, React
            Native, Node.js, TypeScript, Next.js, and more to create modern,
            efficient applications.
          </p>
        </div>
      </ServiceLayout>
      <Footer />
    </>
  );
}
