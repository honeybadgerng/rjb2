
import { ArrowRight, BookOpen } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  url: string;
}

export function BlogsSection() {
  const blogPosts: BlogPost[] = [
    {
      title: "The Future of Web3 and Blockchain in Business",
      excerpt: "Explore how blockchain technology is revolutionizing traditional business models and creating new opportunities.",
      date: "May 15, 2023",
      category: "Web3",
      url: "#",
    },
    {
      title: "Essential AI Tools for Business Automation in 2023",
      excerpt: "Discover the top AI-powered tools that are helping businesses streamline operations and boost productivity.",
      date: "June 22, 2023",
      category: "AI",
      url: "#",
    },
    {
      title: "Mobile App Development Trends to Watch",
      excerpt: "Stay ahead of the curve with these emerging trends in mobile application development and user experience design.",
      date: "July 8, 2023",
      category: "Development",
      url: "#",
    },
  ];

  return (
    <section id="blogs" className="container-section bg-secondary/50 dark:bg-gray-900/50">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-takoto">Our Blogs</h2>
        <p className="text-lg text-muted-foreground">
          Insights, tips, and industry news from our experts to help you stay ahead in the digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="glass-card p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">{post.date}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-muted-foreground mb-6">{post.excerpt}</p>
            <a
              href={post.url}
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group"
            >
              Read More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="#"
          className="inline-flex items-center px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium rounded-full transition-colors group"
        >
          View All Posts
          <BookOpen className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
