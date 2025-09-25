import { HeroSection } from "@/components/ui/hero-section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, User, Mail, ArrowRight, Filter } from "lucide-react"
import { useState } from "react"

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Featured blog posts data
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Solar Energy: AI-Powered Optimization",
      excerpt: "Discover how artificial intelligence is revolutionizing solar panel efficiency and energy production across residential and commercial installations.",
      image: "/placeholder.svg",
      category: "AI & Data",
      readTime: "5 min read",
      date: "2024-01-15",
      author: {
        name: "Dr. Sarah Chen",
        avatar: "/placeholder.svg",
        role: "AI Research Lead"
      }
    },
    {
      id: 2,
      title: "Smart Grid Integration: A Complete Guide",
      excerpt: "Learn about the latest developments in smart grid technology and how it's enabling better energy distribution and management.",
      image: "/placeholder.svg",
      category: "Grid Strategy",
      readTime: "8 min read",
      date: "2024-01-12",
      author: {
        name: "Michael Rodriguez",
        avatar: "/placeholder.svg",
        role: "Grid Technology Expert"
      }
    },
    {
      id: 3,
      title: "2024 Solar Market Trends: What to Expect",
      excerpt: "Our comprehensive analysis of emerging trends in the solar energy market and predictions for the coming year.",
      image: "/placeholder.svg",
      category: "Market Forecasts",
      readTime: "6 min read",
      date: "2024-01-10",
      author: {
        name: "Emma Thompson",
        avatar: "/placeholder.svg",
        role: "Market Analyst"
      }
    }
  ]

  // Categories data
  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "solar-tips", name: "Solar Tips", count: 8 },
    { id: "ai-data", name: "AI & Data", count: 6 },
    { id: "grid-strategy", name: "Grid Strategy", count: 5 },
    { id: "market-forecasts", name: "Market Forecasts", count: 5 }
  ]

  // Guest contributors data
  const guestContributors = [
    {
      id: 1,
      name: "Dr. James Wilson",
      role: "Renewable Energy Professor",
      institution: "MIT Energy Initiative",
      avatar: "/placeholder.svg",
      articleTitle: "Battery Storage Breakthroughs",
      excerpt: "Exploring the latest innovations in energy storage technology and their impact on solar adoption."
    },
    {
      id: 2,
      name: "Lisa Park",
      role: "Sustainability Consultant",
      institution: "GreenTech Solutions",
      avatar: "/placeholder.svg",
      articleTitle: "Corporate Solar Adoption",
      excerpt: "How Fortune 500 companies are leading the charge in renewable energy adoption."
    },
    {
      id: 3,
      name: "Prof. David Kumar",
      role: "Climate Scientist",
      institution: "Stanford University",
      avatar: "/placeholder.svg",
      articleTitle: "Climate Impact Assessment",
      excerpt: "Measuring the real environmental impact of solar energy deployment worldwide."
    }
  ]

  const filteredPosts = selectedCategory === "all" 
    ? featuredPosts 
    : featuredPosts.filter(post => 
        post.category.toLowerCase().includes(selectedCategory.replace("-", " "))
      )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Solar. AI. Blockchain. Stories That Power the Future."
        subtitle="Stay ahead with our latest solar energy insights"
        description="Browse trends, deep-dives, and expert takes from the Suncube AI team."
        primaryAction={{
          label: "Read Insights",
          href: "/insights/read-insights",
        }}
      />

      {/* Section 2: Featured Posts */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Posts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the latest insights, trends, and innovations in solar energy and AI technology
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {category.name}
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">
                      {post.author.name}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Categories */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-muted-foreground">
              Find insights tailored to your interests and expertise level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => (
              <Card key={category.id} className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Filter className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">{category.name}</CardTitle>
                  <CardDescription>
                    {category.count} articles available
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Subscribe Widget */}
      <section className="py-16 bg-gradient-eco">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get Weekly Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay updated with the latest solar energy trends, AI breakthroughs, and market insights delivered to your inbox every week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full"
                />
              </div>
              <Button className="bg-gradient-primary text-white shadow-eco hover:shadow-glow transition-all">
                Subscribe
                <Mail className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Guest Contributor Highlights */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Expert Contributors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights from leading experts in renewable energy, AI, and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guestContributors.map((contributor) => (
              <Card key={contributor.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={contributor.avatar} />
                      <AvatarFallback className="text-lg">
                        {contributor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{contributor.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {contributor.role}
                      </CardDescription>
                      <CardDescription className="text-xs text-primary">
                        {contributor.institution}
                      </CardDescription>
                    </div>
                  </div>
                  <CardTitle className="text-base mb-2">
                    {contributor.articleTitle}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {contributor.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Read Article
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Insights