import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AIAlerts } from "@/components/AIAlerts";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Bell, CheckCircle } from "lucide-react";

export default function PredictiveAlerts() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Spot Problems Early"
        subtitle="🔔 Predictive Alerts Dashboard"
        description="Dummy alerts for shading, dirt, hardware faults."
        primaryAction={{
          label: "Open Alerts",
          href: "/portal"
        }}
        backAction={{
          label: "Back to AI Monitoring",
          href: "/ai-monitoring"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <AlertTriangle className="w-6 h-6 text-warning" />
                </div>
                <CardTitle>Active Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-warning">3</div>
                <div className="text-sm text-muted-foreground mt-2">Requiring attention</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <CardTitle>Resolved Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">7</div>
                <div className="text-sm text-muted-foreground mt-2">Issues addressed</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Prevention Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">94%</div>
                <div className="text-sm text-muted-foreground mt-2">Issues prevented</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-6 h-6 text-primary" />
                  <span>Alerts List</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AIAlerts />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Current Active Alerts</h3>
                <div className="space-y-3">
                  <div className="p-4 border-l-4 border-warning bg-warning/10 rounded-r">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Panel Cleaning Required</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Dust accumulation detected on Panels 12-18
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Predicted impact: 8% efficiency loss
                        </div>
                      </div>
                      <Badge className="bg-warning text-white">High</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 border-l-4 border-primary bg-primary/10 rounded-r">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Inverter Performance</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Inverter #2 showing slight efficiency decline
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Predicted impact: 3% efficiency loss
                        </div>
                      </div>
                      <Badge className="bg-primary text-white">Medium</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 border-l-4 border-eco-green bg-eco-green/10 rounded-r">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Shading Analysis</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          New vegetation growth detected near Panel Array A
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Predicted impact: 2% efficiency loss
                        </div>
                      </div>
                      <Badge variant="secondary">Low</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Alert Categories</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Performance Degradation</span>
                    <Badge variant="outline">45% of alerts</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Maintenance Needed</span>
                    <Badge variant="outline">30% of alerts</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Environmental Factors</span>
                    <Badge variant="outline">15% of alerts</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Grid Issues</span>
                    <Badge variant="outline">10% of alerts</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Alert Response Times</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Average Detection Time</span>
                    <span className="font-bold">12 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Response Time</span>
                    <span className="font-bold">2.3 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Resolution Success Rate</span>
                    <span className="font-bold text-success">97.2%</span>
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