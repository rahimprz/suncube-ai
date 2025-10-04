import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { ImageShowcase } from "@/components/ImageShowcase";
import { Handshake, TrendingUp, Users, Award, CircleCheck as CheckCircle, ArrowRight, DollarSign, Shield, Brain } from "lucide-react";

const partnerBenefits = [
  {
    icon: <DollarSign className="w-8 h-8 text-success" />,
    title: "Revenue Growth",
    description: "Average 40% increase in solar project profitability with our AI optimization",
    stat: "40% avg increase"
  },
  {
    icon: <Shield className="w-8 h-8 text-grid-blue" />,
    title: "Technical Support",
    description: "Comprehensive training, certification, and ongoing technical assistance",
    stat: "24/7 support"
  },
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "AI Technology",
    description: "Access to cutting-edge AI algorithms and predictive maintenance tools",
    stat: "Latest AI tech"
  },
  {
    icon: <Users className="w-8 h-8 text-eco-green" />,
    title: "Market Expansion",
    description: "Enter new markets with blockchain energy trading and smart grid services",
    stat: "New markets"
  }
];

const partnerTypes = [
  {
    title: "Solar Installers",
    description: "Enhance your installations with AI-powered monitoring and optimization",
    benefits: ["AI system design tools", "Predictive maintenance alerts", "Customer dashboard access", "Revenue sharing"],
    cta: "Join Installer Network"
  },
  {
    title: "Energy Consultants", 
    description: "Offer clients advanced analytics and blockchain-secured energy management",
    benefits: ["Advanced analytics platform", "Client reporting tools", "Blockchain integration", "Training & certification"],
    cta: "Become Energy Partner"
  },
  {
    title: "Technology Integrators",
    description: "Integrate our AI platform with existing energy management systems",
    benefits: ["API access", "Technical documentation", "Development support", "Co-marketing opportunities"],
    cta: "Technology Partnership"
  }
];

export default function Partners() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Partner with the Future of Solar"
        subtitle="🤝 Partnership Program"
        description="Join our growing network of partners and help accelerate the adoption of AI-powered solar technology worldwide. Together, we're building the energy infrastructure of tomorrow."
        primaryAction={{
          label: "Become a Partner",
          href: "/partners/become-partner"
        }}
        secondaryAction={{
          label: "Why Partner With Us",
          href: "/partners/why-partner"
        }}
      />

      <ImageShowcase
        imageUrl="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        altText="Partnership opportunities"
      />

      {/* Why Partner With Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Partner Benefits</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Partner With Suncube AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access cutting-edge technology, expand your market reach, and increase profitability with our comprehensive partner program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-eco transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <Badge variant="secondary" className="mt-2">{benefit.stat}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Partnership Types</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Find Your Partnership Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the partnership model that best fits your business and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-eco transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{type.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Benefits Include:</h4>
                    {type.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-primary text-white">
                    {type.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Partner Success</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Partner Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">SolarTech Solutions</h3>
                    <Badge variant="outline">Installer Partner</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Partnering with Suncube AI increased our project success rate by 85% and customer satisfaction to 98%."
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">85%</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-grid-blue" />
                  <div>
                    <h3 className="font-semibold">GreenEnergy Consulting</h3>
                    <Badge variant="outline">Consultant Partner</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Our revenue grew 150% after integrating Suncube AI's analytics platform into our service offerings."
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">150%</div>
                    <div className="text-xs text-muted-foreground">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-eco-green">50+</div>
                    <div className="text-xs text-muted-foreground">New Clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Handshake className="w-8 h-8 text-eco-green" />
                  <div>
                    <h3 className="font-semibold">SmartGrid Systems</h3>
                    <Badge variant="outline">Tech Partner</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The API integration was seamless and opened up entirely new market opportunities for us."
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-grid-blue">3x</div>
                    <div className="text-xs text-muted-foreground">Market Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-warning">2 weeks</div>
                    <div className="text-xs text-muted-foreground">Integration</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Application CTA */}
      <section className="py-20 bg-gradient-to-br from-[rgb(14,90,56)] via-[rgb(18,110,70)] to-[rgb(14,90,56)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 drop-shadow-lg">
            Ready to Join Our Partner Network?
          </h2>
          <p className="text-xl opacity-95 mb-8">
            Start your partnership journey today and help shape the future of solar energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#84cc16] hover:bg-[#75bb14] text-white">
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm">
              Download Partner Kit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}