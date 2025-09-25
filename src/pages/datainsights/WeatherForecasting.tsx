import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CloudRain, Sun, Thermometer, Wind, Calendar, TrendingUp, AlertTriangle, Download, Mail, BarChart3, Activity, Zap } from "lucide-react";

export default function WeatherForecasting() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Your Energy Has a Pattern. We Help You See It."
        subtitle="🌤️ Weather Forecasting Module"
        description="From sun to storage, Suncube AI reveals how your system behaves — and how to prepare smarter. "
        primaryAction={{
          label: "See Predictive Dashboard",
          href: "/portal"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sun className="w-6 h-6 text-primary" />
                  <span>Weather + Generation Overlay</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EnergyChart />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">7-Day Weather Forecast</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Sun className="w-5 h-5 text-yellow-500" />
                      <div>
                        <div className="font-semibold">Today - Sunny</div>
                        <div className="text-sm text-muted-foreground">Expected yield: 95%</div>
                      </div>
                    </div>
                    <Badge className="bg-success text-white">Optimal</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-eco-green/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CloudRain className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className="font-semibold">Tomorrow - Cloudy</div>
                        <div className="text-sm text-muted-foreground">Expected yield: 65%</div>
                      </div>
                    </div>
                    <Badge variant="secondary">Reduced</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Wind className="w-5 h-5 text-gray-500" />
                      <div>
                        <div className="font-semibold">Wednesday - Windy</div>
                        <div className="text-sm text-muted-foreground">Expected yield: 80%</div>
                      </div>
                    </div>
                    <Badge variant="outline">Good</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Weather Impact Analysis</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Cloud Coverage</span>
                    <span className="font-bold">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>UV Index</span>
                    <span className="font-bold">7.2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Temperature</span>
                    <span className="font-bold">24°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Predicted Output</span>
                    <span className="font-bold text-primary">8.7 kWh</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Thermometer className="w-5 h-5 text-eco-green" />
                  <span>Smart Scheduling</span>
                </h3>
                <div className="space-y-2">
                  <div className="text-sm p-2 bg-success/10 rounded">
                    <strong>06:00 AM:</strong> Battery charging starts
                  </div>
                  <div className="text-sm p-2 bg-primary/10 rounded">
                    <strong>12:00 PM:</strong> Peak production expected
                  </div>
                  <div className="text-sm p-2 bg-eco-green/10 rounded">
                    <strong>03:00 PM:</strong> Cloud cover increases
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Historical Usage Analytics */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center space-x-2">
              <Calendar className="w-8 h-8 text-primary" />
              <span>Historical Usage Analytics</span>
            </h2>
            <p className="text-lg text-muted-foreground">30-day energy production heatmap with peak, off-peak, and anomaly detection</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <span>Production Heatmap</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 30 }, (_, i) => {
                      const intensity = Math.random() * 100;
                      const bgColor = intensity > 80 ? 'bg-success' : intensity > 60 ? 'bg-primary' : intensity > 40 ? 'bg-yellow-500' : 'bg-muted';
                      return (
                        <div key={i} className={`h-8 ${bgColor} rounded cursor-pointer hover:opacity-80 transition-opacity`} title={`Day ${i + 1}: ${intensity.toFixed(0)}%`} />
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Low</span>
                    <span>High</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-6 h-6 text-primary" />
                  <span>Peak vs Off-Peak</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                      <span>Peak Hours</span>
                    </div>
                    <Badge className="bg-success text-white">12:00-15:00</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span>Off-Peak</span>
                    </div>
                    <Badge variant="secondary">06:00-11:00</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-destructive rounded-full"></div>
                      <span>Anomalies</span>
                    </div>
                    <Badge variant="destructive">3 detected</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  <span>Anomaly Tags</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                    <div className="font-semibold text-destructive">Day 12 - 45% drop</div>
                    <div className="text-sm text-muted-foreground">Heavy cloud cover</div>
                  </div>
                  <div className="p-3 bg-warning/10 rounded-lg border-l-4 border-warning">
                    <div className="font-semibold text-warning">Day 18 - 30% drop</div>
                    <div className="text-sm text-muted-foreground">Maintenance window</div>
                  </div>
                  <div className="p-3 bg-info/10 rounded-lg border-l-4 border-info">
                    <div className="font-semibold text-info">Day 25 - 15% drop</div>
                    <div className="text-sm text-muted-foreground">Partial shading</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Weather-Integrated Forecasting */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center space-x-2">
              <CloudRain className="w-8 h-8 text-primary" />
              <span>Weather-Integrated Forecasting</span>
            </h2>
            <p className="text-lg text-muted-foreground">Smart predictions that help you plan consumption based on weather patterns</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span>Tomorrow's Forecast</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center space-x-3 mb-2">
                      <CloudRain className="w-6 h-6 text-blue-500" />
                      <span className="font-semibold text-lg">Cloudy day expected → 18% less output</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Based on weather patterns and historical data</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Recommended Actions:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span>Pre-charge batteries during peak hours today</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        <span>Schedule high-consumption tasks for today</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-info rounded-full"></div>
                        <span>Enable grid backup mode for tomorrow</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <span>Consumption Planning</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-success/10 rounded-lg text-center">
                      <div className="text-2xl font-bold text-success">Today</div>
                      <div className="text-sm text-muted-foreground">Optimal Production</div>
                      <div className="text-lg font-semibold">12.4 kWh</div>
                    </div>
                    <div className="p-3 bg-warning/10 rounded-lg text-center">
                      <div className="text-2xl font-bold text-warning">Tomorrow</div>
                      <div className="text-sm text-muted-foreground">Reduced Production</div>
                      <div className="text-lg font-semibold">10.2 kWh</div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Smart Recommendations:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Run dishwasher and laundry today</li>
                      <li>• Charge electric vehicle during peak hours</li>
                      <li>• Defer pool pump operation to tomorrow</li>
                      <li>• Use stored energy for evening consumption</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Pattern Recognition Reports */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center space-x-2">
              <TrendingUp className="w-8 h-8 text-primary" />
              <span>Pattern Recognition Reports</span>
            </h2>
            <p className="text-lg text-muted-foreground">AI-powered insights that identify repeating patterns and suggest remedies</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  <span>Identified Patterns</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                    <div className="font-semibold text-destructive mb-2">Panel 4 Underperforms After Heavy Rains</div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Pattern detected: 15% performance drop consistently after rainfall events
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="destructive">Critical</Badge>
                      <Badge variant="outline">3 occurrences</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-warning/10 rounded-lg border-l-4 border-warning">
                    <div className="font-semibold text-warning mb-2">Morning Shading Impact</div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Tree growth causing 8% reduction in morning production
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="secondary">Moderate</Badge>
                      <Badge variant="outline">Gradual trend</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-info/10 rounded-lg border-l-4 border-info">
                    <div className="font-semibold text-info mb-2">Temperature Efficiency</div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Optimal performance at 22-26°C, drops above 30°C
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="secondary">Normal</Badge>
                      <Badge variant="outline">Seasonal</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <span>Suggested Remedies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-success/10 rounded-lg">
                    <div className="font-semibold text-success mb-2">Immediate Actions</div>
                    <ul className="text-sm space-y-1">
                      <li>• Inspect Panel 4 for water damage</li>
                      <li>• Check junction box seals</li>
                      <li>• Clean panel surface after rain</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Maintenance Schedule</div>
                    <ul className="text-sm space-y-1">
                      <li>• Trim overhanging branches</li>
                      <li>• Schedule quarterly cleaning</li>
                      <li>• Install temperature monitoring</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-eco-green/10 rounded-lg">
                    <div className="font-semibold text-eco-green mb-2">Long-term Solutions</div>
                    <ul className="text-sm space-y-1">
                      <li>• Consider panel repositioning</li>
                      <li>• Install cooling system</li>
                      <li>• Upgrade to weather-resistant panels</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Exportable Intelligence */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center space-x-2">
              <Download className="w-8 h-8 text-primary" />
              <span>Exportable Intelligence</span>
            </h2>
            <p className="text-lg text-muted-foreground">Download comprehensive reports in multiple formats for analysis and sharing</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="w-6 h-6 text-primary" />
                  <span>CSV Export</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Raw data export for spreadsheet analysis
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Data Points:</span>
                      <span className="font-bold">2,160</span>
                    </div>
                    <div className="flex justify-between">
                      <span>File Size:</span>
                      <span className="font-bold">1.2 MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span className="font-bold">Comma-separated</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download CSV
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="w-6 h-6 text-primary" />
                  <span>Excel Export</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Formatted report with charts and analysis
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Sheets:</span>
                      <span className="font-bold">5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>File Size:</span>
                      <span className="font-bold">3.8 MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span className="font-bold">.xlsx</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Excel
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="w-6 h-6 text-primary" />
                  <span>JSON Export</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Structured data for API integration
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Objects:</span>
                      <span className="font-bold">720</span>
                    </div>
                    <div className="flex justify-between">
                      <span>File Size:</span>
                      <span className="font-bold">2.1 MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span className="font-bold">JSON</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download JSON
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="p-8 max-w-2xl mx-auto">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Share This Report</h3>
                <p className="text-muted-foreground mb-6">
                  Send this comprehensive weather forecasting report directly to your email
                </p>
                <Button className="w-full max-w-md" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Email This Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}