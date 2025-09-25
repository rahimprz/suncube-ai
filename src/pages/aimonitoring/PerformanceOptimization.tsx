import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Progress } from "@/components/ui/progress";
import { Gauge, TrendingUp, Target } from "lucide-react";

export default function PerformanceOptimization() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Boost Performance"
        subtitle="⚡ Performance Optimization"
        description="Dummy tweaks for max yield."
        primaryAction={{
          label: "Optimize Now",
          href: "/portal"
        }}
        backAction={{
          label: "Back to AI Monitoring",
          href: "/ai-monitoring"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gauge className="w-6 h-6 text-primary" />
                  <span>Efficiency Meter</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EnergyChart />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Current Performance</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Overall Efficiency</span>
                      <span className="font-bold">92.4%</span>
                    </div>
                    <Progress value={92.4} className="h-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Panel Performance</span>
                      <span className="font-bold">94.1%</span>
                    </div>
                    <Progress value={94.1} className="h-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Inverter Efficiency</span>
                      <span className="font-bold">89.7%</span>
                    </div>
                    <Progress value={89.7} className="h-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>System Integration</span>
                      <span className="font-bold">93.2%</span>
                    </div>
                    <Progress value={93.2} className="h-3" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span>Optimization Opportunities</span>
                </h3>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-primary bg-primary/10 rounded-r">
                    <div className="font-semibold">Panel Angle Adjustment</div>
                    <div className="text-sm text-muted-foreground">Optimize tilt for current season</div>
                    <div className="text-xs text-success mt-1">Potential gain: +2.3%</div>
                  </div>
                  
                  <div className="p-3 border-l-4 border-eco-green bg-eco-green/10 rounded-r">
                    <div className="font-semibold">Inverter Firmware Update</div>
                    <div className="text-sm text-muted-foreground">Latest efficiency improvements available</div>
                    <div className="text-xs text-success mt-1">Potential gain: +1.8%</div>
                  </div>
                  
                  <div className="p-3 border-l-4 border-warning bg-warning/10 rounded-r">
                    <div className="font-semibold">Cable Connection Review</div>
                    <div className="text-sm text-muted-foreground">Check for resistance issues</div>
                    <div className="text-xs text-success mt-1">Potential gain: +0.9%</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Performance Trends</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Last 7 Days Avg.</span>
                    <span className="font-bold">92.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last 30 Days Avg.</span>
                    <span className="font-bold">91.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Best Performance</span>
                    <span className="font-bold text-success">96.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target Efficiency</span>
                    <span className="font-bold text-primary">95.0%</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Optimization Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Immediate Actions</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Clean panels on array section C</li>
                    <li>• Update inverter #2 firmware</li>
                    <li>• Check connection at junction box 3</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-eco-green/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Weekly Tasks</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Adjust panel tilt angles</li>
                    <li>• Review shading patterns</li>
                    <li>• Calibrate monitoring sensors</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-warning/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Monthly Review</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Performance trend analysis</li>
                    <li>• Equipment health assessment</li>
                    <li>• Optimization strategy update</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}