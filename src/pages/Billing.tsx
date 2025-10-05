import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { ImageShowcase } from "@/components/ImageShowcase";
import { Link } from "react-router-dom";
import { CreditCard, Shield, TrendingUp, Receipt, Coins, Lock, Activity, DollarSign, CircleCheck as CheckCircle, Download } from "lucide-react";

const mockTransactions = [
  {
    id: "TX001",
    date: "2024-01-15",
    type: "Energy Sale",
    amount: 45.32,
    kWh: 150.5,
    price: 0.301,
    status: "Completed"
  },
  {
    id: "TX002", 
    date: "2024-01-14",
    type: "Grid Service",
    amount: 12.75,
    kWh: 0,
    price: 0,
    status: "Completed"
  },
  {
    id: "TX003",
    date: "2024-01-13", 
    type: "Energy Purchase",
    amount: -8.50,
    kWh: -25.2,
    price: 0.337,
    status: "Completed"
  }
];

export default function Billing() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Smart Billing & Blockchain Security"
        subtitle="💰 AI Payment Engine"
        description="Transparent, automated energy billing with blockchain security and real-time transaction tracking. Maximize your solar investment with intelligent payment optimization."
        primaryAction={{
          label: "View Billing Demo",
          href: "/portal"
        }}
        secondaryAction={{
          label: "Learn More",
          href: "/contact"
        }}
      />

      <ImageShowcase
        imageUrl="https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        altText="Blockchain and secure payments"
      />

      {/* Features Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/billing/ai-payment-engine" className="text-center hover:shadow-eco transition-all duration-300">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>AI Payment Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automated billing with AI-optimized pricing and payment scheduling for maximum savings.
                </p>
              </CardContent>
            </Link>

            <Link to="/billing/blockchain-security" className="text-center hover:shadow-eco transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-grid-blue mx-auto mb-4" />
                <CardTitle>Blockchain Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Immutable transaction records with smart contract automation and cryptographic security.
                </p>
              </CardContent>
            </Link>

            <Link to="/billing/transparency" className="text-center hover:shadow-eco transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-success mx-auto mb-4" />
                <CardTitle>Transparency & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real-time transaction visibility with detailed analytics and comprehensive reporting.
                </p>
              </CardContent>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Transaction Dashboard */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Live Demo</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Real-Time Transaction Tracking
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monitor your energy transactions in real-time with complete transparency and blockchain verification.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Current Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-primary" />
                  <span>Today's Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Energy Sold</span>
                  <span className="font-medium">450.3 kWh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Revenue</span>
                  <span className="font-medium text-success">$135.42</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Grid Services</span>
                  <span className="font-medium text-primary">$24.80</span>
                </div>
                <div className="flex justify-between items-center border-t pt-2">
                  <span className="font-medium">Net Earnings</span>
                  <span className="font-bold text-success">$160.22</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Receipt className="w-5 h-5 text-grid-blue" />
                  <span>Recent Transactions</span>
                </CardTitle>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockTransactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${tx.amount > 0 ? 'bg-success' : 'bg-warning'}`}></div>
                        <div>
                          <div className="font-medium text-sm">{tx.type}</div>
                          <div className="text-xs text-muted-foreground">{tx.date} • {tx.id}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-medium ${tx.amount > 0 ? 'text-success' : 'text-warning'}`}>
                          {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toFixed(2)}
                        </div>
                        {tx.kWh !== 0 && (
                          <div className="text-xs text-muted-foreground">
                            {tx.kWh > 0 ? '+' : ''}{tx.kWh} kWh
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blockchain Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Blockchain Technology</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Blockchain for Energy?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-success mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Immutable Records</h3>
                  <p className="text-muted-foreground">All energy transactions are permanently recorded on the blockchain, ensuring complete transparency and preventing fraud.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-success mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Smart Contracts</h3>
                  <p className="text-muted-foreground">Automated contract execution ensures instant, accurate payments without intermediaries or delays.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-success mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Decentralized Trading</h3>
                  <p className="text-muted-foreground">Participate in peer-to-peer energy trading markets with direct, secure transactions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-success mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Real-time Settlement</h3>
                  <p className="text-muted-foreground">Instant payment processing with real-time settlement and automatic reconciliation.</p>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <div className="text-center space-y-6">
                <Lock className="w-16 h-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Security First</h3>
                <p className="text-muted-foreground">
                  Our blockchain implementation uses enterprise-grade cryptography and multi-signature wallets to ensure maximum security for all energy transactions.
                </p>
                <Badge variant="outline" className="text-primary border-primary">
                  256-bit Encryption
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}