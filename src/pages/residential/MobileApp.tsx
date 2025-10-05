import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download, Bell, BarChart3 } from "lucide-react";

export default function MobileApp() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Control In Your Pocket."
        subtitle="📱 Mobile App Control"
        description="Manage alerts, usage, and dummy reports via mobile."
        primaryAction={{
          label: "Download App",
          href: "/contact"
        }}
        backAction={{
          label: "Back to Residential Solar",
          href: "/solutions"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Smartphone className="w-6 h-6 text-primary" />
                    <span>App Features</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Real-time Stats</div>
                      <div className="text-sm text-muted-foreground">Live production and consumption data</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-eco-green/10 rounded-lg flex items-center justify-center">
                      <Bell className="w-5 h-5 text-eco-green" />
                    </div>
                    <div>
                      <div className="font-semibold">Smart Alerts</div>
                      <div className="text-sm text-muted-foreground">Instant notifications for maintenance</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-grid-blue/10 rounded-lg flex items-center justify-center">
                      <Download className="w-5 h-5 text-grid-blue" />
                    </div>
                    <div>
                      <div className="font-semibold">Export Reports</div>
                      <div className="text-sm text-muted-foreground">Download performance and savings reports</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Download Options</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download for iOS
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download for Android
                  </Button>
                </div>
              </Card>
            </div>

            <div className="flex justify-center">
              <Card className="p-8 max-w-md">
                <div className="text-center space-y-6">
                  <div className="w-64 h-96 bg-gradient-eco rounded-3xl mx-auto relative overflow-hidden">
                    <div className="absolute inset-4 bg-background rounded-2xl p-4">
                      <div className="text-left space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold">Suncube AI</h4>
                          <Badge className="text-xs">Live</Badge>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <div className="text-sm font-semibold">Current Generation</div>
                            <div className="text-xl font-bold text-primary">5.8 kW</div>
                          </div>
                          
                          <div className="p-3 bg-eco-green/10 rounded-lg">
                            <div className="text-sm font-semibold">Today's Total</div>
                            <div className="text-xl font-bold text-eco-green">42.6 kWh</div>
                          </div>
                          
                          <div className="p-3 bg-grid-blue/10 rounded-lg">
                            <div className="text-sm font-semibold">Savings Today</div>
                            <div className="text-xl font-bold text-grid-blue">$8.40</div>
                          </div>
                        </div>
                        
                        <div className="text-center pt-4">
                          <Button size="sm" className="w-full">
                            View Dashboard
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Mobile App Preview</h3>
                    <p className="text-sm text-muted-foreground">Access your solar system data anytime, anywhere</p>
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