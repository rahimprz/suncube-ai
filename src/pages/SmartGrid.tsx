import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Grid3x3, 
  Zap, 
  ArrowUpDown, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const subpages = [
  {
    title: "Grid Services Participation",
    description: "Simulate surplus feeding the grid for stability + dummy revenue.",
    icon: <Grid3x3 className="w-6 h-6 text-grid-blue" />,
    href: "/smartgrid/grid-services"
  },
  {
    title: "Energy Trading",
    description: "Dummy scenarios show peer-to-grid trading flow.",
    icon: <Zap className="w-6 h-6 text-primary" />,
    href: "/smartgrid/energy-trading"
  },
  {
    title: "Demand Response",
    description: "Dummy spikes simulation to see system adaptability.",
    icon: <ArrowUpDown className="w-6 h-6 text-eco-green" />,
    href: "/smartgrid/demand-response"
  },
  {
    title: "Revenue Optimization Tools",
    description: "Dummy tariff & export scheduling scenarios.",
    icon: <TrendingUp className="w-6 h-6 text-success" />,
    href: "/smartgrid/revenue-optimization"
  }
];

export default function SmartGrid() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Smart Grid & Virtual Power Plant"
        subtitle="⚡ Grid Integration & Energy Trading"
        description="Join our virtual power plant network and participate in energy trading markets. Contribute to grid stability while maximizing your energy revenue."
        primaryAction={{
          label: "Explore Grid Services",
          href: "/smartgrid/grid-services"
        }}
        secondaryAction={{
          label: "View Demo",
          href: "/portal"
        }}
      />

      {/* Quick Navigation */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {subpages.map((page, index) => (
              <Link key={index} to={page.href}>
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  {page.icon}
                  <span>{page.title}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Smart Grid Solutions</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Power the Future Grid
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your solar system into an active grid participant with intelligent energy management and trading capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subpages.map((page, index) => (
              <Card key={index} className="hover:shadow-eco transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {page.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{page.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{page.description}</p>
                  
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <Link to={page.href}>
                      Explore Feature
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}