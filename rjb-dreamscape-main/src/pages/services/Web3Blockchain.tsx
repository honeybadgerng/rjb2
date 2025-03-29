import { ServiceLayout } from "@/components/ServiceLayout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Web3BlockchainPage() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        title="Web3 & Blockchain Solutions"
        description="Innovative blockchain solutions that position your business at the forefront of technology."
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <p>
            We help businesses leverage the power of blockchain and Web3
            technologies to create decentralized applications, smart contracts,
            and innovative solutions that transform industries.
          </p>

          <h2 className="text-2xl font-semibold">Our Blockchain Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Smart Contract Development</li>
            <li>Decentralized Application (DApp) Creation</li>
            <li>NFT Platform Development</li>
            <li>Cryptocurrency Integration</li>
            <li>Blockchain Consultation</li>
          </ul>

          <h2 className="text-2xl font-semibold">Technologies</h2>
          <p>
            Our team is proficient in various blockchain technologies including
            Ethereum, Solana, Binance Smart Chain, and more, ensuring we can
            build the right solution for your specific needs.
          </p>
        </div>
      </ServiceLayout>
      <Footer />
    </>
  );
}
