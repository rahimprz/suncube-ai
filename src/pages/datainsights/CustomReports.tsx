import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, PieChart } from "lucide-react";

export default function CustomReports() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Your Data, Your Way"
        subtitle="📄 Custom Reports & Export"
        description="Download dummy reports as PDF or CSV for CFOs, partners, or presentations."
        primaryAction={{
          label: "Download Report",
          href: "/portal"
        }}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-6 h-6 text-primary" />
                  <span>Sample Report Preview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 p-6 rounded-lg border-2 border-dashed">
                  <div className="text-center space-y-4">
                    <PieChart className="w-16 h-16 mx-auto text-primary" />
                    <h3 className="text-lg font-semibold">Monthly Performance Report</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete analysis with charts, metrics, and recommendations
                    </p>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <Download className="w-4 h-4 mr-2" />
                      Preview PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Available Reports</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Performance Summary</div>
                      <div className="text-sm text-muted-foreground">Monthly generation & efficiency</div>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="outline">PDF</Badge>
                      <Badge variant="outline">CSV</Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-eco-green/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Financial Analysis</div>
                      <div className="text-sm text-muted-foreground">ROI, savings, and projections</div>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="outline">PDF</Badge>
                      <Badge variant="outline">Excel</Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold">Maintenance Log</div>
                      <div className="text-sm text-muted-foreground">Service history & recommendations</div>
                    </div>
                    <Badge variant="outline">PDF</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Downloads</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Last 30 Days Summary (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Energy Data Export (CSV)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Annual Report (PDF)
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-eco-green" />
                  <span>Scheduled Reports</span>
                </h3>
                <div className="space-y-2">
                  <div className="text-sm p-2 bg-success/10 rounded">
                    <strong>Weekly:</strong> Performance summary every Monday
                  </div>
                  <div className="text-sm p-2 bg-primary/10 rounded">
                    <strong>Monthly:</strong> Financial report on 1st of month
                  </div>
                  <div className="text-sm p-2 bg-eco-green/10 rounded">
                    <strong>Quarterly:</strong> Complete analysis report
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