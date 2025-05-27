import React, { useState } from "react";
import { HeartHandshake, Lightbulb, Globe } from "lucide-react";

export function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-secondary/50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          {/* Always visible intro */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mokoto">
            About RJB World
          </h2>
          <p className="text-lg text-muted-foreground text-justify">
            RJB World is a purpose-driven organization committed to reimagining
            how technology, culture, and compassion intersect to build a better
            future. We are not just a company; we are a movement rooted in
            spiritual insight, ancestral wisdom, and the relentless pursuit of
            transformative impact.
          </p>
          <br />
          <p className="text-lg text-muted-foreground text-justify">
            Founded with the belief that sustainable change begins within, RJB
            World integrates innovation with intention building platforms,
            services, and systems that uplift individuals, communities, and
            generations. Whether it’s creating digital solutions, launching
            social ventures, or preserving indigenous knowledge systems, every
            initiative is an expression of our mission: to empower lives, honour
            legacy, and build bridges between the present and the divine future.
          </p>

          {/* Collapsible section starts here */}
          {showMore && (
            <>
              <br />
              <h3 className="text-2xl font-bold mb-4 font-mokoto">
                🌍 Our Mission
              </h3>
              <p className="text-lg text-muted-foreground text-justify">
                To harness technology, culture, and consciousness to empower
                individuals and communities, foster self-reliance, and preserve
                sacred traditions while building inclusive solutions for modern
                challenges.
              </p>
              <p className="text-lg text-muted-foreground text-justify">
                We believe wealth is not only measured in currency, but in
                knowledge, spirit, freedom, and impact. That’s why our approach
                is holistic combining sustainable enterprise with spiritual
                grounding, innovation with integrity, and modern tools with
                ancestral truth.
              </p>
              <br />
              <h3 className="text-2xl font-bold mb-4 font-mokoto">
                🌟 Our Vision
              </h3>
              <p className="text-lg text-muted-foreground text-justify">
                To become a globally recognized platform where innovation meets
                sacred purpose creating digital ecosystems, education, and
                funding models that liberate people spiritually, economically,
                and socially.
              </p>
              <p className="text-lg text-muted-foreground text-justify">
                We envision a world where technology serves humanity, culture is
                celebrated, and every individual has the tools to thrive. Our
                dream is to build a legacy of empowerment that transcends
                generations, honouring our ancestors while paving the way for
                future leaders.
              </p>
              <br />
              <h3 className="text-2xl font-bold mb-4 font-mokoto">
                🔥 What Inspires Us
              </h3>
              <p className="text-lg text-muted-foreground text-justify">
                Our work is inspired by divine alignment, the quiet spiritual
                revelations that happen in the early hours, the mysteries seen
                and unseen, and the urgent need to restore wholeness in a broken
                world.
              </p>
              <br />
              <p className="text-lg text-muted-foreground text-justify">
                We draw strength from our ancestors, the Yoruba culture, and the
                belief that every individual has a unique purpose. Our
                commitment to social justice, cultural preservation, and
                technological innovation is not just a mission; it’s a calling.
              </p>
              <br />
              <p className="text-lg text-muted-foreground text-justify">
                RJB World was birthed through moments of clarity, signs, and
                spiritual instruction. These experiences have shaped not just
                our business model but our identity as an organization. We are
                guided by more than logic, we are led by light.
              </p>
              <br />
              <p className="text-lg text-muted-foreground text-justify">
                In a world where traditional fundraising methods often limit
                creativity, we believe in self-funded impact. Our strategy
                embraces entrepreneurship (such as ethical ventures and digital
                platforms) to generate sustainable resources for our
                philanthropic missions, including the RJB Foundation, our
                future-facing NGO focused on education, advocacy, and community
                development.
              </p>
              <br />

              <h3 className="text-2xl font-bold mb-4 font-mokoto">
                💡 What Makes Us Different
              </h3>
              <br />
              <div className="text-lg text-muted-foreground text-justify">
                <ul>
                  <li>We are spiritually led and strategically driven.</li>
                  <li>
                    We speak the language of tech, but we never forget the
                    language of our ancestors.
                  </li>
                  <li>We are building not just for now, but for eternity.</li>
                </ul>
              </div>
              <br />
              <p className="text-lg text-muted-foreground text-justify">
                Join us as we redefine what it means to lead, serve, and build
                in the digital age with purpose, power, and peace.
              </p>
            </>
          )}

          {/* Read More / Show Less Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 text-primary underline font-semibold"
            aria-expanded={showMore}
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* The three cards section (unchanged) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-background dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Purpose-Driven Innovation
            </h3>
            <p className="text-muted-foreground">
              We build cutting-edge tech with soul from startups to social
              missions, our ideas create lasting impact.
            </p>
          </div>

          <div className="bg-background dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <HeartHandshake className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Empathy & Integrity</h3>
            <p className="text-muted-foreground">
              Every line of code, every collaboration is rooted in compassion,
              transparency, and the belief that people matter.
            </p>
          </div>

          <div className="bg-background dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Global Vision, Cultural Roots
            </h3>
            <p className="text-muted-foreground">
              From Yoruba-language education to global software platforms, we
              believe in preserving heritage while shaping the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
