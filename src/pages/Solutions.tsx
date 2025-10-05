import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { ImageShowcase } from "@/components/ImageShowcase";
import { Link } from "react-router-dom";
import { Chrome as Home, Building2, Grid3x3, Activity, TrendingUp, Cloud, ArrowRight, Zap, Shield, Brain } from "lucide-react";

const solutions = [
  {
    icon: <Home className="w-8 h-8 text-primary" />,
    title: "Residential Solar + AI",
    description: "Smart home energy management with AI optimization, battery storage, and grid integration.",
    features: ["AI-powered optimization", "Smart battery management", "Real-time monitoring", "Mobile app control"],
    price: "Starting at $12,999"
  },
  {
    icon: <Building2 className="w-8 h-8 text-grid-blue" />,
    title: "Commercial & Industrial Solar",
    description: "Enterprise-grade solar solutions with advanced analytics and predictive maintenance.",
    features: ["Enterprise monitoring", "Predictive maintenance", "Load balancing", "ROI analytics"],
    price: "Custom pricing"
  },
  {
    icon: <Grid3x3 className="w-8 h-8 text-eco-green" />,
    title: "Smart Grid & Virtual Power Plant",
    description: "Join our virtual power plant network and participate in energy trading markets.",
    features: ["Grid services participation", "Energy trading", "Demand response", "Revenue optimization"],
    price: "Revenue sharing model"
  },
  {
    icon: <Activity className="w-8 h-8 text-warning" />,
    title: "AI Monitoring & Predictive Maintenance",
    description: "24/7 AI surveillance with predictive analytics to maximize system uptime.",
    features: ["24/7 monitoring", "Predictive alerts", "Performance optimization", "Maintenance scheduling"],
    price: "$99/month"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-success" />,
    title: "Data Insights & Forecasting",
    description: "Advanced analytics and weather-based energy production forecasting.",
    features: ["Weather forecasting", "Performance analytics", "Energy predictions", "Custom reports"],
    price: "$49/month"
  },
  {
    icon: <Cloud className="w-8 h-8 text-muted-foreground" />,
    title: "Cloud Dashboard",
    description: "Comprehensive cloud-based management platform with role-based access control.",
    features: ["Multi-site management", "User access control", "API integration", "Mobile responsive"],
    price: "Included with all plans"
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Comprehensive Solar Solutions"
        subtitle="🔋 AI-Powered Energy Systems"
        description="From residential homes to large commercial installations, our AI-powered platform scales to meet your energy needs while maximizing efficiency and profitability."
        primaryAction={{
          label: "Get Custom Quote",
          href: "/contact"
        }}
        secondaryAction={{
          label: "Schedule Consultation",
          href: "/contact"
        }}
      />

      <ImageShowcase
        imageUrl="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        altText="Solar panel solutions"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group relative overflow-hidden border-2 border-[rgb(14,90,56)]/20 hover:border-[#84cc16]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#84cc16]/20 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#84cc16]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-[#84cc16]/20 to-[#65a30d]/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <Badge variant="secondary" className="bg-[#84cc16]/10 text-[rgb(14,90,56)] border-[#84cc16]/30">{solution.price}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[rgb(14,90,56)] transition-colors">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-[rgb(14,90,56)]">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#84cc16] to-[#65a30d] rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full mt-4 bg-gradient-to-r from-[#84cc16] to-[#65a30d] hover:from-[#75bb14] hover:to-[#559309] text-white font-semibold shadow-md hover:shadow-lg transition-all" asChild>
                    <Link to={
                      index === 0 ? "/solutions/residential/ai-optimization" :
                      index === 1 ? "/solutions/commercial/enterprise-monitoring" :
                      index === 2 ? "/smartgrid/grid-services" :
                      index === 3 ? "/aimonitoring/ai-monitoring-247" :
                      index === 4 ? "/solutions/data-insights/weather-forecasting" :
                      index === 5 ? "/solutions/cloud-dashboard/multi-site-management" :
                      "/solutions"
                    }>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Technology</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our solutions leverage cutting-edge AI, blockchain, and IoT technologies for optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group text-center border-2 border-[rgb(14,90,56)]/20 hover:border-[#84cc16]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#84cc16]/20 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#84cc16]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#84cc16]/20 to-[#65a30d]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-12 h-12 text-[rgb(14,90,56)]" />
                </div>
                <CardTitle className="group-hover:text-[rgb(14,90,56)] transition-colors">Artificial Intelligence</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed">
                  Machine learning algorithms optimize energy production, predict maintenance needs, and automate grid interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center border-2 border-[rgb(14,90,56)]/20 hover:border-[#84cc16]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#84cc16]/20 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#84cc16]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#84cc16]/20 to-[#65a30d]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-12 h-12 text-[rgb(14,90,56)]" />
                </div>
                <CardTitle className="group-hover:text-[rgb(14,90,56)] transition-colors">Blockchain Security</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed">
                  Secure, transparent energy transactions with immutable records and smart contract automation.
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center border-2 border-[rgb(14,90,56)]/20 hover:border-[#84cc16]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#84cc16]/20 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#84cc16]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#84cc16]/20 to-[#65a30d]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-12 h-12 text-[rgb(14,90,56)]" />
                </div>
                <CardTitle className="group-hover:text-[rgb(14,90,56)] transition-colors">IoT Integration</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed">
                  Real-time sensor data and smart device connectivity for comprehensive system monitoring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}