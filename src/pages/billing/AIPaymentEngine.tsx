import { HeroSection } from "@/components/ui/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  Zap, 
  Sun, 
  Battery, 
  Brain, 
  Download, 
  Calendar,
  DollarSign,
  BarChart3,
  PieChart,
  Clock,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Grid3x3,
  FileText,
  Eye
} from "lucide-react"
import { useState, useEffect } from "react"

// Mock data for energy billing simulation
const generateEnergyData = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i)
  return hours.map(hour => ({
    hour: `${hour.toString().padStart(2, '0')}:00`,
    generation: Math.random() * 6 + 1,
    consumption: Math.random() * 4 + 2,
    gridExport: Math.max(0, Math.random() * 3),
    credits: Math.random() * 0.15 + 0.05
  }))
}

// Mock data for AI optimization comparison
const generateOptimizationData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  return months.map(month => ({
    month,
    fixedBilling: Math.random() * 200 + 150,
    aiOptimized: Math.random() * 120 + 80,
    savings: Math.random() * 80 + 40
  }))
}

// Mock invoice data
const mockInvoice = {
  invoiceNumber: "INV-2024-001",
  date: "2024-01-15",
  dueDate: "2024-02-15",
  customer: "John Smith",
  address: "123 Solar Street, Green City, GC 12345",
  items: [
    { description: "Solar Generation (Panel A)", quantity: "245 kWh", rate: "$0.12", amount: "$29.40" },
    { description: "Solar Generation (Panel B)", quantity: "198 kWh", rate: "$0.12", amount: "$23.76" },
    { description: "Grid Export Credits", quantity: "156 kWh", rate: "$0.18", amount: "$28.08" },
    { description: "Peak Hour Optimization", quantity: "1 month", rate: "$15.00", amount: "$15.00" }
  ],
  subtotal: "$96.24",
  tax: "$9.62",
  total: "$105.86"
}

