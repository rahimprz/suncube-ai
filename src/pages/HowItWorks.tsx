import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/ui/hero-section";
import { 
  Search, 
  Wrench, 
  Activity, 
  Zap, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Site Assessment & AI Planning",
    description: "Our AI analyzes your property using satellite imagery, weather patterns, and energy consumption data to design the optimal solar system.",
    icon: <Search className="w-12 h-12 text-primary" />,
    features: ["Satellite analysis", "Energy consumption modeling", "Optimal panel placement", "ROI calculations"],
    duration: "1-2 days"
  },
  {
    step: "02", 
    title: "Smart Installation",
    description: "Professional installation with IoT sensors and smart monitoring equipment for real-time data collection.",
    icon: <Wrench className="w-12 h-12 text-grid-blue" />,
    features: ["Professional installation", "IoT sensor deployment", "Grid connection", "Safety testing"],
    duration: "1-3 days"
  },
  {
    step: "03",
    title: "AI System Training",
    description: "Our AI learns your energy patterns and begins optimizing performance based on your specific usage and local conditions.",
    icon: <Activity className="w-12 h-12 text-warning" />,
    features: ["Pattern recognition", "Performance optimization", "Grid integration", "Alert system setup"],
    duration: "2-4 weeks"
  },
  {
    step: "04",
    title: "Smart Grid Integration",
    description: "Seamless connection to the smart grid with automatic energy trading and grid services participation.",
    icon: <Zap className="w-12 h-12 text-eco-green" />,
    features: ["Grid synchronization", "Energy trading", "Demand response", "Revenue optimization"],
    duration: "Ongoing"
  },
  {
    step: "05",
    title: "Continuous Optimization",
    description: "24/7 AI monitoring with predictive maintenance alerts and performance optimization recommendations.",
    icon: <TrendingUp className="w-12 h-12 text-success" />,
    features: ["24/7 monitoring", "Predictive maintenance", "Performance alerts", "System updates"],
    duration: "Lifetime"
  },
  {
    step: "06",
    title: "Blockchain Billing",
    description: "Transparent, automated billing with blockchain-secured energy transactions and smart contract execution.",
    icon: <Shield className="w-12 h-12 text-muted-foreground" />,
    features: ["Automated billing", "Blockchain security", "Transaction transparency", "Smart contracts"],
    duration: "Monthly"
  }
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="How Suncube AI Works"
        subtitle="📋 Step-by-Step Process"
        description="From initial assessment to ongoing optimization, our AI-powered platform makes solar energy management seamless and efficient."
        primaryAction={{
          label: "Start Your Journey",
          href: "/contact"
        }}
        secondaryAction={{
          label: "View Case Studies",
          href: "/case-studies"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl font-bold text-primary/20">{step.step}</div>
                    <Badge variant="outline">{step.duration}</Badge>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 max-w-md">
                  <Card className="text-center p-8 hover:shadow-eco transition-all duration-300">
                    <CardContent className="space-y-4">
                      <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                      <div className="space-y-2">
                        <div className="text-6xl font-bold text-primary/10">{step.step}</div>
                        <div className="text-sm font-medium text-muted-foreground">
                          Step {step.step} of 06
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Timeline</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              From Start to Full Operation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your complete solar journey typically takes 4-8 weeks from initial consultation to full AI optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Week 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Site assessment, system design, and permit applications
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Week 2-3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Installation, grid connection, and safety inspections
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Week 4-6</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  AI training, pattern learning, and system optimization
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Week 6+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Full operation with ongoing AI optimization and monitoring
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}