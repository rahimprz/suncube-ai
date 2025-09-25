import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Calendar, Clock } from "lucide-react";

export default function PerformanceAnalytics() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Dive Into The Data"
        subtitle="📊 Performance Analytics Dashboard"
        description="Break down dummy generation by hour, day, or site. Spot trends."
        primaryAction={{
          label: "View Analytics",
          href: "/portal"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <span>Daily vs Weekly Trend</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EnergyChart />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Performance Metrics</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div>
                      <div className="font-semibold">System Efficiency</div>
                      <div className="text-sm text-muted-foreground">Current vs rated capacity</div>
                    </div>
                    <Badge className="bg-success text-white">94.2%</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-eco-green/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Performance Ratio</div>
                      <div className="text-sm text-muted-foreground">Real vs theoretical output</div>
                    </div>
                    <Badge className="bg-success text-white">88.7%</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold">Availability</div>
                      <div className="text-sm text-muted-foreground">System uptime percentage</div>
                    </div>
                    <Badge variant="outline">99.1%</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Time-based Analysis</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Peak Hour (12-1 PM)</span>
                    <span className="font-bold">3.2 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily Average</span>
                    <span className="font-bold">28.5 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly Total</span>
                    <span className="font-bold">199.5 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Projection</span>
                    <span className="font-bold text-primary">865 kWh</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-eco-green" />
                  <span>Historical Comparison</span>
                </h3>
                <div className="space-y-2">
                  <div className="text-sm p-2 bg-success/10 rounded">
                    <strong>This Month:</strong> +12% vs last month
                  </div>
                  <div className="text-sm p-2 bg-primary/10 rounded">
                    <strong>This Quarter:</strong> +8% vs last quarter
                  </div>
                  <div className="text-sm p-2 bg-eco-green/10 rounded">
                    <strong>This Year:</strong> +15% vs last year
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}