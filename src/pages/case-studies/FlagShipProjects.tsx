import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { HeroSection } from '@/components/ui/hero-section';
import { 
  Building2, 
  TrendingUp, 
  Leaf, 
  Users, 
  BarChart3, 
  Lightbulb, 
  Cpu, 
  Network, 
  ArrowRight,
  CheckCircle,
  Target,
  Brain,
  Globe,
  Factory,
  Home,
  Coins,
  Shield,
  Activity,
  Gauge
} from 'lucide-react';

const FlagShipProjects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection
        title="Smart Energy at Scale."
        subtitle="Explore projects where AI-driven solar meets visionary infrastructure. These are simulations for now — but tomorrow, they'll be real."
        description="Real homeowners achieving remarkable savings with AI-powered solar optimization"
        primaryAction={
          {
            label: "View Project Highlights",
            href: "/case-studies/flag-ship-projects",
          }
        }
      />
      {/* Section 2: Solar Smart City Simulation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              <Building2 className="w-4 h-4 mr-2" />
              Urban Innovation
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              "Project Zenith"
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dummy model of an urban solar + AI integrated township.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 3D Mock Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <Building2 className="w-24 h-24 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">3D City Model</h3>
                  <p className="opacity-90">Interactive solar panel visualization</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Live Demo
              </div>
            </div>

            {/* Dashboard Embed */}
            <div className="space-y-6">
              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                    Panel Performance Across Towers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Tower A</span>
                        <span className="text-sm text-green-600">94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Tower B</span>
                        <span className="text-sm text-green-600">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Tower C</span>
                        <span className="text-sm text-green-600">91%</span>
                      </div>
                      <Progress value={91} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Network className="w-5 h-5 mr-2 text-green-600" />
                    Grid Interactions via AI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">2.4MW</div>
                      <div className="text-sm text-gray-600">Peak Output</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">98%</div>
                      <div className="text-sm text-gray-600">Efficiency</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="w-5 h-5 mr-2 text-purple-600" />
                    CO₂ Offset Community Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">1,247</div>
                    <div className="text-sm text-gray-600">Tons CO₂ Saved Annually</div>
                    <div className="text-xs text-gray-500 mt-1">Equivalent to 2,494 trees planted</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Commercial Campus Optimization */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              <Factory className="w-4 h-4 mr-2" />
              Industrial Innovation
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              "Suncube AI @ Industrial Logistics Hub"
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI allocates energy to forklifts, servers, HVAC.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Floorplan/Heatmap Layout */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Energy Zones Heatmap</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-red-100 border-2 border-red-300 p-4 rounded-lg text-center">
                    <div className="text-sm font-medium text-red-700">High Load</div>
                    <div className="text-xs text-red-600">Forklifts</div>
                  </div>
                  <div className="bg-yellow-100 border-2 border-yellow-300 p-4 rounded-lg text-center">
                    <div className="text-sm font-medium text-yellow-700">Medium Load</div>
                    <div className="text-xs text-yellow-600">Servers</div>
                  </div>
                  <div className="bg-green-100 border-2 border-green-300 p-4 rounded-lg text-center">
                    <div className="text-sm font-medium text-green-700">Low Load</div>
                    <div className="text-xs text-green-600">HVAC</div>
                  </div>
                  <div className="bg-blue-100 border-2 border-blue-300 p-4 rounded-lg text-center">
                    <div className="text-sm font-medium text-blue-700">Storage</div>
                    <div className="text-xs text-blue-600">Batteries</div>
                  </div>
                  <div className="bg-purple-100 border-2 border-purple-300 p-4 rounded-lg text-center">
                    <div className="text-sm font-medium text-purple-700">AI Control</div>
                    <div className="text-xs text-purple-600">Center</div>
                  </div>
                  <div className="bg-orange-100 border-2 border-orange-300 p-4 rounded-lg text-center">
                    <div className="text-sm font-medium text-orange-700">Solar</div>
                    <div className="text-xs text-orange-600">Panels</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome Stats */}
            <div className="space-y-6">
              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Simulated Energy Cost Reduction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600 mb-2">22%</div>
                    <div className="text-lg text-green-700 mb-4">Energy Cost Cut</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white p-3 rounded-lg">
                        <div className="font-semibold text-gray-800">$847K</div>
                        <div className="text-gray-600">Annual Savings</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <div className="font-semibold text-gray-800">3.2MW</div>
                        <div className="text-gray-600">Peak Demand</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Cpu className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold text-gray-800">AI-Driven</div>
                    <div className="text-sm text-gray-600">Allocation</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Activity className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <div className="text-2xl font-bold text-gray-800">Real-time</div>
                    <div className="text-sm text-gray-600">Optimization</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Microgrid + Blockchain Pilot */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              <Coins className="w-4 h-4 mr-2" />
              Blockchain Innovation
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              "Blockchain Valley"
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simulated village with peer-to-peer energy trade and community rewards.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Ledger + Animated Tokens Flowchart */}
            <div className="space-y-6">
              <Card className="border-2 border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Coins className="w-5 h-5 mr-2 text-orange-600" />
                    Daily Transaction Logs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <div className="font-medium text-green-800">House A → House B</div>
                        <div className="text-sm text-green-600">2.4 kWh transferred</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-800">+12 tokens</div>
                        <div className="text-xs text-green-600">10:30 AM</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <div>
                        <div className="font-medium text-blue-800">House C → Grid</div>
                        <div className="text-sm text-blue-600">1.8 kWh sold</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-blue-800">+9 tokens</div>
                        <div className="text-xs text-blue-600">11:15 AM</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <div>
                        <div className="font-medium text-purple-800">Community Pool</div>
                        <div className="text-sm text-purple-600">5.2 kWh shared</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-purple-800">+26 tokens</div>
                        <div className="text-xs text-purple-600">12:00 PM</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-600" />
                    Blockchain Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Immutable transaction records</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Smart contract automation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Decentralized verification</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Animated Tokens Flowchart */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="mb-6">
                    <Coins className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">Token Flow Animation</h3>
                    <p className="opacity-90">Peer-to-peer energy trading visualization</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <div className="font-bold">House A</div>
                      <div className="text-xs opacity-80">Producer</div>
                    </div>
                    <div className="bg-white/20 p-3 rounded-lg">
                      <div className="font-bold">House B</div>
                      <div className="text-xs opacity-80">Consumer</div>
                    </div>
                    <div className="bg-white/20 p-3 rounded-lg">
                      <div className="font-bold">Pool</div>
                      <div className="text-xs opacity-80">Community</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Live Demo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Lessons from the Field */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              <Brain className="w-4 h-4 mr-2" />
              AI Insights
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Lessons from the Field
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insight cards from each project showing what worked, what AI optimized best, 
              and how simulated user behavior influenced outputs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* What Worked */}
            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    What Worked
                  </CardTitle>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Success
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Target className="w-4 h-4 mr-2 mt-1 text-green-600" />
                  <div>
                    <div className="font-medium">Predictive Analytics</div>
                    <div className="text-sm text-gray-600">AI accurately forecasted energy demand patterns</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-4 h-4 mr-2 mt-1 text-green-600" />
                  <div>
                    <div className="font-medium">Community Engagement</div>
                    <div className="text-sm text-gray-600">High participation in peer-to-peer trading</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Gauge className="w-4 h-4 mr-2 mt-1 text-green-600" />
                  <div>
                    <div className="font-medium">Real-time Optimization</div>
                    <div className="text-sm text-gray-600">Dynamic load balancing improved efficiency</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What AI Optimized Best */}
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-blue-600" />
                    AI Optimization
                  </CardTitle>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    AI Focus
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <BarChart3 className="w-4 h-4 mr-2 mt-1 text-blue-600" />
                  <div>
                    <div className="font-medium">Load Distribution</div>
                    <div className="text-sm text-gray-600">Intelligent energy routing across systems</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-4 h-4 mr-2 mt-1 text-blue-600" />
                  <div>
                    <div className="font-medium">Peak Shaving</div>
                    <div className="text-sm text-gray-600">Reduced demand charges by 35%</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Activity className="w-4 h-4 mr-2 mt-1 text-blue-600" />
                  <div>
                    <div className="font-medium">Predictive Maintenance</div>
                    <div className="text-sm text-gray-600">Prevented 12 equipment failures</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Behavior Influence */}
            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    User Behavior
                  </CardTitle>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">
                    Insights
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Home className="w-4 h-4 mr-2 mt-1 text-purple-600" />
                  <div>
                    <div className="font-medium">Residential Patterns</div>
                    <div className="text-sm text-gray-600">Peak usage during evening hours</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Factory className="w-4 h-4 mr-2 mt-1 text-purple-600" />
                  <div>
                    <div className="font-medium">Industrial Cycles</div>
                    <div className="text-sm text-gray-600">Shift-based consumption patterns</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="w-4 h-4 mr-2 mt-1 text-purple-600" />
                  <div>
                    <div className="font-medium">Weather Response</div>
                    <div className="text-sm text-gray-600">Adaptive behavior to climate changes</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <Lightbulb className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Scale Your Energy Infrastructure?
                </h3>
                <p className="text-gray-600 mb-6">
                  These simulations demonstrate the potential of AI-driven solar solutions. 
                  Let's turn your vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlagShipProjects;
