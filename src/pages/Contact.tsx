import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HeroSection } from "@/components/ui/hero-section";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Download
} from "lucide-react";

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "hello@suncube.ai",
    action: "Send Email"
  },
  {
    icon: <Phone className="w-6 h-6 text-grid-blue" />,
    title: "Call Us",
    description: "Speak with our experts",
    contact: "+1 (555) 123-4567",
    action: "Call Now"
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-eco-green" />,
    title: "Live Chat",
    description: "Chat with our support team",
    contact: "Available Mon-Fri 9AM-6PM",
    action: "Start Chat"
  },
  {
    icon: <Calendar className="w-6 h-6 text-warning" />,
    title: "Schedule Demo",
    description: "Book a personalized demo",
    contact: "30-minute consultation",
    action: "Book Demo"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiry: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiry: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Get in Touch with Our Solar Experts"
        subtitle="💬 Contact Us"
        description="Ready to transform your energy future? Our team of solar and AI experts is here to help you every step of the way. Get your free consultation today."
        primaryAction={{
          label: "Schedule Free Consultation",
          href: "#contact-form"
        }}
        secondaryAction={{
          label: "Download Brochure",
          href: "#downloads"
        }}
      />

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Get in Touch</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the contact method that works best for you. Our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-eco transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                  <div className="font-medium text-foreground">{method.contact}</div>
                  <Button variant="outline" size="sm" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Contact Form</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="w-5 h-5 text-primary" />
                <span>Contact Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry">Type of Inquiry *</Label>
                  <Select value={formData.inquiry} onValueChange={(value) => handleInputChange("inquiry", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Solar</SelectItem>
                      <SelectItem value="commercial">Commercial Solar</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="media">Media/Press Inquiry</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project or inquiry..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-primary text-white">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Our Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Suncube AI Headquarters</h3>
                  <p className="text-muted-foreground">
                    123 Innovation Drive<br />
                    Austin, TX 78701<br />
                    United States
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM CST</span>
                </div>

                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card id="downloads">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="w-5 h-5 text-grid-blue" />
                  <span>Download Resources</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">Company Brochure</div>
                      <div className="text-xs text-muted-foreground">Complete overview of our solutions</div>
                    </div>
                    <Button size="sm" variant="outline">Download</Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">Technical Specifications</div>
                      <div className="text-xs text-muted-foreground">Detailed technical documentation</div>
                    </div>
                    <Button size="sm" variant="outline">Download</Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">ROI Calculator</div>
                      <div className="text-xs text-muted-foreground">Calculate your solar investment returns</div>
                    </div>
                    <Button size="sm" variant="outline">Download</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}