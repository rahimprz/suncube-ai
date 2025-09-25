import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, Brain, Network, TrendingUp, Cpu, Wifi, Database } from "lucide-react";

export default function GridServices() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero Banner */}
      <HeroSection
        title="The Grid Is Getting Smarter — Are You In?"
        subtitle="⚡ Grid Integration & Energy Trading"
        description="Turn homes, offices, and industries into one seamless, intelligent energy ecosystem. "
        primaryAction={{
          label: "Explore Smart Grid Demo",
          href: "/solutions/smartgrid/grid-services"
        }}
      />

      {/* Section 2: What Is a Virtual Power Plant? */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Is a Virtual Power Plant?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Many homes → Central logic → Energy balancing
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-primary" />
                    <span>Distributed Energy Resources</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span>Solar panels across 1,247 homes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-eco-green rounded-full"></div>
                      <span>Battery storage systems</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-grid-blue rounded-full"></div>
                      <span>Smart thermostats & appliances</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span>EV charging stations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-eco-green/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Cpu className="w-6 h-6 text-eco-green" />
                    <span>Central AI Control Center</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Real-time monitoring</span>
                      <Badge className="bg-success text-white">Active</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Predictive analytics</span>
                      <Badge className="bg-success text-white">Active</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Load balancing</span>
                      <Badge className="bg-success text-white">Active</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Grid stability</span>
                      <Badge className="bg-success text-white">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <EnergyChart />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">89.3 MW</div>
                    <div className="text-sm text-muted-foreground">Aggregate Capacity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Peer-to-Peer Energy Trading */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Peer-to-Peer Energy Trading</h2>
            <p className="text-lg text-muted-foreground">Sell excess energy to neighbor nodes with tokenized transactions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <span>Energy Seller</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">+2.4 kWh</div>
                    <div className="text-sm text-muted-foreground">Excess Solar</div>
                  </div>
                  <div className="flex justify-between">
                    <span>Price per kWh</span>
                    <span className="font-bold">₹8.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Value</span>
                    <span className="font-bold text-primary">₹20.40</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-eco-green/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="w-6 h-6 text-eco-green" />
                  <span>Blockchain Transaction</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-xs font-mono bg-muted p-2 rounded">
                    <div>Tx Hash: 0x7a8b9c...</div>
                    <div>From: 0x1234...abcd</div>
                    <div>To: 0x5678...efgh</div>
                    <div>Amount: 2.4 kWh</div>
                    <div>Token: 24 ENERGY</div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Gas Fee</span>
                    <span>₹0.12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Status</span>
                    <Badge className="bg-success text-white">Confirmed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-grid-blue" />
                  <span>Energy Buyer</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-grid-blue/10 rounded-lg">
                    <div className="text-2xl font-bold text-grid-blue">-2.4 kWh</div>
                    <div className="text-sm text-muted-foreground">Demand</div>
                  </div>
                  <div className="flex justify-between">
                    <span>Price per kWh</span>
                    <span className="font-bold">₹8.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Cost</span>
                    <span className="font-bold text-grid-blue">₹20.40</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Load Prediction Engine */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Load Prediction Engine</h2>
            <p className="text-lg text-muted-foreground">AI-powered forecasting for grid peak hours vs low consumption windows</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-6 h-6 text-primary" />
                  <span>AI Forecast Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Peak Hours (6-9 PM)</span>
                      <Badge className="bg-red-500 text-white">High Demand</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <div className="text-sm text-muted-foreground">Predicted load: 2.1 MW</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Off-Peak (2-5 AM)</span>
                      <Badge className="bg-green-500 text-white">Low Demand</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                    <div className="text-sm text-muted-foreground">Predicted load: 0.6 MW</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Solar Peak (12-3 PM)</span>
                      <Badge className="bg-yellow-500 text-white">Surplus</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '120%'}}></div>
                    </div>
                    <div className="text-sm text-muted-foreground">Excess generation: +0.8 MW</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-eco-green" />
                  <span>Dynamic Load Allocation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Residential Load</span>
                      <span className="text-sm">45%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>

                  <div className="p-3 bg-eco-green/10 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Commercial Load</span>
                      <span className="text-sm">35%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-eco-green h-2 rounded-full" style={{width: '35%'}}></div>
                    </div>
                  </div>

                  <div className="p-3 bg-grid-blue/10 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Industrial Load</span>
                      <span className="text-sm">20%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-grid-blue h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">99.2%</div>
                      <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Interoperability with National Grids */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interoperability with National Grids</h2>
            <p className="text-lg text-muted-foreground">API-based plug-in to DISCOM, solar SaaS, IoT devices</p>
            <div className="mt-4 text-xl font-semibold text-primary">
              "Future of Grid = Plug-and-Play AI Modules"
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-lg mb-2">DISCOM APIs</CardTitle>
              <p className="text-sm text-muted-foreground">
                Seamless integration with distribution companies
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-eco-green" />
              </div>
              <CardTitle className="text-lg mb-2">Solar SaaS</CardTitle>
              <p className="text-sm text-muted-foreground">
                Cloud-based solar management platforms
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-grid-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-grid-blue" />
              </div>
              <CardTitle className="text-lg mb-2">IoT Devices</CardTitle>
              <p className="text-sm text-muted-foreground">
                Smart meters, sensors, and connected appliances
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-orange-500" />
              </div>
              <CardTitle className="text-lg mb-2">AI Modules</CardTitle>
              <p className="text-sm text-muted-foreground">
                Plug-and-play artificial intelligence components
              </p>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Grid Integration Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-3xl font-bold text-success">Connected</div>
                    <div className="text-sm text-muted-foreground">DISCOM APIs</div>
                  </div>
                  <div className="text-center p-4 bg-warning/10 rounded-lg">
                    <div className="text-3xl font-bold text-warning">Testing</div>
                    <div className="text-sm text-muted-foreground">Solar SaaS</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary">Ready</div>
                    <div className="text-sm text-muted-foreground">IoT Devices</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}