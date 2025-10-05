import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Button } from "@/components/ui/button";
import { TrendingUp, Home, AlertTriangle, Download, Shield, Users, Bell, Zap, Clock, BarChart3, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function AIOptimization() {
  const [selectedCity, setSelectedCity] = useState("New York");
  const [systemSize, setSystemSize] = useState(5);
  const [showSensitiveData, setShowSensitiveData] = useState(false);

  const cities = [
    { name: "New York", roi: 18.5, payback: 5.2, co2Offset: 4.2 },
    { name: "Los Angeles", roi: 22.3, payback: 4.1, co2Offset: 5.1 },
    { name: "Miami", roi: 20.1, payback: 4.8, co2Offset: 4.8 },
    { name: "Seattle", roi: 15.2, payback: 6.8, co2Offset: 3.1 },
    { name: "Phoenix", roi: 25.7, payback: 3.9, co2Offset: 6.2 }
  ];

  const selectedCityData = cities.find(city => city.name === selectedCity);

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Smart Solar Starts at Home."
        subtitle="🧠 AI-Powered Optimization"
        description="From rooftops to dashboards — make every ray count with AI-enhanced solar for your home."
        primaryAction={{
          label: "Get a Smart Solar Plan",
          href: "/contact"
        }}
        
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span>Raw vs Optimized Yield</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EnergyChart />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Optimization Benefits</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Standard Output</span>
                    <span className="font-bold">24.5 kWh/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI-Optimized Output</span>
                    <span className="font-bold text-primary">31.2 kWh/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Efficiency Gain</span>
                    <span className="font-bold text-success">+27.3%</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">AI Learning Factors</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Weather pattern analysis</li>
                  <li>• Shading optimization</li>
                  <li>• Usage pattern matching</li>
                  <li>• Seasonal adjustments</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Intelligent Home Energy Monitoring */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🏠 Intelligent Home Energy Monitoring</h2>
            <p className="text-muted-foreground text-lg">Real-time insights across your entire home</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Real-time Generation + Consumption */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <span>Live Energy Flow</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span>Solar Generation</span>
                    <span className="font-bold text-green-600">2.4 kW</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span>Home Consumption</span>
                    <span className="font-bold text-blue-600">1.8 kW</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span>Grid Export</span>
                    <span className="font-bold text-purple-600">0.6 kW</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Room-wise Optimization */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Home className="w-6 h-6 text-primary" />
                  <span>Room Optimization</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Living Room</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Kitchen</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Bedrooms</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alerts Panel */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  <span>Smart Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <p className="text-sm text-yellow-800">High consumption detected in Kitchen</p>
                    <p className="text-xs text-yellow-600">2 minutes ago</p>
                  </div>
                  <div className="p-3 bg-green-50 border-l-4 border-green-400 rounded">
                    <p className="text-sm text-green-800">Optimal generation conditions</p>
                    <p className="text-xs text-green-600">5 minutes ago</p>
                  </div>
                  <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                    <p className="text-sm text-blue-800">Battery at 85% - Grid export active</p>
                    <p className="text-xs text-blue-600">10 minutes ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Predictive Alerts & Maintenance */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔔 Predictive Alerts & Maintenance</h2>
            <p className="text-muted-foreground text-lg">AI-powered insights to maximize your system performance</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Warning Card */}
            <Card className="p-6 border-l-4 border-orange-400">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-6 h-6 text-orange-500" />
                  <span>AI Maintenance Alert</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="font-semibold text-orange-800">⚠️ Clean panels in 2 days for 5% efficiency gain</p>
                    <p className="text-sm text-orange-600 mt-2">Current efficiency: 87% → Expected: 92%</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Alert Channels</span>
                      <div className="flex space-x-2">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">SMS</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Email</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">App</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Priority Level</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded font-medium">Medium</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Maintenance Timeline */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-primary" />
                  <span>Maintenance Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Panel Cleaning</p>
                      <p className="text-sm text-muted-foreground">Due in 2 days</p>
                    </div>
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">High Impact</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Inverter Check</p>
                      <p className="text-sm text-muted-foreground">Due in 2 weeks</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Medium Impact</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Annual Inspection</p>
                      <p className="text-sm text-muted-foreground">Due in 3 months</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Low Impact</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Savings Forecast + ROI */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">📈 Savings Forecast + ROI</h2>
            <p className="text-muted-foreground text-lg">See your potential savings based on location and system size</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Interactive Slider Tool */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <span>ROI Calculator</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Your City</label>
                    <select 
                      value={selectedCity} 
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      {cities.map(city => (
                        <option key={city.name} value={city.name}>{city.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">System Size: {systemSize} kW</label>
                    <input 
                      type="range" 
                      min="3" 
                      max="10" 
                      value={systemSize} 
                      onChange={(e) => setSystemSize(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>3 kW</span>
                      <span>10 kW</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Display */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Your Projected Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-600">{selectedCityData?.roi}%</p>
                      <p className="text-sm text-green-800">Annual ROI</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-blue-600">{selectedCityData?.payback} years</p>
                      <p className="text-sm text-blue-800">Payback Period</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-purple-600">{selectedCityData?.co2Offset} tons</p>
                    <p className="text-sm text-purple-800">Annual CO₂ Offset</p>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-lg font-semibold text-orange-800 mb-2">Estimated Annual Savings</p>
                    <p className="text-3xl font-bold text-orange-600">${(systemSize * selectedCityData!.roi * 100).toFixed(0)}</p>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Projection Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Data Privacy & Role-based Access */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔒 Data Privacy & Role-based Access</h2>
            <p className="text-muted-foreground text-lg">Secure, personalized views for every family member</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Roles */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-primary" />
                  <span>Family Member Access</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">P</div>
                      <div>
                        <p className="font-medium">Parents</p>
                        <p className="text-sm text-muted-foreground">Full access + billing</p>
                      </div>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Admin</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">K</div>
                      <div>
                        <p className="font-medium">Kids</p>
                        <p className="text-sm text-muted-foreground">Basic monitoring only</p>
                      </div>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">View</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">T</div>
                      <div>
                        <p className="font-medium">Tenants</p>
                        <p className="text-sm text-muted-foreground">Usage tracking only</p>
                      </div>
                    </div>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Limited</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <span>Security Assurance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Data Encryption</span>
                    <span className="text-green-600">✓ Active</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Two-Factor Auth</span>
                    <span className="text-green-600">✓ Enabled</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Access Tokens</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">
                        {showSensitiveData ? "sk_live_abc123..." : "••••••••••••••••"}
                      </span>
                      <button 
                        onClick={() => setShowSensitiveData(!showSensitiveData)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {showSensitiveData ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Last Security Scan</span>
                    <span className="text-green-600">2 hours ago</span>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>✓ All systems secure</strong><br/>
                      No vulnerabilities detected
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}