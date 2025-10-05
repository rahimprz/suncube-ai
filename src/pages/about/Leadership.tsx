import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { 
  Users, 
  Award,
  Star,
  Play,
  Quote,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";

// Founders data
const founders = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    vision: "Energy must be decentralized, digitized, and democratized.",
    bio: "Former Tesla Energy VP with 15+ years in renewable energy and AI research. Led the development of Tesla's Powerwall optimization algorithms and grid integration systems.",
    education: "PhD in Electrical Engineering, Stanford University",
    experience: "Tesla Energy, Google X, MIT Energy Initiative",
    linkedin: "#",
    twitter: "#",
    email: "sarah@suncube.ai",
    photo: "/placeholder.svg"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    vision: "AI will be the catalyst that makes renewable energy accessible to everyone.",
    bio: "Ex-Google AI researcher specializing in machine learning and energy optimization. Built scalable AI systems that process petabytes of energy data in real-time.",
    education: "MS Computer Science, MIT",
    experience: "Google AI, DeepMind, Stanford AI Lab",
    linkedin: "#",
    twitter: "#",
    email: "marcus@suncube.ai",
    photo: "/placeholder.svg"
  }
];

// Core team data
const coreTeam = [
  {
    name: "Dr. Emily Watson",
    role: "VP of Data Science",
    bio: "Environmental scientist and clean energy advocate with focus on carbon reduction. Leads our predictive analytics and energy forecasting initiatives.",
    education: "PhD Environmental Science, UC Berkeley",
    expertise: ["Machine Learning", "Climate Modeling", "Energy Analytics"],
    photo: "/placeholder.svg"
  },
  {
    name: "Alex Thompson",
    role: "VP of Partnerships",
    bio: "Former energy consultant with deep connections in the solar industry. Drives strategic partnerships with utilities, manufacturers, and government agencies.",
    education: "MBA, Harvard Business School",
    expertise: ["Strategic Partnerships", "Energy Markets", "Policy"],
    photo: "/placeholder.svg"
  },
  {
    name: "Dr. Raj Patel",
    role: "VP of AI Systems",
    bio: "AI researcher specializing in autonomous systems and edge computing. Architect of our real-time AI optimization engine.",
    education: "PhD Computer Science, Carnegie Mellon",
    expertise: ["Autonomous Systems", "Edge Computing", "Neural Networks"],
    photo: "/placeholder.svg"
  },
  {
    name: "Lisa Chang",
    role: "VP of Product",
    bio: "Product leader with experience scaling energy tech platforms. Oversees product strategy and user experience across all Suncube AI solutions.",
    education: "MS Engineering, UC Berkeley",
    expertise: ["Product Strategy", "UX Design", "Energy Tech"],
    photo: "/placeholder.svg"
  }
];

// Advisory board data
const advisoryBoard = [
  {
    name: "Dr. Michael Green",
    role: "Energy Policy Expert",
    bio: "Former DOE official and climate policy advisor. Provides strategic guidance on regulatory compliance and energy market dynamics.",
    organization: "Stanford Energy Institute",
    photo: "/placeholder.svg"
  },
  {
    name: "Dr. Jennifer Park",
    role: "AI Ethics Specialist",
    bio: "Leading researcher in AI ethics and responsible technology. Ensures our AI systems are transparent, fair, and beneficial to society.",
    organization: "MIT Technology Review",
    photo: "/placeholder.svg"
  },
  {
    name: "Robert Kim",
    role: "Grid Infrastructure Expert",
    bio: "Former utility executive with 25+ years in grid modernization. Advises on smart grid integration and utility partnerships.",
    organization: "Grid Innovation Council",
    photo: "/placeholder.svg"
  }
];

export default function Leadership() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero Banner */}
      <HeroSection
        title="Built by Solar Dreamers. Backed by Data Nerds."
        subtitle="👥 Leadership Team"
        description="Meet the minds behind Suncube AI. Engineers, dreamers, disruptors."
        primaryAction={{
          label: "Meet the Team",
          href: "#core-team"
        }}
        secondaryAction={{
          label: "Our Story",
          href: "/about/our-story"
        }}
      />

      {/* Section 2: Founders' Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Founders' Vision</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The Visionaries Behind the Revolution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our founders bring together decades of experience in energy, AI, and sustainability to create the future of solar energy management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-eco transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-solar opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                
                <CardHeader className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{founder.name}</CardTitle>
                      <Badge variant="secondary" className="mb-3">{founder.role}</Badge>
                      <div className="flex space-x-3">
                        <Button variant="ghost" size="sm" asChild>
                          <a href={founder.linkedin} className="text-muted-foreground hover:text-primary">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={founder.twitter} className="text-muted-foreground hover:text-primary">
                            <Twitter className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={`mailto:${founder.email}`} className="text-muted-foreground hover:text-primary">
                            <Mail className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                    <div className="flex items-start space-x-3">
                      <Quote className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <blockquote className="text-lg font-medium text-foreground italic">
                        "{founder.vision}"
                      </blockquote>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{founder.bio}</p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{founder.education}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-warning" />
                      <span className="text-sm text-muted-foreground">{founder.experience}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Core Team */}
      <section id="core-team" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Team</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The Brains Behind the Operation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team combines deep technical expertise with industry experience to drive innovation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <Card key={index} className="group hover:shadow-eco transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="text-xs">{member.role}</Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">{member.bio}</p>
                  
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-primary">{member.education}</div>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Advisory Board */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Advisory Board</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Industry Leaders & Experts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advisory board brings together thought leaders from energy, climate, and AI to guide our strategic direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <Card key={index} className="text-center hover:shadow-eco transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-solar rounded-full mx-auto mb-4 flex items-center justify-center text-white text-lg font-bold">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-lg">{advisor.name}</CardTitle>
                  <Badge variant="outline" className="text-xs">{advisor.role}</Badge>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{advisor.bio}</p>
                  <div className="text-xs font-medium text-primary">{advisor.organization}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Watch Our Story */}
      <section className="py-20 bg-gradient-eco">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">Coming Soon</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Watch Our Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get to know the team behind Suncube AI and hear our vision for the future of solar energy.
            </p>
            
            <Card className="max-w-2xl mx-auto p-8 bg-background/80 backdrop-blur-sm">
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Video coming soon</p>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-primary text-white shadow-eco hover:shadow-glow transition-all"
                disabled
              >
                <Play className="w-4 h-4 mr-2" />
                Play Team Video
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Ready to be part of the solar energy revolution? We're always looking for passionate individuals to join our team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-muted"
            >
              <Users className="w-4 h-4 mr-2" />
              View Open Positions
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
