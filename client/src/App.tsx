import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/portfolio";
import SitemapPage from "@/pages/sitemap";
import DevOpsEngineerHire from "@/pages/devops-engineer-hire";
import KubernetesConsultant from "@/pages/kubernetes-consultant";
import NotFound from "@/pages/not-found";

function Router() {
  return (
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
