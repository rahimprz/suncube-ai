import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Webhook, Database, Link } from "lucide-react";

export default function APIIntegration() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Connect Seamlessly"
        subtitle="🔗 API Integration (dummy endpoints)"
        description="Preview dummy API connections for linking hardware, billing, or external dashboards."
        primaryAction={{
          label: "View API Guide",
          href: "/portal"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="w-6 h-6 text-primary" />
                  <span>API Call Flow</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg border">
                    <code className="text-sm">
                      GET /api/v1/sites/energy<br/>
                      Authorization: Bearer [token]<br/>
                      Response: 200 OK
                    </code>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-2xl">↓</div>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="text-sm font-mono">
                      {`{
  "site_id": "demo_123",
  "current_output": 2.4,
  "daily_total": 18.7,
  "status": "active"
}`}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Available Endpoints</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div>
                      <div className="font-semibold">/api/v1/energy</div>
                      <div className="text-sm text-muted-foreground">Real-time production data</div>
                    </div>
                    <Badge className="bg-green-600 text-white">GET</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-eco-green/10 rounded-lg">
                    <div>
                      <div className="font-semibold">/api/v1/alerts</div>
                      <div className="text-sm text-muted-foreground">System notifications</div>
                    </div>
                    <Badge className="bg-blue-600 text-white">GET/POST</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold">/api/v1/reports</div>
                      <div className="text-sm text-muted-foreground">Export data</div>
                    </div>
                    <Badge className="bg-purple-600 text-white">GET</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Integration Partners</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Database className="w-4 h-4 mr-2" />
                    Connect Database
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Webhook className="w-4 h-4 mr-2" />
                    Setup Webhooks
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Link className="w-4 h-4 mr-2" />
                    Third-party Apps
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">API Status</h3>
                <div className="space-y-2">
                  <div className="text-sm p-2 bg-success/10 rounded">
                    <strong>Uptime:</strong> 99.9% (Demo environment)
                  </div>
                  <div className="text-sm p-2 bg-primary/10 rounded">
                    <strong>Response Time:</strong> ~45ms average
                  </div>
                  <div className="text-sm p-2 bg-eco-green/10 rounded">
                    <strong>Rate Limit:</strong> 1000 calls/hour
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