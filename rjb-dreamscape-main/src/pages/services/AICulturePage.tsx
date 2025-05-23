import { ServiceLayout } from "@/components/ServiceLayout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AICulturePage() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        title="AI-driven Cultural & Language Tools"
        description="Preserve and promote heritage through intelligent tools for language learning, translation, and cultural archiving."
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <p>
            We use artificial intelligence to develop solutions that celebrate,
            preserve, and teach indigenous languages and cultures through
            interactive and intelligent platforms.
          </p>

          <h2 className="text-2xl font-semibold">Key Tools</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Speech-to-text and text-to-speech in local languages</li>
            <li>Smart translation systems with cultural context</li>
            <li>Language learning platforms powered by AI</li>
            <li>Cultural storytelling and heritage digitization tools</li>
          </ul>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <p>
            Empower communities to preserve their languages and traditions,
            while leveraging technology to educate future generations.
          </p>
        </div>
      </ServiceLayout>
      <Footer />
    </>
  );
}
