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
          liveLink:
            "https://drive.google.com/drive/folders/1sySVShfdgG2Aem5X-fYV3TCtHENQEncp?usp=drive_link",
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
          liveLink: "https://mern-social-media2.vercel.app/",
        },
        {
          title: "Movie App - Netflix Clone",
          excerpt:
            "Fully functional Movie App in React Native with MovieDB api",
          description: `# Movie App - Netflix Clone.`,
          techStacks: [
            "React Native",
            "Node.js",
            "Tailwind CSS",
            "MovieDB API",
            "Firebase",
            "Redux",
          ],
          image: "/images/projects/movie-app.webp",
          slug: "movie-app",
          link: "/projects/movie-app",
          liveLink: "https://www.companysite.com/project-two",
        },
        {
          title: "Ai Assistant Chat App - ChatGpt Clone",
          excerpt:
            "AI Voice Assistant with ChatGPT + DALL-E, you can chat with the assistant and generate art using DALL-E. You will also learn text-to-speech and speech-to-text features.",
          description: `# Ai Assistant Chat App - ChatGpt Clone.`,
          techStacks: [
            "React Native",
            "Node.js",
            "Native wind",
            "OpenAI API",
            "Firebase",
            "Dell-E API",
          ],
          image: "/images/projects/Ai-chat-assistant.webp",
          slug: "ai-assistant-chat-app",
          link: "/projects/ai-assistant-chat-app",
          liveLink: "https://www.companysite.com/project-two",
        },
        {
          title: "Food Delivery Flutter App - Uber Eats Clone",
          excerpt:
            "A food delivery app made with Flutter x Firebase pre-built, functional and ready to go out of the box. This app has email authentication and backend already built in. ",
          description: `# Food Delivery App - Uber Eats Clone.
          A food delivery app made with Flutter x Firebase pre-built, functional and ready to go out of the box. This app has email authentication and backend already built in. The user can create an account, browse the menu, add to cart, and input card payment details. The order will then be placed and saved into Firebase for real-time live updates. The app will generate a receipt for the user as a summary of the order.

          📱 P A G E S ( 9 )

Login Page / Register Page / Home page / Drawer Menu / Settings Page / Food Details page / Cart Page / Payment Page / Delivery In Progress Page.

⚙️ F U N C T I O N A L I T Y





Authentication - create a new account / login





Browse Menu - burger / salad / side / dessert / drink / .. (you can easily edit/add a food category in the code)



Food Addons - each food item has special options the user can choose to add



Cart - add / remove / increase & decrease quantity / go to checkout



Total Calculation / Receipt Generator - automatically calculates everything in the cart and creates a receipt for the user as a summary.



Input Card Payment Details



Place order into the backend database with live updates.

🔥 B O N U S F E A T U R E S





Light & Dark mode



Sliver App Bar - Fancy app bar that stretches as you scroll. Makes the app feel modern and sleek



Animations - Lottie animations were used for delivery truck animation



Minimal Aesthetic Design - The app is designed to be simple and easy to use. It has a clean and modern look that is easy on the eyes.
          `,
          techStacks: [
            "Flutter",
            "Firebase",
            "Dart",
            "Google Maps API",
            "Stripe",
            "Native wind",
          ],
          image: "/images/projects/Food-App-flutter.png",
          slug: "food-delivery-flutter-app",
          link: "/projects/food-delivery-flutter-app",

          liveLink: "https://www.companysite.com/project-two",
        },
        {
          title: "LinkUp - Social Media App",
          excerpt:
            "Full Stack Social Media App in React Native with Supabase. In this course you will learn about Responsiveness, Rich Text Editor, Realtime Updates, Media Uploading, Media Sharing, Image Caching, SVG Icons and cross-platform compatibility.",
          description: `# LinkUp - Social Media App
  
Full Stack Social Media App in React Native with Supabase. In this course you will learn about Responsiveness, Rich Text Editor, Realtime Updates, Media Uploading, Media Sharing, Image Caching, SVG Icons and cross-platform compatibility.`,
          techStacks: [
            "React Native",
            "Supabase",
            "Tailwind CSS",
            "Native wind",
            "cloudinary",
          ],
          image: "/images/projects/social-media-app.webp",
          slug: "linkup-social-media-app",
          link: "/projects/linkup-social-media-app",
          liveLink: "https://www.companysite.com/project-two",
        },
        {
          title: "Fitness App",
          excerpt:
            "Fully functional Fitness App in React Native Expo, Reanimated, Tailwindcss, RapidAPI and Image Parallax Carousel. ",
          description: `# Fitness App
  Fully functional Fitness App in React Native Expo, Reanimated, Tailwindcss, RapidAPI and Image Parallax Carousel.
          `,
          techStacks: ["React Native", "Expo", "Tailwind CSS", "RapidAPI"],
          image: "/images/projects/fitness-app.webp",
          slug: "fitness-app",
          link: "/projects/fitness-app",
          liveLink: "https://www.companysite.com/project-two",
        },
        {
          title: "MyTube - Youtube Clone",
          excerpt:
            "MyTube is a Youtube Clone app built with react native & tailwindcss, expo. and Rapid api to  fetch trending youtube videos.",
          description: `# MyTube - Youtube Clone
  MyTube is a Youtube Clone app built with react native & tailwindcss, expo. and Rapid api to  fetch trending youtube videos.
  `,
          techStacks: ["React Native", "Expo", "Tailwind CSS", "RapidAPI"],
          image: "/images/projects/youtube-clone.webp",
          slug: "mytube-youtube-clone",
          link: "/projects/mytube-youtube-clone",
          liveLink: "https://www.companysite.com/project-two",
        },
        {
          title: "Food Delivery App - Papa John's Clone",
          excerpt:
            "Papa John's clone Food Delivery App built with React Native, Tailwindcss, Redux Toolkit, and data fetching with Sanity.io.",
          description: `# Food Delivery App - Papa John's Clone
  
  Papa John's clone Food Delivery App built with React Native, Tailwindcss, Redux Toolkit, and data fetching with Sanity.io.`,
          techStacks: [
            "React Native",
            "Tailwind CSS",
            "Redux Toolkit",
            "Sanity.io",
          ],
          image: "/images/projects/Food-delivery-app-react-Native.webp",
          slug: "food-delivery-app-papa-johns-clone",
          link: "/projects/food-delivery-app-papa-johns-clone",
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
          liveLink:
            "https://drive.google.com/drive/folders/1sySVShfdgG2Aem5X-fYV3TCtHENQEncp?usp=drive_link",
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
          liveLink: "https://store.rjbworld.org",
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
          liveLink: "https://uae-properties-teal.vercel.app/",
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
          liveLink: "https://honeybadgerng.github.io/Mervielle_hub/",
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
          liveLink: "https://honeybadgerng.github.io/RJB-Properties/",
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
          liveLink:
            "https://honeybadgerng.github.io/interor_decor_sample_site_1/",
        },
      ]);
    }, 1000);
  });
}
