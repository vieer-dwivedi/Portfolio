import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";

// Lazy load pages for better performance and CloudFront compatibility
const Portfolio = lazy(() => import("@/pages/portfolio"));
const SitemapPage = lazy(() => import("@/pages/sitemap"));
const DevOpsEngineerHire = lazy(() => import("@/pages/devops-engineer-hire"));
const KubernetesConsultant = lazy(() => import("@/pages/kubernetes-consultant"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Loading component with professional spinner
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-400/20 border-t-blue-400 mx-auto mb-6"></div>
        <div className="absolute inset-0 animate-pulse">
          <div className="rounded-full h-16 w-16 bg-blue-400/10 mx-auto"></div>
        </div>
      </div>
      <p className="text-gray-300 text-lg font-medium">Loading DevOps Portfolio...</p>
    </div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Portfolio} />
        <Route path="/sitemap" component={SitemapPage} />
        <Route path="/devops-engineer-hire" component={DevOpsEngineerHire} />
        <Route path="/kubernetes-consultant" component={KubernetesConsultant} />
        <Route path="/aws-devops-expert" component={DevOpsEngineerHire} />
        <Route path="/azure-cloud-architect" component={DevOpsEngineerHire} />
        <Route path="/gcp-infrastructure-specialist" component={DevOpsEngineerHire} />
        <Route path="/sre-engineer" component={DevOpsEngineerHire} />
        <Route path="/devsecops-consultant" component={DevOpsEngineerHire} />
        <Route path="/ci-cd-automation-expert" component={DevOpsEngineerHire} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
