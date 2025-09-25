import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, TrendingUp } from "lucide-react";

export default function EnterpriseMonitoring() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Monitor Every Site, Anywhere."
        subtitle="🏢 Enterprise Monitoring"
        description="See dummy multi-site dashboards for your industrial solar assets."
        primaryAction={{
          label: "See Enterprise View",
          href: "/portal"
        }}
        backAction={{
          label: "Back to Commercial Solar",
          href: "/solutions"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm">Site A - Headquarters</CardTitle>
                  <Badge className="bg-success text-white">Online</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Current Output</span>
                    <span className="font-bold">142 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Today's Total</span>
                    <span className="font-bold">1,240 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Efficiency</span>
                    <span className="font-bold text-primary">94.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm">Site B - Factory East</CardTitle>
                  <Badge className="bg-success text-white">Online</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Current Output</span>
                    <span className="font-bold">89 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Today's Total</span>
                    <span className="font-bold">890 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Efficiency</span>
                    <span className="font-bold text-warning">87.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm">Site C - Warehouse</CardTitle>
                  <Badge variant="destructive">Maintenance</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Current Output</span>
                    <span className="font-bold">0 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Today's Total</span>
                    <span className="font-bold">320 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Status</span>
                    <span className="font-bold text-destructive">Offline</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span>Site A vs Site B Output</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EnergyChart />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span>Fleet Overview</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Sites</span>
                    <span className="font-bold">3 locations</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Combined Capacity</span>
                    <span className="font-bold">450 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Sites</span>
                    <span className="font-bold text-success">2 of 3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Output Today</span>
                    <span className="font-bold text-primary">2,450 kWh</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Site Locations</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                      <div className="font-semibold">Headquarters</div>
                      <div className="text-sm text-muted-foreground">San Francisco, CA</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-eco-green" />
                    <div>
                      <div className="font-semibold">Factory East</div>
                      <div className="text-sm text-muted-foreground">Austin, TX</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="font-semibold">Warehouse</div>
                      <div className="text-sm text-muted-foreground">Phoenix, AZ (Offline)</div>
                    </div>
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