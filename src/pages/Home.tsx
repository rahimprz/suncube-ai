import { HeroSection } from "@/components/ui/hero-section";
import { EnergyChart } from "@/components/EnergyChart";
import { AIAlerts } from "@/components/AIAlerts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Brain, 
  Shield, 
  TrendingUp, 
  Leaf, 
  Activity,
  CheckCircle,
  ArrowRight,
  Sun,
  Battery,
  Grid3x3
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: "AI-Powered Optimization",
    description: "Machine learning algorithms predict and optimize your energy production in real-time."
  },
  {
    icon: <Shield className="w-6 h-6 text-grid-blue" />,
    title: "Blockchain Security",
    description: "Transparent, secure energy transactions with immutable blockchain records."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-success" />,
    title: "Predictive Maintenance",
    description: "Get alerts before issues occur, maximizing uptime and system efficiency."
  },
  {
    icon: <Leaf className="w-6 h-6 text-eco-green" />,
    title: "Carbon Footprint Tracking",
    description: "Monitor your environmental impact with real-time CO₂ offset calculations."
  }
];

const steps = [
  {
    number: "01",
    title: "Smart Installation",
    description: "AI-optimized panel placement and grid integration",
    icon: <Sun className="w-8 h-8 text-solar-yellow" />
  },
  {
    number: "02", 
    title: "Real-time Monitoring",
    description: "24/7 AI surveillance with predictive analytics",
    icon: <Activity className="w-8 h-8 text-primary" />
  },
  {
    number: "03",
    title: "Smart Grid Integration", 
    description: "Seamless energy trading and storage optimization",
    icon: <Grid3x3 className="w-8 h-8 text-grid-blue" />
  },
  {
    number: "04",
    title: "Automated Payments",
    description: "Blockchain-secured transactions and billing",
    icon: <Battery className="w-8 h-8 text-eco-green" />
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-eco">
      {/* Hero Section */}
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
        {/* Live Energy Dashboard Preview */}
        <div className="mt-12 max-w-4xl mx-auto">
          <EnergyChart />
        </div>
      </HeroSection>

      {/* Key Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Key Benefits</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Suncube AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced technology meets sustainable energy for maximum efficiency and profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-eco transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Simple, Smart, Sustainable
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered platform makes solar energy management effortless and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <div className="text-4xl font-bold text-primary/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button size="lg" variant="outline">
                Learn More About Our Process
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Live AI Alerts Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">AI Intelligence</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Predictive Maintenance in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI continuously monitors your system and predicts issues before they impact performance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <AIAlerts />
          </div>
        </div>
      </section>

      {/* Featured Metrics */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Delivering Real Impact
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of customers already benefiting from our AI-powered solar solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">2.5M+</div>
              <div className="text-lg opacity-90">kWh Generated</div>
              <div className="text-sm opacity-75">This month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">98.5%</div>
              <div className="text-lg opacity-90">System Uptime</div>
              <div className="text-sm opacity-75">AI-optimized</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">1,200+</div>
              <div className="text-lg opacity-90">Tons CO₂ Saved</div>
              <div className="text-sm opacity-75">Environmental impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the solar revolution with AI-powered intelligence and blockchain security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary text-white shadow-eco">
                Get Your Free Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/portal">
              <Button size="lg" variant="outline">
                View Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}