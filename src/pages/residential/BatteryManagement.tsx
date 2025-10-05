import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Progress } from "@/components/ui/progress";
import { Battery, Zap } from "lucide-react";

export default function BatteryManagement() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Store Energy Smarter."
        subtitle="🔋 Smart Battery Management"
        description="Simulate how smart batteries shift usage for better savings."
        primaryAction={{
          label: "See Battery Planner",
          href: "/contact"
        }}
        backAction={{
          label: "Back to Residential Solar",
          href: "/solutions"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Battery className="w-6 h-6 text-primary" />
                  <span>24-Hour Battery Cycle</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EnergyChart />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Current Battery Status</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Charge Level</span>
                      <span className="font-bold">87%</span>
                    </div>
                    <Progress value={87} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Power Output</span>
                      <span className="font-bold">4.2 kW</span>
                    </div>
                    <Progress value={65} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Estimated Runtime</span>
                      <span className="font-bold">12.4 hours</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Smart Scheduling</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="font-semibold">Peak Solar (10-14h)</div>
                    <div className="text-sm text-muted-foreground">Charge battery from excess generation</div>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="font-semibold">Evening Peak (17-21h)</div>
                    <div className="text-sm text-muted-foreground">Power home from battery storage</div>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="font-semibold">Overnight (22-06h)</div>
                    <div className="text-sm text-muted-foreground">Maintain backup power reserve</div>
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