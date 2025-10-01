import { useState } from "react";
import { Menu, Zap, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigationItems = [
  { label: "Sustainability", href: "/sustainability" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Our Commitment", href: "/our-commitment" }
];

const subpageItems = [
  {
    label: "Smart Grid & Virtual Power Plant",
    mainHref: "/smart-grid",
    subpages: [
      { label: "Grid Services Participation", href: "/smartgrid/grid-services" },
      { label: "Energy Trading", href: "/smartgrid/energy-trading" },
      { label: "Demand Response", href: "/smartgrid/demand-response" },
      { label: "Revenue Optimization Tools", href: "/smartgrid/revenue-optimization" }
    ]
  },
  {
    label: "AI Monitoring & Predictive Maintenance",
    mainHref: "/ai-monitoring",
    subpages: [
      { label: "24/7 AI Monitoring", href: "/aimonitoring/ai-monitoring-247" },
      { label: "Predictive Alerts Dashboard", href: "/aimonitoring/predictive-alerts" },
      { label: "Performance Optimization", href: "/aimonitoring/performance-optimization" },
      { label: "Maintenance Scheduling", href: "/aimonitoring/maintenance-scheduling" }
    ]
  },
  {
    label: "Solutions",
    mainHref: "/solutions",
    subpages: [
      { label: "Residential Solar + AI", href: "/solutions/residential/ai-optimization" },
      { label: "Commercial & Industrial Solar", href: "/solutions/commercial/enterprise-monitoring" },
      { label: "Smart Grid & Virtual Power Plant", href: "/solutions/smartgrid/grid-services" },
      { label: "AI Monitoring & Predictive Maintenance", href: "/solutions/ai-monitoring/247-monitoring" },
      { label: "Data Insights & Weather Forecasting", href: "/solutions/data-insights/weather-forecasting" },
      { label: "Cloud Dashboard & Multi-Site Management", href: "/solutions/cloud-dashboard/multi-site-management" }
    ]
  },
  {
    label: "About",
    mainHref: "/about",
    subpages: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Sustainability Pledge", href: "/about/sustainability-pledge" }
    ]
  },
  {
    label: "Blog",
    mainHref: "/blog",
    subpages: [
      { label: "Insights", href: "/blog/insights" },
      { label: "Downloads", href: "/blog/downloads" }
    ]
  },
  {
    label: "Billing & Blockchain",
    mainHref: "/billing",
    subpages: [
      { label: "AI Payment Engine", href: "/billing/ai-payment-engine" },
      { label: "Blockchain Security", href: "/billing/blockchain-security" },
      { label: "Transparency", href: "/billing/transparency" }
    ]
  },
  {
    label: "Case Studies",
    mainHref: "/case-studies",
    subpages: [
      { label: "Flag Ship Projects", href: "/case-studies/flag-ship-projects" },
      { label: "Success Stories", href: "/case-studies/success-stories" }
    ]
  }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsExpanded, setIsSolutionsExpanded] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isBlogExpanded, setIsBlogExpanded] = useState(false);
  const [isBillingExpanded, setIsBillingExpanded] = useState(false);
  const [isCaseStudiesExpanded, setIsCaseStudiesExpanded] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="bg-[rgb(14,90,56)]/95 backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#84cc16] rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Suncube AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <Link
              to="/"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                isActive("/")
                  ? "text-[#84cc16]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Home
            </Link>

            {/* Solutions dropdown */}
            <div className="relative group">
              <Link
                to="/solutions"
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white whitespace-nowrap"
              >
                Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
              <div className="absolute top-full left-0 mt-1 w-64 bg-[rgb(14,90,56)]/95 backdrop-blur-md border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {subpageItems[2].subpages.map((subpage) => (
                  <Link
                    key={subpage.href}
                    to={subpage.href}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    {subpage.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Billing & Blockchain dropdown */}
            <div className="relative group">
              <Link
                to="/billing"
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white whitespace-nowrap"
              >
                Billing & Blockchain
                <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
              <div className="absolute top-full left-0 mt-1 w-48 bg-[rgb(14,90,56)]/95 backdrop-blur-md border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {subpageItems[5].subpages.map((subpage) => (
                  <Link
                    key={subpage.href}
                    to={subpage.href}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    {subpage.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Case Studies dropdown */}
            <div className="relative group">
              <Link
                to="/case-studies"
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white whitespace-nowrap"
              >
                Case Studies
                <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
              <div className="absolute top-full left-0 mt-1 w-48 bg-[rgb(14,90,56)]/95 backdrop-blur-md border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {subpageItems[6].subpages.map((subpage) => (
                  <Link
                    key={subpage.href}
                    to={subpage.href}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    {subpage.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Remaining navigation items */}
            {navigationItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive(item.href)
                    ? "text-[#84cc16]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* More dropdown for remaining items */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white whitespace-nowrap">
                More
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-[rgb(14,90,56)]/95 backdrop-blur-md border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {/* About with subpages */}
                <div className="relative group/sub">
                  <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">
                    <Link to="/about" className="flex-1">About</Link>
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </div>
                  <div className="absolute left-full top-0 ml-1 w-48 bg-[rgb(14,90,56)]/95 backdrop-blur-md border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">
                    {subpageItems[3].subpages.map((subpage) => (
                      <Link
                        key={subpage.href}
                        to={subpage.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                      >
                        {subpage.label}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Blog with subpages */}
                <div className="relative group/sub">
                  <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">
                    <Link to="/blog" className="flex-1">Blog</Link>
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </div>
                  <div className="absolute left-full top-0 ml-1 w-48 bg-[rgb(14,90,56)]/95 backdrop-blur-md border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">
                    {subpageItems[4].subpages.map((subpage) => (
                      <Link
                        key={subpage.href}
                        to={subpage.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                      >
                        {subpage.label}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Other navigation items */}
                {navigationItems.slice(3).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/portal">
              <Button variant="ghost" className="text-white hover:bg-white/10 font-medium">
                Portal Login
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-[#84cc16] hover:bg-[#75bb14] text-white font-semibold rounded-full px-6 shadow-lg">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-[rgb(14,90,56)] border-white/10">
              <div className="flex flex-col space-y-4 mt-8">
                {/* Home */}
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    isActive("/")
                      ? "text-[#84cc16]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Home
                </Link>
                
                {/* Solutions section with subpages */}
                <div className="pt-4">
                  <div className="flex items-center justify-between">
                    <Link
                      to="/solutions"
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        isActive("/solutions")
                          ? "text-[#84cc16]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      Solutions
                    </Link>
                    <button
                      onClick={() => setIsSolutionsExpanded(!isSolutionsExpanded)}
                      className="p-1 text-gray-300"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isSolutionsExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  {isSolutionsExpanded && (
                    <div className="mt-2">
                      {subpageItems[2].subpages.map((subpage) => (
                        <Link
                          key={subpage.href}
                          to={subpage.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-sm transition-colors block ml-4 py-1 ${
                            isActive(subpage.href)
                              ? "text-[#84cc16]"
                              : "text-gray-300 hover:text-white"
                          }`}
                        >
                          {subpage.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>



                {/* Billing & Blockchain section with subpages */}
                <div className="pt-4">
                  <div className="flex items-center justify-between">
                    <Link
                      to="/billing"
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        isActive("/billing")
                          ? "text-[#84cc16]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      Billing & Blockchain
                    </Link>
                    <button
                      onClick={() => setIsBillingExpanded(!isBillingExpanded)}
                      className="p-1 text-gray-300"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isBillingExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  {isBillingExpanded && (
                    <div className="mt-2">
                      {subpageItems[4].subpages.map((subpage) => (
                        <Link
                          key={subpage.href}
                          to={subpage.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-sm transition-colors block ml-4 py-1 ${
                            isActive(subpage.href)
                              ? "text-[#84cc16]"
                              : "text-gray-300 hover:text-white"
                          }`}
                        >
                          {subpage.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Case Studies section with subpages */}
                <div className="pt-4">
                  <div className="flex items-center justify-between">
                    <Link
                      to="/case-studies"
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        isActive("/case-studies")
                          ? "text-[#84cc16]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      Case Studies
                    </Link>
                    <button
                      onClick={() => setIsCaseStudiesExpanded(!isCaseStudiesExpanded)}
                      className="p-1 text-gray-300"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isCaseStudiesExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  {isCaseStudiesExpanded && (
                    <div className="mt-2">
                      {subpageItems[5].subpages.map((subpage) => (
                        <Link
                          key={subpage.href}
                          to={subpage.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-sm transition-colors block ml-4 py-1 ${
                            isActive(subpage.href)
                              ? "text-[#84cc16]"
                              : "text-gray-300 hover:text-white"
                          }`}
                        >
                          {subpage.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* More section for mobile */}
                <div className="pt-4">
                  <div className="text-lg font-medium text-gray-400 mb-2">More</div>
                  {/* About with subpages */}
                  <div className="ml-4">
                    <div className="flex items-center justify-between">
                      <Link
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className={`text-base font-medium transition-colors ${
                          isActive("/about")
                            ? "text-[#84cc16]"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        About
                      </Link>
                      <button
                        onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                        className="p-1 text-gray-300"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isAboutExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                    {isAboutExpanded && (
                      <div className="mt-2">
                        {subpageItems[3].subpages.map((subpage) => (
                          <Link
                            key={subpage.href}
                            to={subpage.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm transition-colors block ml-4 py-1 ${
                              isActive(subpage.href)
                                ? "text-[#84cc16]"
                                : "text-gray-300 hover:text-white"
                            }`}
                          >
                            {subpage.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Blog with subpages */}
                  <div className="ml-4">
                    <div className="flex items-center justify-between">
                      <Link
                        to="/blog"
                        onClick={() => setIsOpen(false)}
                        className={`text-base font-medium transition-colors ${
                          isActive("/blog")
                            ? "text-[#84cc16]"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        Blog
                      </Link>
                      <button
                        onClick={() => setIsBlogExpanded(!isBlogExpanded)}
                        className="p-1 text-gray-300"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isBlogExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                    {isBlogExpanded && (
                      <div className="mt-2">
                        {subpageItems[4].subpages.map((subpage) => (
                          <Link
                            key={subpage.href}
                            to={subpage.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm transition-colors block ml-4 py-1 ${
                              isActive(subpage.href)
                                ? "text-[#84cc16]"
                                : "text-gray-300 hover:text-white"
                            }`}
                          >
                            {subpage.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Other navigation items */}
                  {navigationItems.slice(3).map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-medium transition-colors block ml-4 py-1 ${
                        isActive(item.href)
                          ? "text-[#84cc16]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                
                <div className="pt-4 space-y-2">
                  <Link to="/portal" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full text-white hover:bg-white/10">
                      Portal Login
                    </Button>
                  </Link>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-[#84cc16] hover:bg-[#75bb14] text-white font-semibold rounded-full">
                      Request Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};