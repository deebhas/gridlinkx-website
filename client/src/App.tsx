import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Technology from "@/pages/Technology";
import Investors from "@/pages/Investors";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import Status from "@/pages/Status";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50/50 to-white">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/technology" component={Technology} />
          <Route path="/investors" component={Investors} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={Admin} />
          <Route path="/status" component={Status} />
          <Route component={NotFound} />
        </Switch>
        <ScrollToTop />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}