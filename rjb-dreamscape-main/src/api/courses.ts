export async function fetchCourses() {
  // Simulate a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "HTML & CSS Tutorial and Projects Course (Flexbox & Grid)",
          excerpt:
            "Web Development for Absolute Beginners — Learn HTML5 and CSS3 from Scratch by Building 20+ Real-World Projects",
          description: `
# Course Description
Want to become a web developer? This is the perfect starting point for absolute beginners.

In this comprehensive course, you’ll learn HTML5 and CSS3 from scratch — no prior coding experience needed. We’ll take you through everything step by step, starting from the very basics, and then apply your new skills by building 20+ fully responsive, real-world projects using Flexbox and CSS Grid.

By the end of the course, you’ll have hands-on experience, confidence, and a strong portfolio of projects to kickstart your career in web development.

## What You’ll Learn
### HTML5 Basics
- Structure webpages using semantic tags
- Learn essential HTML elements like headings, paragraphs, links, images, lists, forms, tables, and more

### CSS3 Fundamentals
- Style and layout your web pages
- Master colors, fonts, margins, padding, positioning, and display properties

### Responsive Web Design
- Use Flexbox and CSS Grid to build adaptive layouts
- Create mobile-first, responsive designs that work on all screen sizes

### Project-Based Learning
- Build 20+ real-world projects including landing pages, forms, cards, portfolios, and more
- Practice what you learn with hands-on coding challenges and guided walkthroughs

## Why Take This Course?
1. **Understand the Web Better**  
   Learn how the internet works and how web pages are built from the ground up.

2. **Create Your Own Websites**  
   Use HTML and CSS to create unique, personal or professional websites.

3. **Launch a Web Development Career**  
   HTML and CSS are the foundation for becoming a front-end or full-stack developer.

4. **Prepare for Advanced Topics**  
   Mastering these fundamentals will make learning JavaScript, React, or other web technologies much easier.

5. **Learn by Building Projects**  
   The best way to learn is by doing. This course is 100% project-driven.

## Requirements
- No programming or coding experience needed
- Any computer: Mac or PC
- Any text editor (we’ll use Brackets, but you can follow along with others)
- Any modern browser (Chrome recommended for Live Preview)
- All required software is free!

## Who This Course Is For
- Absolute beginners with no prior experience in web development
- Aspiring web developers or designers
- Students, freelancers, entrepreneurs, or hobbyists
- Anyone who wants to learn how to build beautiful, responsive websites from scratch

**Ready to Build Your First Website?**  
Join now and begin your journey into the world of web development with HTML and CSS!
          `,
          price: "",
          instructor: "John Smilga",
          instructorImage: "/images/instructors/johnsmilga.webp",
          image: "/images/courses/HTMLCSS.png",
          video: null,
          slug: "web-development-bootcamp",
          link: "https://xclusivestore.vercel.app/product/html-css-tutorial-and-projects-course-flexbox-grid",
        },

        // Add other courses here with similar formatting
      ]);
    }, 1000); // Simulate a 1-second delay
  });
}
