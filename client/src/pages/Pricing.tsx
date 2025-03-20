import { motion } from "framer-motion";
import { Check, Cloud, Cpu, Database, Server, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";

const userPlans = [
  {
    name: "Starter",
    price: "Coming Soon",
    icon: Cloud,
    features: [
      "2 vCPU cores",
      "4 GB RAM",
      "20 GB Storage",
      "Basic monitoring",
      "Community support",
      "Pay-as-you-go option",
    ],
  },
  {
    name: "Professional",
    price: "Coming Soon",
    icon: Server,
    features: [
      "4 vCPU cores",
      "8 GB RAM",
      "100 GB Storage",
      "Advanced monitoring",
      "Priority support",
      "Basic GPU access",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "Coming Soon",
    icon: Cpu,
    features: [
      "8 vCPU cores",
      "16 GB RAM",
      "500 GB Storage",
      "Premium GPU access",
      "24/7 support",
      "Advanced analytics",
      "Multi-user access",
      "Custom integrations",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    icon: Database,
    features: [
      "Custom CPU allocation",
      "Custom RAM allocation",
      "Custom storage",
      "Dedicated GPU resources",
      "Premium support",
      "Full API access",
      "Advanced security",
      "Custom SLA",
      "Dedicated account manager",
    ],
  },
];

const providerPlans = [
  {
    name: "Light Provider",
    earning: "Flexible Earnings",
    icon: Cloud,
    features: [
      "Share idle CPU & RAM",
      "Basic resource monitoring",
      "Automated resource management",
      "Community support",
      "Monthly payouts",
      "Basic analytics",
    ],
  },
  {
    name: "Professional Provider",
    earning: "Enhanced Earnings",
    icon: Server,
    features: [
      "Dedicated resource sharing",
      "Advanced monitoring tools",
      "Priority network status",
      "Priority support",
      "Weekly payouts",
      "Detailed analytics",
      "Performance optimization",
    ],
    popular: true,
  },
  {
    name: "Data Center Provider",
    earning: "Maximum Returns",
    icon: Database,
    features: [
      "Enterprise-grade infrastructure",
      "Custom resource allocation",
      "Network prioritization",
      "24/7 dedicated support",
      "Daily payouts",
      "Advanced reporting",
      "Custom SLA",
      "Direct account manager",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-6">Flexible Plans for Everyone</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you're looking to use computing resources or earn by sharing your infrastructure, we have the perfect plan for you.
            </p>
          </motion.div>

          <Tabs defaultValue="use" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="use">Use Resources</TabsTrigger>
              <TabsTrigger value="provide">Provide Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="use">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {userPlans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`relative h-full backdrop-blur-lg bg-card/80 ${
                      plan.popular ? "border-primary" : ""
                    }`}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              {plan.icon && <plan.icon className="w-5 h-5 text-primary" />}
                            </div>
                            <span className="text-2xl font-bold">{plan.name}</span>
                          </div>
                          <div className="mt-4">
                            <span className="text-4xl font-bold">{plan.price}</span>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact">
                          <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                            {plan.name === "Enterprise" ? "Contact Sales" : "Join Waitlist"}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="provide">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {providerPlans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`relative h-full backdrop-blur-lg bg-card/80 ${
                      plan.popular ? "border-primary" : ""
                    }`}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              {plan.icon && <plan.icon className="w-5 h-5 text-primary" />}
                            </div>
                            <span className="text-2xl font-bold">{plan.name}</span>
                          </div>
                          <div className="mt-4">
                            <span className="text-4xl font-bold">{plan.earning}</span>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact">
                          <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                            Become a Provider
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Custom Solutions Available</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Need a specialized configuration or have unique resource requirements? Our enterprise plans can be tailored to your specific needs. Contact our team to discuss custom solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}