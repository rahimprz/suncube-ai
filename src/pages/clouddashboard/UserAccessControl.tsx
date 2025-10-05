import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Shield, Key, Eye } from "lucide-react";

export default function UserAccessControl() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Everyone Gets The Right Access"
        subtitle="👥 User Access & Role Control"
        description="Simulate how Admin, User, and Grid Operator roles see data differently."
        primaryAction={{
          label: "Test Roles",
          href: "/portal"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <span>Role Permission Tree</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-red-800">Admin</h4>
                      <Badge className="bg-red-600 text-white">Full Access</Badge>
                    </div>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• All sites management</li>
                      <li>• User role assignment</li>
                      <li>• System configuration</li>
                      <li>• Financial reports</li>
                      <li>• Data export</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-blue-800">User</h4>
                      <Badge className="bg-blue-600 text-white">Limited</Badge>
                    </div>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Own site dashboard</li>
                      <li>• Performance monitoring</li>
                      <li>• Basic reports</li>
                      <li>• Alert notifications</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-green-800">Grid Operator</h4>
                      <Badge className="bg-green-600 text-white">Grid Only</Badge>
                    </div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Grid flow monitoring</li>
                      <li>• Demand response</li>
                      <li>• Load balancing</li>
                      <li>• Network analytics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Active Users</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">sarah@company.com</div>
                    </div>
                    <Badge className="bg-red-600 text-white">Admin</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-eco-green/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Mike Chen</div>
                      <div className="text-sm text-muted-foreground">mike@residential.com</div>
                    </div>
                    <Badge className="bg-blue-600 text-white">User</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold">Grid Control</div>
                      <div className="text-sm text-muted-foreground">operator@grid.com</div>
                    </div>
                    <Badge className="bg-green-600 text-white">Grid Op</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Permission Management</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Key className="w-4 h-4 mr-2" />
                    Manage User Roles
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="w-4 h-4 mr-2" />
                    View Access Logs
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="w-4 h-4 mr-2" />
                    Security Settings
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Role Testing</h3>
                <div className="space-y-2">
                  <div className="text-sm p-2 bg-success/10 rounded">
                    <strong>Demo Mode:</strong> Switch between role views
                  </div>
                  <div className="text-sm p-2 bg-primary/10 rounded">
                    <strong>Test Data:</strong> All roles use dummy data
                  </div>
                  <div className="text-sm p-2 bg-eco-green/10 rounded">
                    <strong>Safe Environment:</strong> No real system access
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