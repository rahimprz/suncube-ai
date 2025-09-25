import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AIAlerts } from "@/components/AIAlerts";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Calendar } from "lucide-react";

export default function PredictiveMaintenance() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Prevent Breakdowns Early."
        subtitle="⚠️ Predictive Maintenance"
        description="Simulate dummy AI alerts for maintenance and cleaning."
        primaryAction={{
          label: "Open Maintenance Planner",
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
                  <AlertTriangle className="w-6 h-6 text-warning" />
                  <span>Fault Prediction Map</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AIAlerts />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Maintenance Schedule</span>
                </h3>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-warning bg-warning/10 rounded-r">
                    <div className="font-semibold">Panel Cleaning - Site A</div>
                    <div className="text-sm text-muted-foreground">Scheduled: Next Tuesday</div>
                    <Badge variant="secondary" className="mt-1">High Priority</Badge>
                  </div>
                  
                  <div className="p-3 border-l-4 border-primary bg-primary/10 rounded-r">
                    <div className="font-semibold">Inverter Inspection - Site B</div>
                    <div className="text-sm text-muted-foreground">Scheduled: Next Friday</div>
                    <Badge variant="secondary" className="mt-1">Medium Priority</Badge>
                  </div>
                  
                  <div className="p-3 border-l-4 border-success bg-success/10 rounded-r">
                    <div className="font-semibold">Routine Check - Site C</div>
                    <div className="text-sm text-muted-foreground">Scheduled: Next Month</div>
                    <Badge variant="secondary" className="mt-1">Low Priority</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Prediction Accuracy</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Fault Detection Rate</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="font-bold">97.2%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>False Positives</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="font-bold">2.1%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Warning Time</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="font-bold">14 days</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Common Issues Detected</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Dust Accumulation</span>
                    <Badge variant="outline">45% of alerts</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Inverter Degradation</span>
                    <Badge variant="outline">25% of alerts</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Shading Issues</span>
                    <Badge variant="outline">20% of alerts</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Connection Faults</span>
                    <Badge variant="outline">10% of alerts</Badge>
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