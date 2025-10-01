import { HeroSection } from "@/components/ui/hero-section";
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
    title: "Software Business",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    icon: <Sun className="w-8 h-8 text-emerald-900" />
  },
  {
    number: "02",
    title: "Business Leading",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    icon: <Activity className="w-8 h-8 text-emerald-900" />
  },
  {
    number: "03",
    title: "Solution of Reality",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    icon: <Grid3x3 className="w-8 h-8 text-emerald-900" />
  },
  {
    number: "04",
    title: "Public Repository",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    icon: <Battery className="w-8 h-8 text-emerald-900" />
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
      {/* Decorative Background Elements - Shared across entire page */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 border border-green-400/30 rounded-full"></div>
        <div className="absolute top-40 right-32 w-64 h-64 border border-green-400/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 border border-green-400/25 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-green-400/15 rounded-full"></div>
      </div>

      {/* Floating Green Orbs - Shared across entire page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-64 right-24 w-3 h-3 bg-green-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-48 left-32 w-5 h-5 bg-green-500 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-96 right-1/3 w-2 h-2 bg-green-200 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-64 right-16 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-24 w-3 h-3 bg-green-300 rounded-full animate-pulse delay-3000"></div>
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
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-green-400/30 rounded-2xl p-8 text-center hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-400/30 to-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
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
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-green-400/30 rounded-2xl p-10 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-start mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div className="ml-auto">
                        <span className="text-5xl font-bold text-green-400/20">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-green-50 leading-relaxed mb-6">{step.description}</p>
                    <button className="text-green-300 hover:text-green-200 transition-colors inline-flex items-center font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
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