const AIPaymentEngine = () => {
  const [energyData, setEnergyData] = useState(generateEnergyData())
  const [optimizationData, setOptimizationData] = useState(generateOptimizationData())
  const [currentCredits, setCurrentCredits] = useState(28.45)
  const [currentBill, setCurrentBill] = useState(105.86)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyData(generateEnergyData())
      setCurrentCredits(prev => prev + (Math.random() - 0.5) * 2)
      setCurrentBill(prev => Math.max(0, prev + (Math.random() - 0.5) * 5))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-eco">
      {/* Hero Section */}
      <HeroSection
        title="Smarter Payments. Automated Intelligence."
        subtitle="Automated billing with AI-optimized pricing and payment scheduling for maximum savings."
        description="Our simulated AI engine calculates energy usage, credits, and payables in real-time — for homes and industries alike."
        primaryAction={{
          label: "Preview AI Payment Flow",
          href: "/billing/ai-payment-engine",
        }}
      />

      {/* Section 2: Real-Time Energy Billing Simulation */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Real-Time Simulation</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Dynamic Energy Billing Simulation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch as our AI calculates your energy credits and billing in real-time with live data visualization.
            </p>
          </div>

          {/* Live Energy Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-l-4 border-l-solar-yellow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Solar Generation</CardTitle>
                <Sun className="h-4 w-4 text-solar-yellow" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">4.2 kW</div>
                <div className="flex items-center space-x-2 mt-1">
                  <TrendingUp className="h-3 w-3 text-success" />
                  <p className="text-xs text-muted-foreground">+15% from yesterday</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-grid-blue">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Grid Export</CardTitle>
                <Grid3x3 className="h-4 w-4 text-grid-blue" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">1.8 kW</div>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="secondary" className="text-xs">Earning Credits</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-eco-green">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Credits Earned</CardTitle>
                <DollarSign className="h-4 w-4 text-eco-green" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">${currentCredits.toFixed(2)}</div>
                <div className="flex items-center space-x-2 mt-1">
                  <CheckCircle className="h-3 w-3 text-success" />
                  <p className="text-xs text-muted-foreground">This month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Bill</CardTitle>
                <FileText className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">${currentBill.toFixed(2)}</div>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="outline" className="text-xs text-success border-success">
                    AI Optimized
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Energy Flow Chart */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                24-Hour Energy Flow Simulation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/30 rounded-lg p-4">
                <div className="grid grid-cols-24 gap-1 h-full items-end">
                  {energyData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center space-y-1">
                      <div className="w-full bg-solar-yellow rounded-t" style={{ height: `${(data.generation / 6) * 100}%` }}></div>
                      <div className="w-full bg-grid-blue rounded-t" style={{ height: `${(data.consumption / 4) * 100}%` }}></div>
                      <div className="w-full bg-eco-green rounded-t" style={{ height: `${(data.gridExport / 3) * 100}%` }}></div>
                      <div className="text-xs text-muted-foreground">{data.hour}</div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center space-x-6 mt-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-solar-yellow rounded"></div>
                    <span>Generation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-grid-blue rounded"></div>
                    <span>Consumption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-eco-green rounded"></div>
                    <span>Grid Export</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: AI Optimization Logic */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">AI Intelligence</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              AI Optimization Logic
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI schedules payouts and optimizes billing to avoid peak tariffs and maximize your savings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Logic Visualization */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  AI Decision Logic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                    <Clock className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">Peak Hour Detection</div>
                      <div className="text-sm text-muted-foreground">AI identifies high-tariff periods</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-success/5 rounded-lg">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <div>
                      <div className="font-medium">Optimal Timing</div>
                      <div className="text-sm text-muted-foreground">Schedules payments during low-rate hours</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-warning/5 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-warning" />
                    <div>
                      <div className="font-medium">Predictive Analysis</div>
                      <div className="text-sm text-muted-foreground">Forecasts future energy costs</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-eco-green/5 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-eco-green" />
                    <div>
                      <div className="font-medium">Automated Execution</div>
                      <div className="text-sm text-muted-foreground">Executes optimized payment schedule</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cost Reduction Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  Cost Reduction Over Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {optimizationData.map((data, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{data.month}</span>
                        <span className="font-medium">${data.savings.toFixed(0)} saved</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${(data.savings / 120) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Fixed: ${data.fixedBilling.toFixed(0)}</span>
                        <span>AI Optimized: ${data.aiOptimized.toFixed(0)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Smart Invoice Demo */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Smart Billing</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Smart Invoice Demo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience our AI-generated invoices with detailed breakdowns and optimization insights.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>AI-Optimized Energy Invoice</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Invoice Header */}
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-2">Bill To:</h3>
                      <p className="text-sm text-muted-foreground">{mockInvoice.customer}</p>
                      <p className="text-sm text-muted-foreground">{mockInvoice.address}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Invoice #: {mockInvoice.invoiceNumber}</p>
                      <p className="text-sm text-muted-foreground">Date: {mockInvoice.date}</p>
                      <p className="text-sm text-muted-foreground">Due: {mockInvoice.dueDate}</p>
                    </div>
                  </div>

                  {/* Invoice Items */}
                  <div className="border-t pt-4">
                    <div className="space-y-3">
                      {mockInvoice.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2">
                          <div>
                            <div className="font-medium">{item.description}</div>
                            <div className="text-sm text-muted-foreground">
                              {item.quantity} @ {item.rate}
                            </div>
                          </div>
                          <div className="font-semibold">{item.amount}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Invoice Summary */}
                  <div className="border-t pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>{mockInvoice.subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax:</span>
                        <span>{mockInvoice.tax}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold border-t pt-2">
                        <span>Total:</span>
                        <span className="text-primary">{mockInvoice.total}</span>
                      </div>
                    </div>
                  </div>

                  {/* AI Optimization Notes */}
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="h-4 w-4 text-primary" />
                      <span className="font-medium text-primary">AI Optimization Applied</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your bill has been optimized by $23.45 through peak-hour avoidance and credit maximization. 
                      AI detected 3 high-tariff periods and automatically adjusted your payment schedule.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Forecast-Based Billing */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Predictive Analytics</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Forecast-Based Billing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered predictions help you plan your energy finances with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Weather Forecast Impact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-solar-yellow" />
                  Weather Forecast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">85%</div>
                    <div className="text-sm text-muted-foreground">Sunny Days This Month</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Expected Generation:</span>
                      <span className="font-medium">+12%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Credit Potential:</span>
                      <span className="font-medium text-success">$45.20</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seasonal Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Seasonal Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">Summer</div>
                    <div className="text-sm text-muted-foreground">Peak Generation Season</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Avg. Daily Generation:</span>
                      <span className="font-medium">18.5 kWh</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Monthly Savings:</span>
                      <span className="font-medium text-success">$89.30</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Planning */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-eco-green" />
                  Financial Planning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">$1,247</div>
                    <div className="text-sm text-muted-foreground">Annual Savings Projected</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>ROI Improvement:</span>
                      <span className="font-medium text-success">+23%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Payback Period:</span>
                      <span className="font-medium">4.2 years</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white shadow-eco hover:shadow-glow">
                Start AI Billing Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIPaymentEngine