import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Badge } from "@/components/ui/badge";
import { Scale, Clock, TrendingDown } from "lucide-react";

export default function LoadBalancing() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Balance Loads, Max Savings."
        subtitle="⚖️ Load Balancing"
        description="Test dummy load shifting between off-peak and peak."
        primaryAction={{
          label: "Run Load Test",
          href: "/portal"
        }}
        backAction={{
          label: "Back to Commercial Solar",
          href: "/solutions"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Scale className="w-6 h-6 text-primary" />
                  <span>Load vs Generation Curves</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EnergyChart />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Load Shifting Schedule</span>
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-eco-green/10 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">Off-Peak (22:00-06:00)</div>
                        <div className="text-sm text-muted-foreground">High-energy operations</div>
                      </div>
                      <Badge className="bg-success text-white">Active</Badge>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-warning/10 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">Peak Hours (09:00-18:00)</div>
                        <div className="text-sm text-muted-foreground">Essential loads only</div>
                      </div>
                      <Badge variant="secondary">Scheduled</Badge>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">Solar Peak (10:00-14:00)</div>
                        <div className="text-sm text-muted-foreground">Self-consumption priority</div>
                      </div>
                      <Badge className="bg-primary text-white">Optimized</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <TrendingDown className="w-5 h-5 text-success" />
                  <span>Cost Savings</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Peak Hour Reduction</span>
                    <span className="font-bold text-success">-42%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grid Dependency</span>
                    <span className="font-bold text-success">-35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Savings</span>
                    <span className="font-bold text-primary">$2,340</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Annual Savings</span>
                    <span className="font-bold text-primary">$28,080</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Smart Load Categories</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">Manufacturing Equipment</div>
                      <div className="text-sm text-muted-foreground">Shiftable to off-peak</div>
                    </div>
                    <Badge variant="outline">65 kW</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">HVAC Systems</div>
                      <div className="text-sm text-muted-foreground">Pre-cooling strategy</div>
                    </div>
                    <Badge variant="outline">28 kW</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">Water Heating</div>
                      <div className="text-sm text-muted-foreground">Solar-optimized timing</div>
                    </div>
                    <Badge variant="outline">12 kW</Badge>
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