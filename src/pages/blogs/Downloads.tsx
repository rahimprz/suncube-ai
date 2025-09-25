import { HeroSection } from "@/components/ui/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Download, FileText, BarChart3, Image, Share2, Eye, Calendar, Users, Send } from "lucide-react"

const Downloads = () => {
  const categories = [
    {
      title: "Product Pitch Decks",
      description: "Comprehensive presentations for solar solutions",
      icon: FileText,
      count: 12,
      color: "bg-blue-500"
    },
    {
      title: "Sustainability Reports",
      description: "Annual environmental impact assessments",
      icon: BarChart3,
      count: 8,
      color: "bg-green-500"
    },
    {
      title: "Market Research",
      description: "Industry insights and trend analysis",
      icon: BarChart3,
      count: 15,
      color: "bg-purple-500"
    },
    {
      title: "Infographics & Posters",
      description: "Visual resources for presentations",
      icon: Image,
      count: 20,
      color: "bg-orange-500"
    }
  ]

  const downloads = [
    {
      title: "Solar Energy Market Report 2024",
      type: "PDF",
      size: "2.4 MB",
      version: "v2.1",
      date: "2024-01-15",
      downloads: 1247,
      preview: "/placeholder.svg"
    },
    {
      title: "Sustainability Impact Assessment",
      type: "PDF",
      size: "1.8 MB",
      version: "v1.3",
      date: "2024-01-10",
      downloads: 892,
      preview: "/placeholder.svg"
    },
    {
      title: "Product Catalog Q1 2024",
      type: "PDF",
      size: "3.2 MB",
      version: "v1.0",
      date: "2024-01-05",
      downloads: 1563,
      preview: "/placeholder.svg"
    }
  ]

  const partnerPacks = [
    {
      title: "Company Logos",
      description: "High-resolution logos in multiple formats",
      files: ["PNG", "SVG", "AI"],
      count: 6
    },
    {
      title: "Co-branding Templates",
      description: "Ready-to-use partnership materials",
      files: ["PPTX", "PSD", "AI"],
      count: 12
    },
    {
      title: "Brand Guidelines PDF",
      description: "Complete brand standards and usage",
      files: ["PDF"],
      count: 1
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection
        title="Ready-to-Go Resources. No Gatekeeping"
        subtitle="Stay ahead with our latest solar energy insights"
        description="Grab product decks, sustainability reports, and everything else — just one click away."
        primaryAction={{
          label: "View All Downloads",
          href: "/downloads/download-reports",
        }}
      />

      {/* Section 2: Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resource Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive collection of solar energy resources organized by category
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${category.color} text-white`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{category.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Section 3: Download Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Gallery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Preview and download our latest resources with version control and sharing options
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {downloads.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <img 
                    src={item.preview} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                    <Badge variant="outline">{item.type}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span>{item.size}</span>
                    <span>•</span>
                    <span>{item.downloads} downloads</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{item.version}</Badge>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Section 4: Partner Packs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Packs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Exclusive resources for our partners to maintain brand consistency and collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerPacks.map((pack, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>{pack.title}</CardTitle>
                  <CardDescription>{pack.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {pack.files.map((file, fileIndex) => (
                      <Badge key={fileIndex} variant="outline">{file}</Badge>
                    ))}
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Pack ({pack.count} files)
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Section 5: Submit Request */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't Find Something?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Request a custom resource tailored to your specific needs. Our team will create it for you.
            </p>
          </div>
          
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company">Company/Organization</Label>
                <Input id="company" placeholder="Enter your company name" />
              </div>
              
              <div>
                <Label htmlFor="resource-type">Resource Type</Label>
                <select 
                  id="resource-type" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select resource type</option>
                  <option value="presentation">Presentation/Pitch Deck</option>
                  <option value="report">Report/Analysis</option>
                  <option value="infographic">Infographic</option>
                  <option value="template">Template</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="description">Resource Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the resource you need, including specific requirements, target audience, and any other relevant details..."
                  rows={4}
                />
              </div>
              
              <div>
                <Label htmlFor="timeline">Timeline</Label>
                <select 
                  id="timeline" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">Urgent (1-2 days)</option>
                  <option value="standard">Standard (1 week)</option>
                  <option value="flexible">Flexible (2+ weeks)</option>
                </select>
              </div>
              
              <div className="flex justify-center">
                <Button type="submit" size="lg" className="px-8">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Request
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Downloads