import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/ui/hero-section";
import { ImageShowcase } from "@/components/ImageShowcase";
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb,
  Leaf,
  Brain,
  TrendingUp
} from "lucide-react";

const leadership = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Tesla Energy VP with 15+ years in renewable energy and AI research.",
    education: "PhD in Electrical Engineering, Stanford University"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder", 
    bio: "Ex-Google AI researcher specializing in machine learning and energy optimization.",
    education: "MS Computer Science, MIT"
  },
  {
    name: "Dr. Emily Watson",
    role: "VP of Sustainability",
    bio: "Environmental scientist and clean energy advocate with focus on carbon reduction.",
    education: "PhD Environmental Science, UC Berkeley"
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Pioneering the Future of Solar Energy"
        subtitle="🌟 Our Story"
        description="Founded by energy and AI experts, Suncube AI is on a mission to accelerate the world's transition to sustainable energy through intelligent automation and blockchain innovation."
        primaryAction={{
          label: "Our Story",
          href: "/about/our-story"
        }}
        secondaryAction={{
          label: "Leadership",
          href: "/about/leadership"
        }}
      />

      <ImageShowcase
        imageUrl="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        altText="Our team and mission"
      />

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline">Our Story</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Born from Innovation, Driven by Purpose
              </h2>
              <p className="text-lg text-muted-foreground">
                Suncube AI was founded in 2021 by a team of energy experts and AI researchers who saw the untapped potential of combining artificial intelligence with solar energy management.
              </p>
              <p className="text-muted-foreground">
                After witnessing the inefficiencies in traditional solar installations and the missed opportunities for optimization, our founders set out to create a platform that would revolutionize how solar energy systems operate, maintain themselves, and integrate with the smart grid.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to be leading the charge in AI-powered solar management, helping thousands of customers maximize their energy production while contributing to a sustainable future.
              </p>
            </div>

            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">2021</div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success">50M+</div>
                    <div className="text-sm text-muted-foreground">kWh Managed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-grid-blue">1,500+</div>
                    <div className="text-sm text-muted-foreground">Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-eco-green">25,000</div>
                    <div className="text-sm text-muted-foreground">Tons CO₂ Saved</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Leadership</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced leaders combining deep expertise in energy, technology, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-eco transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <Badge variant="secondary">{leader.role}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{leader.bio}</p>
                  <div className="text-sm text-primary font-medium">
                    {leader.education}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Mission & Values</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Mission</h3>
              <p className="text-muted-foreground text-sm">
                Accelerate global adoption of clean energy through intelligent automation and innovation.
              </p>
            </Card>

            <Card className="text-center p-6">
              <Lightbulb className="w-12 h-12 text-warning mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Continuously push the boundaries of what's possible with AI and renewable energy.
              </p>
            </Card>

            <Card className="text-center p-6">
              <Leaf className="w-12 h-12 text-eco-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground text-sm">
                Every decision we make considers environmental impact and long-term sustainability.
              </p>
            </Card>

            <Card className="text-center p-6">
              <Users className="w-12 h-12 text-grid-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground text-sm">
                Build strong partnerships and empower communities to achieve energy independence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Pledge */}
      <section className="py-20 bg-gradient-to-br from-[rgb(14,90,56)] via-[rgb(18,110,70)] to-[rgb(14,90,56)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 drop-shadow-lg">
              Our Sustainability Pledge
            </h2>
            <p className="text-xl opacity-95 max-w-3xl mx-auto">
              We're committed to not just providing clean energy solutions, but operating as a carbon-negative company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <Brain className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Carbon Negative by 2025</h3>
              <p className="opacity-90">
                We will remove more carbon from the atmosphere than we produce across all operations.
              </p>
            </div>

            <div className="text-center backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">100% Renewable Energy</h3>
              <p className="opacity-90">
                All our facilities and operations are powered by renewable energy sources.
              </p>
            </div>

            <div className="text-center backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">B-Corp Certification</h3>
              <p className="opacity-90">
                Certified as a business that meets the highest standards of social and environmental performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}