import { HeroSection } from "@/components/ui/hero-section";
import { EnergyChart } from "@/components/EnergyChart";
import { AIAlerts } from "@/components/AIAlerts";
import { ScrollableImpact } from "@/components/ScrollableImpact";
import { AnimatedCTA } from "@/components/AnimatedCTA";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Shield, TrendingUp, Leaf, Activity, ArrowRight, Sun, Battery, Grid3x3 } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: <Brain className="w-7 h-7 text-green-300" />,
    title: "AI-Powered Optimization",
    description: "Machine learning algorithms predict and optimize your energy production in real-time."
  },
  {
    icon: <Shield className="w-7 h-7 text-green-300" />,
    title: "Blockchain Security",
    description: "Transparent, secure energy transactions with immutable blockchain records."
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-green-300" />,
    title: "Predictive Maintenance",
    description: "Get alerts before issues occur, maximizing uptime and system efficiency."
  },
  {
    icon: <Leaf className="w-7 h-7 text-green-300" />,
    title: "Carbon Footprint Tracking",
    description: "Monitor your environmental impact with real-time CO₂ offset calculations."
  }
];

const steps = [
  {
    number: "01",
    title: "Smart Installation",
    description: "AI-optimized panel placement and grid integration",
    icon: <Sun className="w-8 h-8 text-emerald-900" />
  },
  {
    number: "02",
    title: "Real-time Monitoring",
    description: "24/7 AI surveillance with predictive analytics",
    icon: <Activity className="w-8 h-8 text-emerald-900" />
  },
  {
    number: "03",
    title: "Smart Grid Integration",
    description: "Seamless energy trading and storage optimization",
    icon: <Grid3x3 className="w-8 h-8 text-emerald-900" />
  },
  {
    number: "04",
    title: "Automated Payments",
    description: "Blockchain-secured transactions and billing",
    icon: <Battery className="w-8 h-8 text-emerald-900" />
  }
];

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const leftPanel = document.querySelector('#left-panel') as HTMLElement;
      const rightPanel = document.querySelector('#right-panel') as HTMLElement;
      const section = leftPanel?.parentElement?.parentElement;

      if (!section || !leftPanel || !rightPanel) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.8)));
        const translateX = scrollProgress * 50;

        leftPanel.style.transform = `translateX(-${translateX}%)`;
        rightPanel.style.transform = `translateX(${translateX}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
      {/* Decorative Background Elements - Shared across entire page */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 border border-green-400/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-64 h-64 border border-green-400/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 border border-green-400/25 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-green-400/15 rounded-full animate-float-delayed"></div>
      </div>

      {/* Floating Green Orbs - Shared across entire page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
        <div className="absolute top-64 right-24 w-3 h-3 bg-green-300 rounded-full animate-pulse delay-1000 shadow-lg shadow-green-300/50"></div>
        <div className="absolute bottom-48 left-32 w-5 h-5 bg-green-500 rounded-full animate-pulse delay-2000 shadow-lg shadow-green-500/50"></div>
        <div className="absolute top-96 right-1/3 w-2 h-2 bg-green-200 rounded-full animate-pulse delay-500 shadow-lg shadow-green-200/50"></div>
        <div className="absolute bottom-64 right-16 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1500 shadow-lg shadow-green-400/50"></div>
        <div className="absolute top-1/2 left-24 w-3 h-3 bg-green-300 rounded-full animate-pulse delay-3000 shadow-lg shadow-green-300/50"></div>
        <div className="absolute top-20 right-1/4 w-4 h-4 bg-green-500 rounded-full animate-pulse delay-700 shadow-lg shadow-green-500/50"></div>
        <div className="absolute bottom-32 right-1/3 w-5 h-5 bg-green-400 rounded-full animate-pulse delay-2500 shadow-lg shadow-green-400/50"></div>
      </div>

      <div className="relative z-10">
        <HeroSection
          title="Your Solar. Supercharged by AI. Built for the Grid of Tomorrow."
          subtitle="🌟 Revolutionary Solar Technology"
          description="Transform your energy future with AI-powered solar management, predictive maintenance, and blockchain-secured transactions. Join the smart grid revolution."
          primaryAction={{
            label: "Request Demo",
            href: "/contact"
          }}
          secondaryAction={{
            label: "View Live Dashboard",
            href: "/portal"
          }}
        >
          <div className="mt-12 max-w-4xl mx-auto">
            <EnergyChart />
          </div>

        </HeroSection>

        <section className="relative h-[80vh] overflow-hidden my-20">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full overflow-hidden transform transition-all duration-1000 ease-out" id="left-panel" style={{transformOrigin: 'right center'}}>
              <div className="relative w-full h-full">
                <img
                  src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="Solar Installation"
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/60 to-transparent"></div>
              </div>
            </div>
            <div className="w-1/2 h-full overflow-hidden transform transition-all duration-1000 ease-out" id="right-panel" style={{transformOrigin: 'left center'}}>
              <div className="relative w-full h-full">
                <img
                  src="https://images.pexels.com/photos/9875385/pexels-photo-9875385.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="Solar Technology"
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center px-4 max-w-6xl mx-auto">
              <div className="mb-8 opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <Badge variant="outline" className="border-green-300/60 text-green-300 bg-green-400/20 text-sm px-6 py-2 backdrop-blur-md shadow-lg">
                  Next Generation Solar Technology
                </Badge>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 drop-shadow-2xl leading-tight opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                Power Your Future with
                <span className="block mt-4 bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent drop-shadow-none">
                  Intelligent Solar Energy
                </span>
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-semibold drop-shadow-xl leading-relaxed max-w-4xl mx-auto opacity-0 animate-fade-in" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>
                Experience seamless integration of AI technology and renewable energy.
                <span className="block mt-4 text-green-200">Your vision deserves world-class execution.</span>
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-fade-in" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-green-300/40 text-green-300 bg-green-400/10 text-sm px-4 py-1">
                Key Benefits
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose Suncube AI?
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Advanced technology meets sustainable energy for maximum efficiency and profitability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-green-400/30 rounded-2xl p-8 text-center hover:border-green-400/70 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-500 hover:-translate-y-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="mx-auto w-24 h-24 bg-gradient-to-br from-green-400/30 to-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-green-400/50">
                      <div className="transform group-hover:scale-125 transition-transform duration-500">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-green-50 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t-2 border-green-400/20">
              {[
                { value: "50K+", label: "Installations", icon: <Sun className="w-8 h-8" /> },
                { value: "99.8%", label: "Uptime", icon: <Activity className="w-8 h-8" /> },
                { value: "2.5M", label: "MWh Generated", icon: <TrendingUp className="w-8 h-8" /> },
                { value: "40K", label: "Tons CO₂ Saved", icon: <Leaf className="w-8 h-8" /> }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group text-center relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl group-hover:bg-green-400/40 transition-all duration-500"></div>
                    <div className="relative p-4 bg-gradient-to-br from-green-400/20 to-green-500/10 rounded-full border-2 border-green-400/30 group-hover:border-green-400/60 group-hover:scale-110 transition-all duration-500">
                      <div className="text-green-300 group-hover:text-green-200 transition-colors duration-300">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                    {stat.value}
                  </h3>
                  <p className="text-green-100 text-sm md:text-base font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <div className="relative py-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t-2 border-green-400/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 px-6">
              <div className="flex space-x-3">
                <span className="text-green-400 text-xl">◆</span>
                <span className="text-green-300 text-2xl">✦</span>
                <span className="text-green-400 text-xl">◆</span>
              </div>
            </span>
          </div>
        </div>

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-green-300/40 text-green-300 bg-green-400/10 uppercase text-xs tracking-wider px-4 py-1">
                How It Works
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Simple, Smart, Sustainable
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Our AI-powered platform makes solar energy management effortless and efficient.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-green-400/30 rounded-3xl p-10 hover:border-green-400/70 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-green-400/5 to-green-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-7xl font-black bg-gradient-to-br from-green-400 to-emerald-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">{step.number}</span>
                      <span className="text-sm font-bold text-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">—</span>
                    </div>
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-green-400/60">
                      <div className="transform group-hover:scale-110 transition-transform duration-500">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">{step.title}</h3>
                    <p className="text-green-50 text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="relative py-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t-2 border-green-400/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 px-6 text-2xl font-bold text-green-300">✦</span>
          </div>
        </div>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-green-300/40 text-green-300 bg-green-400/10 text-sm px-4 py-1">
                AI Intelligence
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Predictive Maintenance in Action
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Our AI continuously monitors your system and predicts issues before they impact performance.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <AIAlerts />
            </div>
          </div>
        </section>

        <ScrollableImpact />

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/30 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-green-300/40 text-green-300 bg-green-400/10 text-sm px-4 py-1">
                Trusted Worldwide
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Powering the Future Together
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Join thousands of satisfied customers who have transformed their energy future with Suncube AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Our energy costs dropped by 65% in the first year. The AI optimization is incredible.",
                  author: "Sarah Johnson",
                  role: "Homeowner, California",
                  rating: 5
                },
                {
                  quote: "The predictive maintenance has saved us thousands in potential downtime. Best investment we've made.",
                  author: "Michael Chen",
                  role: "Facility Manager, Tech Corp",
                  rating: 5
                },
                {
                  quote: "Real-time monitoring and blockchain billing give us complete transparency. Highly recommended!",
                  author: "Emma Williams",
                  role: "CFO, Green Industries",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-green-400/30 rounded-2xl p-8 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-green-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-green-50 text-base leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-green-400/20 pt-4">
                      <p className="text-white font-semibold">{testimonial.author}</p>
                      <p className="text-green-300 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="relative py-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t-2 border-green-400/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 px-6">
              <div className="flex space-x-3">
                <span className="text-green-400 text-xl">◆</span>
                <span className="text-green-300 text-2xl">✦</span>
                <span className="text-green-400 text-xl">◆</span>
              </div>
            </span>
          </div>
        </div>

        <AnimatedCTA />
      </div>
    </div>
  );
}
