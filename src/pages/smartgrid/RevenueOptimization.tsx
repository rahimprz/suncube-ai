import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Clock } from "lucide-react";

export default function RevenueOptimization() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Maximize Every kWh"
        subtitle="💎 Revenue Optimization Tools"
        description="Dummy tariff & export scheduling scenarios."
        primaryAction={{
          label: "Open Revenue Tool",
          href: "/portal"
        }}
        backAction={{
          label: "Back to Smart Grid",
          href: "/smart-grid"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <span>Tariff Table</span>
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
                  <span>Dynamic Pricing Schedule</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Peak Hours (15:00-19:00)</div>
                      <div className="text-sm text-muted-foreground">Highest export rates</div>
                    </div>
                    <Badge className="bg-success text-white">65¢/kWh</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Mid-Peak (10:00-15:00)</div>
                      <div className="text-sm text-muted-foreground">Standard rates</div>
                    </div>
                    <Badge className="bg-primary text-white">42¢/kWh</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold">Off-Peak (19:00-10:00)</div>
                      <div className="text-sm text-muted-foreground">Lower rates</div>
                    </div>
                    <Badge variant="secondary">28¢/kWh</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span>Revenue Optimization</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Standard Export Revenue</span>
                    <span className="font-bold">$86.40/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Optimized Export Revenue</span>
                    <span className="font-bold text-success">$124.20/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue Increase</span>
                    <span className="font-bold text-primary">+43.8%</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Monthly Bonus</span>
                    <span className="font-bold text-primary">$1,134</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Smart Export Strategy</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <div className="font-semibold">Battery Storage Integration</div>
                    <div className="text-sm text-muted-foreground">Store during low prices, export at peak</div>
                  </div>
                  
                  <div className="p-3 bg-eco-green/10 rounded-lg">
                    <div className="font-semibold">Weather-Based Scheduling</div>
                    <div className="text-sm text-muted-foreground">Predict output and optimize timing</div>
                  </div>
                  
                  <div className="p-3 bg-grid-blue/10 rounded-lg">
                    <div className="font-semibold">Grid Event Participation</div>
                    <div className="text-sm text-muted-foreground">Earn premium rates during demand events</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Revenue Streams</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Energy Export</span>
                    <span className="font-bold">$2,840/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Demand Response</span>
                    <span className="font-bold">$420/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grid Services</span>
                    <span className="font-bold">$280/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbon Credits</span>
                    <span className="font-bold">$160/month</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Total Revenue</span>
                    <span className="font-bold text-primary">$3,700/month</span>
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