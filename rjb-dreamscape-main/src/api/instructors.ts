export async function fetchInstructors() {
  // Simulate a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Dr. Angela Yu",
          image: "/images/instructors/john-doe.jpg",
          bio: "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.My first foray into programming was when I was just 12 years old, wanting to build my own Space Invader game. Since then, I've made hundred of websites, apps and games. But most importantly, I realised that my greatest passion is teaching.I spend most of my time researching how to make learning to code fun and make hard concepts easy to understand. I apply everything I discover into my bootcamp courses. In my courses, you'll find lots of geeky humour but also lots of explanations and animations to make sure everything is easy to understand.I'll be there for you every step of the way.",
          specializations: [
            "Mobile App Development",
            "Flutter(Dart)",
            "Swift(iOS)",
            "Python",
          ],
        },
        {
          name: "Jane Smith",
          image: "/images/instructors/jane-smith.jpg",
          bio: "Jane is an AI expert with a passion for teaching machine learning and artificial intelligence concepts.",
          specializations: ["AI", "Machine Learning", "Python"],
        },
        {
          name: "Alice Johnson",
          image: "/images/instructors/alice-johnson.jpg",
          bio: "Alice is a blockchain developer and educator, helping students understand decentralized technologies.",
          specializations: ["Blockchain", "Ethereum", "Solidity"],
        },
      ]);
    }, 1000); // Simulate a 1-second delay
  });
}
