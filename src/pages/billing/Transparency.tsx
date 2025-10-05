import { HeroSection } from "@/components/ui/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  BarChart3, 
  Download, 
  FileText, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users, 
  Shield, 
  Eye, 
  Mail, 
  Calendar,
  Activity,
  Zap,
  Leaf,
  DollarSign,
  Building2,
  Home,
  Settings,
  ArrowRight
} from "lucide-react"
import { useState } from "react"

const Transparency = () => {
  const [selectedRole, setSelectedRole] = useState("admin")
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")

  // Mock data for performance reports
  const performanceData = {
    efficiency: 94.2,
    downtime: 0.8,
    energyEarned: 1247.5,
    energyConsumed: 892.3,
    netEarnings: 355.2
  }

  // Mock compliance data
  const complianceData = [
    { panelId: "PANEL-001", generation: "42.6 kWh", maintenanceDate: "2024-02-15", status: "Compliant" },
    { panelId: "PANEL-002", generation: "41.8 kWh", maintenanceDate: "2024-02-15", status: "Compliant" },
    { panelId: "PANEL-003", generation: "43.2 kWh", maintenanceDate: "2024-02-20", status: "Pending" },
    { panelId: "PANEL-004", generation: "40.9 kWh", maintenanceDate: "2024-02-10", status: "Compliant" },
    { panelId: "PANEL-005", generation: "42.1 kWh", maintenanceDate: "2024-02-25", status: "Scheduled" }
  ]

  // Mock stakeholder data
  const stakeholderData = {
    admin: {
      totalSystems: 1247,
      totalCapacity: "47.3 MW",
      totalRevenue: "$2.4M",
      activeAlerts: 12
    },
    user: {
      personalGeneration: "1,247 kWh",
      personalSavings: "$248",
      carbonOffset: "0.8 tons",
      systemHealth: "Excellent"
    },
    operator: {
      gridLoad: "85%",
      responseTime: "2.3s",
      peakDemand: "1.2 GW",
      stabilityScore: "98.5%"
    }
  }

  // Mock digest data
  const digestData = {
    monthlyBill: "$45.32",
    aiAlerts: 3,
    sustainabilityScore: 94,
    energyGenerated: "1,247 kWh",
    carbonOffset: "0.8 tons CO₂"
  }

  const handleExport = (format: string) => {
    console.log(`Exporting report in ${format} format`)
    // In a real app, this would trigger file download
  }

  const handleEmailDigest = () => {
    console.log("Sending digest email")
    // In a real app, this would send email
  }

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Data That Tells the Truth"
        subtitle="Our transparent billing system shows you exactly how we calculate your energy costs and credits."
        description="Transparency isn't an option — it's a feature. Preview how clean reporting builds trust in every solar interaction. "
        primaryAction={{
          label: "View Report Gallery",
          href: "/billing/transparency",
        }}
      />

      {/* Section 2: Performance Reports */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">📊 Section 2</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Performance Reports
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track your system's efficiency, downtime, and energy balance with detailed KPIs and exportable reports.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* KPIs Cards */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Efficiency</CardTitle>
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{performanceData.efficiency}%</div>
                    <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-warning">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Downtime</CardTitle>
                    <Clock className="h-4 w-4 text-warning" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{performanceData.downtime}%</div>
                    <p className="text-xs text-muted-foreground">-0.3% from last month</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-success">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Net Energy</CardTitle>
                    <Zap className="h-4 w-4 text-success" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{performanceData.netEarnings} kWh</div>
                    <p className="text-xs text-muted-foreground">Earned vs Consumed</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <span>Energy Balance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Energy Earned</span>
                      <Badge className="bg-success text-white">{performanceData.energyEarned} kWh</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Energy Consumed</span>
                      <Badge variant="secondary">{performanceData.energyConsumed} kWh</Badge>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center font-semibold">
                        <span>Net Earnings</span>
                        <span className="text-success">+{performanceData.netEarnings} kWh</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Export Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="w-5 h-5 text-primary" />
                  <span>Export Reports</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground mb-4">
                    Download detailed performance reports in your preferred format
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <Button 
                      variant="outline" 
                      className="justify-start"
                      onClick={() => handleExport("PDF")}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Sample PDF Report
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="justify-start"
                      onClick={() => handleExport("XLS")}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Sample XLS Report
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="justify-start"
                      onClick={() => handleExport("CSV")}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Sample CSV Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Regulatory Compliance Log */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">🕵️ Section 3</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Regulatory Compliance Log
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete transparency in regulatory compliance with detailed logs of panel performance and maintenance schedules.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Compliance Checklist</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Panel ID</TableHead>
                    <TableHead>Generation Log</TableHead>
                    <TableHead>Maintenance Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {complianceData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.panelId}</TableCell>
                      <TableCell>{item.generation}</TableCell>
                      <TableCell>{item.maintenanceDate}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={item.status === "Compliant" ? "default" : 
                                  item.status === "Pending" ? "secondary" : "outline"}
                          className={item.status === "Compliant" ? "bg-success" : ""}
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="mt-6 text-center">
                <Button className="bg-primary hover:bg-primary/90">
                  <FileText className="w-4 h-4 mr-2" />
                  View Regulatory Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 4: Stakeholder Dashboard */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">👥 Section 4</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Stakeholder Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Role-specific views tailored to different stakeholders with appropriate data access levels.
            </p>
          </div>

          <div className="mb-8">
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="w-full max-w-xs mx-auto">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Admin - Full Ledger Access</span>
                  </div>
                </SelectItem>
                <SelectItem value="user">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>User - Personal Logs</span>
                  </div>
                </SelectItem>
                <SelectItem value="operator">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Grid Operator - Load Response</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectedRole === "admin" && (
              <>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Systems</CardTitle>
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stakeholderData.admin.totalSystems}</div>
                    <p className="text-xs text-muted-foreground">+12 from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Capacity</CardTitle>
                    <Zap className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stakeholderData.admin.totalCapacity}</div>
                    <p className="text-xs text-muted-foreground">Across all installations</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stakeholderData.admin.totalRevenue}</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stakeholderData.admin.activeAlerts}</div>
                    <p className="text-xs text-muted-foreground">Require attention</p>
                  </CardContent>
                </Card>
              </>
            )}

            {selectedRole === "user" && (
              <>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Personal Generation</CardTitle>
                    <Zap className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stakeholderData.user.personalGeneration}</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Personal Savings</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stakeholderData.user.personalSavings}</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Carbon Offset</CardTitle>
                    <Leaf className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stakeholderData.user.carbonOffset}</div>
                    <p className="text-xs text-muted-foreground">CO₂ equivalent</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">System Health</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stakeholderData.user.systemHealth}</div>
                    <p className="text-xs text-muted-foreground">Overall status</p>
                  </CardContent>
                </Card>
              </>
            )}

            {selectedRole === "operator" && (
              <>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Grid Load</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stakeholderData.operator.gridLoad}</div>
                    <p className="text-xs text-muted-foreground">Current capacity</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Response Time</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stakeholderData.operator.responseTime}</div>
                    <p className="text-xs text-muted-foreground">Average response</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Peak Demand</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stakeholderData.operator.peakDemand}</div>
                    <p className="text-xs text-muted-foreground">Maximum load</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Stability Score</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stakeholderData.operator.stabilityScore}</div>
                    <p className="text-xs text-muted-foreground">Grid stability</p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Section 5: Monthly & Yearly Digest */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">📅 Section 5</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Monthly & Yearly Digest
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive summaries with key metrics, AI alerts, and sustainability scores delivered to your inbox.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Summary Tiles */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Bill</CardTitle>
                    <DollarSign className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{digestData.monthlyBill}</div>
                    <p className="text-xs text-muted-foreground">Net energy cost</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-warning">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">AI Alerts</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-warning" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{digestData.aiAlerts}</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-success">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sustainability</CardTitle>
                    <Leaf className="h-4 w-4 text-success" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{digestData.sustainabilityScore}/100</div>
                    <p className="text-xs text-muted-foreground">Environmental score</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Digest Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Energy Generated</span>
                      <Badge className="bg-success text-white">{digestData.energyGenerated}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Carbon Offset</span>
                      <Badge variant="outline">{digestData.carbonOffset}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>System Efficiency</span>
                      <Badge variant="secondary">94.2%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Uptime</span>
                      <Badge variant="outline">99.2%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Email Digest Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Email Digest Options</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Digest Frequency</label>
                    <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly Digest</SelectItem>
                        <SelectItem value="quarterly">Quarterly Digest</SelectItem>
                        <SelectItem value="yearly">Yearly Digest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={handleEmailDigest}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Digest to Self
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={handleEmailDigest}
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Email Digest to Team
                    </Button>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={handleEmailDigest}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Schedule Regular Digest
                    </Button>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <p>• Monthly digest includes performance summary and alerts</p>
                    <p>• Quarterly digest includes detailed financial analysis</p>
                    <p>• Yearly digest includes comprehensive sustainability report</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Transparency