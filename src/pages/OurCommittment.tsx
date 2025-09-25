import { HeroSection } from "@/components/ui/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Server, 
  Leaf, 
  Recycle, 
  Award, 
  MapPin, 
  TreePine, 
  Download,
  Zap,
  Globe,
  CheckCircle,
  TrendingDown,
  BarChart3
} from "lucide-react"

const OurCommittment = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="We Don't Just Build Solar Tech. We Live It."
        subtitle="We're not just a company — we're a movement. Join us in building a sustainable future."
        description="From our development choices to cloud hosting, every decision at Suncube AI is rooted in sustainability."
        primaryAction={{
          label: "Read Our Sustainability Pledge",
          href: "/sustainability",
        }}
      />

      {/* Section 2: Low-Carbon Engineering Practices */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Server className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Low-Carbon Engineering Practices
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our backend hosting on green data centers and optimized code efficiency 
              means we use 37% fewer compute cycles than average platforms.
            </p>
          </div>

          {/* Infographic: Traditional vs Optimized Architecture */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <BarChart3 className="w-5 h-5" />
                  Traditional Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Compute Usage</span>
                    <span className="text-2xl font-bold text-red-600">100%</span>
                  </div>
                  <Progress value={100} className="h-3 bg-red-100" />
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Inefficient algorithms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Non-green hosting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>High energy consumption</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Zap className="w-5 h-5" />
                  Suncube Optimized Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Compute Usage</span>
                    <span className="text-2xl font-bold text-green-600">63%</span>
                  </div>
                  <Progress value={63} className="h-3 bg-green-100" />
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>AI-optimized algorithms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Green data centers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>37% energy reduction</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <TrendingDown className="w-4 h-4 mr-2" />
              Our backend runs on 37% fewer compute cycles than average platforms
            </Badge>
          </div>
        </div>
      </section>

      {/* Section 3: Circular Hardware Advocacy */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Recycle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Circular Hardware Advocacy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We only support panels made using recyclable materials and promote 
              manufacturers with comprehensive reuse and repurpose programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Recyclable Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  All supported solar panels use materials that can be fully recycled 
                  at end-of-life, reducing environmental impact.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Aluminum Frames</Badge>
                  <Badge variant="outline">Glass Panels</Badge>
                  <Badge variant="outline">Silicon Cells</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Preferred Vendors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We maintain a curated list of manufacturers with proven 
                  sustainability and circular economy practices.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>EPEAT Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>ISO 14001 Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Take-back Programs</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  Reuse Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Supporting manufacturers that offer comprehensive 
                  reuse and repurpose programs for end-of-life panels.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Component Recovery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Material Repurposing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Zero Waste Goals</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certification Logos */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Certifications We Support</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">EPEAT</span>
                </div>
                <span className="text-sm text-muted-foreground">EPEAT</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">ISO</span>
                </div>
                <span className="text-sm text-muted-foreground">ISO 14001</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">C2C</span>
                </div>
                <span className="text-sm text-muted-foreground">Cradle to Cradle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Carbon-Neutral Operations */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <TreePine className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Carbon-Neutral Operations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We track our emissions and support offset projects to maintain 
              carbon-neutral operations across all our activities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Carbon Offset Meter */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Our Carbon Footprint</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Office Emissions</span>
                    <span className="text-sm text-muted-foreground">24.5 tons CO₂</span>
                  </div>
                  <Progress value={65} className="h-3" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Offset Projects</span>
                    <span className="text-sm text-muted-foreground">25.2 tons CO₂</span>
                  </div>
                  <Progress value={67} className="h-3 bg-green-100" />
                  <div className="text-xs text-green-600 mt-1">+0.7 tons net positive</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">1,247</div>
                      <div className="text-sm text-muted-foreground">Trees Planted</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">45.2</div>
                      <div className="text-sm text-muted-foreground">MWh Clean Energy</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map with Reforestation Zones */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Reforestation Zones We Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border-2 border-dashed border-green-200">
                  {/* Simulated Map */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">Reforested areas we support</p>
                    </div>
                  </div>
                  
                  {/* Map Pins */}
                  <div className="absolute top-1/4 left-1/4">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Amazon Rainforest
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-1/3">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Pacific Northwest
                    </div>
                  </div>
                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      African Savanna
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Open Impact Reporting */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Open Impact Reporting
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with open-source values and planet-first decisions. 
              We believe in complete transparency about our environmental impact.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-dashed border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Monthly Company Sustainability Report</CardTitle>
                <CardDescription>
                  Preview of our comprehensive environmental impact assessment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">-37%</div>
                    <div className="text-sm text-muted-foreground">Energy Usage</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Green Hosting</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">+0.7t</div>
                    <div className="text-sm text-muted-foreground">Carbon Offset</div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold">Key Highlights This Month:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Reduced server energy consumption by 23% through AI optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Supported reforestation of 47 acres in the Amazon rainforest</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>All new hardware purchases from EPEAT Gold certified vendors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Office operations now 100% powered by renewable energy</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center pt-6">
                  <Button size="lg" className="bg-gradient-primary text-white shadow-eco hover:shadow-glow">
                    <Download className="w-4 h-4 mr-2" />
                    Download Company Impact PDF
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Complete 23-page sustainability report with detailed metrics
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurCommittment