import { ServiceLayout } from "@/components/ServiceLayout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ImpactTrackingPage() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        title="Donation & Impact Tracking Systems"
        description="Transparent systems to track donations and measure impact, ideal for NGOs and social enterprises."
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <p>
            We develop robust platforms for managing donations and tracking
            social impact. These tools help organizations maintain transparency,
            engage donors, and visualize progress.
          </p>

          <h2 className="text-2xl font-semibold">Core Solutions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure online donation portals</li>
            <li>Real-time impact dashboards</li>
            <li>Donor engagement and communication tools</li>
            <li>Audit-ready reporting and analytics</li>
          </ul>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <p>
            Strengthen trust with stakeholders, increase transparency, and
            demonstrate tangible results from your initiatives.
          </p>
        </div>
      </ServiceLayout>
      <Footer />
    </>
  );
}
