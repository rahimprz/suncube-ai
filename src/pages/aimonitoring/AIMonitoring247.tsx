import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AIAlerts } from "@/components/AIAlerts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Eye, Shield, Activity, TrendingDown, Calendar, Bell, Download, AlertTriangle, Battery, Zap, Clock, DollarSign } from "lucide-react";

export default function AIMonitoring247() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Know Before It Breaks."
        subtitle="👁️ 24/7 AI Monitoring"
        description="Suncube AI doesn't just track solar performance — it predicts and prevents failures before they cost you."
        primaryAction={{
          label: "Preview AI Monitoring Panel",
          href: "/portal"
        }}
        backAction={{
          label: "Back to AI Monitoring",
          href: "/ai-monitoring"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Eye className="w-6 h-6 text-success" />
                </div>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="bg-success text-white text-lg px-4 py-2">Online</Badge>
                <div className="text-sm text-muted-foreground mt-2">All systems operational</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Monitoring Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">247</div>
                <div className="text-sm text-muted-foreground mt-2">Active sensors</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-eco-green/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-eco-green" />
                </div>
                <CardTitle>Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-eco-green">99.97%</div>
                <div className="text-sm text-muted-foreground mt-2">Last 365 days</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-6 h-6 text-primary" />
                  <span>Live System Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AIAlerts />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Monitoring Categories</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Panel Performance</div>
                      <div className="text-sm text-muted-foreground">48 panels monitored</div>
                    </div>
                    <Badge className="bg-success text-white">Normal</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Inverter Health</div>
                      <div className="text-sm text-muted-foreground">3 inverters active</div>
                    </div>
                    <Badge className="bg-success text-white">Normal</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Weather Impact</div>
                      <div className="text-sm text-muted-foreground">Cloud coverage detected</div>
                    </div>
                    <Badge className="bg-warning text-white">Advisory</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Grid Connection</div>
                      <div className="text-sm text-muted-foreground">Stable connection</div>
                    </div>
                    <Badge className="bg-success text-white">Normal</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">AI Detection Capabilities</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Hot spot detection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Shading analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Performance degradation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Weather correlation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Grid anomalies</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-2">
                  <div className="text-sm p-2 bg-success/10 rounded">
                    <strong>2 min ago:</strong> All systems performing optimally
                  </div>
                  <div className="text-sm p-2 bg-primary/10 rounded">
                    <strong>15 min ago:</strong> Panel cleaning alert cleared
                  </div>
                  <div className="text-sm p-2 bg-eco-green/10 rounded">
                    <strong>1 hour ago:</strong> Peak generation detected
                  </div>
                  <div className="text-sm p-2 bg-muted/30 rounded">
                    <strong>3 hours ago:</strong> Morning startup sequence completed
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Smart Anomaly Detection */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">📉 Smart Anomaly Detection</h2>
            <p className="text-lg text-muted-foreground">AI-powered alerts that catch issues before they impact your system</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingDown className="w-6 h-6 text-destructive" />
                  <span>Active Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <span className="font-semibold text-destructive">Critical Alert</span>
                  </div>
                  <p className="text-sm">20% drop in Panel Group B</p>
                  <p className="text-xs text-muted-foreground mt-1">Detected 5 minutes ago</p>
                </div>

                <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Battery className="w-5 h-5 text-warning" />
                    <span className="font-semibold text-warning">Warning Alert</span>
                  </div>
                  <p className="text-sm">Low discharge from Battery Line 2</p>
                  <p className="text-xs text-muted-foreground mt-1">Detected 12 minutes ago</p>
                </div>

                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-primary">Info Alert</span>
                  </div>
                  <p className="text-sm">Inverter efficiency below optimal range</p>
                  <p className="text-xs text-muted-foreground mt-1">Detected 25 minutes ago</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>System Health Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Panel Group A</span>
                      <Badge className="bg-success text-white">Normal</Badge>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Panel Group B</span>
                      <Badge className="bg-destructive text-white">Critical</Badge>
                    </div>
                    <Progress value={20} className="h-2 bg-destructive/20" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Battery Line 1</span>
                      <Badge className="bg-success text-white">Normal</Badge>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Battery Line 2</span>
                      <Badge className="bg-warning text-white">Warning</Badge>
                    </div>
                    <Progress value={45} className="h-2 bg-warning/20" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Inverter System</span>
                      <Badge className="bg-primary text-white">Info</Badge>
                    </div>
                    <Progress value={72} className="h-2 bg-primary/20" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Maintenance Scheduler */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔁 Maintenance Scheduler</h2>
            <p className="text-lg text-muted-foreground">AI-suggested maintenance to maximize your system's performance</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span>Upcoming Maintenance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Panel Cleaning</h4>
                      <p className="text-sm text-muted-foreground">Due in 3 days</p>
                    </div>
                    <Badge className="bg-primary text-white">AI Suggested</Badge>
                  </div>
                  <p className="text-sm">Dust accumulation detected on 12 panels</p>
                </div>

                <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Inverter Inspection</h4>
                      <p className="text-sm text-muted-foreground">Due in 1 week</p>
                    </div>
                    <Badge className="bg-warning text-white">Recommended</Badge>
                  </div>
                  <p className="text-sm">Efficiency trending downward</p>
                </div>

                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Battery Health Check</h4>
                      <p className="text-sm text-muted-foreground">Due in 2 weeks</p>
                    </div>
                    <Badge className="bg-success text-white">Scheduled</Badge>
                  </div>
                  <p className="text-sm">Routine maintenance check</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-eco-green" />
                  <span>Cost-Saving Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-destructive" />
                    <span className="font-semibold text-destructive">Urgent Action Required</span>
                  </div>
                  <p className="text-sm mb-2">Delay panel cleaning by 1 week</p>
                  <p className="text-xs text-muted-foreground">Estimated loss: <span className="font-semibold text-destructive">3% yield reduction</span></p>
                </div>

                <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="w-5 h-5 text-warning" />
                    <span className="font-semibold text-warning">Potential Savings</span>
                  </div>
                  <p className="text-sm mb-2">Optimize cleaning schedule</p>
                  <p className="text-xs text-muted-foreground">Potential savings: <span className="font-semibold text-eco-green">$240/month</span></p>
                </div>

                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-5 h-5 text-success" />
                    <span className="font-semibold text-success">Performance Boost</span>
                  </div>
                  <p className="text-sm mb-2">Proactive maintenance completed</p>
                  <p className="text-xs text-muted-foreground">Performance increase: <span className="font-semibold text-success">+2.3% efficiency</span></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Alerts System */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">📲 Alerts System</h2>
            <p className="text-lg text-muted-foreground">Customize your notification preferences and escalation protocols</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-6 h-6 text-primary" />
                  <span>Alert Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="sms-alerts" className="font-medium">SMS Alerts</Label>
                      <p className="text-sm text-muted-foreground">Critical system alerts</p>
                    </div>
                    <Switch id="sms-alerts" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-alerts" className="font-medium">Email Alerts</Label>
                      <p className="text-sm text-muted-foreground">Detailed reports and summaries</p>
                    </div>
                    <Switch id="email-alerts" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-alerts" className="font-medium">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Mobile app notifications</p>
                    </div>
                    <Switch id="push-alerts" />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3">Alert Frequency</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="immediate" name="frequency" defaultChecked />
                      <Label htmlFor="immediate">Immediate (Critical issues)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="hourly" name="frequency" />
                      <Label htmlFor="hourly">Hourly digest</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="daily" name="frequency" />
                      <Label htmlFor="daily">Daily summary</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Escalation System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">Tier 1: System Owner</h4>
                    <Badge className="bg-success text-white">Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Immediate notification for all alerts</p>
                  <p className="text-xs text-muted-foreground mt-1">Response time: 5 minutes</p>
                </div>

                <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">Tier 2: Technical Support</h4>
                    <Badge className="bg-warning text-white">Standby</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Escalated after 15 minutes</p>
                  <p className="text-xs text-muted-foreground mt-1">Response time: 30 minutes</p>
                </div>

                <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">Grid Operator</h4>
                    <Badge className="bg-destructive text-white">Emergency</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Critical grid-related issues</p>
                  <p className="text-xs text-muted-foreground mt-1">Response time: 2 minutes</p>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Current Status</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Active alerts:</span>
                      <span className="font-semibold">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Escalated to Tier 2:</span>
                      <span className="font-semibold">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergency contacts:</span>
                      <span className="font-semibold">3</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Performance Over Time */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">📊 Performance Over Time</h2>
            <p className="text-lg text-muted-foreground">Track your system's health and maintenance history</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Activity className="w-6 h-6 text-success" />
                </div>
                <CardTitle>Uptime %</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">99.97%</div>
                <div className="text-sm text-muted-foreground mt-2">Last 30 days</div>
                <Progress value={99.97} className="mt-3" />
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Avg Resolution Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">2.3h</div>
                <div className="text-sm text-muted-foreground mt-2">Issue resolution</div>
                <Progress value={85} className="mt-3" />
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-eco-green/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Calendar className="w-6 h-6 text-eco-green" />
                </div>
                <CardTitle>Maintenance Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-eco-green">47</div>
                <div className="text-sm text-muted-foreground mt-2">Completed tasks</div>
                <Progress value={94} className="mt-3" />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Energy Production</span>
                      <span className="text-sm text-success">+5.2%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">System Efficiency</span>
                      <span className="text-sm text-success">+2.1%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Battery Health</span>
                      <span className="text-sm text-warning">-1.3%</span>
                    </div>
                    <Progress value={78} className="h-2 bg-warning/20" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Grid Stability</span>
                      <span className="text-sm text-success">+0.8%</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Recent Maintenance History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Panel Cleaning</div>
                      <div className="text-sm text-muted-foreground">Completed 2 days ago</div>
                    </div>
                    <Badge className="bg-success text-white">Completed</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Inverter Maintenance</div>
                      <div className="text-sm text-muted-foreground">Completed 1 week ago</div>
                    </div>
                    <Badge className="bg-primary text-white">Completed</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Battery Check</div>
                      <div className="text-sm text-muted-foreground">Scheduled for tomorrow</div>
                    </div>
                    <Badge className="bg-warning text-white">Pending</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold">System Update</div>
                      <div className="text-sm text-muted-foreground">Completed 2 weeks ago</div>
                    </div>
                    <Badge className="bg-muted text-muted-foreground">Completed</Badge>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Health Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}