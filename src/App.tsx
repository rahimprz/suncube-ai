import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import HowItWorks from "./pages/HowItWorks";
// Residential Solar subpages
import AIOptimization from "./pages/residential/AIOptimization/page";
import BatteryManagement from "./pages/residential/BatteryManagement";
import RealTimeMonitoring from "./pages/residential/RealTimeMonitoring";
import MobileApp from "./pages/residential/MobileApp";
// Commercial Solar subpages  
import PredictiveMaintenance from "./pages/commercial/PredictiveMaintenance";
import LoadBalancing from "./pages/commercial/LoadBalancing";
import ROIAnalytics from "./pages/commercial/ROIAnalytics";
// Smart Grid subpages
import SmartGrid from "./pages/SmartGrid";
import GridServices from "./pages/smartgrid/GridServices";
import EnergyTrading from "./pages/smartgrid/EnergyTrading";
import DemandResponse from "./pages/smartgrid/DemandResponse";
import RevenueOptimization from "./pages/smartgrid/RevenueOptimization";
// AI Monitoring subpages
import AIMonitoring from "./pages/AIMonitoring";
import AIMonitoring247 from "./pages/aimonitoring/AIMonitoring247";
import PredictiveAlerts from "./pages/aimonitoring/PredictiveAlerts";
import PerformanceOptimization from "./pages/aimonitoring/PerformanceOptimization";
import MaintenanceScheduling from "./pages/aimonitoring/MaintenanceScheduling";
// Data Insights subpages
import WeatherForecasting from "./pages/datainsights/WeatherForecasting";
import PerformanceAnalytics from "./pages/datainsights/PerformanceAnalytics";
import EnergyPredictions from "./pages/datainsights/EnergyPredictions";
import CustomReports from "./pages/datainsights/CustomReports";
// Cloud Dashboard subpages
import MultiSiteManagement from "./pages/clouddashboard/MultiSiteManagement";
import UserAccessControl from "./pages/clouddashboard/UserAccessControl";
import APIIntegration from "./pages/clouddashboard/APIIntegration";
import MobileResponsive from "./pages/clouddashboard/MobileResponsive";
import Billing from "./pages/Billing";
import Sustainability from "./pages/Sustainability";
import CaseStudies from "./pages/CaseStudies";
import Partners from "./pages/Partners";
import About from "./pages/About";
import OurStory from "./pages/about/OurStory";
import Leadership from "./pages/about/Leadership";
import SustainabilityPledge from "./pages/about/SustainabilityPledge";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portal from "./pages/Portal";
import NotFound from "./pages/NotFound";
import CommercialManagement from "./pages/residential/CommercialManagement";
import AIPaymentEngine from "./pages/billing/AIPaymentEngine";
import BlockChainSecurity from "./pages/billing/BlockChainSecurity";
import Transparency from "./pages/billing/Transparency";
import OurCommittment from "./pages/OurCommittment";
import FlagShipProjects from "./pages/case-studies/FlagShipProjects";
import SuccessStories from "./pages/case-studies/SuccessStories";
import WhyPartner from "./pages/parteners/WhyPartener";
import BecomePartner from "./pages/parteners/BecomePartener";
import Insights from "./pages/blogs/Insights";
import Downloads from "./pages/blogs/Downloads";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/residential/ai-optimization" element={<AIOptimization />} />
          <Route path="/solutions/residential/battery-management" element={<BatteryManagement />} />
          <Route path="/solutions/residential/real-time-monitoring" element={<RealTimeMonitoring />} />
          <Route path="/solutions/residential/mobile-app" element={<MobileApp />} />
          <Route path="/solutions/commercial/enterprise-monitoring" element={<CommercialManagement />} />
          <Route path="/solutions/commercial/predictive-maintenance" element={<PredictiveMaintenance />} />
          <Route path="/solutions/commercial/load-balancing" element={<LoadBalancing />} />
          <Route path="/solutions/commercial/roi-analytics" element={<ROIAnalytics />} />
          <Route path="/smart-grid" element={<SmartGrid />} />
          <Route path="/smartgrid/grid-services" element={<GridServices />} />
          <Route path="/smartgrid/energy-trading" element={<EnergyTrading />} />
          <Route path="/smartgrid/demand-response" element={<DemandResponse />} />
          <Route path="/smartgrid/revenue-optimization" element={<RevenueOptimization />} />
          <Route path="/solutions/smartgrid/grid-services" element={<GridServices />} />
          <Route path="/solutions/smartgrid/energy-trading" element={<EnergyTrading />} />
          <Route path="/solutions/smartgrid/demand-response" element={<DemandResponse />} />
          <Route path="/solutions/smartgrid/revenue-optimization" element={<RevenueOptimization />} />
          <Route path="/ai-monitoring" element={<AIMonitoring />} />
          <Route path="/aimonitoring/ai-monitoring-247" element={<AIMonitoring247 />} />
          <Route path="/aimonitoring/predictive-alerts" element={<PredictiveAlerts />} />
          <Route path="/aimonitoring/performance-optimization" element={<PerformanceOptimization />} />
          <Route path="/aimonitoring/maintenance-scheduling" element={<MaintenanceScheduling />} />
          <Route path="/solutions/ai-monitoring/247-monitoring" element={<AIMonitoring247 />} />
          <Route path="/solutions/ai-monitoring/predictive-alerts" element={<PredictiveAlerts />} />
          <Route path="/solutions/ai-monitoring/performance-optimization" element={<PerformanceOptimization />} />
          <Route path="/solutions/ai-monitoring/maintenance-scheduling" element={<MaintenanceScheduling />} />
          <Route path="/solutions/data-insights/weather-forecasting" element={<WeatherForecasting />} />
          <Route path="/solutions/data-insights/performance-analytics" element={<PerformanceAnalytics />} />
          <Route path="/solutions/data-insights/energy-predictions" element={<EnergyPredictions />} />
          <Route path="/solutions/data-insights/custom-reports" element={<CustomReports />} />
          <Route path="/solutions/cloud-dashboard/multi-site-management" element={<MultiSiteManagement />} />
          <Route path="/solutions/cloud-dashboard/user-access-control" element={<UserAccessControl />} />
          <Route path="/solutions/cloud-dashboard/api-integration" element={<APIIntegration />} />
          <Route path="/solutions/cloud-dashboard/mobile-responsive" element={<MobileResponsive />} />
          <Route path="/our-commitment" element={<OurCommittment />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/billing/ai-payment-engine" element={<AIPaymentEngine />} />
          <Route path="/billing/blockchain-security" element={<BlockChainSecurity />} />
          <Route path="/billing/transparency" element={<Transparency />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/sustainability-pledge" element={<SustainabilityPledge />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/insights" element={<Insights />} />
          <Route path="/blog/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/case-studies/flag-ship-projects" element={<FlagShipProjects />} />
          <Route path="/case-studies/success-stories" element={<SuccessStories />} />
          <Route path="/partners/why-partner" element={<WhyPartner />} />
          <Route path="/partners/become-partner" element={<BecomePartner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
