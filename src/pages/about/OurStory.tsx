import React from 'react';
import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,  
  Globe, 
  Brain, 
  TrendingUp, 
  Users, 
  BarChart3,
  Rocket,
  CheckCircle,
  Lightbulb,
  Database,
  Network
} from "lucide-react";

const OurStory: React.FC = () => {
  // Origin Story Timeline Data
  const originTimeline = [
    {
      year: "2023",
      title: "The Vision Takes Shape",
      description: "Born from the crossroads of solar tech + AI, our founders envisioned a platform that could accelerate clean energy adoption through intelligent data insights.",
      icon: <Lightbulb className="h-6 w-6 text-blue-600" />
    },
    {
      year: "2023",
      title: "From Mock to Prototype",
      description: "Started with mock dashboards and evolved to a comprehensive platform prototype, testing core AI algorithms and data visualization capabilities.",
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />
    },
    {
      year: "2024",
      title: "First Demo Launch",
      description: "Successfully launched our first demo, showcasing real-time solar monitoring, predictive analytics, and AI-powered optimization features.",
      icon: <Rocket className="h-6 w-6 text-green-600" />
    }
  ];

  // Tech Principles Data
  const techPrinciples = [
    {
      title: "Scalable",
      description: "Built to handle millions of solar installations and petabytes of energy data without compromising performance.",
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Interoperable",
      description: "Seamlessly integrates with existing solar infrastructure, inverters, and energy management systems.",
      icon: <Network className="h-8 w-8 text-purple-600" />,
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "AI-Native from Day 1",
      description: "Every feature and decision is powered by advanced machine learning algorithms and real-time data processing.",
      icon: <Brain className="h-8 w-8 text-green-600" />,
      color: "from-green-50 to-green-100"
    }
  ];

  // Future Roadmap Data
  const futureRoadmap = [
    {
      quarter: "Q2 2024",
      title: "Beta Launch",
      goals: [
        "Launch beta platform with core monitoring features",
        "Onboard first 100 solar installations",
        "Validate AI prediction accuracy"
      ]
    },
    {
      quarter: "Q3 2024",
      title: "AI Integration Expansion",
      goals: [
        "Advanced predictive maintenance algorithms",
        "Weather-based energy forecasting",
        "Automated optimization recommendations"
      ]
    },
    {
      quarter: "Q4 2024",
      title: "Blockchain Audit Modules",
      goals: [
        "Transparent energy trading platform",
        "Smart contract integration",
        "Decentralized energy marketplace"
      ]
    }
  ];

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('origin-timeline');
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Section 1: Hero Banner */}
      <HeroSection
        title="We're Not Just Building a Platform. We're Rewiring Possibilities."
        subtitle="Our Story"
        description="Suncube AI started with a vision to use intelligence and data to accelerate clean energy for the world."
        primaryAction={{
          label: "See Our Timeline",
          href: "#timeline"
        }}
      />

      {/* Section 2: The Origin Story */}
      <section id="origin-timeline" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Origin Story
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to reality - how Suncube AI evolved from a bold vision to a revolutionary platform
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600"></div>
              
              {originTimeline.map((item, index) => (
                <div key={index} className="relative flex items-center mb-12 last:mb-0">
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="ml-16">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
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

      {/* Section 3: What Drives Us */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our mission is fueled by three core principles that guide every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-red-100 rounded-full">
                    <Globe className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Climate Urgency
                </h3>
                <p className="text-gray-600">
                  Every day counts in the fight against climate change. We're accelerating the transition to clean energy through intelligent technology.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Energy Equity
                </h3>
                <p className="text-gray-600">
                  Clean energy should be accessible to everyone. We're democratizing solar power through affordable, intelligent solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-100 rounded-full">
                    <Database className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Data Transparency
                </h3>
                <p className="text-gray-600">
                  Trust is built on transparency. We provide clear, accessible insights into energy production and consumption patterns.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8">
                <blockquote className="text-2xl italic text-center leading-relaxed">
                  "We envision a world where clean energy is not just accessible, but intelligent. Where every solar panel, every battery, and every home works together in perfect harmony, powered by AI that understands and optimizes for both human needs and planetary health."
                </blockquote>
                <div className="text-center mt-6 font-semibold text-lg">
                  — Suncube AI Mission Statement
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Our Tech Principles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Tech Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three pillars that define how we build technology for the future of energy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techPrinciples.map((principle, index) => (
              <Card key={index} className={`border-0 shadow-lg bg-gradient-to-br ${principle.color} hover:shadow-xl transition-all duration-300`}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white rounded-full shadow-md">
                      {principle.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {principle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base leading-relaxed">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: What's Ahead */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What's Ahead
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our roadmap to revolutionizing the clean energy landscape
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {futureRoadmap.map((milestone, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                        {milestone.quarter}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">
                      {milestone.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {milestone.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Join Us on This Journey
                </h3>
                <p className="text-gray-300 mb-6">
                  Be part of the energy revolution. Whether you're a solar installer, energy provider, or homeowner, 
                  we're building the future together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                  >
                    Get Started Today
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
