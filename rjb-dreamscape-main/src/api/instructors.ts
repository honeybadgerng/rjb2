export async function fetchInstructors() {
  // Simulate a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Dr. Angela Yu",
          image: "/images/instructors/DrAngelaYu.webp",
          bio: "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees",
          specializations: [
            "Mobile App Development",
            "Flutter(Dart)",
            "Swift(iOS)",
            "Python",
          ],
        },
        {
          name: "John Smilga",
          image: "/images/instructors/johnsmilga.webp",
          bio: "Hello, I am John Smilga and I am a web developer. I live and work in Sarasota, FL. I spend most of my day, experimenting with HTML, CSS and Javascript (and it's endless list of frameworks). I enjoy coding and the challenge of learning something new everyday. You can also find me at youtube channel Coding Addict.",
          specializations: ["React", "Next.js", "Javascript", "Node.js"],
        },
      ]);
    }, 1000); // Simulate a 1-second delay
  });
}
