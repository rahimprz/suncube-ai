import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Badge } from "@/components/ui/badge";
import { Activity, Sun, Home, Grid3x3 } from "lucide-react";

export default function RealTimeMonitoring() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Watch It Live."
        subtitle="📊 Real-Time Monitoring"
        description="View dummy real-time solar output & usage."
        primaryAction={{
          label: "View Live Dashboard",
          href: "/portal"
        }}
        backAction={{
          label: "Back to Residential Solar",
          href: "/solutions"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Current Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">5.8 kW</div>
                <Badge variant="secondary" className="mt-2">+12% vs yesterday</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-eco-green/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Home className="w-6 h-6 text-eco-green" />
                </div>
                <CardTitle>Home Consumption</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-eco-green">2.3 kW</div>
                <Badge variant="secondary" className="mt-2">Normal usage</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-grid-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Grid3x3 className="w-6 h-6 text-grid-blue" />
                </div>
                <CardTitle>Grid Export</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-grid-blue">3.5 kW</div>
                <Badge variant="secondary" className="mt-2">Earning credits</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-6 h-6 text-primary" />
                  <span>Live kWh Production</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EnergyChart />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Today's Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Energy Generated</span>
                    <span className="font-bold">42.6 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy Consumed</span>
                    <span className="font-bold">18.2 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy Exported</span>
                    <span className="font-bold">24.4 kWh</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Net Savings</span>
                    <span className="font-bold text-primary">$8.40</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">System Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>System Health</span>
                    <Badge className="bg-success text-white">Excellent</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Last Updated</span>
                    <span className="text-sm text-muted-foreground">2 seconds ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Data Connection</span>
                    <Badge className="bg-success text-white">Online</Badge>
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