export async function fetchProjects() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Ryde - Uber Clone",
          excerpt:
            "Ryde is a clone of the Uber app, built with React and Node.js.",
          description: `# Ryde - Uber Clone`,
          techStacks: ["React", "Node.js", "Tailwind CSS"],
          image: "/images/projects/ryde-uber-clone.webp",
          slug: "ryde-uber-clone",
          link: "/projects/ryde-uber-clone",
          liveLink: "https://www.companysite.com/project-two",
        },
        {
          title: "Yarn social - Social Media App",
          excerpt:
            "Yarn social is a MERN Stack social media app that uses pidgin English to interact with its users. Built with React, MongoDB, and Node.js.",
          description: `# Yarn social - Social Media App
  
  This is a detailed description of Yarn social. It includes features, challenges, and solutions.`,
          techStacks: ["React", "MongoDB", "Node.js"],
          image: "/images/projects/yarn-social-media-app.png",
          slug: "yarn-social",
          link: "/projects/yarn-social",
          liveLink: "https://www.companysite.com/project-two",
        },
        {
          title: "Bezzie - E-commerce App",
          excerpt:
            "Bezzie is a full stack E-commerce mobile App. Built with React Native and ERP Next",
          description: `# Bezzie - E-commerce App
  
  This is a detailed description of Bezzie - E-commerce App. It includes features, challenges, and solutions.`,
          techStacks: ["React Native", "ERP Next", "Frappe Framework"],
          image: "/images/projects/bezzie.webp",
          slug: "bezzie-ecommerce",
          link: "/projects/bezzie-ecommerce",
          liveLink: "https://www.companysite.com/project-two",
        },
        {
          title: "X Store - E-commerce App",
          excerpt:
            "X Store is a full-stack Next.js web application that allows users to buy and sell products.",
          description: `# X Store - E-commerce App`,
          techStacks: ["Next.js", "Tailwind CSS", "Node.js"],
          image: "/images/projects/xStore.png",
          slug: "xstore-ecommerce",
          link: "/projects/xstore-ecommerce",
          liveLink: "https://www.companysite.com/project-two",
        },
        {
          title: "Xclusive Realtors - Real Estate App",
          excerpt:
            "Xclusive Realtors is a full stack Real Estate App. Built with React and Rapid API.",
          description: `# Xclusive Realtors - Real Estate App`,
          techStacks: ["React", "Rapid API", "Tailwind CSS"],
          image: "/images/projects/xclusive-realtors.png",
          slug: "xclusive-realtors",
          link: "/projects/xclusive-realtors",
          liveLink: "https://www.companysite.com/project-two",
        },
        {
          title: "Mervielle Hub - Beauty App",
          excerpt:
            "Mervielle Hub is a beauty spa nestled in the heart of Lagos, Nigeria. ",
          description: `# Mervielle Hub - Beauty App`,
          techStacks: ["HTML", "CSS", "JavaScript"],
          image: "/images/projects/mervielle.png",
          slug: "mervielle-hub",
          link: "/projects/mervielle-hub",
          liveLink: "https://www.companysite.com/project-two",
        },
        {
          title: "RJB Xclusive properties - Real Estate App",
          excerpt:
            "RJB Xclusive properties is a full stack Real Estate App. Built with React and Rapid API.",
          description: `# RJB Xclusive properties - Real Estate App
  
  This is a detailed description of RJB Xclusive properties. It includes features, challenges, and solutions.`,
          techStacks: ["React", "Rapid API", "Tailwind CSS"],
          image: "/images/projects/xclusiveproperties.png",
          slug: "rjb-xclusive-properties",
          link: "/projects/rjb-xclusive-properties",
          liveLink: "https://www.companysite.com/project-two",
        },
        {
          title: "The Resolve Interior Designs - Interior Design App",
          excerpt:
            "The Resolve Interior Designs is a is a interrior design company that specializes in creating beautiful and functional spaces.",
          description: `# The Resolve Interior Designs - Interior Design App`,
          techStacks: ["HTML", "CSS", "JavaScript"],
          image: "/images/projects/resolvedecor.png",
          slug: "the-resolve-interior-designs",
          link: "/projects/the-resolve-interior-designs",
          liveLink: "https://www.companysite.com/project-two",
        },
      ]);
    }, 1000);
  });
}
