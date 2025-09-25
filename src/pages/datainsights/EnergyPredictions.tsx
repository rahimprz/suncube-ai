import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Target, Zap, Clock } from "lucide-react";

export default function EnergyPredictions() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Estimate Tomorrow's Yield"
        subtitle="🔮 Energy Predictions"
        description="See how dummy AI predicts daily output to help you plan."
        primaryAction={{
          label: "See Prediction",
          href: "/portal"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BrainCircuit className="w-6 h-6 text-primary" />
                  <span>Tomorrow's Curve</span>
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
                  <span>AI Predictions</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Tomorrow's Output</div>
                      <div className="text-sm text-muted-foreground">AI confidence: 92%</div>
                    </div>
                    <Badge className="bg-success text-white">24.8 kWh</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-eco-green/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Peak Production Time</div>
                      <div className="text-sm text-muted-foreground">Expected maximum</div>
                    </div>
                    <Badge className="bg-success text-white">12:30 PM</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold">Weather Impact</div>
                      <div className="text-sm text-muted-foreground">Cloud interference</div>
                    </div>
                    <Badge variant="outline">-15%</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">7-Day Forecast</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Today</span>
                    <span className="font-bold">26.2 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tomorrow</span>
                    <span className="font-bold text-primary">24.8 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wednesday</span>
                    <span className="font-bold">18.5 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Week Total</span>
                    <span className="font-bold text-success">165.3 kWh</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-eco-green" />
                  <span>Smart Planning</span>
                </h3>
                <div className="space-y-2">
                  <div className="text-sm p-2 bg-success/10 rounded">
                    <strong>High Output:</strong> Schedule heavy appliances
                  </div>
                  <div className="text-sm p-2 bg-primary/10 rounded">
                    <strong>Low Output:</strong> Reduce non-essential loads
                  </div>
                  <div className="text-sm p-2 bg-eco-green/10 rounded">
                    <strong>Battery Ready:</strong> Pre-charge before cloudy periods
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