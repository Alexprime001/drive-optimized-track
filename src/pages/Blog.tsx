
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Professional Driving",
      excerpt:
        "Explore how technology is shaping the future of professional driving services.",
      category: "Industry Trends",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Top Safety Tips for Professional Drivers",
      excerpt:
        "Essential safety guidelines every professional driver should follow.",
      category: "Safety",
      date: "March 12, 2024",
      readTime: "4 min read",
    },
    {
      title: "Maximizing Earnings as a Driver",
      excerpt:
        "Learn proven strategies to increase your earnings as a professional driver.",
      category: "Business",
      date: "March 10, 2024",
      readTime: "6 min read",
    },
    {
      title: "Understanding Vehicle Maintenance",
      excerpt:
        "A comprehensive guide to keeping your vehicle in top condition.",
      category: "Maintenance",
      date: "March 8, 2024",
      readTime: "7 min read",
    },
    {
      title: "Customer Service Excellence",
      excerpt:
        "Tips and tricks for providing outstanding customer service.",
      category: "Service",
      date: "March 5, 2024",
      readTime: "4 min read",
    },
    {
      title: "Navigation Tools for Drivers",
      excerpt:
        "A comparison of the best navigation tools available for drivers.",
      category: "Technology",
      date: "March 3, 2024",
      readTime: "5 min read",
    },
  ];

  const categories = [
    "All",
    "Industry Trends",
    "Safety",
    "Business",
    "Maintenance",
    "Technology",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Resources & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Stay updated with the latest industry news, tips, and best practices.
          </motion.p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden card-hover"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {post.date}
                    </span>
                    <Button variant="ghost" className="text-accent">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              placeholder="Enter your email"
              className="w-full sm:w-96"
            />
            <Button className="bg-accent text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
