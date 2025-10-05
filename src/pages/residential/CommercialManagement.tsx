import { HeroSection } from '@/components/ui/hero-section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { EnergyChart } from '@/components/EnergyChart'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  BarChart3, 
  Download, 
  FileText, 
  TrendingUp, 
  Clock, 
  AlertTriangle, 
  DollarSign, 
  Calendar,
  Building2,
  Zap,
  Shield,
  Eye,
  Download as DownloadIcon,
  PieChart,
  Activity,
  Bell,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const CommercialManagement = () => {
  return (
    <div className='min-h-screen'>
      <HeroSection
        title="Powering Business with Brains"
        subtitle="🧠 AI-Powered Optimization"
        description="Suncube AI brings energy intelligence to your factory floor, warehouse, or office — with dashboards that drive results. "
        primaryAction={{
          label: "See it in Action",
          href: "/solutions/residential/ai-optimization"
        }}
      />

      {/* Section 2: Enterprise-Grade Energy Dashboard */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Enterprise Dashboard</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Floor-wise, System-wise, Machinery-wise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive breakdown with exportable reports for compliance and analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <span>Real-Time Energy Dashboard</span>
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
                  <span>Floor Breakdown</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Production Floor</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">45.2 kW</span>
                      <Badge className="bg-success text-white">Active</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Office Complex</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">12.8 kW</span>
                      <Badge className="bg-success text-white">Active</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Warehouse</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">8.5 kW</span>
                      <Badge variant="destructive">Maintenance</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Download className="w-5 h-5 text-primary" />
                  <span>Export Reports</span>
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Monthly Compliance Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <PieChart className="w-4 h-4 mr-2" />
                    Energy Efficiency Analysis
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Cost Breakdown Report
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Wide-screen admin UI demo */}
          <Card className="p-6 bg-gradient-to-r from-slate-50 to-slate-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-6 h-6 text-primary" />
                <span>Admin Dashboard Preview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg p-8 border-2 border-dashed border-gray-300">
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <div className="text-sm font-medium text-blue-800">Total Sites</div>
                    <div className="text-2xl font-bold text-blue-900">12</div>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <div className="text-sm font-medium text-green-800">Active Systems</div>
                    <div className="text-2xl font-bold text-green-900">11</div>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <div className="text-sm font-medium text-yellow-800">Total Output</div>
                    <div className="text-2xl font-bold text-yellow-900">2.4 MW</div>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <div className="text-sm font-medium text-purple-800">Revenue Today</div>
                    <div className="text-2xl font-bold text-purple-900">$8,420</div>
                  </div>
                </div>
                <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Interactive Dashboard Interface</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Load Forecasting & Smart Allocation */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">AI Optimization</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Load Forecasting & Smart Allocation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI engine optimizes high-energy tasks for non-peak times with intelligent load-shifting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span>Load-Shifting Visual Flow</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Peak Hours (2-6 PM)</span>
                    <Badge variant="destructive">High Cost</Badge>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Shoulder Hours (6-10 AM)</span>
                    <Badge variant="secondary">Medium Cost</Badge>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Off-Peak Hours (10 PM-6 AM)</span>
                    <Badge className="bg-success text-white">Low Cost</Badge>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2">AI Recommendations</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>Shift heavy machinery to 2-6 AM</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>Schedule HVAC maintenance for off-peak</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>Optimize battery charging cycles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-success" />
                  <span>Savings Projection</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success mb-2">$12,450</div>
                    <div className="text-sm text-muted-foreground">Monthly Savings with AI Optimization</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Current Monthly Bill</span>
                      <span className="font-bold">$45,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Optimized Monthly Bill</span>
                      <span className="font-bold text-success">$32,750</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between">
                        <span>Total Savings</span>
                        <span className="font-bold text-success">27.5%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Annual Impact</h4>
                    <div className="text-2xl font-bold text-success">$149,400</div>
                    <div className="text-sm text-muted-foreground">Total annual savings with smart allocation</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Smart Invoicing + Budget Tracking */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Financial Intelligence</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Smart Invoicing + Budget Tracking
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Energy-to-cost breakdown with intelligent alerts for anomalies and billing leaks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <span>Energy Cost Breakdown</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Solar Generation</span>
                    <span className="font-bold text-success">-$8,420</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grid Consumption</span>
                    <span className="font-bold">$12,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Demand Charges</span>
                    <span className="font-bold">$3,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maintenance</span>
                    <span className="font-bold">$1,500</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold">
                      <span>Net Cost</span>
                      <span className="text-primary">$9,080</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6 text-warning" />
                  <span>Anomaly Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span className="font-semibold text-red-800">High Usage Alert</span>
                    </div>
                    <p className="text-sm text-red-700">Building A consumption 40% above normal</p>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Bell className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold text-yellow-800">Billing Anomaly</span>
                    </div>
                    <p className="text-sm text-yellow-700">Demand charges increased by 25%</p>
                  </div>
                  
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-green-800">Optimization Success</span>
                    </div>
                    <p className="text-sm text-green-700">Peak shaving saved $2,100 this month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <span>Budget Tracking</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">$9,080</div>
                    <div className="text-sm text-muted-foreground">Current Month</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Budget</span>
                      <span>$10,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '90.8%'}}></div>
                    </div>
                    <div className="text-xs text-muted-foreground">90.8% of budget used</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-success">$920</div>
                      <div className="text-xs text-muted-foreground">Under Budget</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">$2,100</div>
                      <div className="text-xs text-muted-foreground">Peak Savings</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Predictive Failure Detection */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Predictive Maintenance</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Predictive Failure Detection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered alerts and proactive maintenance scheduling to prevent costly downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6 text-warning" />
                  <span>Failure Predictions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-red-800">Critical Alert</span>
                      <Badge variant="destructive">High Priority</Badge>
                    </div>
                    <p className="text-sm text-red-700 mb-2">
                      Inverter on Line 3 predicted to fail in 36 hours
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-red-600">
                      <Clock className="w-3 h-3" />
                      <span>Detected: 2 hours ago</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-yellow-800">Maintenance Due</span>
                      <Badge variant="secondary">Medium Priority</Badge>
                    </div>
                    <p className="text-sm text-yellow-700 mb-2">
                      Solar panel cleaning recommended within 7 days
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-yellow-600">
                      <Calendar className="w-3 h-3" />
                      <span>Last cleaned: 45 days ago</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-blue-800">Performance Alert</span>
                      <Badge className="bg-blue-500 text-white">Low Priority</Badge>
                    </div>
                    <p className="text-sm text-blue-700 mb-2">
                      Battery efficiency dropping by 2% per month
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-blue-600">
                      <Activity className="w-3 h-3" />
                      <span>Trend detected: 3 months</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span>Proactive Maintenance Calendar</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-7 gap-1 text-xs font-medium text-center mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="p-2">{day}</div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({length: 35}, (_, i) => {
                      const day = i + 1;
                      let content = null;
                      const className = "p-2 text-center text-sm border rounded";
                      
                      if (day === 15) {
                        content = (
                          <div className="bg-red-100 border-red-300">
                            <div className="font-bold text-red-800">15</div>
                            <div className="text-xs text-red-600">Inverter</div>
                          </div>
                        );
                      } else if (day === 22) {
                        content = (
                          <div className="bg-yellow-100 border-yellow-300">
                            <div className="font-bold text-yellow-800">22</div>
                            <div className="text-xs text-yellow-600">Cleaning</div>
                          </div>
                        );
                      } else if (day === 28) {
                        content = (
                          <div className="bg-blue-100 border-blue-300">
                            <div className="font-bold text-blue-800">28</div>
                            <div className="text-xs text-blue-600">Inspection</div>
                          </div>
                        );
                      } else {
                        content = <div className="text-muted-foreground">{day}</div>;
                      }
                      
                      return (
                        <div key={day} className={className}>
                          {content}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-3 h-3 bg-red-500 rounded"></div>
                      <span>Critical Maintenance</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                      <span>Scheduled Maintenance</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span>Routine Inspection</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-primary text-white shadow-eco hover:shadow-glow transition-all">
              Schedule Maintenance
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommercialManagement