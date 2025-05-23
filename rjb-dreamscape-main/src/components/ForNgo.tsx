import { FileDown, Globe, Landmark, Users } from "lucide-react";

export function ForNgo() {
  return (
    <section
      id="for-ngo"
      className="py-16 md:py-24 bg-secondary/50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
            For NGOs / Cultural Institutions / Education Reformers
          </h2>
          <p className="text-lg text-muted-foreground">
            We collaborate with changemakers to build impactful technology for
            social good. Whether you're preserving culture, revolutionizing
            education, or powering advocacy we’re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-background dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">NGOs & Non-Profits</h3>
            <p className="text-muted-foreground">
              Need tech to power your cause? We build platforms that scale your
              impact.
            </p>
          </div>

          <div className="bg-background dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Educators & Language Advocates
            </h3>
            <p className="text-muted-foreground">
              Tools for language preservation, indigenous learning, and
              curriculum platforms.
            </p>
          </div>

          <div className="bg-background dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FileDown className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Social Innovators</h3>
            <p className="text-muted-foreground">
              Have a vision? We bring it to life from MVP to full-scale systems.
            </p>
          </div>

          <div className="bg-background dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Landmark className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Cultural Institutions
            </h3>
            <p className="text-muted-foreground">
              We digitize heritage and build modern access to ancestral wisdom.
            </p>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-4 font-mokoto">
            Support the Movement
          </h3>
          <p className="text-muted-foreground mb-6">
            RJB World is on a mission to preserve African heritage by teaching
            modern subjects entirely in the Yoruba language. From math and
            physics to computer science. Download our one-page funding proposal
            and NGO profile to see how your support can empower vulnerable
            children and redefine education from the roots.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/document/Funding Proposal by RJB World.pdf"
              download
              className="bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primary/90 transition"
            >
              Download Full Funding Proposal
            </a>
            <a
              href="/document/NGO Profile.pdf"
              download
              className="bg-muted text-primary px-6 py-3 rounded-xl shadow hover:bg-muted/80 transition"
            >
              Download Our NGO Profile
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 font-mokoto">
            The Founder’s Mission
          </h3>
          <p className="text-muted-foreground text-lg">
            Moshood Onabanji is a self-taught software engineer, spiritual
            visionary, and educator. From grassroots struggles to global vision,
            he’s building tech for ancestral preservation, economic empowerment,
            and cultural pride. His personal calling to build a Yoruba-first
            educational system and unlock the digital truth behind Ifá’s ancient
            codes is the spirit behind RJB World.
          </p>
        </div>
        <div className="max-w-2xl mx-auto text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 ">
            Need a Developer Who Understands Mission + Impact?
          </h3>
          <p className="text-muted-foreground text-lg mb-4">
            Let’s build something meaningful.
          </p>
          <p className="text-muted-foreground text-base">
            <strong>Email:</strong>{" "}
            <a href="mailto:connect@rjbworld.org" className="underline">
              connect@rjbworld.org
            </a>
            <br />
            <strong>Web:</strong>{" "}
            <a
              href="https://www.rjbworld.org"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.rjbworld.org
            </a>
          </p>
          <p className="mt-6 text-primary font-semibold text-lg">
            RJB World; Empowering Purpose Through Technology.
          </p>
        </div>
      </div>
    </section>
  );
}
