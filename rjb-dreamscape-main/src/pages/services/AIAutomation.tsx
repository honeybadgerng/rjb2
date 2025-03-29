import { ServiceLayout } from "@/components/ServiceLayout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AIAutomationPage() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        title="AI & Business Automation"
        description="AI-driven tools and automation solutions that streamline operations and increase efficiency."
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <p>
            We design and implement cutting-edge AI and automation solutions
            that help businesses streamline operations, reduce costs, and boost
            productivity. Our solutions are tailored to your specific business
            needs and goals.
          </p>

          <h2 className="text-2xl font-semibold">
            Our AI & Automation Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process Automation</li>
            <li>Custom AI Solution Development</li>
            <li>Chatbot and Virtual Assistant Creation</li>
            <li>Data Analysis and Predictive Modeling</li>
            <li>Machine Learning Implementation</li>
          </ul>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <p>
            Our AI and automation solutions help businesses save time, reduce
            errors, improve customer experiences, and make better decisions
            based on data-driven insights.
          </p>
        </div>
      </ServiceLayout>
      <Footer />
    </>
  );
}
