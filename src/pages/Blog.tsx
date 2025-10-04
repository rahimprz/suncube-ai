import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { ImageShowcase } from "@/components/ImageShowcase";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  TrendingUp,
  Lightbulb,
  Leaf,
  Brain
} from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI-Powered Solar: 2024 Predictions",
    excerpt: "Exploring the latest trends in artificial intelligence and how they're revolutionizing solar energy management and grid integration.",
    category: "AI Technology",
    author: "Dr. Sarah Chen",
    date: "January 15, 2024",
    readTime: "5 min read",
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    title: "Blockchain in Energy: Beyond Cryptocurrency",
    excerpt: "How blockchain technology is creating transparent, secure energy trading markets and revolutionizing utility billing.",
    category: "Blockchain",
    author: "Marcus Rodriguez", 
    date: "January 12, 2024",
    readTime: "7 min read",
    image: "/api/placeholder/400/250"
  },
  {
    title: "Predictive Maintenance: Preventing Solar System Failures",
    excerpt: "Real-world case studies showing how AI-powered predictive maintenance saves costs and maximizes system uptime.",
    category: "Maintenance",
    author: "Dr. Emily Watson",
    date: "January 10, 2024", 
    readTime: "6 min read",
    image: "/api/placeholder/400/250"
  },
  {
    title: "Smart Grid Integration: The Next Generation",
    excerpt: "Understanding how modern solar systems integrate with smart grids and participate in energy markets.",
    category: "Smart Grid",
    author: "Technical Team",
    date: "January 8, 2024",
    readTime: "8 min read", 
    image: "/api/placeholder/400/250"
  },
  {
    title: "Sustainability Metrics That Matter",
    excerpt: "Breaking down the key environmental metrics every solar system owner should track and understand.",
    category: "Sustainability",
    author: "Dr. Emily Watson",
    date: "January 5, 2024",
    readTime: "4 min read",
    image: "/api/placeholder/400/250"
  },
  {
    title: "ROI Analysis: AI Solar vs Traditional Systems",
    excerpt: "Comprehensive financial analysis comparing AI-optimized solar systems with traditional installations.",
    category: "Economics",
    author: "Finance Team",
    date: "January 3, 2024",
    readTime: "9 min read",
    image: "/api/placeholder/400/250"
  }
];

const categories = [
  { name: "AI Technology", icon: <Brain className="w-4 h-4" />, count: 12 },
  { name: "Blockchain", icon: <TrendingUp className="w-4 h-4" />, count: 8 },
  { name: "Sustainability", icon: <Leaf className="w-4 h-4" />, count: 15 },
  { name: "Smart Grid", icon: <Lightbulb className="w-4 h-4" />, count: 6 }
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Insights & Resources"
        subtitle="📚 Solar Energy Blog"
        description="Stay updated with the latest insights on AI-powered solar technology, industry trends, and expert analysis from our team of energy professionals."
        primaryAction={{
          label: "Subscribe to Updates",
          href: "/contact"
        }}
        secondaryAction={{
          label: "Download Resources",
          href: "/contact"
        }}
      />

      <ImageShowcase
        imageUrl="https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        altText="Solar energy insights and resources"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <Card key={index} className="mb-12 overflow-hidden hover:shadow-eco transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="aspect-video bg-muted"></div>
                    <div className="p-8">
                      <div className="flex items-center space-x-2 mb-4">
                        <Badge className="bg-primary text-white">Featured</Badge>
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-4">{post.title}</h2>
                      <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Regular Posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.filter(post => !post.featured).map((post, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-eco transition-all duration-300">
                    <div className="aspect-video bg-muted"></div>
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted cursor-pointer">
                      <div className="flex items-center space-x-2">
                        {category.icon}
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Get the latest insights on solar energy and AI technology delivered to your inbox.
                  </p>
                  <Button className="w-full bg-gradient-primary text-white">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>

              {/* Popular Downloads */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Downloads</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">AI Solar ROI Calculator</div>
                    <div className="text-xs text-muted-foreground">Excel template for calculating returns</div>
                    <Button variant="outline" size="sm" className="w-full text-xs">Download</Button>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Solar Maintenance Checklist</div>
                    <div className="text-xs text-muted-foreground">Comprehensive maintenance guide</div>
                    <Button variant="outline" size="sm" className="w-full text-xs">Download</Button>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Smart Grid Integration Guide</div>
                    <div className="text-xs text-muted-foreground">Technical implementation guide</div>
                    <Button variant="outline" size="sm" className="w-full text-xs">Download</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}