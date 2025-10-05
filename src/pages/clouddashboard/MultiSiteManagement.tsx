import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Building, 
  Home, 
  Factory, 
  Monitor, 
  AlertTriangle, 
  FileText, 
  Shield, 
  User, 
  Settings, 
  Smartphone, 
  BarChart3, 
  Zap, 
  Leaf,
  GripVertical,
  Plus
} from "lucide-react";

export default function MultiSiteManagement() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="All Your Solar Data. One Intelligent Cloud."
        subtitle="🌐 Multi-Site Management View"
        description="Access your systems, metrics, alerts, and reports — anytime, anywhere. "
        primaryAction={{
          label: "Launch Demo Dashboard",
          href: "/portal"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Site Map</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/10 rounded">
                      <Home className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <div className="font-semibold">Residential</div>
                      <div className="text-sm">247 sites</div>
                    </div>
                    <div className="text-center p-4 bg-eco-green/10 rounded">
                      <Building className="w-8 h-8 mx-auto mb-2 text-eco-green" />
                      <div className="font-semibold">Commercial</div>
                      <div className="text-sm">89 sites</div>
                    </div>
                    <div className="text-center p-4 bg-grid-blue/10 rounded">
                      <Factory className="w-8 h-8 mx-auto mb-2 text-grid-blue" />
                      <div className="font-semibold">Industrial</div>
                      <div className="text-sm">23 sites</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded">
                      <MapPin className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-semibold">Total Sites</div>
                      <div className="text-sm font-bold">359</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Site Performance</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Downtown Office</div>
                      <div className="text-sm text-muted-foreground">125.5 kW capacity</div>
                    </div>
                    <Badge className="bg-success text-white">98.2%</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-eco-green/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Factory Complex</div>
                      <div className="text-sm text-muted-foreground">890.3 kW capacity</div>
                    </div>
                    <Badge className="bg-success text-white">94.7%</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold">Warehouse Hub</div>
                      <div className="text-sm text-muted-foreground">445.2 kW capacity</div>
                    </div>
                    <Badge variant="outline">91.3%</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Fleet Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Capacity</span>
                    <span className="font-bold">2.47 MW</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Output</span>
                    <span className="font-bold">1.89 MW</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fleet Efficiency</span>
                    <span className="font-bold text-primary">95.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Savings</span>
                    <span className="font-bold text-success">$47,320</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Alerts</h3>
                <div className="space-y-2">
                  <div className="text-sm p-2 bg-yellow-500/10 rounded">
                    <strong>Site #23:</strong> Minor shading detected
                  </div>
                  <div className="text-sm p-2 bg-blue-500/10 rounded">
                    <strong>Site #67:</strong> Maintenance scheduled
                  </div>
                  <div className="text-sm p-2 bg-green-500/10 rounded">
                    <strong>Site #102:</strong> Performance above target
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Unified View */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">One Dashboard, All Sites</h2>
            <p className="text-lg text-muted-foreground">Unified view across your entire solar fleet</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Panel */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Monitor className="w-5 h-5 text-primary" />
                  <span>Navigation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="system" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="system" className="flex items-center space-x-2">
                      <Monitor className="w-4 h-4" />
                      <span className="hidden sm:inline">System</span>
                    </TabsTrigger>
                    <TabsTrigger value="alerts" className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="hidden sm:inline">Alerts</span>
                    </TabsTrigger>
                    <TabsTrigger value="reports" className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span className="hidden sm:inline">Reports</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="system" className="mt-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-primary/10 rounded-lg cursor-pointer hover:bg-primary/20">
                        <div className="font-semibold">System Overview</div>
                        <div className="text-sm text-muted-foreground">359 sites active</div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/80">
                        <div className="font-semibold">Performance</div>
                        <div className="text-sm text-muted-foreground">Real-time metrics</div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/80">
                        <div className="font-semibold">Maintenance</div>
                        <div className="text-sm text-muted-foreground">12 pending tasks</div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="alerts" className="mt-4">
                    <div className="space-y-2">
                      <div className="p-2 bg-yellow-500/10 rounded text-sm">
                        <strong>3</strong> Minor alerts
                      </div>
                      <div className="p-2 bg-orange-500/10 rounded text-sm">
                        <strong>1</strong> Maintenance due
                      </div>
                      <div className="p-2 bg-green-500/10 rounded text-sm">
                        <strong>8</strong> Performance alerts
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reports" className="mt-4">
                    <div className="space-y-2">
                      <div className="p-2 bg-blue-500/10 rounded text-sm cursor-pointer">
                        Monthly Summary
                      </div>
                      <div className="p-2 bg-blue-500/10 rounded text-sm cursor-pointer">
                        Performance Report
                      </div>
                      <div className="p-2 bg-blue-500/10 rounded text-sm cursor-pointer">
                        Financial Analysis
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Right Panel - Real-time KPIs */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Real-time KPIs</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">1.89 MW</div>
                    <div className="text-sm text-muted-foreground">Current Output</div>
                  </div>
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">95.4%</div>
                    <div className="text-sm text-muted-foreground">Efficiency</div>
                  </div>
                  <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">$47K</div>
                    <div className="text-sm text-muted-foreground">Monthly Savings</div>
                  </div>
                  <div className="text-center p-4 bg-green-500/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">2.3K</div>
                    <div className="text-sm text-muted-foreground">CO₂ Offset (kg)</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Live Energy Flow</h3>
                <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">Interactive energy flow chart</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Secure Role-Based Access */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔒 Secure Role-Based Access</h2>
            <p className="text-lg text-muted-foreground">Granular permissions for every team member</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <span>Access Control</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold">Admin</div>
                        <div className="text-sm text-muted-foreground">Full system access</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-eco-green/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Settings className="w-5 h-5 text-eco-green" />
                      <div>
                        <div className="font-semibold">Installer</div>
                        <div className="text-sm text-muted-foreground">Maintenance & alerts</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-grid-blue/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Home className="w-5 h-5 text-grid-blue" />
                      <div>
                        <div className="font-semibold">Owner</div>
                        <div className="text-sm text-muted-foreground">Performance & billing</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5" />
                      <div>
                        <div className="font-semibold">Grid Operator</div>
                        <div className="text-sm text-muted-foreground">Grid integration data</div>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Permission Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Feature</th>
                        <th className="text-center p-2">Admin</th>
                        <th className="text-center p-2">Installer</th>
                        <th className="text-center p-2">Owner</th>
                        <th className="text-center p-2">Grid Op</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">System Control</td>
                        <td className="text-center p-2">✅</td>
                        <td className="text-center p-2">⚠️</td>
                        <td className="text-center p-2">❌</td>
                        <td className="text-center p-2">❌</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Maintenance</td>
                        <td className="text-center p-2">✅</td>
                        <td className="text-center p-2">✅</td>
                        <td className="text-center p-2">❌</td>
                        <td className="text-center p-2">❌</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Reports</td>
                        <td className="text-center p-2">✅</td>
                        <td className="text-center p-2">⚠️</td>
                        <td className="text-center p-2">✅</td>
                        <td className="text-center p-2">⚠️</td>
                      </tr>
                      <tr>
                        <td className="p-2">Billing</td>
                        <td className="text-center p-2">✅</td>
                        <td className="text-center p-2">❌</td>
                        <td className="text-center p-2">✅</td>
                        <td className="text-center p-2">❌</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Mobile-Responsive Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">📲 Mobile-Responsive Preview</h2>
            <p className="text-lg text-muted-foreground">Access your dashboard anywhere, anytime</p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Mobile Frame */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Mobile Header */}
                  <div className="bg-primary text-white p-4 text-center">
                    <h3 className="font-semibold">Solar Dashboard</h3>
                    <p className="text-sm opacity-90">Multi-Site View</p>
                  </div>
                  
                  {/* Mobile Content */}
                  <div className="p-4 space-y-4">
                    {/* Efficiency Widget */}
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">95.4%</div>
                      <div className="text-sm text-muted-foreground">Efficiency</div>
                    </div>
                    
                    {/* CO₂ Offset Widget */}
                    <div className="bg-green-500/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">2.3K kg</div>
                      <div className="text-sm text-muted-foreground">CO₂ Offset</div>
                    </div>
                    
                    {/* Alerts Widget */}
                    <div className="bg-yellow-500/10 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Alerts</span>
                        <Badge variant="outline">3</Badge>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>Site #23: Minor shading</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Site #67: Maintenance due</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <Button size="sm" className="w-full">
                        <Monitor className="w-4 h-4 mr-1" />
                        System
                      </Button>
                      <Button size="sm" variant="outline" className="w-full">
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        Alerts
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Custom Widget Library */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">⚙️ Custom Widget Library</h2>
            <p className="text-lg text-muted-foreground">Drag-and-drop chart widgets for your dashboard</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Widget Library */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GripVertical className="w-5 h-5 text-primary" />
                  <span>Available Widgets</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border-2 border-dashed border-muted-foreground/30 rounded-lg cursor-move hover:border-primary/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold">Solar Yield</div>
                        <div className="text-sm text-muted-foreground">Daily/monthly production</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 border-2 border-dashed border-muted-foreground/30 rounded-lg cursor-move hover:border-primary/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-eco-green" />
                      <div>
                        <div className="font-semibold">Energy Sold</div>
                        <div className="text-sm text-muted-foreground">Grid export tracking</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 border-2 border-dashed border-muted-foreground/30 rounded-lg cursor-move hover:border-primary/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Leaf className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-semibold">Carbon Score</div>
                        <div className="text-sm text-muted-foreground">Environmental impact</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 border-2 border-dashed border-muted-foreground/30 rounded-lg cursor-move hover:border-primary/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Plus className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="font-semibold">Custom Widget</div>
                        <div className="text-sm text-muted-foreground">Create your own</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dashboard Preview */}
            <div className="md:col-span-2">
              <Card className="p-6 h-full">
                <CardHeader>
                  <CardTitle>Dashboard Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 h-64">
                    <div className="bg-primary/10 rounded-lg p-4 flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-semibold">Solar Yield</p>
                        <p className="text-xs text-muted-foreground">Widget placed</p>
                      </div>
                    </div>
                    <div className="bg-eco-green/10 rounded-lg p-4 flex items-center justify-center">
                      <div className="text-center">
                        <Zap className="w-8 h-8 mx-auto mb-2 text-eco-green" />
                        <p className="text-sm font-semibold">Energy Sold</p>
                        <p className="text-xs text-muted-foreground">Widget placed</p>
                      </div>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-4 flex items-center justify-center">
                      <div className="text-center">
                        <Leaf className="w-8 h-8 mx-auto mb-2 text-green-600" />
                        <p className="text-sm font-semibold">Carbon Score</p>
                        <p className="text-xs text-muted-foreground">Widget placed</p>
                      </div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                      <div className="text-center">
                        <Plus className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Drop widget here</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}