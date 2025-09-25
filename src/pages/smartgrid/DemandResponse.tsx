import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Badge } from "@/components/ui/badge";
import { Activity, AlertCircle, CheckCircle } from "lucide-react";

export default function DemandResponse() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Respond To Demand Shifts"
        subtitle="📈 Demand Response"
        description="Dummy spikes simulation to see system adaptability."
        primaryAction={{
          label: "Try Demand Response",
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
                  <Activity className="w-6 h-6 text-primary" />
                  <span>Demand Curve vs Output</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EnergyChart />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-warning" />
                  <span>Active Demand Events</span>
                </h3>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-warning bg-warning/10 rounded-r">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">High Demand Alert</div>
                        <div className="text-sm text-muted-foreground">Grid stress detected</div>
                      </div>
                      <Badge className="bg-warning text-white">Active</Badge>
                    </div>
                    <div className="mt-2 text-sm">
                      <strong>Response:</strong> Reduce load by 15% (67 kW)
                    </div>
                  </div>
                  
                  <div className="p-3 border-l-4 border-primary bg-primary/10 rounded-r">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">Peak Shaving Event</div>
                        <div className="text-sm text-muted-foreground">Scheduled reduction</div>
                      </div>
                      <Badge className="bg-primary text-white">Scheduled</Badge>
                    </div>
                    <div className="mt-2 text-sm">
                      <strong>Time:</strong> 17:00 - 19:00 PM
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Response Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Events Participated</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="font-bold">47 of 52</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Response Accuracy</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="font-bold">94.3%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Avg. Response Time</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="font-bold">3.2 minutes</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Incentive Earned</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="font-bold">$1,840</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Response Strategies</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="font-semibold">Load Curtailment</div>
                    <div className="text-sm text-muted-foreground">Reduce non-essential equipment usage</div>
                    <Badge variant="outline" className="mt-1">Up to 30% reduction</Badge>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="font-semibold">Battery Discharge</div>
                    <div className="text-sm text-muted-foreground">Release stored energy to grid</div>
                    <Badge variant="outline" className="mt-1">50 kW available</Badge>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="font-semibold">Generator Backup</div>
                    <div className="text-sm text-muted-foreground">Switch to on-site generation</div>
                    <Badge variant="outline" className="mt-1">Emergency only</Badge>
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