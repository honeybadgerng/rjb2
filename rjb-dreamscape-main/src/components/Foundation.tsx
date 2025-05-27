import { Navbar } from "@/components/Navbar";

import { useState } from "react";
import { Helmet } from "react-helmet";

<Helmet>
  <title>RJB World Foundation – Awakening Souls & Rebuilding Humanity</title>
  <meta
    name="description"
    content="Discover the mission of the RJB World Foundation – spiritual healing, lightwork, and empowerment for a new generation of awakened souls."
  />
</Helmet>;

const Foundation = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = async (label: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(""), 2000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {/* Hero Section */}
        <section className=" dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-mokoto mb-4">
            RJB World Foundation
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Awakening Souls. Rebuilding Humanity. Empowering Lightworkers to
            transform the world through inner healing and divine alignment.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-mokoto mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-100">
            At RJB World Foundation, we believe in the power of spiritual
            healing, energetic restoration, and skills empowerment as tools to
            reclaim divine inheritance and fulfill soul missions. We are here to
            nurture awakened souls, restore broken destinies, and support
            humanity’s transition into light.
          </p>
        </section>

        {/* Core Programs */}
        <section className="dark:bg-gray-900 py-16 px-6">
          <h2 className="text-3xl font-mokoto text-center mb-12">
            Our Core Pillars
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                title: "Spiritual Healing & Awakening",
                desc: "Guiding individuals through rituals, energy cleanses, and prayer work for spiritual restoration.",
              },
              {
                title: "Skill Empowerment & Training",
                desc: "Offering highly subsidized digital courses and training for self-sufficiency and purpose alignment.",
              },
              {
                title: "Youth Transformation & Mentorship",
                desc: "Providing mentorship and tools to young minds ready to walk the path of light and purpose.",
              },
              {
                title: "Energetic Lightwork Outreach",
                desc: "Reaching underserved communities with energetic balancing, education, and spiritual counsel.",
              },
            ].map(({ title, desc }, index) => (
              <div key={index} className="rounded-xl shadow-md p-6">
                <h3 className="text-xl font-mokoto mb-2">{title}</h3>
                <p className="text-gray-800 dark:text-gray-100">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-mokoto mb-4 text-center">Our Story</h2>
          <p className="text-lg text-gray-800 dark:text-gray-100 text-center">
            Born from a place of deep personal awakening, the RJB World
            Foundation was founded with a divine instruction: “Free yourself,
            then go and help others.” What began as one soul’s journey through
            pain, clarity, and rebirth, is now a global mission to activate
            light in others and raise a community of divine change-makers.
          </p>
        </section>

        {/* Get Involved */}
        <section className="dark:bg-gray-900 py-16 px-6 text-center">
          <h2 className="text-3xl font-mokoto mb-6">Get Involved</h2>
          <p className="mb-8 text-gray-800 dark:text-gray-100 max-w-xl mx-auto">
            Ready to serve, give, or join the mission? RJB World Foundation
            welcomes volunteers, partners, donors, and lightworkers. Help us
            spread the light.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Contact Us
            </a>
            <a
              href="#account"
              className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-100 transition"
            >
              Make a Donation
            </a>
          </div>
        </section>
      </div>
      {/* Additional Info Section */}
      <section className="dark:bg-gray-900 py-16 px-6 max-w-5xl mx-auto text-gray-800 dark:text-gray-100">
        <h2 className="text-3xl font-mokoto text-center mb-6">
          About RJB World Foundation
        </h2>

        <div className="text-center mb-10">
          <p className="text-xl italic font-semibold">
            “…where Dreams Are Born”
          </p>
          <p className="mt-2 ">Legal Status: NGO (Pending registration)</p>
          <p>Location: Simawa, Ogun State, Nigeria</p>
          <p>
            Website:{" "}
            <a
              href="https://www.rjbworld.org"
              className="text-indigo-600 underline"
            >
              www.rjbworld.org
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:connect@rjbworld.org" className="text-indigo-600">
              connect@rjbworld.org
            </a>
            , rjbxclusive@gmail.com
          </p>
          <p>Phone: +234 805 952 2376</p>
        </div>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-mokoto mb-2">Our Vision</h3>
            <p>
              To preserve indigenous knowledge, empower vulnerable children, and
              bridge ancient wisdom with modern innovation through education and
              technology.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-mokoto mb-2">Our Mission</h3>
            <p>
              To build a sustainable learning sanctuary that combines computer
              science, ancestral heritage, and multilingual translation—starting
              with Yoruba.
            </p>
          </div>
        </div>

        {/* Core Objectives */}
        <div className="mb-12">
          <h3 className="text-2xl font-mokoto mb-4">Core Objectives</h3>
          <ul className="list-disc pl-6 space-y-2 ">
            <li>
              Provide free tech-based education to vulnerable and underserved
              children.
            </li>
            <li>
              Digitally preserve and teach the Yoruba language, 256 Odu Ifá, and
              ancestral systems.
            </li>
            <li>
              Translate and teach academic subjects in Yoruba (Maths, Physics,
              Comp Sci, etc).
            </li>
            <li>
              Enable Yoruba translations of global languages like English,
              Chinese, and German.
            </li>
            <li>
              Build and operate a prefab, modular learning center in Simawa.
            </li>
            <li>
              Empower local communities through skill acquisition,
              truth-telling, and cultural pride.
            </li>
          </ul>
        </div>

        {/* Flagship Project */}
        <div className="mb-12">
          <h3 className="text-2xl font-mokoto mb-4">
            Flagship Project: The Ancestral Codex School
          </h3>
          <p className="mb-4">
            A prefabricated educational institution with two core tracks:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className=" rounded-lg p-4">
              <h4 className="text-xl font-mokoto mb-2">1. Tech & Innovation</h4>
              <p>
                Programming, digital literacy, AI, and full-stack web/mobile
                development.
              </p>
            </div>
            <div className=" rounded-lg p-4">
              <h4 className="text-xl font-mokoto mb-2">2. Ancestral Studies</h4>
              <p>
                Ifá literacy, Yoruba-first curriculum, cultural preservation,
                and spiritual empowerment.
              </p>
            </div>
          </div>
        </div>

        {/* What We Need */}
        <div className="mb-12">
          <h3 className="text-2xl font-mokoto mb-4">What We Need</h3>
          <ul className="list-disc pl-6 space-y-2 ">
            <li>Land acquisition and prefab construction funding</li>
            <li>Educational resources (laptops, solar kits, internet)</li>
            <li>Curriculum development (writers, linguists, translators)</li>
            <li>Teachers, volunteers, and community mobilizers</li>
            <li>Partnerships, media coverage, and donor collaborations</li>
          </ul>
        </div>

        {/* Founder Profile */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-mokoto mb-2">Founder Profile</h3>
          <p className="text-lg">
            <strong>Moshood Onabanji</strong> – Self-taught full-stack
            developer, spiritual visionary, and founder of RJB World. His
            personal journey through loss and healing led to the creation of
            this foundation to serve others through access, truth, and
            empowerment.
          </p>
        </div>

        {/* Join Us CTA */}
        <div
          id="account"
          className="text-center bg-indigo-600 text-white rounded-lg p-8 shadow-md"
        >
          <h3 className="text-3xl font-mokoto mb-4">Join the Mission</h3>
          <p className="mb-6 text-lg max-w-xl mx-auto">
            This is more than a school — it's a sacred portal. Where dreams are
            born in code and carved in culture. Help us awaken the next
            generation of lightworkers.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-100"
            >
              Make a Donation
            </a>
            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600"
            >
              Partner or Volunteer
            </a>
          </div>
          <br />

          {/* Account and Wallet Info */}
          <div className="bg-white dark:bg-gray-900 text-indigo-800 dark:text-indigo-100 rounded-md p-6 mb-6 text-left max-w-2xl mx-auto space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-1">
                Bank Account (Nigeria)
              </h4>
              <p>
                <strong>Account Name:</strong> RJB Xclusive
              </p>
              <p>
                <strong>Bank:</strong> Keystone Bank
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-2">
                <p className="break-all">
                  <strong>Account Number:</strong> 1009173142
                </p>
                <button
                  onClick={() => handleCopy("account", "1009173142")}
                  className="text-sm text-indigo-600 bg-indigo-100 dark:bg-indigo-700 dark:text-white px-3 py-1 rounded hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
                >
                  {copied === "account" ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">Crypto Wallets</h4>
              <div className="space-y-4">
                {[
                  // {
                  //   label: "BTC",
                  //   id: "btc",
                  //   address: "bc1qxyzexamplebtcwalletaddress",
                  // },
                  {
                    label: "ETH (ERC20)",
                    id: "eth",
                    address: "0xBB4a64b592706A8Ef346cbE2Cd29673f7f08D825",
                  },
                  {
                    label: "Polygon (MATIC)",
                    id: "matic",
                    address: "0xBB4a64b592706A8Ef346cbE2Cd29673f7f08D825",
                  },
                  {
                    label: "Solana (SOL)",
                    id: "sol",
                    address: "2fEz6MiNam4m6SLNjUvVYwC5yNSQoBddTKsRX5CZGtwA",
                  },
                ].map(({ label, id, address }) => (
                  <div
                    key={id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                  >
                    <p className="break-all">
                      <strong>{label}:</strong> {address}
                    </p>
                    <button
                      onClick={() => handleCopy(id, address)}
                      className="text-sm text-indigo-600 bg-indigo-100 dark:bg-indigo-700 dark:text-white px-3 py-1 rounded hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
                    >
                      {copied === id ? "Copied!" : "Copy"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Foundation;
