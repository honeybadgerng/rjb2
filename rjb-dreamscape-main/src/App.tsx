import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import WebMobileAppPage from "./pages/services/WebMobileApp";
import DigitalMarketingPage from "./pages/services/DigitalMarketing";
import Web3BlockchainPage from "./pages/services/Web3Blockchain";
import AIAutomationPage from "./pages/services/AIAutomation";
import GraphicsDesignPage from "./pages/services/GraphicsDesign";
import BusinessConsultancyPage from "./pages/services/BusinessConsultancy";
import AcademyPage from "./pages/academy";
import CourseDescriptionPage from "./pages/academy/[course-slug]";
import InstructorsPage from "./pages/academy/instructors";
import InstructorProfilePage from "./pages/academy/instructors/[name-or-id]";

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

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route
            path="/academy/:courseSlug"
            element={<CourseDescriptionPage />}
          />
          <Route path="/academy/instructors" element={<InstructorsPage />} />
          <Route
            path="/academy/instructors/:nameOrId"
            element={<InstructorProfilePage />}
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
