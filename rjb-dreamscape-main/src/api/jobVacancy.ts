export interface JobVacancy {
  name: string;
  title: string;
  slug: string;
  image: string;
  bio: string;
  excerpt: string;
  responsibilities: string[];
  requirements: string[];
  location: string;
  type: string;
  postedDate: string;
  specializations: string[];
  applicationDeadline: string;
  benefits: string[];
}

export async function fetchJobVacancy(): Promise<JobVacancy[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Moshood Onabanji Raji",
          title: "Relationship Manager",
          slug: "relationship-manager",
          image:
            "/images/JobVacancy/Blue Modern Job Vacancy Instagram Post.png",
          bio: `We are seeking a proactive and tech-savvy Relationship Manager to drive sales of our web apps, mobile apps, ERP software, and digital services to SMEs and enterprises. This role bridges marketing and client acquisition for the digital age.`,
          excerpt:
            "Drive the growth of our digital products and manage client relationships in tech-forward industries.",
          responsibilities: [
            "Identify and connect with potential clients across industries such as health, food, retail, and education.",
            "Promote RJB World solutions including mobile apps, websites, ERP systems, and appointment booking tools.",
            "Maintain and grow long-term client relationships through regular communication and feedback loops.",
            "Collaborate with technical and design teams to deliver tailored solutions that solve real business challenges.",
            "Track leads, follow up consistently, and convert them to paying customers via calls, meetings, and referrals.",
          ],
          requirements: [
            "Minimum of 1 year experience in sales, marketing, or business development.",
            "Excellent verbal and written communication skills.",
            "Confidence to speak with business owners and decision-makers.",
            "Basic understanding of web and mobile technologies.",
            "Ability to work independently and meet performance targets.",
            "Minimum of SSCE, OND, or Bachelor's degree in any field.",
          ],
          location: "Remote (Nigeria)",
          type: "Commission-Based with Performance Bonuses",
          postedDate: "2025-07-21",
          specializations: [
            "Tech Marketing",
            "Client Relationship",
            "Sales & Lead Conversion",
            "Digital Transformation",
            "B2B Outreach",
          ],
          applicationDeadline: "2025-08-10",
          benefits: [
            "₦80,000 Basic monthly salary.",
            " + 15% commission on all closed deals.",
            "Monthly incentives and rewards for top performers.",
            "Opportunity to be part of a growing tech company.",
            "Remote flexibility and autonomy.",
            "Access to internal training and mentorship.",
          ],
        },
      ]);
    }, 1000);
  });
}
