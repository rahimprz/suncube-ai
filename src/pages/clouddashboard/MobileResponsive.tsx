import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Tablet, Monitor, Wifi } from "lucide-react";

export default function MobileResponsive() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Your Dashboard Anywhere"
        subtitle="📱 Mobile Responsive Design Preview"
        description="See how the dummy dashboard works smoothly on phone or tablet."
        primaryAction={{
          label: "Try Mobile View",
          href: "/portal"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="w-6 h-6 text-primary" />
                  <span>Phone Screen Mockup</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <div className="mx-auto max-w-xs bg-white rounded-lg shadow-lg border">
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold">Suncube AI</div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="bg-primary/10 p-3 rounded">
                        <div className="text-xs text-muted-foreground">Current Output</div>
                        <div className="text-lg font-bold">2.4 kW</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-eco-green/10 p-2 rounded text-center">
                          <div className="text-xs">Today</div>
                          <div className="font-semibold">18.7 kWh</div>
                        </div>
                        <div className="bg-grid-blue/10 p-2 rounded text-center">
                          <div className="text-xs">Savings</div>
                          <div className="font-semibold">$4.20</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Device Compatibility</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold">Mobile Phones</div>
                        <div className="text-sm text-muted-foreground">iOS & Android</div>
                      </div>
                    </div>
                    <Badge className="bg-success text-white">Optimized</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-eco-green/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Tablet className="w-5 h-5 text-eco-green" />
                      <div>
                        <div className="font-semibold">Tablets</div>
                        <div className="text-sm text-muted-foreground">iPad & Android tablets</div>
                      </div>
                    </div>
                    <Badge className="bg-success text-white">Optimized</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Monitor className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="font-semibold">Desktop</div>
                        <div className="text-sm text-muted-foreground">Full feature set</div>
                      </div>
                    </div>
                    <Badge variant="outline">Full</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Mobile Features</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Touch Navigation</span>
                    <span className="font-bold text-success">✓ Enabled</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Offline Mode</span>
                    <span className="font-bold text-success">✓ Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Push Notifications</span>
                    <span className="font-bold text-success">✓ Supported</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dark Mode</span>
                    <span className="font-bold text-primary">✓ Auto-detect</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Wifi className="w-5 h-5 text-eco-green" />
                  <span>Performance</span>
                </h3>
                <div className="space-y-2">
                  <div className="text-sm p-2 bg-success/10 rounded">
                    <strong>Load Time:</strong> &lt;2 seconds on 4G
                  </div>
                  <div className="text-sm p-2 bg-primary/10 rounded">
                    <strong>Data Usage:</strong> Optimized for mobile
                  </div>
                  <div className="text-sm p-2 bg-eco-green/10 rounded">
                    <strong>Battery:</strong> Efficient background sync
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