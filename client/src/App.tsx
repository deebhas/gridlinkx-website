import { Switch, Route } from "wouter";
import { ThemeProvider } from "@/providers/theme-provider";
import Home from "@/pages/Home";
import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}