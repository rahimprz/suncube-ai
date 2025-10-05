import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/EnergyChart";
import { Progress } from "@/components/ui/progress";
import { DollarSign, TrendingUp, Calendar } from "lucide-react";

export default function ROIAnalytics() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Prove The Payback."
        subtitle="💰 ROI Analytics"
        description="See dummy cost savings and ROI graphs for your entire fleet."
        primaryAction={{
          label: "Check ROI Report",
          href: "/portal"
        }}
        backAction={{
          label: "Back to Commercial Solar",
          href: "/solutions"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Total Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">$245,000</div>
                <div className="text-sm text-muted-foreground mt-2">Initial system cost</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <CardTitle>Annual Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">$42,680</div>
                <div className="text-sm text-muted-foreground mt-2">Year-over-year savings</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-eco-green/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Calendar className="w-6 h-6 text-eco-green" />
                </div>
                <CardTitle>Payback Period</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-eco-green">5.7 years</div>
                <div className="text-sm text-muted-foreground mt-2">Break-even timeline</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span>ROI vs Time</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EnergyChart />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Investment Recovery</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Progress to Break-even</span>
                      <span className="font-bold">42% ($102,860)</span>
                    </div>
                    <Progress value={42} className="h-3" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary">2.4</div>
                      <div className="text-sm text-muted-foreground">Years elapsed</div>
                    </div>
                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-eco-green">3.3</div>
                      <div className="text-sm text-muted-foreground">Years remaining</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Financial Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Energy Cost Savings</span>
                    <span className="font-bold">$38,240/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax Credits & Incentives</span>
                    <span className="font-bold">$2,850/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbon Credit Revenue</span>
                    <span className="font-bold">$1,590/year</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Total Annual Benefit</span>
                    <span className="font-bold text-primary">$42,680/year</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">25-Year Projection</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Savings</span>
                    <span className="font-bold text-success">$1,067,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Net Profit</span>
                    <span className="font-bold text-primary">$822,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROI</span>
                    <span className="font-bold text-primary">335%</span>
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