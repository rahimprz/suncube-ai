import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export default function MaintenanceScheduling() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Plan Repairs"
        subtitle="📅 Maintenance Scheduling Tools"
        description="Dummy tasks for cleaning & repairs."
        primaryAction={{
          label: "Open Scheduler",
          href: "/portal"
        }}
        backAction={{
          label: "Back to AI Monitoring",
          href: "/ai-monitoring"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span>Maintenance Calendar</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium">
                    <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {[...Array(35)].map((_, i) => {
                      const day = i - 5;
                      const isToday = day === 15;
                      const hasMaintenance = [12, 18, 25].includes(day);
                      const hasAlert = [18].includes(day);
                      
                      return (
                        <div
                          key={i}
                          className={`
                            h-10 flex items-center justify-center text-sm rounded
                            ${day < 1 || day > 31 ? 'text-muted-foreground' : ''}
                            ${isToday ? 'bg-primary text-white' : ''}
                            ${hasMaintenance && !isToday ? 'bg-eco-green/20 text-eco-green font-semibold' : ''}
                            ${hasAlert && !isToday ? 'bg-warning/20 text-warning font-semibold' : ''}
                            ${!hasMaintenance && !hasAlert && !isToday && day > 0 && day <= 31 ? 'hover:bg-muted' : ''}
                          `}
                        >
                          {day > 0 && day <= 31 ? day : ''}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-primary rounded"></div>
                      <span>Today</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-eco-green/50 rounded"></div>
                      <span>Scheduled</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-warning/50 rounded"></div>
                      <span>Urgent</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Upcoming Tasks</span>
                </h3>
                <div className="space-y-3">
                  <div className="p-4 border-l-4 border-warning bg-warning/10 rounded-r">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Panel Cleaning - Array A</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Due: Tomorrow, 9:00 AM
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Estimated duration: 2 hours
                        </div>
                      </div>
                      <Badge className="bg-warning text-white">Urgent</Badge>
                    </div>
                    <Button size="sm" className="mt-3">Assign Team</Button>
                  </div>
                  
                  <div className="p-4 border-l-4 border-primary bg-primary/10 rounded-r">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold">Inverter Inspection</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Due: Friday, 2:00 PM
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Estimated duration: 1 hour
                        </div>
                      </div>
                      <Badge className="bg-primary text-white">Scheduled</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3">View Details</Button>
                  </div>
                  
                  <div className="p-4 border-l-4 border-success bg-success/10 rounded-r">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>System Health Check</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Completed: Yesterday, 3:30 PM
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Result: All systems optimal
                        </div>
                      </div>
                      <Badge className="bg-success text-white">Complete</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Maintenance Teams</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold">Team Alpha</div>
                      <div className="text-sm text-muted-foreground">Cleaning specialists</div>
                    </div>
                    <Badge className="bg-success text-white">Available</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold">Team Beta</div>
                      <div className="text-sm text-muted-foreground">Electrical maintenance</div>
                    </div>
                    <Badge className="bg-warning text-white">Busy</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold">Team Gamma</div>
                      <div className="text-sm text-muted-foreground">System diagnostics</div>
                    </div>
                    <Badge className="bg-success text-white">Available</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Maintenance Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Tasks This Month</span>
                    <span className="font-bold">12 completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Response Time</span>
                    <span className="font-bold">4.2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate</span>
                    <span className="font-bold text-success">98.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost Savings</span>
                    <span className="font-bold text-primary">$2,340</span>
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