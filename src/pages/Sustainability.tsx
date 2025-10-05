import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { ImageShowcase } from "@/components/ImageShowcase";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, TreePine, Droplets, Wind, Target, TrendingUp, Award, Users, Download, Share2, ChartBar as BarChart3, Calendar, Zap, Car, Globe, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

// Interactive CO₂ Offset Simulation Data
const timeFrameData = {
  daily: {
    co2Saved: 14.2,
    treesEquivalent: 178,
    carEmissions: 32.5,
    waterSaved: 1250
  },
  monthly: {
    co2Saved: 426,
    treesEquivalent: 5325,
    carEmissions: 975,
    waterSaved: 37500
  },
  lifetime: {
    co2Saved: 1250,
    treesEquivalent: 15625,
    carEmissions: 2875,
    waterSaved: 890000
  }
};

// Grid vs Solar Comparison Data
const energyComparison = {
  solar: {
    carbonIntensity: 0.04, // kg CO2/kWh
    color: "#10b981"
  },
  grid: {
    carbonIntensity: 0.85, // kg CO2/kWh
    color: "#ef4444"
  }
};

export default function Sustainability() {
  const [timeFrame, setTimeFrame] = useState("lifetime");
  const [goalTons, setGoalTons] = useState(10);
  const [showComparison, setShowComparison] = useState(false);
  const [currentData, setCurrentData] = useState(timeFrameData.lifetime);

  useEffect(() => {
    setCurrentData(timeFrameData[timeFrame as keyof typeof timeFrameData]);
  }, [timeFrame]);

  const calculateMonthsToGoal = () => {
    const monthlyCO2 = timeFrameData.monthly.co2Saved;
    return Math.ceil(goalTons / monthlyCO2);
  };

  const handleDownloadReport = () => {
    const reportData = {
      name: "Your Solar System",
      systemSize: "5.2 kW",
      lifetimeOffset: `${currentData.co2Saved.toFixed(1)} tons CO₂`,
      treesEquivalent: currentData.treesEquivalent.toLocaleString(),
      carEmissions: `${currentData.carEmissions.toFixed(0)} miles`,
      generatedDate: new Date().toLocaleDateString()
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sustainability-report.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = (platform: string) => {
    const message = `I've prevented ${currentData.co2Saved.toFixed(1)} tons of CO₂ emissions with my solar system! 🌱☀️ #SolarPower #Sustainability`;
    const url = window.location.href;
    
    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent('My Solar Impact')}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(message + ' ' + url)}`
    };
    
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Track Your Solar Footprint. Save the Planet in Kilowatts."
        subtitle="🌱 Environmental Impact"
        description="See how your switch to solar contributes to the planet — one carbon unit at a time. Simulated dashboards. Real insights."
        primaryAction={{
          label: "Explore My Offset",
          href: "/contact"
        }}
      />

      <ImageShowcase
        imageUrl="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        altText="Environmental sustainability"
      />

      {/* Section 2: Real-Time CO₂ Offset Simulation */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Live Impact</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Real-Time CO₂ Offset Simulation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interactive dashboard showing your environmental impact with animated progress tracking.
            </p>
          </div>

          {/* Time Frame Toggle */}
          <div className="flex justify-center mb-12">
            <Tabs value={timeFrame} onValueChange={setTimeFrame} className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="daily" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Daily
                </TabsTrigger>
                <TabsTrigger value="monthly" className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="lifetime" className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Lifetime
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Animated Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-500 transform hover:scale-105">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-2 animate-pulse">
                  <Leaf className="w-8 h-8 text-green-500" />
                </div>
                <CardTitle className="text-sm text-muted-foreground">CO₂ Prevented</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="animate-in slide-in-from-bottom-2 duration-500">
                  <div className="text-3xl font-bold text-green-600">{currentData.co2Saved.toFixed(1)}</div>
                  <div className="text-sm text-muted-foreground">tons</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2 bg-green-100" />
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-500 transform hover:scale-105">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-2 animate-pulse">
                  <TreePine className="w-8 h-8 text-emerald-500" />
                </div>
                <CardTitle className="text-sm text-muted-foreground">Trees Equivalent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="animate-in slide-in-from-bottom-2 duration-500">
                  <div className="text-3xl font-bold text-emerald-600">{currentData.treesEquivalent.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">trees</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-emerald-100" />
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-500 transform hover:scale-105">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-2 animate-pulse">
                  <Car className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-sm text-muted-foreground">Car Emissions Avoided</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="animate-in slide-in-from-bottom-2 duration-500">
                  <div className="text-3xl font-bold text-blue-600">{currentData.carEmissions.toFixed(0)}</div>
                  <div className="text-sm text-muted-foreground">miles</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2 bg-blue-100" />
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-500 transform hover:scale-105">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-2 animate-pulse">
                  <Droplets className="w-8 h-8 text-cyan-500" />
                </div>
                <CardTitle className="text-sm text-muted-foreground">Water Saved</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="animate-in slide-in-from-bottom-2 duration-500">
                  <div className="text-3xl font-bold text-cyan-600">{(currentData.waterSaved / 1000).toFixed(0)}k</div>
                  <div className="text-sm text-muted-foreground">gallons</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span>67%</span>
                  </div>
                  <Progress value={67} className="h-2 bg-cyan-100" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Comparison With Grid Energy */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Energy Comparison</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Solar vs Grid Energy Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the dramatic difference in carbon intensity between solar and traditional grid electricity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Comparison Chart */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-6 h-6" />
                  Carbon Intensity Comparison
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      <span className="font-medium">Solar Energy</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">
                      {energyComparison.solar.carbonIntensity} kg CO₂/kWh
                    </span>
                  </div>
                  
                  <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${(energyComparison.solar.carbonIntensity / energyComparison.grid.carbonIntensity) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-red-500"></div>
                      <span className="font-medium">Grid Electricity</span>
                    </div>
                    <span className="text-2xl font-bold text-red-600">
                      {energyComparison.grid.carbonIntensity} kg CO₂/kWh
                    </span>
                  </div>
                  
                  <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-red-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>

                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {Math.round((1 - energyComparison.solar.carbonIntensity / energyComparison.grid.carbonIntensity) * 100)}%
                  </div>
                  <div className="text-sm text-green-700">Less Carbon Emissions</div>
                </div>
              </CardContent>
            </Card>

            {/* What If Toggle */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  What If You Didn't Go Solar?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Show Emissions Penalty</span>
                  <Button
                    variant={showComparison ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowComparison(!showComparison)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {showComparison ? "Hide" : "Show"}
                  </Button>
                </div>

                {showComparison && (
                  <div className="space-y-4 animate-in slide-in-from-top-2 duration-500">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="text-2xl font-bold text-red-600 mb-2">
                        +{currentData.co2Saved.toFixed(1)} tons
                      </div>
                      <div className="text-sm text-red-700">Additional CO₂ emissions</div>
                    </div>
                    
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="text-2xl font-bold text-orange-600 mb-2">
                        +${(currentData.co2Saved * 50).toFixed(0)}
                      </div>
                      <div className="text-sm text-orange-700">Annual electricity costs</div>
                    </div>
                  </div>
                )}

                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-lg font-semibold text-green-700 mb-2">
                    Your Solar Choice Saves:
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    {currentData.co2Saved.toFixed(1)} tons CO₂/year
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Goal-Based Tracking */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Goal Setting</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Set Your Sustainability Goals
            </h2>
            <p className="text-xl text-muted-foreground">
              Calculate how long it will take to reach your carbon offset targets.
            </p>
          </div>

          <Card className="p-8">
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <Label htmlFor="goal-slider" className="text-lg font-semibold">
                  I want to offset: <span className="text-green-600 font-bold">{goalTons} tons</span> of CO₂
                </Label>
                <Slider
                  id="goal-slider"
                  value={[goalTons]}
                  onValueChange={(value) => setGoalTons(value[0])}
                  max={50}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1 ton</span>
                  <span>50 tons</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {calculateMonthsToGoal()}
                  </div>
                  <div className="text-sm text-green-700">Months to reach goal</div>
                </div>
                
                <div className="p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {(goalTons * 12.5).toFixed(0)}
                  </div>
                  <div className="text-sm text-blue-700">Trees equivalent</div>
                </div>
                
                <div className="p-6 bg-emerald-50 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    {(goalTons * 23).toFixed(0)}k
                  </div>
                  <div className="text-sm text-emerald-700">Miles of driving</div>
                </div>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white">
                <div className="text-xl font-semibold mb-2">
                  🎯 Goal Progress Tracker
                </div>
                <div className="text-3xl font-bold mb-2">
                  {((currentData.co2Saved / goalTons) * 100).toFixed(1)}%
                </div>
                <div className="text-sm opacity-90">
                  {goalTons > currentData.co2Saved 
                    ? `${(goalTons - currentData.co2Saved).toFixed(1)} tons remaining`
                    : "Goal achieved! 🎉"
                  }
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5: Share or Download Impact */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Share Your Impact</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Share Your Sustainability Story
            </h2>
            <p className="text-xl text-muted-foreground">
              Download your impact report or share your achievements with the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Download Report */}
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
              <Download className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Download Sustainability Report</h3>
              <p className="text-muted-foreground mb-6">
                Get a detailed PDF report of your environmental impact with personalized insights.
              </p>
              <Button 
                onClick={handleDownloadReport}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </Card>

            {/* Share Badge */}
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
              <Share2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Share Offset Badge</h3>
              <p className="text-muted-foreground mb-6">
                Share your environmental impact on social media and inspire others.
              </p>
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={() => handleShare('linkedin')}
                  variant="outline"
                  size="sm"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleShare('twitter')}
                  variant="outline"
                  size="sm"
                  className="bg-sky-500 text-white hover:bg-sky-600"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleShare('whatsapp')}
                  variant="outline"
                  size="sm"
                  className="bg-green-500 text-white hover:bg-green-600"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Impact Summary */}
          <Card className="mt-8 p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">
                Your Total Impact
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold">{currentData.co2Saved.toFixed(1)} tons</div>
                  <div className="text-sm opacity-90">CO₂ Prevented</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{currentData.treesEquivalent.toLocaleString()}</div>
                  <div className="text-sm opacity-90">Trees Equivalent</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{currentData.carEmissions.toFixed(0)} mi</div>
                  <div className="text-sm opacity-90">Car Emissions Avoided</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-20 bg-gradient-to-br from-[rgb(14,90,56)] via-[rgb(18,110,70)] to-[rgb(14,90,56)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Global Environmental Impact
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
            Together with our customers worldwide, we're making a significant impact on global sustainability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="animate-in slide-in-from-bottom-2 duration-500 backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2">50,000+</div>
              <div className="text-lg opacity-90">Tons CO₂ Prevented</div>
            </div>
            <div className="animate-in slide-in-from-bottom-2 duration-500 delay-100 backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2">625,000</div>
              <div className="text-lg opacity-90">Trees Equivalent</div>
            </div>
            <div className="animate-in slide-in-from-bottom-2 duration-500 delay-200 backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2">35M+</div>
              <div className="text-lg opacity-90">Gallons Water Saved</div>
            </div>
            <div className="animate-in slide-in-from-bottom-2 duration-500 delay-300 backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2">128 GWh</div>
              <div className="text-lg opacity-90">Clean Energy Generated</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}