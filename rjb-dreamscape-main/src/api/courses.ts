export async function fetchCourses() {
  // Simulate a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "HTML & CSS Tutorial and Projects Course (Flexbox & Grid)",
          excerpt:
            "Web Development for Absolute Beginners — Learn HTML5 and CSS3 from Scratch by Building 20+ Real-World Projects",
          description: "A comprehensive course on HTML, CSS, and JavaScript.",
          price: "₦30,000",
          instructor: "John Smilga",
          instructorImage: "/images/instructors/johnsmilga.webp",
          image: "/images/courses/HTMLCSS.png",
          video: null,
          slug: "web-development-bootcamp",
        },
        {
          title: "Complete React, Next.js & TypeScript Projects Course",
          excerpt:
            "Complete React, Next.js & TypeScript Projects Course 2025. Hands-on React: 25+ Projects Featuring Next.js, TypeScript, Prisma, Zod, Shadcn, Axios, React Router 6, Query 5, Redux Toolkit",
          description:
            "Build high-performance, real-world applications using React 18. Integrate TypeScript for scalable and maintainable code. Develop complex Next.js applications for full-stack solution. Master modern tools and libraries: Prisma, Zod, Shadcn/UI, Axios, React Query, Redux Toolkit, and more",
          price: "₦30,000",
          instructor: "John Smilga",
          instructorImage: "/images/instructors/johnsmilga.webp",
          image: "/images/courses/React.jpg",
          video: null,
          slug: "react-nextjs-typescript",
        },
        {
          title: "The Complete Flutter Development Bootcamp with Dart",
          excerpt:
            "The Complete 2021 Flutter Development Bootcamp with Dart. Built in collaboration with the Google Flutter team Latest Update: Now includes an entire module on Flutter State Management!",
          description:
            "Build high-performance, real-world applications using React 18. Integrate TypeScript for scalable and maintainablWelcome to the most comprehensive Flutter course online, developed alongside the Google Flutter team. Whether you're a complete beginner or a developer looking to upskill, this bootcamp is designed to take you from zero to Flutter pro.Through engaging video tutorials and hands-on projects, you'll learn how to code using Dart and build beautiful, fast, native-quality iOS and Android apps.e code. Develop complex Next.js applications for full-stack solution. Master modern tools and libraries: Prisma, Zod, Shadcn/UI, Axios, React Query, Redux Toolkit, and more",
          price: "₦30,000",
          instructor: "Dr. Angela Yu",
          instructorImage: "/images/instructors/DrAngelaYu.webp",
          image: "/images/courses/Flutter.png",
          video: null,
          slug: "flutter-development-bootcamp",
        },
      ]);
    }, 1000); // Simulate a 1-second delay
  });
}
