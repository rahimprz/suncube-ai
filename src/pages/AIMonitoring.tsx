import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  AlertCircle, 
  TrendingUp, 
  Calendar,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const subpages = [
  {
    title: "24/7 AI Monitoring",
    description: "Dummy AI checks run 24/7 for hidden faults.",
    icon: <Activity className="w-6 h-6 text-warning" />,
    href: "/aimonitoring/ai-monitoring-247"
  },
  {
    title: "Predictive Alerts Dashboard",
    description: "Dummy alerts for shading, dirt, hardware faults.",
    icon: <AlertCircle className="w-6 h-6 text-primary" />,
    href: "/aimonitoring/predictive-alerts"
  },
  {
    title: "Performance Optimization",
    description: "Dummy tweaks for max yield.",
    icon: <TrendingUp className="w-6 h-6 text-success" />,
    href: "/aimonitoring/performance-optimization"
  },
  {
    title: "Maintenance Scheduling",
    description: "Dummy tasks for cleaning & repairs.",
    icon: <Calendar className="w-6 h-6 text-eco-green" />,
    href: "/aimonitoring/maintenance-scheduling"
  }
];

export default function AIMonitoring() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="AI Monitoring & Predictive Maintenance"
        subtitle="🤖 24/7 Intelligent Surveillance"
        description="Advanced AI surveillance with predictive analytics to maximize system uptime and prevent costly downtime through proactive maintenance."
        primaryAction={{
          label: "See Live Monitoring",
          href: "/aimonitoring/ai-monitoring-247"
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
            <Badge variant="outline" className="mb-4">AI-Powered Monitoring</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Never Miss a Beat
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI continuously monitors your solar system, predicting issues before they impact performance and scheduling maintenance automatically.
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