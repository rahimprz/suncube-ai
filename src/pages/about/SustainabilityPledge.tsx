import React from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { Server, Users, TreePine, Zap, Globe, Recycle, FileText, Award, TrendingUp } from 'lucide-react';
import { HeroSection } from '@/components/ui/hero-section';
const SustainabilityPledge: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Banner */}
      <HeroSection
        title="We Code With Conscience."
        subtitle="Every feature, every file — optimized for people and the planet."
        description="We're not just a company — we're a movement. Join us in building a sustainable future."
        primaryAction={
          {
            label: "Read Full Pledge",
            href: "/about/sustainability-pledge",
          }
        }
      />

      {/* Greener Infrastructure */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌱 Greener Infrastructure</h2>
            <p className="text-xl text-gray-600">Building a sustainable digital foundation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Server className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-green-800">Carbon-Neutral Hosting</CardTitle>
                    <CardDescription>Powered by renewable energy sources</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Carbon Footprint</span>
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                      Neutral
                    </Badge>
                  </div>
                  <Progress value={100} className="h-2 bg-green-100" />
                  <p className="text-sm text-gray-600">
                    Our servers run on 100% renewable energy, offsetting all carbon emissions from our digital operations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-blue-800">Optimized Code Practices</CardTitle>
                    <CardDescription>Reducing processing power consumption</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Energy Efficiency</span>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
                      +40%
                    </Badge>
                  </div>
                  <Progress value={85} className="h-2 bg-blue-100" />
                  <p className="text-sm text-gray-600">
                    Our development practices prioritize energy-efficient algorithms and optimized data structures.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zero Waste Operations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🧃 Zero Waste Operations</h2>
            <p className="text-xl text-gray-600">Minimizing our environmental footprint in everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-orange-200 bg-orange-50/50">
              <CardHeader>
                <div className="mx-auto p-4 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-orange-800">Virtual-First Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Remote work reduces commuting emissions and office energy consumption by 85%.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 bg-green-50/50">
              <CardHeader>
                <div className="mx-auto p-4 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Recycle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Recycled Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  100% of our packaging materials are made from recycled or biodegradable materials.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 bg-blue-50/50">
              <CardHeader>
                <div className="mx-auto p-4 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Digital Contracts Only</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Paperless operations save approximately 2,000 trees annually across all our partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Report Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📊 Impact Report Preview</h2>
            <p className="text-xl text-gray-600">Our measurable commitment to environmental stewardship</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-green-800">Carbon Offset by Employees</CardTitle>
                    <CardDescription>Annual impact from our team's sustainable practices</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">CO₂ Offset (tons)</span>
                    <span className="font-bold text-green-600">247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Energy Saved (kWh)</span>
                    <span className="font-bold text-green-600">89,420</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Water Saved (liters)</span>
                    <span className="font-bold text-green-600">156,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <TreePine className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-green-800">Trees Planted for Milestones</CardTitle>
                    <CardDescription>Celebrating achievements with environmental impact</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Product Launches</span>
                    <span className="font-bold text-green-600">50 trees</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Client Milestones</span>
                    <span className="font-bold text-green-600">25 trees</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Team Achievements</span>
                    <span className="font-bold text-green-600">10 trees</span>
                  </div>
                  <div className="pt-4 border-t border-green-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Total Trees Planted</span>
                      <span className="font-bold text-green-600 text-lg">1,247</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Culture of Care */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">💚 Culture of Care</h2>
            <p className="text-xl text-gray-600">Embedding sustainability into our team culture and incentives</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-purple-200 bg-purple-50/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-purple-800">Sustainability KPIs for Team Bonuses</CardTitle>
                    <CardDescription>Performance metrics that matter for the planet</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-purple-100 rounded-lg">
                    <span className="text-sm font-medium text-purple-800">Energy Efficiency Score</span>
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                      95%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-100 rounded-lg">
                    <span className="text-sm font-medium text-purple-800">Waste Reduction</span>
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                      87%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-100 rounded-lg">
                    <span className="text-sm font-medium text-purple-800">Sustainable Innovation</span>
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                      12 projects
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-200 bg-teal-50/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-teal-100 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <CardTitle className="text-teal-800">Mandatory Energy Awareness Sessions</CardTitle>
                    <CardDescription>Continuous learning for environmental impact</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-teal-100 rounded-lg">
                    <h4 className="font-medium text-teal-800 mb-2">Monthly Workshops</h4>
                    <p className="text-sm text-teal-700">
                      Interactive sessions on energy conservation, sustainable coding practices, and environmental impact assessment.
                    </p>
                  </div>
                  <div className="p-4 bg-teal-100 rounded-lg">
                    <h4 className="font-medium text-teal-800 mb-2">Quarterly Impact Reviews</h4>
                    <p className="text-sm text-teal-700">
                      Team presentations on sustainability initiatives and their measurable environmental benefits.
                    </p>
                  </div>
                  <div className="p-4 bg-teal-100 rounded-lg">
                    <h4 className="font-medium text-teal-800 mb-2">Annual Sustainability Goals</h4>
                    <p className="text-sm text-teal-700">
                      Setting and tracking ambitious environmental targets with transparent reporting.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Every line of code we write, every decision we make, contributes to a greener tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Download Full Report
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPledge;
