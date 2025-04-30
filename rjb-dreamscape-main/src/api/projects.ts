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
          description: `# Movie App - Netflix Clone.
          🎬 Prebuilt Movie App for Startups & Creators
Built with React Native | Full Source Code | Ready to Launch

Ready to own your own Netflix-style app?
Our Movie App is fully developed, polished, and ready for you to launch your brand, review platform, or entertainment startup fast!

What’s Included:

Movie listings powered by MovieDB API

Smooth Navigation + Search functionality

Image Carousel for featured movies

Hero icons + modern UI

Beautiful Linear Gradient styling

Cross-platform ready (Web, Android, iOS)

Built with React Native, Nativewind (TailwindCSS)

Perfect for:
Movie review sites, streaming startups, entertainment blogs, or fan communities.

Also Includes:

Full Source Code

Launch Assistance

6 Months Premium Support

Price:
₦800,000 or $400
One-time. Full ownership.

🎬 Start your entertainment brand today!

#RJBWorld #MovieApp #ReactNativeDev #StreamingStartup #LaunchFast #MobileApps #EntertainmentTech
          `,
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
          liveLink: "https://store.rjbworld.org/product/movie-app",
        },
        {
          title: "Ai Assistant Chat App - ChatGpt Clone",
          excerpt:
            "AI Voice Assistant with ChatGPT + DALL-E, you can chat with the assistant and generate art using DALL-E. You will also learn text-to-speech and speech-to-text features.",
          description: `# Ai Assistant Chat App - ChatGpt Clone.
          🧠🎙 Launch Your Own AI Voice Assistant App
Built with React Native | ChatGPT + DALL·E Powered | Full Source Code

Bring AI magic to your brand with our prebuilt AI Voice Assistant App — smart, fast, and ready for market!
Skip months of dev time and own a cutting-edge app today.

What’s Inside:

Voice Commands: Speech-to-Text and Text-to-Speech

AI Chat: Powered by ChatGPT API

AI Image Generation: Powered by DALL·E API

Beautiful UI with TailwindCSS (Nativewind)

Lightning-fast responsiveness

Cross-platform: Web, Android, iOS

Perfect for:
AI startups, virtual assistants, productivity apps, education platforms, personal project launches, and more!

Also Includes:

Full Source Code

Launch & Setup Assistance

6 Months Premium Support

Price:
₦800,000 or $400
Lifetime license. Launch your brand today!

🚀 Be the future.
Start your AI journey now!
          `,
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

          liveLink:
            "https://store.rjbworld.org/product/food-delivery-app-full-stack",
        },
        {
          title: "LinkUp - Social Media App",
          excerpt:
            "Full Stack Social Media App in React Native with Supabase. In this course you will learn about Responsiveness, Rich Text Editor, Realtime Updates, Media Uploading, Media Sharing, Image Caching, SVG Icons and cross-platform compatibility.",
          description: `# LinkUp - Social Media App
  
  

---

                  ### **🔥 Full Stack Social Media App for Startups & Creators**  
            **Built with React Native + Supabase | Fully Functional | Ready to Launch**

Looking to build the next Instagram or X alternative?  
Skip the dev stress and get our **prebuilt, full stack social app** — modern, scalable, and yours to own.

**What’s Inside:**  
- Clean Social Feed + Live Notifications  
- Auth System & User Profiles  
- Create / Edit / Like / Comment on Posts  
- Upload & Share Media (Images + Videos)  
- Realtime updates with Supabase  
- Cross-platform: Web, Android, iOS  
- Sleek UI, Image caching, SVG Icons  
- Built with **Expo Router + React Native**

**Perfect for:**  
Influencer platforms, niche communities, fan bases, creator hubs, and anyone ready to disrupt social.

**Includes:**  
- Full Source Code  
- Launch Guide  
- 6 Months Premium Support  
- Business Consultation (on request)

**Price:**  
**₦800,000** or **$400**  
One-time. Lifetime ownership.

**Let’s build your social empire.**  
  

#RJBWorld #SocialMediaApp #ReactNativeDev #StartupTools #LaunchFast #MobileAppBusiness

`,
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
          liveLink:
            "https://store.rjbworld.org/product/linkup-social-media-app",
        },
        {
          title: "Fitness App",
          excerpt:
            "Fully functional Fitness App in React Native Expo, Reanimated, Tailwindcss, RapidAPI and Image Parallax Carousel. ",
          description: `# Fitness App
  🏋🏽‍♂️📱 Launch Your Own Fitness App Today
Built with React Native | Full Source Code | Startup Ready

Step into the booming fitness market with our prebuilt Fitness App — professionally designed, fully functional, and ready for your brand launch.
Own your app and start growing fast!

What’s Inside:

Dynamic Fitness Routines via Rapid API

Smooth Motion with React Native Reanimated

Stunning Parallax Image Carousel

Mobile-first UI using TailwindCSS (Nativewind)

Fully Responsive Design

Cross-Platform Compatibility (Web, Android, iOS)

Perfect for:
Fitness brands, personal trainers, gym owners, wellness startups, and influencers.

Also Includes:

Full Source Code

Easy Setup & Launch Support

6 Months Premium Support

Price:
₦200,000 or $100
One-time payment. Full ownership.

🏋🏽‍♂️ Turn your fitness vision into a reality!


#RJBWorld #FitnessApp #ReactNative #StartupReady #MobileApps #WellnessTech #LaunchFast`,
          techStacks: ["React Native", "Expo", "Tailwind CSS", "RapidAPI"],
          image: "/images/projects/fitness-app.webp",
          slug: "fitness-app",
          link: "/projects/fitness-app",
          liveLink: "https://store.rjbworld.org/product/fitness-app",
        },
        {
          title: "MyTube - Youtube Clone",
          excerpt:
            "MyTube is a Youtube Clone app built with react native & tailwindcss, expo. and Rapid api to  fetch trending youtube videos.",
          description: `# MyTube - Youtube Clone
  🎥📱 Launch Your Own YouTube-Style App with MyTube
Built with React Native | Full Source Code | Startup Ready

Break into the video-sharing space with MyTube — a sleek, high-performance YouTube Clone App designed for brands, creators, and tech entrepreneurs.
Fully built, fully scalable, and ready for launch 🚀

What’s Inside:

React Native Powerhouse

API Integration for live video content

Feather Icons for a clean, modern UI

TailwindCSS (Nativewind) Styling

100% Cross-Platform (Web, Android, iOS)

Perfect for:
Video platforms, educational hubs, fitness programs, entertainment startups, and media houses.

Also Includes:

Complete Source Code

Easy Setup Guide

6 Months Premium Support

Price:
₦800,000 or $400
Own it. Customize it. Launch it. 🚀

🎬 Your media empire starts here.


#RJBWorld #MyTube #VideoApp #StartupReady #ReactNative #MediaStartup #MobileApps
  `,
          techStacks: ["React Native", "Expo", "Tailwind CSS", "RapidAPI"],
          image: "/images/projects/youtube-clone.webp",
          slug: "mytube-youtube-clone",
          link: "/projects/mytube-youtube-clone",
          liveLink: "https://store.rjbworld.org/product/mytube-youtube-clone",
        },
        {
          title: "Food Delivery App - Papa John's Clone",
          excerpt:
            "Papa John's clone Food Delivery App built with React Native, Tailwindcss, Redux Toolkit, and data fetching with Sanity.io.",
          description: `# Food Delivery App - Papa John's Clone
  
  🍕📱 Launch Your Own Food Delivery Empire with Our Papa John's Clone
Built with React Native | Full Source Code | Startup Ready

Ready to dominate the food delivery space?
Our Papa John’s Clone App delivers a full-stack, cross-platform solution — so you can focus on scaling your brand 🚀

What’s Inside:

React Native Core

Sanity.io for seamless CMS & backend

Redux Toolkit for effortless state management

Stunning Animations

React Native Maps Integration 🗺️

Feather Icons & TailwindCSS (Nativewind)

100% Cross-Platform (Web, Android, iOS)

Perfect for:
Restaurants, cloud kitchens, grocery startups, and local delivery services.

Also Includes:

Complete Source Code

Easy Setup & Customization

6 Months Premium Support 🚀

Price:
₦800,000 or $400
Customize it. Launch it. Own the market! 🍕📲



#RJBWorld #FoodDeliveryApp #StartupReady #ReactNative #PapaJohnsClone #MobileAppDevelopment`,
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
