export async function fetchProjects() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Yarn social - Social Media App",
          excerpt:
            "Yarn social is a MERN Stack social media app that uses pidgin English to interact with its users. Built with React, MongoDB, and Node.js.",
          description: `# ✨ Yarn Social – Where Pidgin Meets the Internet
  
  Yarn Social is a next-generation social media platform built on the powerful MERN stack — MongoDB, Express.js, React, and Node.js — but with a twist: it speaks your language. Literally.

Designed for the streets, by the streets, Yarn Social uses authentic Nigerian Pidgin English as its core language of interaction, making digital conversations feel more natural, relatable, and fun for everyday users.

Whether you wan gist, post cruise, drop takes, or just dey observe, Yarn Social gives you a vibrant space to express yourself without filters — in your own voice. It’s not just another app; it’s a movement bringing local flavor to global tech.

From sleek user interfaces powered by React to real-time feeds and a fast, scalable backend built on Node.js and MongoDB, Yarn Social delivers both performance and personality — giving Gen Z, Millennials, and streetwise netizens a place to truly belong.`,
          techStacks: ["React", "MongoDB", "Node.js"],
          image: "/images/projects/yarn-social-media-app.png",
          slug: "yarn-social",
          link: "/projects/yarn-social",
          liveLink: "https://mern-social-media2.vercel.app/",
        },
        {
          title: "Kwame Thomas Portfolio website",
          excerpt:
            "Kwame Thomas a dynamic striker with international experience, representing both England youth levels and the Saint Kitts and Nevis national team. Known for his aerial ability, pace, and clinical finishing in the box.",
          description: `# ✨ Kwame Thomas – The Striker's Journey

  Kwame Thomas is a dynamic striker with international experience, representing both England youth levels and the Saint Kitts and Nevis national team. Known for his aerial ability, pace, and clinical finishing in the box, Kwame has made a name for himself in the competitive world of football.`,
          techStacks: ["React", "MongoDB", "Node.js"],
          image: "/images/projects/kwame-thomas.png",
          slug: "kwame-thomas",
          link: "/projects/kwame-thomas",
          liveLink: "https://preview--kwame-striker-spark.lovable.app/",
        },
        {
          title: "Ryde - Uber Clone",
          excerpt:
            "Ryde is a modern, full-stack clone of the Uber app — built with precision using React and Node.js to deliver a seamless, real-time ride-hailing experience.",
          description: `# 🚗 Ryde – Your Ride, Reimagined
          
          Ryde is a modern, full-stack clone of the Uber app — built with precision using React and Node.js to deliver a seamless, real-time ride-hailing experience.

From intuitive rider and driver interfaces to live geolocation tracking, trip requests, and fare estimations, Ryde captures the essence of ride-sharing and rebuilds it from the ground up. Whether you're booking a quick trip across town or managing your driver dashboard, Ryde combines simplicity, speed, and scalability to give users the smooth experience they expect from top-tier mobility apps.

Engineered with the flexibility of React on the frontend and the power of Node.js on the backend, Ryde is more than just a clone — it's a blueprint for scalable, service-driven transportation tech.`,
          techStacks: ["React", "Node.js", "Tailwind CSS"],
          image: "/images/projects/ryde-uber-clone.webp",
          slug: "ryde-uber-clone",
          link: "/projects/ryde-uber-clone",
          liveLink:
            "https://drive.google.com/drive/folders/1sySVShfdgG2Aem5X-fYV3TCtHENQEncp?usp=drive_link",
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
          title: "🍎⌚ Apple Watch Store App (Kotlin + Firebase)",
          excerpt: `Launch Your Own Premium Smartwatch Store App 🚀
Built with Kotlin, MVVM architecture, and powered by Firebase, this ready-to-deploy mobile store app lets you sell Apple Watches and smart devices with ease.`,
          description: `#🍎⌚ Apple Watch Store App (Kotlin + Firebase)
          
          Launch Your Own Premium Smartwatch Store App 🚀
Built with Kotlin, MVVM architecture, and powered by Firebase, this ready-to-deploy mobile store app lets you sell Apple Watches and smart devices with ease.

⚙️ Core Features
🛒 Product Catalog – Showcase multiple Apple Watch models

🔍 Smart Search & Filtering

🛍️ Add to Cart + Firebase Checkout

🔐 Authentication (Login/Register)

📦 Order Summary + Confirmation

🖼️ Product Detail Page with High-Res Images

📱 Modern Material UI & Smooth Navigation

☁️ Firebase Realtime Database Integration

💼 Ideal For:
Startups launching smartwatch stores

Developers building niche eCommerce apps

Agencies offering branded tech store apps

🎁 What You Get

✅ Full Source Code (Clean & Modular)

✅ Firebase Integration

✅ 6 Months Premium RJB World Support

✅ Help with Setup & Customization

💰 Price:
₦400,000 or $220

One-time payment. Full ownership.
`,

          techStacks: ["Kolin", "firebase", "MVVM Architecture"],
          image: "/images/projects/apple-watchonline-store1.webp",
          slug: "apple-watch-store",
          link: "/projects/apple-watch-store",
          liveLink:
            "https://store.rjbworld.org/product/apple-watch-store-app-kotlin-firebase",
        },
        {
          title: "💳✨ Banking App (Kotlin + Firebase)",
          excerpt: `Your Own Digital Bank – Built for Scale 🏦
This ready-to-launch Banking App is crafted using Kotlin, Firebase, and modern Material Design UI – perfect for startups or fintech MVPs.`,
          description: `#💳✨ Banking App (Kotlin + Firebase)
          Launch Your Own Fintech Platform in Days! 🏦
A premium full-featured Banking App built with Kotlin, Firebase, and modern Material UI – perfect for startups looking to dominate the digital finance space with a clean MVP.

🧩 Key Features
🚀 Branded Splash Screen

📊 Clean, Professional Dashboard

💼 Account Overview & Summary

🔐 Secure Firebase Authentication

☁️ Realtime Transactions & Data Sync

💸 Transfer Simulation + Balance Management

🧠 Built with MVVM Architecture

📱 Sleek Material UI (Dashboard Ready)

🎁 What’s Included
✅ Full Kotlin Source Code

✅ Firebase Backend Setup

✅ Modern UI Kit

✅ 6 Months Premium Tech Support from RJB World

✅ Launch-Ready Codebase

💰 Price
₦5,000,000 or $1,200
          `,
          techStacks: ["Kotlin", "Firebase", "MVVM Architecture"],
          image: "/images/projects/bankingapp.png",
          slug: "banking-app",
          link: "/projects/banking-app",
          liveLink:
            "https://store.rjbworld.org/product/banking-app-kotlin-firebase",
        },
        {
          title: "☕📱 Online Coffee Shop App (Kotlin + Firebase)",
          excerpt:
            "☕📱 Online Coffee Shop App (Kotlin + Firebase) Launch Your Own Digital Café with Ease! Perfect for coffee brands, café startups, and e-commerce founders — this full-featured Coffee Shop App is built with Kotlin and Firebase, and comes with everything you need to start selling online instantly.",
          description: `# ☕📱 Online Coffee Shop App (Kotlin + Firebase)
          
          🔑 Features 🎬 Splash Screen for Brand Intro

🏠 Modern Dashboard Page

📦 Detailed Product Pages (Espresso, Cappuccino, Pastries, etc.)

🔐 Firebase Realtime Database Integration

🧠 Clean MVVM Architecture

☕ Smooth User Flow from Browse to Checkout

🧾 Order Summary & Cart Functionality

✨ Sleek Material UI

💼 What's Included ✅ Full Kotlin Source Code

✅ Firebase Backend Setup

✅ UI Components & Modern Material Design

✅ 6 Months Developer Support from RJB World

✅ Easy-to-Customize Codebase

💰 Price ₦200,000 or $100`,
          techStacks: ["Kotlin", "Firebase", "MVVM Architecture"],
          image: "/images/projects/coffe-shop.webp",
          slug: "coffee-shop-one",
          link: "/projects/coffee-shop-one",
          liveLink:
            "https://store.rjbworld.org/product/online-coffee-shop-app-kotlin-firebase",
        },

        {
          title: "💸🔐 Crypto App in Kotlin (with Source Code)",
          excerpt:
            "💸🔐 Crypto App in Kotlin (with Source Code) Build Your Own Crypto Tracker or Wallet App Today! Whether you’re launching a crypto startup, fintech brand, or NFT venture, this professionally built Crypto App in Kotlin is your shortcut to market. Developed with Android Studio, it includes robust features, sleek UI, and Firebase integration for real-time data.",
          description: `#💸🔐 Crypto App in Kotlin (with Source Code)
          
          💸🔐 Crypto App in Kotlin (with Source Code) Build Your Own Crypto Tracker or Wallet App Today! Whether you’re launching a crypto startup, fintech brand, or NFT venture, this professionally built Crypto App in Kotlin is your shortcut to market. Developed with Android Studio, it includes robust features, sleek UI, and Firebase integration for real-time data.

🔑 Features 🏦 Live Cryptocurrency Prices

📈 Price Charts & Market Trends

🔍 Coin Search & Filtering

🧾 Portfolio Tracker

🔐 Secure Firebase Database

🎨 Material UI Design

🧠 MVVM Architecture

📲 Built for Android with Kotlin

💼 What You Get ✅ Full Kotlin Source Code

✅ Firebase Backend

✅ Custom UI Components

✅ 6 Months Support from RJB World

✅ Lifetime License for Use

💰 Pricing ₦2,000,000 or $1,000`,
          techStacks: ["Kotlin  ", "Firebase", "Android studio"],
          image: "/images/projects/crypto-app.webp",
          slug: "crypto-app",
          link: "/projects/crypto-app",
          liveLink:
            "https://store.rjbworld.org/product/crypto-app-in-kotlin-with-source-code",
        },
        {
          title: "🩺 Doctor Appointment App in Kotlin (with Source Code)",
          excerpt:
            "🩺 Doctor Appointment App in Kotlin (with Source Code) Build your own healthcare app with this Doctor Appointment App, crafted in Kotlin using Android Studio and powered by Firebase. Designed with a clean Material UI, this app includes a modern dashboard, intro screen, and detailed appointment management.",
          description: `#Doctor Appointment App in Kotlin (with Source Code)
          
          🩺 Doctor Appointment App in Kotlin (with Source Code) Build your own healthcare app with this Doctor Appointment App, crafted in Kotlin using Android Studio and powered by Firebase. Designed with a clean Material UI, this app includes a modern dashboard, intro screen, and detailed appointment management.

✅ Features Patient Onboarding & Intro Page

Browse Doctors & Specialties

Appointment Booking with Time Slot Selection

Firebase Real-time Database Integration

Responsive Design with Kotlin

MVVM Architecture

Cross-Platform Ready via Android Studio Ladybug

💼 What You Get Full Kotlin Source Code

Firebase Setup

6 Months of Support

Lifetime Usage License

Clean UI/UX with Medical Theme

💰 Price: ₦200,000 or $120


1

`,
          techStacks: ["Kotlin", "Firebase"],
          image: "/images/projects/doctor-appointment-app.webp",
          slug: "doctor-appointment-app",
          link: "/projects/doctor-appointment-app",
          liveLink:
            "https://store.rjbworld.org/product/doctor-appointment-app-in-kotlin-with-source-code",
        },
        {
          title: "🩺 Doctor Appointment App in Kotlin (with Source Code)",
          excerpt:
            "🩺 Doctor Appointment App in Java (Android Studio + Firebase) Launch a sleek, modern Doctor Appointment App built in Java using Android Studio with Firebase integration. This complete app includes an elegant splash screen, intuitive intro activity, a modern dashboard, and detailed doctor profiles for appointment scheduling.",
          description: `#🩺 Doctor Appointment App in Kotlin (with Source Code)
          
          🩺 Doctor Appointment App in Java (Android Studio + Firebase) Launch a sleek, modern Doctor Appointment App built in Java using Android Studio with Firebase integration. This complete app includes an elegant splash screen, intuitive intro activity, a modern dashboard, and detailed doctor profiles for appointment scheduling.

✅ Features: Java-Based Android App (Built in Android Studio)

Firebase Database Integration (Real-time)

Material Design Dashboard

Intro & Splash Activities

Appointment Booking Functionality

Doctor Detail Pages

Clean and Responsive UI

💼 What You Get: Full Java Source Code

Firebase Setup

6 Months Support

Commercial Use Rights

Easy-to-Customize Codebase

💰 Price: ₦200,000 or $120`,
          techStacks: ["Java", "Firebase"],
          image: "/images/projects/doctor-appointment-app1.webp",
          slug: "doctor-appointment-app-two",
          link: "/projects/doctor-appointment-app-two",
          liveLink:
            "https://store.rjbworld.org/product/doctor-appointment-app-in-kotlin-with-source-code-2",
        },
        {
          title:
            "🩺 Doctor Appointment App in Kotlin (Android Studio + Firebase)",
          excerpt:
            "🩺 Doctor Appointment App in Kotlin (Android Studio + Firebase) Build your own full-featured Doctor Appointment App using Kotlin and Android Studio Koala, seamlessly integrated with Firebase. This modern mobile solution includes a clean intro flow, splash screen, dashboard, and doctor detail pages for booking appointments.",
          description: `#🩺 Doctor Appointment App in Kotlin (Android Studio + Firebase)
          
          🩺 Doctor Appointment App in Kotlin (Android Studio + Firebase) Build your own full-featured Doctor Appointment App using Kotlin and Android Studio Koala, seamlessly integrated with Firebase. This modern mobile solution includes a clean intro flow, splash screen, dashboard, and doctor detail pages for booking appointments.

✅ Features: Kotlin-based Android App (Built with Android Studio Koala)

Firebase Integration for Realtime Database

Splash & Intro Activities

Modern Material Dashboard

Doctor Detail + Appointment Booking

Responsive UI (Mobile-first)

💼 What You Get: Full Kotlin Source Code

Firebase Configuration

6 Months Developer Support

Commercial License

Easy to Customize & Extend

💰 Price: ₦200,000 or $120`,
          techStacks: ["Kotlin", "Firebase"],
          image: "/images/projects/doctor-appointment-app3.webp",
          slug: "doctor-appointment-app-three",
          link: "/projects/doctor-appointment-app-three",
          liveLink:
            "https://store.rjbworld.org/product/doctor-appointment-app-in-kotlin-android-studio-firebase",
        },
        {
          title: "🏋️ Workout App in Android Studio (Java/Kotlin)",
          excerpt:
            "🏋️ Workout App in Android Studio (Java/Kotlin) Build a sleek and fully functional Workout App using Android Studio! Includes a dynamic dashboard, clean intro screens, and a dedicated lessons section to guide users through exercise routines.",
          description: `#🏋️ Workout App in Android Studio (Java/Kotlin)
          
          🏋️ Workout App in Android Studio (Java/Kotlin) Build a sleek and fully functional Workout App using Android Studio! Includes a dynamic dashboard, clean intro screens, and a dedicated lessons section to guide users through exercise routines.

✅ Features: Android Studio Project (Java or Kotlin)

Modern Material Dashboard

Splash & Intro Activities

Workout Lessons Activity

User-friendly & responsive layout

Customizable content and structure

💼 What You Get: Full Source Code

Clean Architecture

6 Months Developer Support

Commercial Use License

Firebase-ready (optional upgrade)

💰 Price: ₦200,000 or $120`,
          techStacks: ["Kotlin", "Java"],
          image: "/images/projects/fitness-app2.webp",
          slug: "fitness-app-two",
          link: "/projects/fitness-app-two",
          liveLink:
            "https://store.rjbworld.org/product/workout-app-in-android-studio-java-kotlin",
        },
        {
          title:
            "🍔 Food Ordering App in Android Studio (with Firebase & Blur Effect)",
          excerpt:
            "🍔 Food Ordering App in Android Studio (with Firebase & Blur Effect) Launch your own food delivery platform with this professionally built Food Ordering App powered by Firebase and modern UI elements like blur effects, responsive layouts, and smooth navigation.",
          description: `#🍔 Food Ordering App in Android Studio (with Firebase & Blur Effect)
          
          🍔 Food Ordering App in Android Studio (with Firebase & Blur Effect) Launch your own food delivery platform with this professionally built Food Ordering App powered by Firebase and modern UI elements like blur effects, responsive layouts, and smooth navigation.

✅ Key Features: Firebase Realtime Database

Food Categories & Best Picks

Food Details & Shopping Cart

Intro & Splash Screens

Blur Effects for Visual Polish

Android Material Design

Fully Functional Ordering Flow

Built with Kotlin & MVVM

🎁 What's Included: Complete Source Code

6 Months of Developer Support

Firebase Setup Guide

Commercial License

💰 Price: ₦400,000 or $200`,
          techStacks: [""],
          image: "/images/projects/food-order-app.webp",
          slug: "food-order-app",
          link: "/projects/food-order-app",
          liveLink:
            "https://store.rjbworld.org/product/food-ordering-app-in-android-studio-with-firebase-blur-effect",
        },
        {
          title: "🍕 Android Food Ordering App (with Firebase)",
          excerpt:
            "🍕 Android Food Ordering App (with Firebase) Build your own modern Food Delivery App with a sleek UI, login/signup system, cart functionality, and Firebase backend — all in Android Studio using Kotlin.",
          description: `#🍕 Android Food Ordering App (with Firebase)
          🍕 Android Food Ordering App (with Firebase) Build your own modern Food Delivery App with a sleek UI, login/signup system, cart functionality, and Firebase backend — all in Android Studio using Kotlin.

🔥 App Features: Firebase Realtime Database

Food Categories & Best Picks

Detailed Food Pages

Intro Screen

Login & Signup System

Cart Functionality

Android Material Design

MVVM Architecture

🎁 Package Includes: Full Source Code

6 Months Technical Support

Firebase Integration Setup

Documentation & Commercial Rights

💵 Price: ₦400,000 or $200 `,
          techStacks: ["Kotlin", "Firebase"],
          image: "/images/projects/food-shop.webp",
          slug: "food-shop",
          link: "/projects/food-shop",
          liveLink:
            "https://store.rjbworld.org/product/android-food-ordering-app-with-firebase",
        },
        {
          title: "🍽️ Foodator – Food Ordering App (Kotlin + Firebase)",
          excerpt: `🍽️ Foodator – Food Ordering App (Kotlin + Firebase) Built with Jetpack Compose | Firebase | MVVM | Full Source Code

Bring your food delivery startup to life with Foodator, a fully functional and modern food ordering app developed in Android Studio using Jetpack Compose, Kotlin, and Firebase. Designed for scalability, performance, and speed.`,
          description: `# 🍽️ Foodator – Food Ordering App (Kotlin + Firebase)
          
          🍽️ Foodator – Food Ordering App (Kotlin + Firebase) Built with Jetpack Compose | Firebase | MVVM | Full Source Code

Bring your food delivery startup to life with Foodator, a fully functional and modern food ordering app developed in Android Studio using Jetpack Compose, Kotlin, and Firebase. Designed for scalability, performance, and speed.

✅ Core Features: 🍱 Food Categories & Popular Dishes

🔍 Food Detail Pages

🛒 Cart Management & Checkout Flow

🚀 Intro Page for App Onboarding

🔐 Firebase Realtime Database

🧠 Clean MVVM Architecture

✨ Built with Jetpack Compose for smooth UI

🎁 What You Get: Full Kotlin Source Code

Firebase Configuration

6 Months Premium Support

Clean, modular structure (easy to customize)

Commercial License

💰 Price: ₦400,000 or $200`,
          techStacks: ["Kotlin", "Firebase", "Jetpack Compose"],
          image: "/images/projects/foodator.webp",
          slug: "foodator",
          link: "/projects/foodator",
          liveLink:
            "https://store.rjbworld.org/product/foodator-food-ordering-app-kotlin-firebase",
        },
        {
          title: "🏡 Real Estate App – Android",
          excerpt: `🏡 Real Estate App – Android Source Code Built with Android Studio + Kotlin + Firebase

Create your own property listing app with this fully functional Real Estate App template. Designed with a clean dashboard, modern UI, and robust backend integration — it's the perfect starting point for realtors, developers, or entrepreneurs.`,
          description: `# 🏡 Real Estate App – Android 
          
          🏡 Real Estate App – Android Source Code Built with Android Studio + Kotlin + Firebase

Create your own property listing app with this fully functional Real Estate App template. Designed with a clean dashboard, modern UI, and robust backend integration — it's the perfect starting point for realtors, developers, or entrepreneurs.

✅ Core Features: 🏠 Modern Dashboard Layout

🔍 Property Search & Detail Pages

👋 Intro/Onboarding Screen

🔐 Firebase Integration

📱 Android Material Design

✨ Optimized for Responsiveness

📦 Easy-to-Customize Code Structure

🎁 What You Get: Complete Android Studio Source Code

Firebase Setup Guide

6 Months Developer Support

Modular Code for Easy Edits

Lifetime Access

💰 Price: ₦400,000 or $200`,
          techStacks: ["Kotlin"],
          image: "/images/projects/house booking.png",
          slug: "house-booking-app",
          link: "/projects/house-booking-app",
          liveLink:
            "https://store.rjbworld.org/product/real-estate-app-android-source",
        },
        {
          title: "👩‍💼 Job Finder App",
          excerpt: `👩‍💼 Job Finder App – Android Source Code Built with Kotlin + MVVM Architecture | Android Studio Koala

Launch your own professional Job Listing App with this ready-to-use source code. Designed using MVVM architecture, this app is perfect for job boards, recruitment platforms, or developers learning scalable app structures.`,
          description: `#👩‍💼 Job Finder App 
          👩‍💼 Job Finder App – Android Source Code Built with Kotlin + MVVM Architecture | Android Studio Koala

Launch your own professional Job Listing App with this ready-to-use source code. Designed using MVVM architecture, this app is perfect for job boards, recruitment platforms, or developers learning scalable app structures.

✅ Features: 🧭 Modern Job Dashboard

📄 Job Details Page

🔍 Search & Filter Functions

✍️ Apply & Save Jobs

💾 Firebase Integration

⚙️ MVVM Architecture

📱 Clean Kotlin Codebase

💡 Built with Android Studio Koala

🎁 What’s Included: Full Source Code

Clean MVVM Structure

Firebase Backend Setup

6 Months Developer Support

Lifetime Access

💰 Price: ₦400,000 or $200
          `,
          techStacks: ["Kotlin", "Android Studio"],
          image: "/images/projects/job-app.webp",
          slug: "job-app",
          link: "/projects/job-app",
          liveLink: "https://store.rjbworld.org/product/job-finder-app",
        },
        {
          title: "📁 Project Manager App",
          excerpt: `📁 Project Manager App – Android Source Code Built with Kotlin + MVVM Architecture | Android Studio

Build a modern, professional Project Management App with this complete Android Studio source code. Ideal for freelancers, teams, startups, or devs looking to master project tracking using MVVM principles.`,
          description: `#📁 Project Manager App
          
          📁 Project Manager App – Android Source Code Built with Kotlin + MVVM Architecture | Android Studio

Build a modern, professional Project Management App with this complete Android Studio source code. Ideal for freelancers, teams, startups, or devs looking to master project tracking using MVVM principles.

✅ Features: 📌 Project Dashboard

📋 Task Tracking

⏰ Deadlines & Status Updates

👥 Team Member Assignment

🔍 Search & Filter

💾 Firebase Integration

🧠 MVVM Architecture

⚙️ Kotlin Clean Codebase

🎁 What’s Included: Complete Source Code

Scalable MVVM Structure

Firebase Backend Config

6 Months Post-sale Support

Cross-platform Ready UI

💰 Price: ₦400,000 or $200`,
          techStacks: ["Kotlin", "Android Studio"],
          image: "/images/projects/project-management-app.webp",
          slug: "job-management-app",
          link: "/projects/job-management-app",
          liveLink: "https://store.rjbworld.org/product/project-manager-app",
        },
        {
          title: "🎬Movies App (Kotlin + MVVM Architecture)",
          excerpt: `🎬Movies App – Android Source Code Built with Kotlin + MVVM Architecture | Android Studio

Take your mobile development skills to the next level with this stunning Movie App Source Code. Designed with smooth navigation, clean architecture, and Firebase integration — it’s perfect for streaming, discovery, and entertainment platforms.`,
          description: `#🎬Movies App (Kotlin + MVVM Architecture)
          🎬Movies App – Android Source Code Built with Kotlin + MVVM Architecture | Android Studio

Take your mobile development skills to the next level with this stunning Movie App Source Code. Designed with smooth navigation, clean architecture, and Firebase integration — it’s perfect for streaming, discovery, and entertainment platforms.

✅ Features: 🎬 Engaging Intro Activity 🎨 Modern Material Dashboard 🎞️ Movie Detail Pages 🔍 Dynamic Search & Filtering 🧠 Kotlin + MVVM Architecture ☁️ Firebase Realtime Integration 💡 Fully Modular & Scalable Codebase 📱 Cross-Device Compatibility

🎁 What’s Included:

Full Kotlin Source Code

Firebase Setup & Integration

Clean MVVM Architecture

Material UI Components

Professional Design Assets

6 Months Post-Sale Support

💰 Price: ₦800,000 or $400
          `,
          techStacks: [""],
          image: "/images/projects/movie-app2.webp",
          slug: "movie-app-two",
          link: "/projects/movie-app-two",
          liveLink:
            "https://store.rjbworld.org/product/movies-app-kotlin-mvvm-architecture",
        },
        {
          title: "🎞️ Movie Ticket Booking App – Kotlin + Firebase",
          excerpt:
            "🎞️ Movie Ticket Booking App – Kotlin + Firebase Build a sleek, fully-functional movie ticket booking app using Kotlin, Firebase, and MVVM architecture in Android Studio Koala. Whether you're a cinema operator, tech entrepreneur, or a mobile app developer aiming to break into the entertainment sector — this app gives you a modern, reliable starting point.",
          description: `# 🎞️ Movie Ticket Booking App – Kotlin + Firebase
          🎞️ Movie Ticket Booking App – Kotlin + Firebase Build a sleek, fully-functional movie ticket booking app using Kotlin, Firebase, and MVVM architecture in Android Studio Koala. Whether you're a cinema operator, tech entrepreneur, or a mobile app developer aiming to break into the entertainment sector — this app gives you a modern, reliable starting point.

🚀 Why You'll Love It: This isn't just any ticket booking app. It's a feature-rich Android project designed with real-world use in mind. From the moment a user launches the app, they're greeted with a cinematic intro activity, followed by a stunning dashboard UI showing now showing and upcoming movies. The experience continues with detailed film pages, a seat selection interface, and real-time database integration via Firebase.

✅ Core Features: 🎬 Beautiful Splash & Intro Pages 🧭 Material Design Dashboard (Now Showing, Upcoming, Search, etc.) 📖 Detailed Movie Pages (Title, Genre, Synopsis, Ratings, Poster) 🎟️ Seat Selection Interface (Grid-based, Real-time Selection Feedback) 🔍 Showtimes with Availability 📝 User Authentication (Login/Signup with Firebase Auth) 📩 Booking Confirmation Summary ⚙️ MVVM Clean Architecture ☁️ Firebase Backend: Realtime DB, Auth, Storage 🧪 Scalable Kotlin Codebase 📲 Optimized for all Android screen sizes

🎁 What You’re Getting:

Complete Android Studio Project with MVVM structure

All UI Components (XML/Compose compatible)

Firebase Project Setup Instructions

Source Code and Assets (Movie Posters, Icons, etc.)

Free Bug Fixes & Updates for 6 Months

Deployment Tips for Play Store

💰 Price: ₦800,000 or $400 Immediate delivery. Full source code. No hidden fees.
          `,
          techStacks: ["  Kotlin", "Firebase", "MVVM Architecture"],
          image: "/images/projects/movie-ticket-booking.webp",
          slug: "movie-ticket-booking",
          link: "/projects/movie-ticket-booking",
          liveLink:
            "https://store.rjbworld.org/product/movie-ticket-booking-app-kotlin-firebase",
        },
        {
          title: "📍 Nearby Store App – Kotlin + Firebase",
          excerpt:
            "📍 Nearby Store App – Kotlin + Firebase Create a cutting-edge Nearby Store App in Android Studio with Google Maps integration and Firebase. This complete solution will help users find stores, view their locations on a map, and interact with detailed store info, all using Firebase for backend storage.",
          description: `# 📍 Nearby Store App – Kotlin + Firebase
          📍 Nearby Store App – Kotlin + Firebase Create a cutting-edge Nearby Store App in Android Studio with Google Maps integration and Firebase. This complete solution will help users find stores, view their locations on a map, and interact with detailed store info, all using Firebase for backend storage.

🚀 Why You’ll Love This App: From a sleek dashboard to the Google Maps activity, this app is designed to help users quickly find nearby stores in their area, access detailed information, and navigate to locations without hassle. All the while, Firebase handles real-time data syncing to keep your app up-to-date.

✅ Core Features: 📍 Nearby Stores Dashboard – Display nearby stores based on the user's location. 🗺️ Google Maps Integration – View stores on a map with real-time location tracking. 🔍 Store Search & Filter – Easily find stores by category or proximity. 🏪 Store Detail Pages – Each store has its own page with contact details, address, and more. 📲 Firebase Integration – Real-time data for storing and retrieving store information. 📌 Custom Location Markers – Display store locations with customizable markers on Google Maps. 🔐 Firebase Authentication – Secure login for users.

🎁 What You’re Getting:

Full Kotlin Source Code

Firebase Setup Guide (Realtime DB, Authentication)

Google Maps API Integration

Clean MVVM Architecture

Firebase Storage for Images

Easy-to-follow Instructions

6 Months of Post-Sale Support

💰 Price: ₦400,000 or $200
          `,
          techStacks: ["Firebase", "Jetpack Compose"],
          image: "/images/projects/nearby-stores.webp",
          slug: "nearby-stores",
          link: "/projects/nearby-stores",
          liveLink:
            "https://store.rjbworld.org/product/nearby-store-app-kotlin-firebase",
        },
        {
          title: "🛒 Grocery Store App – Kotlin + Firebase",
          excerpt:
            "🛒 Grocery Store App – Kotlin + Firebase Build an intuitive Grocery Store App in Android Studio using Firebase for real-time data handling. This app will feature an engaging modern dashboard, intro activity, and detailed product pages, making grocery shopping seamless for users.",
          description: `# 🛒 Grocery Store App – Kotlin + Firebase
          Build an intuitive Grocery Store App in Android Studio using Firebase for real-time data handling. This app will feature an engaging modern dashboard, intro activity, and detailed product pages, making grocery shopping seamless for users.

🚀 Why You’ll Love This App:
From browsing products to managing the shopping cart, this app covers all the essentials of a grocery store experience. With Firebase handling the backend, you can store and retrieve data in real time while users enjoy a smooth shopping experience.

✅ Core Features:
🛒 Modern Grocery Dashboard – Display categories of grocery items and promotions.
🔍 Product Search & Filter – Easily search and filter grocery items.
🛍️ Product Detail Pages – Each item has its own page with images, descriptions, and prices.
🛒 Shopping Cart – Users can add products to the cart and manage their items.
📦 Firebase Integration – Use Firebase Realtime Database to store products, prices, and more.
🔐 User Authentication – Secure login and sign-up features with Firebase Authentication.
💳 Payment Integration – Integrate payment systems to complete the purchase (if required).

🎁 What You’re Getting:

Full Kotlin Source Code

Firebase Setup Guide (Realtime DB, Authentication)

Clean MVVM Architecture

Firebase Storage for Product Images

Shopping Cart Management

Easy-to-follow Instructions

6 Months of Post-Sale Support

💰 Price:
₦400,000 or $200
          `,
          techStacks: ["Firebase"],
          image: "/images/projects/online--grocery-store10.webp",
          slug: "grocery-store",
          link: "/projects/grocery-store",
          liveLink:
            "https://store.rjbworld.org/product/grocery-store-app-kotlin-firebase",
        },
        {
          title: "🍰 Cake Store App – Kotlin + Firebase",
          excerpt:
            "🍰 Cake Store App – Kotlin + Firebase Create a delightful Cake Store App in Android Studio using Jetpack Compose, Kotlin MVVM Architecture, and Firebase for real-time data storage. This app will have a modern dashboard, a cart activity, and detailed cake pages where users can browse, select, and purchase cakes seamlessly.",
          description: `# 🍰 Cake Store App – Kotlin + Firebase
          
          🍰 Cake Store App – Kotlin + Firebase Create a delightful Cake Store App in Android Studio using Jetpack Compose, Kotlin MVVM Architecture, and Firebase for real-time data storage. This app will have a modern dashboard, a cart activity, and detailed cake pages where users can browse, select, and purchase cakes seamlessly.

🚀 Why This App is Great: This app offers a smooth and user-friendly shopping experience for cake lovers. With Firebase integration, you’ll be able to manage user data and cake inventory effortlessly, while the Jetpack Compose UI ensures the app is modern, responsive, and interactive.

✅ Core Features: 🍰 Modern Cake Dashboard – Display a variety of cakes with categories like birthday cakes, wedding cakes, and more. 🔍 Search & Filter – Let users find cakes based on their preferences. 🍰 Cake Detail Page – View detailed information about each cake, including images, descriptions, and prices. 🛒 Shopping Cart – Add cakes to the cart, update quantities, and proceed to checkout. 📦 Firebase Integration – Store cake data (images, prices, inventory) in Firebase Realtime Database. 🔐 User Authentication – Secure login/signup for customers using Firebase Authentication. 💳 Payment Integration – Option to integrate a payment gateway to complete the purchase (if needed).

🎁 What You Get:

Kotlin Source Code

Complete MVVM Architecture

Firebase Realtime Database Setup

Jetpack Compose UI

Shopping Cart Management

6 Months Post-sale Support

💰 Price: ₦400,000 or $200
`,
          techStacks: ["Jetpack Compose", "Kotlin", "Firebase"],
          image: "/images/projects/online-cateringstore4.webp",
          slug: "cake-store",
          link: "/projects/cake-store",
          liveLink:
            "https://store.rjbworld.org/product/cake-store-app-kotlin-firebase",
        },
        {
          title: "💄 Beauty Store App – Kotlin + Firebase",
          excerpt:
            "💄 Beauty Store App – Kotlin + Firebase Create a stunning Beauty Store App in Android Studio using Kotlin MVVM Architecture and Firebase. This app includes a modern dashboard, a shopping cart, and detailed beauty product pages, allowing users to browse and purchase beauty products seamlessly.",
          description: `# 💄 Beauty Store App – Kotlin + Firebase
          💄 Beauty Store App – Kotlin + Firebase Create a stunning Beauty Store App in Android Studio using Kotlin MVVM Architecture and Firebase. This app includes a modern dashboard, a shopping cart, and detailed beauty product pages, allowing users to browse and purchase beauty products seamlessly.

🚀 Why This App is Awesome: Designed for beauty enthusiasts, this app features a modern UI built with Jetpack Compose, making it easy to showcase products like skincare, makeup, hair care, and more. With Firebase, you get a real-time database to manage products, and user authentication for secure logins.

✅ Key Features: 💄 Modern Beauty Dashboard – Display beauty products in various categories like skincare, makeup, haircare, etc. 🔍 Search & Filter – Allow users to find products based on categories, price range, and more. 💅 Product Detail Page – View detailed product information, including images, descriptions, ingredients, and reviews. 🛒 Shopping Cart – Add beauty products to the cart, manage quantities, and proceed to checkout. 📦 Firebase Integration – Store product data, user information, and order history with Firebase Realtime Database. 🔐 User Authentication – Secure login/signup via Firebase Authentication to personalize the shopping experience. 💳 Payment Integration – Optional payment gateway integration to process orders securely.

🎁 What You Get:

Kotlin Source Code

Complete MVVM Architecture

Firebase Realtime Database Setup

Jetpack Compose UI

Shopping Cart Management

6 Months Post-sale Support

💰 Price: ₦400,000 or $200

          `,
          techStacks: [
            "Kotlin",
            "Firebase",
            "Jetpack Compose",
            "MVVM architecture",
          ],
          image: "/images/projects/online-beauty-store11.webp",
          slug: "beauty-store",
          link: "/projects/beauty-store",
          liveLink: "",
        },

        {
          title: "👗 Clothing Store App – Java + Firebase",
          excerpt:
            "👗 Clothing Store App – Java + Firebase Learn how to build a Clothing Store app in Android Studio using Java and Firebase. This app will feature a modern splash screen, a dashboard for browsing products, and detailed product pages, all backed by Firebase for real-time data storage.",
          description: `# 👗 Clothing Store App – Java + Firebase
          
          👗 Clothing Store App – Java + Firebase Learn how to build a Clothing Store app in Android Studio using Java and Firebase. This app will feature a modern splash screen, a dashboard for browsing products, and detailed product pages, all backed by Firebase for real-time data storage.

🚀 Why This App is Amazing: Create a seamless shopping experience for users with a stylish Clothing Store app that showcases the latest fashion trends. Manage your product catalog with Firebase to keep everything up-to-date in real-time. Perfect for anyone looking to get into eCommerce app development!

✅ Key Features: 👚 Splash Activity – A sleek introduction screen to set the tone for your fashion app. 📱 Modern Dashboard – Display categories like men’s, women’s, accessories, etc., with product images and names. 🛍️ Product Detail Activity – Show detailed information about each clothing item, including size options, prices, and reviews. 💬 Firebase Integration – Real-time product data management and authentication for users. 🔒 Firebase Authentication – Secure user login/signup to allow customers to make personalized orders. 📦 Inventory Management – Use Firebase to update and manage your store's stock and order history.

🎁 What You Get:

Full Java Source Code

Complete Firebase Integration

Real-time product and user data management

Splash Screen and Modern UI

6 Months Post-sale Support

💰 Price: ₦400,000 or $200

          `,
          techStacks: ["Kotlin", "Firebase", "MVVM Architecture", "Java"],
          image: "/images/projects/online-clothing-store2.webp",
          slug: "clothing-store",
          link: "/projects/clothing-store",
          liveLink:
            "https://store.rjbworld.org/product/clothing-store-app-java-firebase",
        },
        {
          title: "🛍️ Designer Store App – Online Shop with Firebase",
          excerpt:
            "🛍️ Designer Store App – Online Shop with Firebase Build your very own luxury Designer Store app with Android Studio and Firebase! Create a modern and sophisticated ecommerce platform perfect for showcasing designer products in style. Whether you're looking to create a high-end fashion store or a unique product marketplace, this app is the perfect foundation.",
          description: `# 🛍️ Designer Store App – Online Shop with Firebase
          
          🛍️ Designer Store App – Online Shop with Firebase Build your very own luxury Designer Store app with Android Studio and Firebase! Create a modern and sophisticated ecommerce platform perfect for showcasing designer products in style. Whether you're looking to create a high-end fashion store or a unique product marketplace, this app is the perfect foundation.

✅ Features:

Modern Dashboard: Display designer items in an engaging and stylish dashboard, showcasing your premium products front and center.

Shopping Cart: Seamless shopping cart experience where users can add products, view items, and proceed to checkout.

Product Detail Activity: Show detailed information about each product, including images, descriptions, price, and more.

Firebase Integration: Leverage Firebase's real-time database to manage products, users, and transactions securely, with Firebase Authentication to handle user logins and registration.

Smooth User Experience: Build with Material Design components and Jetpack libraries to ensure a clean, modern, and responsive interface.

Secure and Scalable: Firebase backend provides the scalability and security you need for your growing ecommerce store.

💰 Price: ₦400,000 or $200

💾 What’s Included:

Full, ready-to-deploy source code in Java or Kotlin

Firebase backend configuration for authentication and real-time database

Modern UI designed with Material Design principles

6 months post-sale support to help you get started and refine your app

Cross-platform compatible, ensuring a responsive experience on different devices




          `,
          techStacks: ["Kotlin", "Firebase"],
          image: "/images/projects/online-desiner-store12.webp",
          slug: "designer-store",
          link: "/projects/designer-store",
          liveLink:
            "https://store.rjbworld.org/product/designer-store-app-online-shop-with-firebase",
        },
        {
          title:
            "🛒 Fashion Store App – Online Shop with Jetpack Compose & Firebase",
          excerpt:
            "🛒 Fashion Store App – Online Shop with Jetpack Compose & Firebase Transform your passion for fashion into a premium online shopping experience with this Fashion Store App built using Jetpack Compose, Kotlin, MVVM Architecture, and Firebase! ",
          description: `# 🛒 Fashion Store App – Online Shop with Jetpack Compose & Firebase
          
          🛒 Fashion Store App – Online Shop with Jetpack Compose & Firebase Transform your passion for fashion into a premium online shopping experience with this Fashion Store App built using Jetpack Compose, Kotlin, MVVM Architecture, and Firebase! This app is the perfect foundation for creating an elegant and modern fashion ecommerce store, allowing users to browse the latest trends, add items to their cart, and check out with ease.

✅ Features:

Modern Dashboard: A sleek, responsive dashboard that highlights your fashion products, complete with product images, descriptions, and prices. Show off your trendy collection in style!

Shopping Cart: Smooth cart management where users can effortlessly add, remove, and view items. Make the shopping process intuitive and easy with a beautiful cart activity.

Product Detail Activity: Give users all the information they need on a product, including multiple images, descriptions, pricing, sizes, and available colors.

Firebase Backend: Integrate Firebase for seamless real-time data management. Handle user authentication with Firebase Authentication and manage product data with Firebase Realtime Database.

Jetpack Compose UI: Use Jetpack Compose to create a modern, fully responsive UI, leveraging the latest Android UI toolkit for smooth and intuitive user interactions.

MVVM Architecture: Built with the MVVM pattern to ensure maintainability, scalability, and a clean separation of concerns between the UI and business logic.

Secure Payment Integration: Integrate with payment gateways for a smooth and secure checkout process, making your fashion store fully operational.

💰 Price: ₦400,000 or $200

💾 What’s Included:

Complete Source Code in Kotlin with Jetpack Compose and MVVM Architecture

Firebase integration for authentication, product management, and user data

Fully functional product detail and shopping cart activities

6 months of post-sale support to help you with any questions and future app enhancements

Scalable & responsive UI that works well on a variety of Android devices

Cross-platform compatibility, ensuring your app performs seamlessly on both phones and tablets

          `,
          techStacks: ["Jetpack Compose", "Kotlin", "Firebase"],
          image: "/images/projects/online-fashion-store6.webp",
          slug: "fashion-store",
          link: "/projects/fashion-store",
          liveLink:
            "https://store.rjbworld.org/product/fashion-store-app-online-shop-with-jetpack-compose-firebase",
        },
        {
          title:
            "🍔 Food Order App – Android Studio with Jetpack Compose & Firebase",
          excerpt:
            "🍔 Food Order App – Android Studio with Jetpack Compose & Firebase Create a deliciously smooth food ordering experience with this Food Order App, built using Jetpack Compose, Kotlin, Firebase, and MVVM Architecture. This app is a perfect way to serve your users a delightful online food ordering experience, from browsing food categories to placing orders and paying seamlessly.",
          description: `#🍔 Food Order App – Android Studio with Jetpack Compose & Firebase 
          🍔 Food Order App – Android Studio with Jetpack Compose & Firebase Create a deliciously smooth food ordering experience with this Food Order App, built using Jetpack Compose, Kotlin, Firebase, and MVVM Architecture. This app is a perfect way to serve your users a delightful online food ordering experience, from browsing food categories to placing orders and paying seamlessly.

✅ Features:

Food Categories: Browse through various food categories like fast food, desserts, beverages, etc. This makes finding the right meal quick and easy.

Popular Foods: Display trending and popular foods to keep your users engaged and help them find the best meals!

Detailed Food View: Each food item comes with a detailed view that includes images, descriptions, ingredients, and prices. Perfect for tempting users into placing an order!

Intro Page: Greet your users with a professional intro page that sets the tone for the rest of the app.

Shopping Cart: Users can add items to their cart, view their cart, and proceed to checkout for a seamless ordering experience.

MVVM Architecture: Built with the MVVM design pattern to ensure clean, scalable, and maintainable code, separating business logic from the user interface.

Firebase Integration: Store and manage food data, orders, and user accounts in Firebase, ensuring real-time syncing and easy data retrieval.

Jetpack Compose UI: Make use of the Jetpack Compose toolkit to create an engaging, modern UI with smooth animations, transitions, and responsive layouts.

💰 Price: ₦400,000 or $200

💾 What’s Included:

Complete Source Code in Kotlin with Jetpack Compose and MVVM Architecture

Firebase Integration for authentication, user data, and order management

Smooth cart management with easy-to-use checkout functionality

Real-time food catalog with the ability to manage various categories of food

6 months of post-sale support to help with any questions or additional features

Modern, responsive UI that works across a variety of Android devices

          `,
          techStacks: [
            "Jetpack Compose",
            "Kotlin",
            "Firebase",
            "MVVM Architecture",
          ],
          image: "/images/projects/online-food-store3.webp",
          slug: "online-food-store-three",
          link: "/projects/online-food-store-three",
          liveLink: "",
        },
        {
          title: "📱 Gadget Store App – Kotlin MVVM & Firebase",
          excerpt:
            "📱 Gadget Store App – Kotlin MVVM & Firebase Looking to create a high-tech gadget store app? This Gadget Store App, built with Kotlin, MVVM Architecture, and Firebase, is the perfect solution for your Android development needs. Let your users browse through the latest gadgets, make informed purchases, and enjoy a modern shopping experience. ",
          description: `#📱 Gadget Store App – Kotlin MVVM & Firebase 
          📱 Gadget Store App – Kotlin MVVM & Firebase Looking to create a high-tech gadget store app? This Gadget Store App, built with Kotlin, MVVM Architecture, and Firebase, is the perfect solution for your Android development needs. Let your users browse through the latest gadgets, make informed purchases, and enjoy a modern shopping experience. This is an ideal app for tech lovers and gadget enthusiasts!

✅ Features:

Modern Dashboard Page: Users are greeted with a clean, dynamic dashboard that showcases all available gadgets in a sleek and user-friendly layout.

Product Details: Show off each product with a dedicated details page, displaying essential information such as price, specifications, ratings, and high-quality product images.

Cart Activity: Users can easily add gadgets to their shopping cart, check the total, and proceed to checkout – ensuring a seamless shopping experience.

Firebase Integration: Utilize Firebase for real-time data management, user authentication, and order processing. It ensures a fast, secure, and reliable backend for your app.

MVVM Architecture: Built on the MVVM architecture, ensuring clean, maintainable code and a separation of concerns. This makes the app easy to scale and update.

Kotlin Programming: Use the Kotlin programming language to build a modern, efficient, and scalable app that’s easy to maintain and extend.

Advanced Search & Filter: Let users search for gadgets by name, category, or price range, and filter results to find the perfect product with ease.

💰 Price: ₦400,000 or $200

💾 What’s Included:

Complete Source Code for building a fully functional Gadget Store App

Firebase Backend Integration for managing users, products, and orders in real-time

MVVM Architecture for a clean and scalable codebase

Modern and Responsive UI using Jetpack Compose and Material Design

6 Months Post-sale Support to help with questions or additional features

Cross-platform UI that adapts smoothly across various devices and screen sizes

          `,
          techStacks: ["Jetpack Compose", "Kotlin", "Firebase"],
          image: "/images/projects/online-gadget-store7.webp",
          slug: "gadget-store",
          link: "/projects/gadget-store",
          liveLink:
            "https://store.rjbworld.org/product/gadget-store-app-kotlin-mvvm-firebase",
        },
        {
          title: "🐾 Pet Store App – Kotlin MVVM & Firebase",
          excerpt:
            "🐾 Pet Store App – Kotlin MVVM & Firebase Launch your very own online pet shop with this fully functional Pet Store App built in Android Studio using Kotlin, MVVM architecture, and Firebase. Perfect for selling pet food, accessories, grooming items, and more. This app delivers a smooth, modern user experience for animal lovers and pet supply businesses.",
          description: `# 🐾 Pet Store App – Kotlin MVVM & Firebase
          🐾 Pet Store App – Kotlin MVVM & Firebase Launch your very own online pet shop with this fully functional Pet Store App built in Android Studio using Kotlin, MVVM architecture, and Firebase. Perfect for selling pet food, accessories, grooming items, and more. This app delivers a smooth, modern user experience for animal lovers and pet supply businesses.

✅ Key Features:

🐶 Modern Dashboard Page A sleek, material-designed dashboard showcases pet products in various categories, food, toys, grooming, accessories, and more.

🐕‍🦺 Product Detail Page Highlight each item with detailed descriptions, high-res images, pricing, and availability. Users can easily view and learn about each product.

🛒 Cart Activity Allow users to add multiple pet products to their cart, review total costs, and smoothly proceed to checkout.

🔐 Firebase Integration Handle authentication, product data, and order processing seamlessly with Firebase as your backend, ensuring real-time, secure operations.

🧠 MVVM Architecture Built with clean separation of concerns—making the app maintainable, scalable, and easy to upgrade in the future.

💬 Responsive UI Designed with Jetpack Compose principles and Android Material guidelines to ensure beautiful experiences across devices.

💰 Price: ₦400,000 or $200

🎁 What You’ll Get:

Complete Kotlin source code

Firebase backend setup (products, users, orders)

Cart and order management flow

MVVM architecture structure

Clean, modular, and extensible codebase

Free 6-month support post-purchase

          `,
          techStacks: ["Kotlin", "Firebase", "MVVM Architecture"],
          image: "/images/projects/online-pet-store13.webp",
          slug: "pet-store",
          link: "/projects/pet-store",
          liveLink:
            "https://store.rjbworld.org/product/pet-store-app-kotlin-mvvm-firebase",
        },
        {
          title: "👕 Shirt Store App – Firebase + Android Studio",
          excerpt: `👕 Shirt Store App – Firebase + Android Studio

Build and launch your own Shirt Store App—an online clothing shop powered by Firebase and designed in Android Studio with a sleek, modern interface. Perfect for selling casual wear, corporate shirts, and custom fashion designs, this source code delivers all the essentials you need to run a mobile-based shirt store.`,
          description: `#👕 Shirt Store App – Firebase + Android Studio 
          👕 Shirt Store App – Firebase + Android Studio

Build and launch your own Shirt Store App—an online clothing shop powered by Firebase and designed in Android Studio with a sleek, modern interface. Perfect for selling casual wear, corporate shirts, and custom fashion designs, this source code delivers all the essentials you need to run a mobile-based shirt store.

✅ Key Features:

🧥 Modern Dashboard Page Stylish, category-based product layout with clean navigation for exploring different types of shirts—casual, formal, polos, and more.

📄 Product Detail Activity Show off each shirt’s image, description, price, and availability in a detailed view that helps users make informed purchase decisions.

🛒 Cart Activity Seamless cart experience—users can add items, view total cost, and proceed to checkout with ease.

🔐 Firebase Integration Real-time database for managing shirt inventory, order processing, and user sessions securely and efficiently.

🧱 Clean Modular Code Structured with scalability in mind, enabling easy future expansion—whether it’s adding sizes, filters, or payments.

💰 Price: ₦400,000 or $200

🎁 What You’ll Get:

Full Android Studio source code

Firebase setup for shirts, users & orders

Dashboard, cart, and product detail screens

Easy-to-modify layouts and assets

6-month post-purchase support
          `,
          techStacks: ["Kotlin", "Firebase", "MVVM Architecture"],
          image: "/images/projects/online-shirt-store15.webp",
          slug: "shirt-store",
          link: "/projects/shirt-store",
          liveLink:
            "https://store.rjbworld.org/product/shirt-store-app-firebase-android-studio",
        },
        {
          title: "👟 Shoe Store App – Android Studio + Kotlin MVVM + Firebase",
          excerpt: `👟 Shoe Store App – Android Studio + Kotlin MVVM + Firebase

Build your own Shoe Store App – a complete online shop solution developed with Kotlin, MVVM Architecture, and Firebase, all inside Android Studio. Whether you're selling sneakers, heels, boots, or slides, this beautifully designed app is perfect for launching your own branded footwear store.
`,
          description: `# 👟 Shoe Store App – Android Studio + Kotlin MVVM + Firebase
          
          👟 Shoe Store App – Android Studio + Kotlin MVVM + Firebase

Build your own Shoe Store App – a complete online shop solution developed with Kotlin, MVVM Architecture, and Firebase, all inside Android Studio. Whether you're selling sneakers, heels, boots, or slides, this beautifully designed app is perfect for launching your own branded footwear store.

✅ App Features:

🏬 Modern Dashboard Page Eye-catching product layout with categories for men’s, women’s, and kids’ shoes—easy to navigate, responsive, and sleek.

📄 Shoe Detail Activity Zoomed-in views, sizes, pricing, and full product descriptions to help users make confident purchases.

🛒 Cart Activity Users can add multiple pairs, update quantities, and check out effortlessly in a fluid shopping cart experience.

🔐 Firebase Integration Real-time backend for storing inventory, orders, user data, and authentication, ensuring secure and dynamic operations.

🧠 MVVM Architecture Clean, modular code for performance, scalability, and maintainability—ideal for long-term business apps.

💰 Price: ₦400,000 or $200

🎁 Package Includes:

Complete Android Studio project

Kotlin MVVM + Firebase backend setup

Dashboard, product detail, and cart activities

Modern UI components (Material Design)

6-month support for updates & integration

          `,
          techStacks: ["Jetpack Compose", "Kotlin", "Firebase"],
          image: "/images/projects/online-shoe-store5.webp",
          slug: "shoe-store",
          link: "/projects/shoe-store",
          liveLink:
            "https://store.rjbworld.org/product/shoe-store-app-android-studio-kotlin-mvvm-firebase",
        },
        {
          title: "👟 Sleek Minimalist Shoe Store App – Kotlin MVVM + Firebase",
          excerpt: `👟 Sleek Minimalist Shoe Store App – Kotlin MVVM + Firebase

Step into the future of e-commerce with this Sleek Minimalist Shoe Store App, crafted with Kotlin, MVVM Architecture, and Firebase, built entirely in Android Studio. Perfect for showcasing premium footwear with a clean, elegant shopping experience.`,
          description: `# 👟 Sleek Minimalist Shoe Store App – Kotlin MVVM + Firebase
          👟 Sleek Minimalist Shoe Store App – Kotlin MVVM + Firebase

Step into the future of e-commerce with this Sleek Minimalist Shoe Store App, crafted with Kotlin, MVVM Architecture, and Firebase, built entirely in Android Studio. Perfect for showcasing premium footwear with a clean, elegant shopping experience.

✅ App Highlights:

🖤 Minimalist Modern Dashboard Simple, stylish interface that focuses on the shoes—organized by collections, categories, and bestsellers.

📱 Detail Activity Sleek product pages with image sliders, size selection, stock status, and full descriptions—all mobile-optimized.

🛒 Cart Activity Add-to-cart animations, quantity selectors, and a seamless checkout process designed for mobile speed.

🔐 Firebase Backend Real-time database for handling user accounts, orders, and product data securely and efficiently.

🧠 MVVM Architecture Clean code separation for high performance and easy maintenance—ideal for scaling or adding payment gateways.

💰 Price: ₦400,000 or $200

🎁 What You Get:

Full Kotlin Android Studio Source Code

Firebase integration (Auth, DB, Firestore)

Minimalist UI built on Material Design

MVVM clean architecture

Shopping cart and product details

6 months of support and updates
          
          `,
          techStacks: ["  Kotlin", "Firebase", "MVVM Architecture"],
          image: "/images/projects/online-shoe-store14.webp",
          slug: "sleek-minimalist-shoe-store",
          link: "/projects/sleek-minimalist-shoe-store",
          liveLink:
            "https://store.rjbworld.org/product/sleek-minimalist-shoe-store-app-kotlin-mvvm-firebase",
        },
        {
          title: "🧴 Skin Care Store App – Kotlin + Firebase",
          excerpt: `🧴 Skin Care Store App – Kotlin + Firebase Source Code for Android Studio

Glow up your portfolio or business with this beautifully crafted Skin Care Store App, built with Kotlin, Firebase, and clean Android Material UI. Ideal for showcasing beauty products in an intuitive, modern mobile storefront.`,
          description: `# 🧴 Skin Care Store App – Kotlin + Firebase
          🧴 Skin Care Store App – Kotlin + Firebase Source Code for Android Studio

Glow up your portfolio or business with this beautifully crafted Skin Care Store App, built with Kotlin, Firebase, and clean Android Material UI. Ideal for showcasing beauty products in an intuitive, modern mobile storefront.

✨ Features:

🌸 Splash Activity A soft, elegant intro screen that sets the tone for a premium skincare shopping experience.

🛍️ Modern Dashboard UI Aesthetic layout with sliders, trending products, and categories to guide users through your store.

🧴 Product Detail Activity Smooth navigation into product pages, including high-quality images, descriptions, and pricing.

🛒 Cart Activity Users can add items to their cart, view totals, and proceed to checkout backed by Firebase for real-time sync.

🔥 Popular & Featured Lists Built-in sections for highlighting bestsellers and promoting curated products.

☁️ Firebase Integration Full database integration for dynamic product loading, user carts, and seamless data handling.

💰 Price: ₦400,000 or $200

🎁 What’s Included:

Complete Kotlin Source Code for Android Studio

Firebase Firestore + Auth Setup

Splash + Dashboard + Detail + Cart Activities

Modular code using Material Components

Smooth animations & polished UI

6 Months of after-sale support


1


          
          `,
          techStacks: ["  Kotlin", "Firebase", "MVVM Architecture"],
          image: "/images/projects/online-skincare-store16.webp",
          slug: "skincare-store",
          link: "/projects/skincare-store-two",
          liveLink:
            "https://store.rjbworld.org/product/skin-care-store-app-kotlin-firebase",
        },

        {
          title: "🧠 Quiz App – Android Studio (Kotlin)",
          excerpt: `🧠 Quiz App – Android Studio Source Code (Kotlin)

Put your users' knowledge to the test with this sleek and fully functional Quiz App, built in Kotlin using Android Studio. Whether for education, entertainment, or onboarding tests, this app is a perfect foundation for any trivia-style mobile experience.`,
          description: `# 🧠 Quiz App – Android Studio (Kotlin)
          🧠 Quiz App – Android Studio Source Code (Kotlin)

Put your users' knowledge to the test with this sleek and fully functional Quiz App, built in Kotlin using Android Studio. Whether for education, entertainment, or onboarding tests, this app is a perfect foundation for any trivia-style mobile experience.

✅ Features:

🏁 Intro & Main Activity A welcoming splash and main screen with seamless UI and backend integration.

📊 Leaderboard Activity Track top scores in real time—perfect for friendly competition and gamification.

❓ Question Activity Load randomized questions with a timer, correct-answer logic, and intuitive user interaction.

🔄 MVVM-Ready Structure Clean Kotlin code with a scalable architecture that you can easily expand.

☁️ Firebase-Compatible (Optional) Easily extend the app to integrate Firebase for real-time updates and cloud storage.

🎁 What You Get:

Full Kotlin Source Code for Android Studio

Leaderboard + Quiz UI & Backend

Modular components for question and score handling

Clean design with material elements

6 Months Developer Support

💰 Price: ₦300,000 or $150



          
          `,
          techStacks: ["  Kotlin", "MVVM Architecture", "Firebase"],
          image: "/images/projects/quiz-app.webp",
          slug: "quiz-app",
          link: "/projects/quiz-app",
          liveLink:
            "https://store.rjbworld.org/product/quiz-app-android-studio-source-code-kotlin",
        },
        {
          title: "🏘️ Real Estate App (Java)",
          excerpt: `🏘️ Real Estate App (Java)

Take control of the property market with this professionally built Real Estate App for Android developed in Java with a modern dashboard, splash screen, and user profile features. Perfect for developers, agencies, or realtors looking to jumpstart their digital presence.`,
          description: `#🏘️ Real Estate App (Java) 
          🏘️ Real Estate App (Java)

Take control of the property market with this professionally built Real Estate App for Android developed in Java with a modern dashboard, splash screen, and user profile features. Perfect for developers, agencies, or realtors looking to jumpstart their digital presence.

✅ Features:

🚀 Splash Activity Eye-catching welcome screen to introduce your brand.

🏡 Modern Dashboard UI Clean, material design with property listings, search functionality, and categories.

👤 Profile Activity Manage user info, saved listings, and preferences.

🔧 Java-Based Code Built in pure Java using Android Studio—easy to extend or integrate with Firebase or custom APIs.

🎁 What You Get:

Full Source Code (Java – Android Studio)

Splash + Dashboard + Profile Activities

Clean, well-documented structure

UI & backend functionality

6 Months Developer Support

💰 Price: ₦400,000 or $200
          
          `,
          techStacks: ["Java", "Firebase"],
          image: "/images/projects/real-estate.webp",
          slug: "real-estate-java",
          link: "/projects/real-estate-java",
          liveLink: "https://store.rjbworld.org/product/real-estate-app-java",
        },
        {
          title: "🎫 Skybird Ticket Booking App – Java + Firebase",
          excerpt: `🎫 Skybird Ticket Booking App – Java + Firebase (Android Studio)

Turn your travel tech vision into reality with the Skybird Ticket Booking App, a premium Android app template built using Java and integrated with Firebase. Designed with a sleek dashboard, intuitive seat selection, and detailed ticket screens, this is your fast lane to launching a top-tier booking platform.`,
          description: `# 🎫 Skybird Ticket Booking App – Java + Firebase
          🎫 Skybird Ticket Booking App – Java + Firebase (Android Studio)

Turn your travel tech vision into reality with the Skybird Ticket Booking App, a premium Android app template built using Java and integrated with Firebase. Designed with a sleek dashboard, intuitive seat selection, and detailed ticket screens, this is your fast lane to launching a top-tier booking platform.

✅ Core Features:

✈️ Intro Activity Beautiful entry point for branding and user onboarding.

🧭 Modern Dashboard UI Navigate through ticket search, results, and booking effortlessly.

🎟️ Ticket Detail Page Display full info on selected trips with backend integration.

🪑 Seat Selector Interface Let users pick preferred seats in a dynamic UI.

🔥 Firebase Integration Store, retrieve, and sync booking data in real time.

📱 Java Codebase Built in Android Studio Koala with clean, modular Java architecture.

🎁 You’ll Get:

Full Java Source Code (Android Studio)

Firebase backend setup

Functional dashboard, intro, detail, and seat selection activities

Modular, beginner-friendly architecture

6 Months of Dev Support

💰 Price: ₦800,000 or $400
          
          `,
          techStacks: [
            "firebase",
            "Java",
            "MVVM Architecture",
            "Android Studio",
          ],
          image: "/images/projects/skybird-ticket-booking-app.webp",
          slug: "skybird-ticket-booking-app",
          link: "/projects/skybird-ticket-booking-app",
          liveLink:
            "https://store.rjbworld.org/product/skybird-ticket-booking-app-java-firebase",
        },
        {
          title:
            "🛫 Flight Ticket Booking App – Jetpack Compose + Firebase + Kotlin MVVM",
          excerpt: `🛫 Flight Ticket Booking App – Jetpack Compose + Firebase + Kotlin MVVM

Launch your own modern airline booking app with this complete Flight Ticket Booking App, developed using Jetpack Compose, Kotlin, Firebase, and MVVM Architecture. Built for Android Studio, this sleek and dynamic app gives your users the full travel booking experience—from flight search to seat selection and ticket confirmation.`,
          description: `# 🛫 Flight Ticket Booking App – Jetpack Compose + Firebase + Kotlin MVVM
          
          🛫 Flight Ticket Booking App – Jetpack Compose + Firebase + Kotlin MVVM

Launch your own modern airline booking app with this complete Flight Ticket Booking App, developed using Jetpack Compose, Kotlin, Firebase, and MVVM Architecture. Built for Android Studio, this sleek and dynamic app gives your users the full travel booking experience—from flight search to seat selection and ticket confirmation.

✅ Key Features:

🚀 Splash Screen Clean and professional intro animation for first-time users.

🧭 Modern Dashboard with Bottom & Top Navigation Bars Easy navigation between flights, search, and tickets.

🛫 Flight Listing & Details Browse all available flights and view specific details like time, destination, price, and more.

🔍 Flight Search Functionality Search based on date, destination, and passenger count.

🪑 Seat Selector Dynamic seat picker with sleek Jetpack Compose UI.

🎫 Ticket Detail Page Final overview with all flight, passenger, and seat details.

☁️ Firebase Integration Real-time database for storing and retrieving flight and user data.

💡 Built With:

Jetpack Compose UI

Kotlin MVVM Architecture

Firebase Realtime Database

Android Studio (Koala Edition)

🎁 What You Get:

Full source code

Firebase setup

All features shown in the tutorial

6 Months Dev Support

💰 Price: ₦800,000 / $400
          `,
          techStacks: [
            "Jetpack Compose",
            "Kotlin",
            "Firebase",
            "MVVM Architecture",
          ],
          image: "/images/projects/ticket-booking-app.webp",
          slug: "ticket-booking-app",
          link: "/projects/ticket-booking-app",
          liveLink:
            "https://store.rjbworld.org/product/flight-ticket-booking-app-jetpack-compose-firebase-kotlin-mvvm",
        },
        {
          title:
            "🌍 Travel App – Android Material Design (Adobe XD to Android Studio)",
          excerpt:
            "Looking to start your own travel business? This beautifully designed Travel Booking App is ready to launch. Built with Java and XML, it features a sleek, modern UI and everything your customers need to browse, explore, and book their dream destinations.",
          description: `# 🌍 Travel App – Android Material Design (Adobe XD to Android Studio)`,
          techStacks: ["Firebase", "Java", "XML"],
          image: "/images/projects/travel-app3.webp",
          slug: "travel-app-three",
          link: "/projects/travel-app-three",
          liveLink:
            "https://store.rjbworld.org/product/travel-app-android-material-design-adobe-xd-to-android-studio",
        },
        {
          title: "🎬 Virtual Movie App – Android Studio + Java + XML",
          excerpt: `🎬 Virtual Movie App – Android Studio + Java + XML

Launch your own immersive movie browsing and discovery experience with this Virtual Movie App, crafted using Android Studio, Java, and clean XML-based UI. This elegant, modern entertainment app includes everything your users need—from a stunning intro animation to a dynamic dashboard, sleek film detail screens, and more.`,
          description: `# 🎬 Virtual Movie App – Android Studio + Java + XML
          🎬 Virtual Movie App – Android Studio + Java + XML

Launch your own immersive movie browsing and discovery experience with this Virtual Movie App, crafted using Android Studio, Java, and clean XML-based UI. This elegant, modern entertainment app includes everything your users need—from a stunning intro animation to a dynamic dashboard, sleek film detail screens, and more.

✅ Key Features:

🚀 Intro Activity Beautifully animated splash screen to welcome users into the movie universe.

🔐 Login Interface Simple, user-friendly login screen to authenticate and personalize each experience.

🧭 Modern Dashboard Interactive and intuitive movie dashboard to browse through categories, trending films, and actor highlights.

🎥 Film Detail Activity Showcase each film with rich visuals, storyline, cast details, and ratings on a stylish single screen.

🎭 Actor Highlight Cards Small, elegant actor thumbnails for quick previews within film or dashboard views.

📽️ Film Item Components Custom-designed film cards for a sleek, scrollable dashboard experience.

☁️ Firebase Integration (Optional Add-on) Firebase compatibility to connect your app to a real-time database and scale with ease.

💡 Built With:

Java

Android Studio

XML UI Design

Optional Firebase backend

Material Design principles

🎁 What You Get:

Full Source Code

Beautiful, production-ready UI

All screen designs: intro, login, dashboard, detail views

6 Months Developer Support

Optional Firebase Integration Setup

💰 Price: ₦800,000 / $400
          
          `,
          techStacks: ["  Java", "XML", "Firebase"],
          image: "/images/projects/virtual-movie-app.webp",
          slug: "virtual-movie-app",
          link: "/projects/virtual-movie-app",
          liveLink:
            "https://store.rjbworld.org/product/virtual-movie-app-android-studio-java-xml",
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

        // {
        //   title: "",
        //   excerpt:
        //     "",
        //   description: `# `,
        //   techStacks: [""],
        //   image: "/images/projects/",
        //   slug: "",
        //   link: "/projects/",
        //   liveLink:
        //     "",
        // },
      ]);
    }, 1000);
  });
}
