import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EnergyChart } from "@/components/EnergyChart";
import { AIAlerts } from "@/components/AIAlerts";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Shield, 
  Settings, 
  LogIn,
  Eye,
  EyeOff,
  Zap,
  Activity,
  TrendingUp,
  Grid3x3,
  Home,
  Building2
} from "lucide-react";

export default function Portal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<"admin" | "user" | "operator" | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "", role: "" });
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo login - accept any credentials
    if (credentials.email && credentials.password && credentials.role) {
      setIsLoggedIn(true);
      setUserRole(credentials.role as "admin" | "user" | "operator");
      toast({
        title: "Login Successful!",
        description: `Welcome to the ${credentials.role} dashboard.`,
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setCredentials({ email: "", password: "", role: "" });
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  // Mock transaction data for blockchain demo
  const blockchainTransactions = [
    {
      id: "0x1a2b3c...",
      timestamp: new Date().toISOString(),
      type: "Energy Sale",
      amount: 75.23,
      kWh: 251.2,
      status: "Confirmed",
      blockNumber: 12845672
    },
    {
      id: "0x4d5e6f...",
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      type: "Grid Service",
      amount: 18.95,
      kWh: 0,
      status: "Confirmed", 
      blockNumber: 12845621
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-eco flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Suncube AI Portal</CardTitle>
            <p className="text-muted-foreground">
              Access your AI-powered solar dashboard
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={credentials.email}
                  onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">User Role</Label>
                <Select value={credentials.role} onValueChange={(value) => setCredentials(prev => ({ ...prev, role: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4" />
                        <span>Admin - Full Access</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="user">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>User - Personal Dashboard</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="operator">
                      <div className="flex items-center space-x-2">
                        <Settings className="w-4 h-4" />
                        <span>Grid Operator - System View</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-gradient-primary text-white">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>Demo Credentials - Use any email/password</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-foreground">Suncube AI Dashboard</h1>
                <p className="text-sm text-muted-foreground">
                  {userRole === "admin" && "Administrator Panel"}
                  {userRole === "user" && "Personal Energy Dashboard"}
                  {userRole === "operator" && "Grid Operations Center"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="capitalize">
                <User className="w-3 h-3 mr-1" />
                {userRole}
              </Badge>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <Activity className="w-4 h-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="blockchain" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Blockchain</span>
            </TabsTrigger>
            <TabsTrigger value="ai-alerts" className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>AI Alerts</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Energy Overview</h2>
              <Badge variant="secondary">Live Data</Badge>
            </div>
            
            <EnergyChart />

            {userRole === "admin" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Systems</CardTitle>
                    <Home className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,247</div>
                    <p className="text-xs text-muted-foreground">+12 from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Capacity</CardTitle>
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">47.3 MW</div>
                    <p className="text-xs text-muted-foreground">Across all installations</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
                    <Grid3x3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">99.2%</div>
                    <p className="text-xs text-muted-foreground">Above target (99.0%)</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          <TabsContent value="analytics" className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Performance Analytics</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Energy Production Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">AI-Generated Production Chart</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Efficiency Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">AI Optimization</span>
                      <Badge className="bg-success text-white">+23%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Predictive Maintenance</span>
                      <Badge className="bg-primary text-white">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Grid Integration</span>
                      <Badge className="bg-eco-green text-white">Optimal</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="blockchain" className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Blockchain Transactions</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-grid-blue" />
                  <span>Recent Transactions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blockchainTransactions.map((tx, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-sm">{tx.type}</span>
                          <Badge variant="outline" className="text-xs">Block #{tx.blockNumber}</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          TX: {tx.id} • {new Date(tx.timestamp).toLocaleString()}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-success">${tx.amount.toFixed(2)}</div>
                        {tx.kWh > 0 && (
                          <div className="text-xs text-muted-foreground">{tx.kWh} kWh</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-alerts" className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">AI Monitoring & Alerts</h2>
            <AIAlerts />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}