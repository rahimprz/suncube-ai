import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/ui/hero-section";
import { 
  Handshake, 
  FileText, 
  Phone, 
  Code, 
  Shield, 
  Users, 
  Zap, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Calendar,
  Mail,
  Globe,
  Award
} from "lucide-react";

const onboardingSteps = [
  {
    step: "01",
    title: "Fill Partnership Interest Form",
    description: "Tell us about your business, goals, and how you envision partnering with Suncube AI.",
    icon: <FileText className="w-8 h-8 text-primary" />,
    duration: "5 minutes"
  },
  {
    step: "02",
    title: "Attend a Discovery Call",
    description: "Schedule a personalized consultation to discuss partnership opportunities and technical requirements.",
    icon: <Phone className="w-8 h-8 text-grid-blue" />,
    duration: "30 minutes"
  },
  {
    step: "03",
    title: "Get Access to Sandbox & Materials",
    description: "Receive developer access, documentation, and marketing materials to start building.",
    icon: <Code className="w-8 h-8 text-warning" />,
    duration: "24 hours"
  }
];

const partnerBenefits = [
  {
    title: "White-label Dashboards",
    description: "Customizable monitoring interfaces with your branding",
    icon: <Globe className="w-6 h-6 text-primary" />,
    tier: "Premium"
  },
  {
    title: "API Access",
    description: "Full REST API with comprehensive documentation",
    icon: <Code className="w-6 h-6 text-grid-blue" />,
    tier: "Free"
  },
  {
    title: "Pre-sales Support",
    description: "Technical consultation and sales enablement materials",
    icon: <Users className="w-6 h-6 text-warning" />,
    tier: "Premium"
  },
  {
    title: "Dedicated Account Manager",
    description: "Personal point of contact for all partnership needs",
    icon: <Handshake className="w-6 h-6 text-eco-green" />,
    tier: "Premium"
  }
];

const pricingTiers = [
  {
    name: "Free Tier",
    price: "$0",
    description: "Perfect for startups and developers",
    features: [
      "API Access",
      "Basic Documentation",
      "Community Support",
      "Sandbox Environment"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Premium Partner",
    price: "Custom",
    description: "For established businesses and enterprises",
    features: [
      "Everything in Free Tier",
      "White-label Solutions",
      "Dedicated Account Manager",
      "Pre-sales Support",
      "Custom Integration",
      "Priority Support"
    ],
    cta: "Contact Sales",
    popular: true
  }
];

export default function BecomePartner() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero Banner */}
      <HeroSection
        title="Let's Build The Energy Grid of Tomorrow, Together."
        subtitle="🤝 Partnership Program"
        description="Take the first step toward collaboration. Whether you're a startup or an enterprise — we make it easy to plug into Suncube AI."
        primaryAction={{
          label: "Apply to Partner",
          href: "#apply-form"
        }}
        secondaryAction={{
          label: "Schedule Discovery Call",
          href: "#schedule-call"
        }}
      />

      {/* Section 2: Easy 3-Step Onboarding */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Simple Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Easy 3-Step Onboarding
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started with Suncube AI partnership in just three simple steps. No complex procedures, no lengthy negotiations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {onboardingSteps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-eco transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Badge variant="secondary">{step.step}</Badge>
                    <span className="text-sm text-muted-foreground">{step.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < onboardingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Partner Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Benefits</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Partner Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access powerful tools and resources to help you succeed with Suncube AI integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-eco transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        {benefit.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold">{benefit.title}</h3>
                        <Badge variant={benefit.tier === "Premium" ? "default" : "secondary"}>
                          {benefit.tier}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Tiers */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Pricing Models</h3>
            <p className="text-muted-foreground">Choose the partnership tier that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'ring-2 ring-primary' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{tier.price}</div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-gradient-primary' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: NDA & Ethics Policy */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Legal & Ethics</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              NDA & Ethics Policy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in transparent partnerships built on trust and ethical business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-eco transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <CardTitle>Non-Disclosure Agreement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our standard NDA protects both parties' confidential information and trade secrets while fostering open collaboration.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Confidentiality protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Intellectual property rights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Data security requirements</span>
                  </li>
                </ul>
                <Button variant="outline" asChild>
                  <a href="#" className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>View NDA Template</span>
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-eco transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-eco-green" />
                  <CardTitle>Ethics & Compliance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We're committed to ethical AI development and sustainable energy practices that benefit society and the environment.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">AI ethics guidelines</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Environmental responsibility</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Fair business practices</span>
                  </li>
                </ul>
                <Button variant="outline" asChild>
                  <a href="#" className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Read Ethics Policy</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Get Started Now */}
      <section id="apply-form" className="py-20 bg-gradient-eco">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-white/20">Get Started</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get Started Now
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to become a Suncube AI partner? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name *</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Name *</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company Size *</label>
                  <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select company size</option>
                    <option value="startup">Startup (1-10 employees)</option>
                    <option value="small">Small Business (11-50 employees)</option>
                    <option value="medium">Medium Business (51-200 employees)</option>
                    <option value="large">Large Enterprise (200+ employees)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Partnership Interest *</label>
                  <textarea
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={4}
                    placeholder="Tell us about your business and how you'd like to partner with Suncube AI..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="nda" className="rounded" />
                  <label htmlFor="nda" className="text-sm text-muted-foreground">
                    I agree to the NDA and Ethics Policy
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-primary text-white shadow-eco hover:shadow-glow transition-all"
                    size="lg"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Become a Partner
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    asChild
                    id="schedule-call"
                  >
                    <a href="#" className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Call with Team
                    </a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
