import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Users } from "lucide-react";

export default function EnergyTrading() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Trade Extra Power"
        subtitle="💹 Energy Trading"
        description="Dummy scenarios show peer-to-grid trading flow."
        primaryAction={{
          label: "Run Trading Demo",
          href: "/portal"
        }}
        backAction={{
          label: "Back to Smart Grid",
          href: "/smart-grid"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Today's Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">$142.50</div>
                <Badge variant="secondary" className="mt-2">+15% vs yesterday</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-eco-green/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-eco-green" />
                </div>
                <CardTitle>Energy Sold</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-eco-green">285 kWh</div>
                <Badge variant="secondary" className="mt-2">Peak pricing</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-grid-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-grid-blue" />
                </div>
                <CardTitle>Active Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-grid-blue">12</div>
                <Badge variant="secondary" className="mt-2">Auto-matched</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span>Dummy Trading Flow</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EnergyChart />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Market Prices (¢/kWh)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Current Spot Price</span>
                    <Badge className="bg-primary text-white">42.5¢</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Peak Hour Rate</span>
                    <Badge className="bg-warning text-white">58.2¢</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Off-Peak Rate</span>
                    <Badge variant="secondary">28.1¢</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Your Avg. Sell Price</span>
                    <Badge className="bg-success text-white">45.8¢</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-success bg-success/10 rounded-r">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-semibold">SELL: 45 kWh</div>
                        <div className="text-sm text-muted-foreground">14:32 PM</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-success">+$26.10</div>
                        <div className="text-sm">58¢/kWh</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 border-l-4 border-primary bg-primary/10 rounded-r">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-semibold">SELL: 38 kWh</div>
                        <div className="text-sm text-muted-foreground">13:15 PM</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">+$21.85</div>
                        <div className="text-sm">57.5¢/kWh</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 border-l-4 border-eco-green bg-eco-green/10 rounded-r">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-semibold">SELL: 52 kWh</div>
                        <div className="text-sm text-muted-foreground">12:45 PM</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-eco-green">+$29.12</div>
                        <div className="text-sm">56¢/kWh</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Trading Strategy</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Auto-Trading</span>
                    <Badge className="bg-success text-white">Enabled</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Min. Sell Price</span>
                    <span className="font-bold">40¢/kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reserve for Home</span>
                    <span className="font-bold">20%</span>
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