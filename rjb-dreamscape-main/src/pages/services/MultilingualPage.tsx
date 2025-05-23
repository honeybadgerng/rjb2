import { ServiceLayout } from "@/components/ServiceLayout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function MultilingualPage() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        title="Multilingual Platforms"
        description="Inclusive platforms with indigenous-first UI/UX to ensure everyone can access digital tools in their native language."
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <p>
            We build inclusive digital platforms that prioritize native
            languages and cultural nuances, ensuring broader accessibility and
            user engagement across diverse communities.
          </p>

          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Indigenous-first user interface and experience</li>
            <li>Language toggles and dynamic translations</li>
            <li>Support for RTL (Right-to-left) and local scripts</li>
            <li>Accessibility enhancements for multilingual users</li>
          </ul>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <p>
            Reach more users, increase adoption, and show commitment to
            inclusivity by embracing local languages and cultures in your
            product design.
          </p>
        </div>
      </ServiceLayout>
      <Footer />
    </>
  );
}
