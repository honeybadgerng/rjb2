import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegistrationPage from "./pages/academy/registration";
import Careers from "./pages/careers";
import Career from "./pages/careers/[slug]";

// Service Pages
import Services from "./pages/services";
import WebMobileAppPage from "./pages/services/WebMobileApp";
import DigitalMarketingPage from "./pages/services/DigitalMarketing";
import Web3BlockchainPage from "./pages/services/Web3Blockchain";
import AIAutomationPage from "./pages/services/AIAutomation";
import GraphicsDesignPage from "./pages/services/GraphicsDesign";
import BusinessConsultancyPage from "./pages/services/BusinessConsultancy";
import ImpactTrackingPage from "./pages/services/ImpactTrackingPage";
import ELearningPage from "./pages/services/ELearningPage";
import AICulturePage from "./pages/services/AICulturePage";
import MultilingualPage from "./pages/services/MultilingualPage";
import AcademyPage from "./pages/academy";
import CourseDescriptionPage from "./pages/academy/[course-slug]";
import InstructorsPage from "./pages/academy/instructors";
import InstructorProfilePage from "./pages/academy/instructors/[name-or-id]";
import ThankYouPage from "./pages/thank-you";
import About from "./pages/about";
import Contact from "./pages/contact";
import FoundationPage from "./pages/foundation/FoundationPage";
import ThankYou from "./pages/careers/thank-you";

import ProjectsPage from "./pages/projects";
import ProjectDetailsPage from "./pages/projects/[project-slug]";
import Apply from "./pages/careers/Apply/[slug]";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Service Routes */}
          <Route
            path="/services/impact-tracking"
            element={<ImpactTrackingPage />}
          />
          <Route path="/services/e-learning" element={<ELearningPage />} />
          <Route path="/services/ai-culture" element={<AICulturePage />} />
          <Route path="/services/multilingual" element={<MultilingualPage />} />
          <Route
            path="/services/web-mobile-app"
            element={<WebMobileAppPage />}
          />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketingPage />}
          />
          <Route
            path="/services/web3-blockchain"
            element={<Web3BlockchainPage />}
          />
          <Route
            path="/services/ai-automation"
            element={<AIAutomationPage />}
          />
          <Route
            path="/services/graphics-design"
            element={<GraphicsDesignPage />}
          />
          <Route
            path="/services/business-consultancy"
            element={<BusinessConsultancyPage />}
          />

          {/* Career Routes */}
          <Route path="/careers/apply/:slug" element={<Apply />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/about" element={<About />} />

          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/academy/:courseSlug"
            element={<CourseDescriptionPage />}
          />
          <Route path="/academy/instructors" element={<InstructorsPage />} />
          <Route
            path="/academy/instructors/:nameOrId"
            element={<InstructorProfilePage />}
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route
            path="/projects/:projectSlug"
            element={<ProjectDetailsPage />}
          />
          <Route path="/careers/:slug" element={<Career />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/academy/registration" element={<RegistrationPage />} />
          <Route path="/foundation" element={<FoundationPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
