import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HeroSection } from '@/components/ui/hero-section';
import { 
  Users, 
  Building2, 
  Lightbulb, 
  Factory, 
  Rocket, 
  TrendingUp, 
  Shield, 
  Globe, 
  Download,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const WhyPartner: React.FC = () => {
  const partnerTypes = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Installer Firms",
      description: "Scale your solar installations with AI-powered insights"
    },
    {
      icon: <Building2 className="h-8 w-8 text-green-600" />,
      title: "Energy Resellers",
      description: "Offer cutting-edge monitoring solutions to your clients"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "ESG Consultancies",
      description: "Provide data-driven sustainability reporting"
    },
    {
      icon: <Factory className="h-8 w-8 text-purple-600" />,
      title: "Hardware Manufacturers",
      description: "Integrate with next-generation solar technology"
    },
    {
      icon: <Rocket className="h-8 w-8 text-red-600" />,
      title: "Climate-focused Startups",
      description: "Accelerate your mission with proven AI solutions"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "Faster Client Onboarding",
      description: "Streamlined processes reduce setup time by 60%"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Smart Dashboards",
      description: "White-label monitoring solutions for your clients"
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-600" />,
      title: "Co-branded Opportunities",
      description: "Joint marketing initiatives and shared success"
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-600" />,
      title: "Exclusive Access",
      description: "Early access to new features and updates"
    }
  ];

  const visionTimeline = [
    {
      year: "2024",
      title: "Green Energy Revolution",
      description: "Accelerating solar adoption with AI insights"
    },
    {
      year: "2025",
      title: "Data Transparency",
      description: "Building trust through open energy data"
    },
    {
      year: "2026",
      title: "Net-Zero Future",
      description: "Creating interoperable clean energy ecosystems"
    }
  ];

  const handleDownloadDeck = () => {
    // In a real implementation, this would trigger a download
    console.log('Downloading partner deck...');
    // You can implement actual file download logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <HeroSection
        title="Partnerships That Spark Energy Revolutions"
        subtitle="Join forces with a platform that's built to scale with you. Future-ready, AI-smart, and designed to amplify your solar impact."
        description="We collaborate with forward-thinking organizations across the renewable energy ecosystem"
        primaryAction={
          {
            label: "Explore Partnership Benefits",
            href: "/partners/why-partner",
          }
        }
      />
      {/* Who We Partner With */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Who We Partner With
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We collaborate with forward-thinking organizations across the renewable energy ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerTypes.map((partner, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {partner.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {partner.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {partner.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It's a Win-Win */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why It's a Win-Win
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the mutual benefits that make our partnerships thrive
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gray-100 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial Placeholder */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl italic mb-4">
                  "Suncube AI has transformed how we deliver value to our clients. The partnership has been nothing short of revolutionary."
                </blockquote>
                <div className="font-semibold">
                  — Sarah Chen, CEO of SolarTech Solutions
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shared Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Shared Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building a sustainable future together through innovation and collaboration
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600"></div>
              
              {visionTimeline.map((item, index) => (
                <div key={index} className="relative flex items-center mb-12 last:mb-0">
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>
                  <div className="ml-16">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline" className="text-blue-600 border-blue-600">
                            {item.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Partner Deck */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download our comprehensive partner deck to learn more about integration opportunities, 
              benefits, and how we can accelerate your success in the renewable energy market.
            </p>
            
            <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-white/20 rounded-full">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Partner Pitch Deck
                </h3>
                <ul className="text-left text-gray-300 mb-8 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Sample integration visuals and workflows
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Detailed partnership benefits breakdown
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Technical integration specifications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Success stories and case studies
                  </li>
                </ul>
                <Button 
                  onClick={handleDownloadDeck}
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Pitch Deck PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPartner;
