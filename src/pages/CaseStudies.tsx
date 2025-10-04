import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { ImageShowcase } from "@/components/ImageShowcase";
import { TrendingUp, Users, Building2, Chrome as Home, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "ResidentialTech Family Home",
    category: "Residential",
    location: "Austin, TX",
    systemSize: "8.5 kW",
    savings: "$2,400/year",
    co2Reduction: "6.2 tons/year",
    paybackPeriod: "5.2 years",
    icon: <Home className="w-8 h-8 text-primary" />,
    description: "AI optimization increased energy production by 23% compared to traditional solar systems.",
    results: [
      "23% higher energy production",
      "AI detected 3 maintenance issues early",
      "100% uptime achieved",
      "$400 additional revenue from grid services"
    ]
  },
  {
    title: "GreenTech Manufacturing",
    category: "Commercial",
    location: "Phoenix, AZ", 
    systemSize: "2.5 MW",
    savings: "$450,000/year",
    co2Reduction: "1,850 tons/year",
    paybackPeriod: "3.8 years",
    icon: <Building2 className="w-8 h-8 text-grid-blue" />,
    description: "Large-scale deployment with predictive maintenance reduced downtime by 85%.",
    results: [
      "85% reduction in unplanned downtime", 
      "AI predicted 12 critical issues",
      "Real-time grid services optimization",
      "$150,000 additional revenue from energy trading"
    ]
  },
  {
    title: "Sunrise Community Solar",
    category: "Community",
    location: "Denver, CO",
    systemSize: "5.2 MW",
    savings: "$850,000/year",
    co2Reduction: "3,200 tons/year", 
    paybackPeriod: "4.1 years",
    icon: <Users className="w-8 h-8 text-eco-green" />,
    description: "Virtual power plant serving 1,200 households with blockchain energy trading.",
    results: [
      "1,200 households served",
      "Blockchain trading platform launch",
      "Community energy independence",
      "$250,000 shared revenue distribution"
    ]
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Real Results from Real Customers"
        subtitle="📊 Success Stories"
        description="Discover how our customers are maximizing their solar investments with AI optimization, predictive maintenance, and blockchain-secured energy trading."
        primaryAction={{
          label: "Become a Case Study",
          href: "/contact"
        }}
        secondaryAction={{
          label: "Download Reports",
          href: "/contact"
        }}
      />

      <ImageShowcase
        imageUrl="https://images.pexels.com/photos/8154190/pexels-photo-8154190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        altText="Solar project success stories"
      />

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-eco transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {study.icon}
                      </div>
                      <Badge variant="outline">{study.category}</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground">{study.title}</h3>
                    <p className="text-muted-foreground">{study.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium">{study.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">System Size:</span>
                        <span className="font-medium">{study.systemSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="space-y-6">
                    <h4 className="font-semibold text-foreground">Key Metrics</h4>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-success/10 rounded-lg p-4">
                        <div className="text-2xl font-bold text-success">{study.savings}</div>
                        <div className="text-sm text-muted-foreground">Annual Savings</div>
                      </div>
                      
                      <div className="bg-eco-green/10 rounded-lg p-4">
                        <div className="text-2xl font-bold text-eco-green">{study.co2Reduction}</div>
                        <div className="text-sm text-muted-foreground">CO₂ Reduced</div>
                      </div>
                      
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">{study.paybackPeriod}</div>
                        <div className="text-sm text-muted-foreground">Payback Period</div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-6">
                    <h4 className="font-semibold text-foreground">Key Results</h4>
                    
                    <div className="space-y-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <TrendingUp className="w-4 h-4 text-success mt-0.5" />
                          <span className="text-sm text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full mt-4" variant="outline">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Flagship Projects</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Industry-Leading Installations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering projects that showcase the full potential of AI-powered solar management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-lg">Smart City Initiative</CardTitle>
                <Badge variant="secondary">Municipal</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">15 MW</div>
                <p className="text-sm text-muted-foreground mb-4">
                  City-wide solar deployment with AI grid management powering 5,000 homes.
                </p>
                <Button size="sm" variant="outline">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-lg">University Campus</CardTitle>
                <Badge variant="secondary">Educational</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-grid-blue mb-2">8.5 MW</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Research partnership demonstrating next-generation energy independence.
                </p>
                <Button size="sm" variant="outline">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-lg">Industrial Complex</CardTitle>
                <Badge variant="secondary">Industrial</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-eco-green mb-2">25 MW</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Largest AI-optimized industrial solar installation in North America.
                </p>
                <Button size="sm" variant="outline">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <p className="text-muted-foreground italic">
                  "The AI optimization has exceeded our expectations. We're generating 25% more energy than projected."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full"></div>
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">ResidentialTech Family</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <p className="text-muted-foreground italic">
                  "Predictive maintenance has saved us hundreds of thousands in potential downtime costs."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-grid-blue/10 rounded-full"></div>
                  <div>
                    <div className="font-medium">Mark Chen</div>
                    <div className="text-sm text-muted-foreground">GreenTech Manufacturing CTO</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <p className="text-muted-foreground italic">
                  "The blockchain trading platform has created new revenue streams we never thought possible."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-eco-green/10 rounded-full"></div>
                  <div>
                    <div className="font-medium">Lisa Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Sunrise Community Lead</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}