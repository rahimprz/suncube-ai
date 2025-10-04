import { HeroSection } from "@/components/ui/hero-section";
import { ImageShowcase } from "@/components/ImageShowcase";
import { EnergyChart } from "@/components/EnergyChart";
import { AIAlerts } from "@/components/AIAlerts";
import { ScrollableImpact } from "@/components/ScrollableImpact";
import { AnimatedCTA } from "@/components/AnimatedCTA";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Shield, TrendingUp, Leaf, Activity, ArrowRight, Sun, Battery, Grid3x3 } from "lucide-react";
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
    description: "Our expert team installs cutting-edge solar panels with integrated AI sensors. We ensure optimal placement and configuration for maximum energy generation from day one.",
    icon: <Sun className="w-8 h-8 text-emerald-900" />
  },
  {
    number: "02",
    title: "Real-Time Monitoring",
    description: "Track your energy production, consumption, and savings through our intuitive dashboard. Get instant insights into system performance with 24/7 AI-powered monitoring.",
    icon: <Activity className="w-8 h-8 text-emerald-900" />
  },
  {
    number: "03",
    title: "Grid Integration",
    description: "Seamlessly connect to the smart grid and participate in energy trading. Sell excess power back to the grid and maximize your return on investment automatically.",
    icon: <Grid3x3 className="w-8 h-8 text-emerald-900" />
  },
  {
    number: "04",
    title: "Energy Storage",
    description: "Store surplus energy with our advanced battery management system. AI optimizes charge cycles to ensure power availability during peak demand or grid outages.",
    icon: <Battery className="w-8 h-8 text-emerald-900" />
  }
];

export default function Home() {
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

        <ImageShowcase
          imageUrl="https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          altText="AI-powered solar technology"
        />

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
            <span className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 px-6 text-2xl font-bold text-green-300">✦</span>
          </div>
        </div>

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-green-300/40 text-green-300 bg-green-400/10 uppercase text-xs tracking-wider px-4 py-1">
                WHY CHOOSE US
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Learn More About Our Service
              </h2>
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
                    <div className="flex items-start mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-green-400/60">
                        <div className="transform group-hover:scale-110 transition-transform duration-500">
                          {step.icon}
                        </div>
                      </div>
                      <div className="ml-auto">
                        <span className="text-6xl font-bold text-green-400/20 group-hover:text-green-400/40 transition-colors duration-500">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-5 group-hover:text-green-300 transition-colors duration-300">{step.title}</h3>
                    <p className="text-green-50 text-base leading-relaxed mb-6">{step.description}</p>
                    <Link to="/how-it-works" className="text-green-300 hover:text-green-200 transition-colors inline-flex items-center font-semibold group/link">
                      <span className="group-hover/link:mr-2 transition-all duration-300">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                    </Link>
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
