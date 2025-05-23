import { ServiceLayout } from "@/components/ServiceLayout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ELearningPage() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        title="E-learning & Community Engagement Tools"
        description="Learning management systems and engagement platforms tailored for education and grassroots impact."
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <p>
            We create scalable e-learning platforms and engagement tools that
            empower educators, learners, and communities to connect,
            collaborate, and grow together.
          </p>

          <h2 className="text-2xl font-semibold">Platform Capabilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Custom LMS development</li>
            <li>Community forums and peer collaboration features</li>
            <li>Gamified learning experiences</li>
            <li>Mobile-first access and offline support</li>
          </ul>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <p>
            Enhance learning outcomes, build stronger communities, and promote
            knowledge sharing across regions and devices.
          </p>
        </div>
      </ServiceLayout>
      <Footer />
    </>
  );
}
