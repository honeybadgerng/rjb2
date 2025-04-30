export async function fetchInstructors() {
  // Simulate a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Moshood Onabanji Raji",
          image: "/images/instructors/moshood-raji.jpeg",
          bio: `I am the C.E.O and founder of RJB World and Academy. I am a full stack and mobile developer. I build robust solutions using Next.js, React Native (Expo), and modern web and mobile stacks. I've worked on apps like Ryde(Car hailing app), LinkUp(social media app), i-Lotus Homes(property app), Emile12 & Xstore(e-commerce app), and I’m passionate about using tech to solve real problems — from real estate discovery to facilitating international payments in naira without dollar cards.`,
          specializations: [
            "Mobile App Development",
            "React Native (Expo)",
            "Next.js (Full Stack)",
            "JavaScript/TypeScript",
            "API Integration & Product Design",
          ],
        },

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
        {
          name: "Philipp Muellauer",
          image: "/images/instructors/Philipp-Muellauer.webp",
          bio: "I’m Philipp, I’m a data scientist and mobile developer with a passion for teaching. I’m the lead instructor at the London App Brewery for machine learning and Android development, fluent in Python, Java, Swift, Dart, and VBA. I’ve taught thousands of students in-person in our London classroom and lead our corporate training, used by companies such as Google, Amazon and Twitter. I'm always thinking about how to make difficult concepts easy to understand, what kind of projects would make a fun tutorial, and how I can help you succeed through my courses.",
          specializations: [
            "Machine Learning",
            "Android Development",
            "Python",
            "Java",
          ],
        },
        {
          name: "Daniel Walter Scott",
          image: "/images/instructors/Daniel-Walter-Scott.jpg",
          bio: `Sharing is who I am, and teaching is where I am at my best, because I've been on both sides of that equation, and getting to deliver useful training is my meaningful way to be a part of the creative community.

I've spent a long time watching others learn, and teach, to refine how I work with you to be efficient, useful and, most importantly, memorable. I want you to carry what I've shown you into a bright future.

I have a wife (a lovely Irish girl) and kids. I have lived and worked in many places (as Kiwis tend to do) – but most of my 14+ years of creating and teaching has had one overriding theme: bringing others along for the ride as we all try to change the world with our stories, our labours of love and our art.

I'm a certified Adobe instructor (ACI) in Ireland. I'm also an Adobe Certified Expert (ACE) and have completed the Adobe Certified Associate training (ACA). And I don't just do Adobe. Remember, media is a very broad term – digital blew out the borders, so we are all constantly learning.

I've been teaching for 14+ years. I come from being a media designer and content creator – so I understand exactly where you're at now. I've been there. I love this stuff. Print, digital publishing, web and video. I can see how it all connects. And I can see how we can share those connections.

I built Bring Your Own Laptop in Ireland, New Zealand, Australia & online. I have a great team working with me to keep BYOL at the top of Adobe and digital media training. I understand business, I have one – so I know how important it is to get it right and make it work for you.

Now my focus is on RJB Academy. It's my mission to bring you the best training for digital media on RJB world.`,
          specializations: [
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Adobe After Effects",
            "Adobe Premiere Pro",
          ],
        },
        {
          name: "Ahmed Sawy",
          image: "/images/instructors/Ahmed-Sawy.webp",
          bio: `Hi, I’m Ahmed Sawy, a passionate Software Engineer with over 4 years of experience in building innovative and scalable mobile applications. I work as the leading mobile developer for a Saudi company, where I’ve honed my skills in delivering exceptional user experiences.



At RJB academy, I’m here to help you master React Native with practical, hands-on courses designed for developers of all levels. Whether you’re just starting or looking to deepen your knowledge, I’ll guide you step-by-step to success. Let’s build amazing apps together!`,
          specializations: [
            "Mobile App Development",
            "Flutter(Dart)",
            "Swift(iOS)",
            "Python",
          ],
        },
      ]);
    }, 1000); // Simulate a 1-second delay
  });
}
