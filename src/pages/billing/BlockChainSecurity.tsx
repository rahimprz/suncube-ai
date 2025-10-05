import { HeroSection } from "@/components/ui/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Battery, 
  Settings, 
  DollarSign, 
  Leaf,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  Building,
  UserCheck
} from "lucide-react"

const BlockChainSecurity = () => {
  const [showEditError, setShowEditError] = useState(false)
  const [selectedContract, setSelectedContract] = useState("grid-sales")

  // Dummy blockchain data
  const blockchainBlocks = [
    {
      id: "BLK-001",
      type: "Panel Generation",
      timestamp: "2024-01-15 14:30:22",
      data: "Generated 2.4 kWh",
      hash: "0x7a8b9c...",
      status: "verified"
    },
    {
      id: "BLK-002", 
      type: "Maintenance",
      timestamp: "2024-01-15 15:45:11",
      data: "Battery health check completed",
      hash: "0x1d2e3f...",
      status: "verified"
    },
    {
      id: "BLK-003",
      type: "Payment",
      timestamp: "2024-01-15 16:20:33",
      data: "Grid sale: $12.50",
      hash: "0x4g5h6i...",
      status: "pending"
    }
  ]

  const handleEditAttempt = () => {
    setShowEditError(true)
    setTimeout(() => setShowEditError(false), 3000)
  }

  return (
    <div className="min-h-screen">
        <HeroSection
        title="Every Watt Logged. Every Transaction Secured."
        subtitle="Our blockchain-based energy tracking system ensures every transaction is immutable, transparent, and secure."
        description="We showcase how blockchain-inspired ledgers keep your energy data tamper-proof, even in a simulated environment. "
        primaryAction={
            {
                label: "Explore Blockchain Demo",
                href: "/solutions/billing/blockchain-security",
            }
        }
        />

        {/* Section 2: Immutable Record Chain */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🔗 Immutable Record Chain
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our blockchain explorer shows simulated energy transactions in real-time, 
                demonstrating how every action is permanently recorded and verified.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-lg">Panel Generation Blocks</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Real-time solar panel output recorded as immutable blocks</p>
                  <Badge className="mt-2" variant="secondary">Live Data</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">Maintenance Actions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">All system maintenance logged with timestamps and verification</p>
                  <Badge className="mt-2" variant="secondary">Audit Trail</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-purple-600" />
                    <CardTitle className="text-lg">Payment Settlements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Automated payment processing with smart contract execution</p>
                  <Badge className="mt-2" variant="secondary">Auto-Settle</Badge>
                </CardContent>
              </Card>
            </div>

            {/* Blockchain Explorer */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Blockchain Explorer
                </CardTitle>
                <CardDescription>
                  Live view of energy transaction blocks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blockchainBlocks.map((block) => (
                    <div key={block.id} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="text-sm font-mono bg-gray-200 px-2 py-1 rounded">
                          {block.id}
                        </div>
                        <div>
                          <div className="font-medium">{block.type}</div>
                          <div className="text-sm text-gray-500">{block.timestamp}</div>
                        </div>
                        <div className="text-sm text-gray-600">{block.data}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs font-mono text-gray-400">{block.hash}</div>
                        <Badge variant={block.status === 'verified' ? 'default' : 'secondary'}>
                          {block.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: Decentralized Ledger Flow */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🔄 Decentralized Ledger Flow
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understand how decentralization ensures no single point of failure and 
                how different user roles contribute to the verification process.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">What Decentralization Means</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-medium">No Single Point of Failure</h4>
                      <p className="text-gray-600 text-sm">Energy data is distributed across multiple nodes, ensuring system resilience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Enhanced Security</h4>
                      <p className="text-gray-600 text-sm">Multiple verification points prevent unauthorized data manipulation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Transparency</h4>
                      <p className="text-gray-600 text-sm">All participants can verify transactions while maintaining privacy</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">User Roles & Permissions</h3>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-red-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Building className="h-5 w-5 text-red-600" />
                        <CardTitle className="text-lg">Admin</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-2">System configuration and user management</p>
                      <div className="flex gap-1">
                        <Badge variant="outline" className="text-xs">Read</Badge>
                        <Badge variant="outline" className="text-xs">Write</Badge>
                        <Badge variant="outline" className="text-xs">Admin</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        <CardTitle className="text-lg">User</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-2">View own energy data and transactions</p>
                      <div className="flex gap-1">
                        <Badge variant="outline" className="text-xs">Read</Badge>
                        <Badge variant="outline" className="text-xs">Limited Write</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <UserCheck className="h-5 w-5 text-green-600" />
                        <CardTitle className="text-lg">Validator</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-2">Verify and approve transactions</p>
                      <div className="flex gap-1">
                        <Badge variant="outline" className="text-xs">Read</Badge>
                        <Badge variant="outline" className="text-xs">Verify</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Energy Token Verification Diagram */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-center mb-8">How Energy Tokens Get Verified</h3>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      1
                    </div>
                    <p className="text-sm font-medium">Energy Generated</p>
                  </div>
                  <div className="w-12 h-0.5 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      2
                    </div>
                    <p className="text-sm font-medium">Token Created</p>
                  </div>
                  <div className="w-12 h-0.5 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      3
                    </div>
                    <p className="text-sm font-medium">Validators Check</p>
                  </div>
                  <div className="w-12 h-0.5 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      4
                    </div>
                    <p className="text-sm font-medium">Block Added</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Tamper-Proof Audit Trail */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🔎 Tamper-Proof Audit Trail
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every action is time-stamped and cryptographically secured. 
                Try to edit a block and see why it's impossible.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Simulated Time-Stamped Logs</h3>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-yellow-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Settings className="h-5 w-5 text-yellow-600" />
                        <CardTitle className="text-lg">Maintenance Log</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Battery health check</span>
                          <span className="text-gray-500">2024-01-15 15:45:11</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Panel cleaning</span>
                          <span className="text-gray-500">2024-01-14 09:20:33</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Inverter inspection</span>
                          <span className="text-gray-500">2024-01-13 11:15:42</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Battery className="h-5 w-5 text-green-600" />
                        <CardTitle className="text-lg">Battery Discharge</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Peak discharge: 5.2 kWh</span>
                          <span className="text-gray-500">2024-01-15 18:30:15</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Grid backup: 2.1 kWh</span>
                          <span className="text-gray-500">2024-01-15 19:45:22</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-blue-600" />
                        <CardTitle className="text-lg">Load Changes</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>AC unit activated</span>
                          <span className="text-gray-500">2024-01-15 16:20:08</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>EV charging started</span>
                          <span className="text-gray-500">2024-01-15 17:10:45</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Interactive: Try to Edit a Block</h3>
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle>Block Editor (Simulation)</CardTitle>
                    <CardDescription>
                      Attempt to modify a blockchain block
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="blockData">Block Data</Label>
                      <Input 
                        id="blockData" 
                        defaultValue="Generated 2.4 kWh"
                        className="font-mono"
                      />
                    </div>
                    <div>
                      <Label htmlFor="timestamp">Timestamp</Label>
                      <Input 
                        id="timestamp" 
                        defaultValue="2024-01-15 14:30:22"
                        className="font-mono"
                      />
                    </div>
                    <Button 
                      onClick={handleEditAttempt}
                      className="w-full"
                      variant="destructive"
                    >
                      Try to Edit Block
                    </Button>
                  </CardContent>
                </Card>

                {showEditError && (
                  <Alert className="mt-4 border-red-200 bg-red-50">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      <strong>Error:</strong> Block modification not permitted. 
                      This block is cryptographically secured and immutable.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Why Can't You Edit?</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Each block contains a cryptographic hash</li>
                    <li>• Changing data breaks the chain integrity</li>
                    <li>• Multiple validators must approve changes</li>
                    <li>• Historical data remains permanently secure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Smart Contract Simulation */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                💡 Smart Contract Simulation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore how smart contracts automate energy transactions, 
                payments, and carbon credit settlements.
              </p>
            </div>

            <Tabs value={selectedContract} onValueChange={setSelectedContract} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="grid-sales">Grid Sales</TabsTrigger>
                <TabsTrigger value="carbon-credits">Carbon Credits</TabsTrigger>
                <TabsTrigger value="usage-thresholds">Usage Thresholds</TabsTrigger>
              </TabsList>

              <TabsContent value="grid-sales" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      Grid Sales Smart Contract
                    </CardTitle>
                    <CardDescription>
                      Automatically sell excess energy to the grid when generation exceeds consumption
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Current Generation</Label>
                          <Input value="3.2 kWh" readOnly className="bg-gray-50" />
                        </div>
                        <div>
                          <Label>Current Consumption</Label>
                          <Input value="1.8 kWh" readOnly className="bg-gray-50" />
                        </div>
                      </div>
                      <div>
                        <Label>Excess Energy Available</Label>
                        <Input value="1.4 kWh" readOnly className="bg-green-50 border-green-200" />
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 text-green-800">
                          <CheckCircle className="h-4 w-4" />
                          <span className="font-medium">Contract will execute: Sell 1.4 kWh to grid at $0.12/kWh</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="carbon-credits" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                      Carbon Credits Smart Contract
                    </CardTitle>
                    <CardDescription>
                      Automatically calculate and trade carbon credits based on renewable energy generation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Monthly Solar Generation</Label>
                          <Input value="450 kWh" readOnly className="bg-gray-50" />
                        </div>
                        <div>
                          <Label>Carbon Offset Factor</Label>
                          <Input value="0.5 kg CO2/kWh" readOnly className="bg-gray-50" />
                        </div>
                      </div>
                      <div>
                        <Label>Carbon Credits Generated</Label>
                        <Input value="225 kg CO2" readOnly className="bg-green-50 border-green-200" />
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 text-green-800">
                          <CheckCircle className="h-4 w-4" />
                          <span className="font-medium">Contract will execute: Trade 225 kg CO2 credits at $15/ton</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="usage-thresholds" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      Usage Thresholds Smart Contract
                    </CardTitle>
                    <CardDescription>
                      Monitor energy consumption and trigger alerts when thresholds are exceeded
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Daily Usage Limit</Label>
                          <Input value="20 kWh" readOnly className="bg-gray-50" />
                        </div>
                        <div>
                          <Label>Current Usage</Label>
                          <Input value="18.5 kWh" readOnly className="bg-gray-50" />
                        </div>
                      </div>
                      <div>
                        <Label>Usage Percentage</Label>
                        <Input value="92.5%" readOnly className="bg-yellow-50 border-yellow-200" />
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <div className="flex items-center gap-2 text-yellow-800">
                          <AlertTriangle className="h-4 w-4" />
                          <span className="font-medium">Warning: Usage approaching daily limit</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Smart Contract Benefits</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-medium mb-2">Automated Execution</h4>
                      <p className="text-sm text-gray-600">No manual intervention required</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-medium mb-2">Tamper-Proof</h4>
                      <p className="text-sm text-gray-600">Immutable contract terms</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <DollarSign className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-medium mb-2">Cost Efficient</h4>
                      <p className="text-sm text-gray-600">Reduced transaction costs</p>
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

export default BlockChainSecurity