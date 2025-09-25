import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Star, MapPin, TrendingUp, Users, Zap, Globe, Factory, Home } from 'lucide-react';
import { HeroSection } from '@/components/ui/hero-section';
const SuccessStories: React.FC = () => {
  const [sliderValue, setSliderValue] = useState([50]);
  const [counters, setCounters] = useState({
    homes: 0,
    kwh: 0,
    credits: 0
  });

  // Animated counters
  useEffect(() => {
    const targetValues = {
      homes: 482,
      kwh: 1200000,
      credits: 38000000
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounters = () => {
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          homes: Math.floor(targetValues.homes * progress),
          kwh: Math.floor(targetValues.kwh * progress),
          credits: Math.floor(targetValues.credits * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const residentialStories = [
    {
      name: "Priya Sharma",
      city: "Mumbai",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      savings: "₹22,300",
      rating: 5,
      before: "High electricity bills, frequent power cuts",
      after: "Smart battery management, 24/7 monitoring"
    },
    {
      name: "Rajesh Patel",
      city: "Bangalore",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      savings: "₹18,500",
      rating: 5,
      before: "Manual system monitoring",
      after: "AI-powered optimization"
    },
    {
      name: "Anita Desai",
      city: "Delhi",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      savings: "₹31,200",
      rating: 5,
      before: "Unpredictable energy costs",
      after: "Predictive cost management"
    }
  ];

  const industrialStories = [
    {
      company: "Textile Factory",
      location: "Surat, Gujarat",
      improvement: "37%",
      metric: "Downtime Reduction",
      quote: "Suncube AI's predictive maintenance tools transformed our operations. We've seen a 37% reduction in downtime and significant cost savings.",
      author: "Vikram Mehta",
      role: "Operations Director"
    },
    {
      company: "Steel Plant",
      location: "Jamshedpur, Jharkhand",
      improvement: "42%",
      metric: "Energy Efficiency",
      quote: "The AI optimization system helped us achieve 42% better energy efficiency while maintaining production quality.",
      author: "Sanjay Kumar",
      role: "Plant Manager"
    },
    {
      company: "Chemical Factory",
      location: "Vadodara, Gujarat",
      improvement: "28%",
      metric: "Cost Reduction",
      quote: "Real-time monitoring and predictive analytics have reduced our operational costs by 28% annually.",
      author: "Dr. Meera Iyer",
      role: "Technical Director"
    }
  ];

  const globalStories = [
    {
      country: "Kenya",
      city: "Nairobi",
      project: "Solar Microgrid",
      description: "Community solar microgrid with cloud dashboard management",
      impact: "500+ households powered",
      icon: "🌍"
    },
    {
      country: "UAE",
      city: "Dubai",
      project: "Energy Trading",
      description: "Blockchain-based energy trading platform",
      impact: "2.5MW trading capacity",
      icon: "🏢"
    },
    {
      country: "Australia",
      city: "Melbourne",
      project: "Smart Grid",
      description: "Intelligent grid management with AI optimization",
      impact: "10,000+ connections",
      icon: "⚡"
    },
    {
      country: "Germany",
      city: "Berlin",
      project: "Residential AI",
      description: "Home energy management with predictive analytics",
      impact: "1,200+ homes optimized",
      icon: "🏠"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Banner */}
      <HeroSection
        title="Every Watt Counts. Every Story Matters."
        subtitle="From residential rooftops to enterprise parks — see how Suncube AI transforms solar adoption into intelligent energy leadership."
        description="Real homeowners achieving remarkable savings with AI-powered solar optimization"
        primaryAction={
          {
            label: "Explore Featured Stories",
            href: "/case-studies/success-stories",
          }
        }
      />
      {/* Residential Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Home className="w-8 h-8 text-blue-600" />
              Residential Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real homeowners achieving remarkable savings with AI-powered solar optimization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {residentialStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={story.photo} 
                      alt={story.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                    />
                  </div>
                  <CardTitle className="text-xl">{story.name}</CardTitle>
                  <div className="flex items-center justify-center gap-1 text-yellow-500">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{story.city}</span>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <p className="text-2xl font-bold text-green-600">₹{story.savings}</p>
                    <p className="text-sm text-green-700">Annual Savings</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Before vs After</p>
                      <Slider
                        value={sliderValue}
                        onValueChange={setSliderValue}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Before</span>
                        <span>After</span>
                      </div>
                    </div>
                    
                    <div className="text-left space-y-2">
                      <div className="bg-red-50 p-3 rounded">
                        <p className="text-sm text-red-700"><strong>Before:</strong> {story.before}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="text-sm text-green-700"><strong>After:</strong> {story.after}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Efficiency Breakthroughs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Factory className="w-8 h-8 text-blue-600" />
              Industrial Efficiency Breakthroughs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How leading industries are achieving unprecedented efficiency with AI-powered solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industrialStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {story.location}
                    </Badge>
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{story.company}</CardTitle>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-3xl font-bold text-green-600">{story.improvement}</p>
                    <p className="text-sm text-green-700">{story.metric}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="italic text-gray-700 mb-4 border-l-4 border-blue-500 pl-4">
                    "{story.quote}"
                  </blockquote>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold">{story.author}</p>
                    <p>{story.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Adoption Snippets */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Globe className="w-8 h-8 text-blue-600" />
              Global Adoption Snippets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suncube AI's impact across continents, powering communities worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{story.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{story.country}</h3>
                  <p className="text-sm text-blue-600 mb-2">{story.city}</p>
                  <h4 className="font-medium text-gray-800 mb-2">{story.project}</h4>
                  <p className="text-sm text-gray-600 mb-3">{story.description}</p>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {story.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Metrics Snapshot */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">User Metrics Snapshot</h2>
            <p className="text-xl text-blue-100">
              Aggregate success metrics from our global user base
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-yellow-300" />
              </div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                {counters.homes.toLocaleString()}
              </div>
              <p className="text-lg">Homes Optimized</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-yellow-300" />
              </div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                {(counters.kwh / 1000000).toFixed(1)}M+
              </div>
              <p className="text-lg">kWh Tracked</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-yellow-300" />
              </div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                ₹{(counters.credits / 10000000).toFixed(1)} Cr.
              </div>
              <p className="text-lg">Grid Credits Generated</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
