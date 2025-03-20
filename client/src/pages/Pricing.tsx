import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

const plans = [
  {
    name: "Basic",
    price: "Coming Soon",
    features: [
      "Basic compute resources",
      "5 GB Storage",
      "1 vCPU core",
      "2 GB RAM",
      "Community support",
      "Basic monitoring",
    ],
  },
  {
    name: "Professional",
    price: "Coming Soon",
    features: [
      "Enhanced compute power",
      "100 GB Storage",
      "4 vCPU cores",
      "8 GB RAM",
      "Basic GPU access",
      "Priority support",
      "Advanced monitoring",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited resources",
      "Custom storage allocation",
      "Dedicated CPU cores",
      "Custom RAM allocation",
      "Priority GPU access",
      "24/7 support",
      "Full API access",
      "Advanced analytics",
      "Custom SLA",
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
            <h1 className="text-4xl font-bold mb-6">Flexible Resource Plans</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your computing needs. All plans include access to our distributed computing platform, advanced security features, and dedicated support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
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
                      <div className="text-2xl font-bold">{plan.name}</div>
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
                      <Button className="w-full mt-6">
                        {plan.name === "Enterprise" ? "Contact Sales" : "Join Waitlist"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Custom Solutions Available</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Need a specialized configuration? Our enterprise plans can be tailored to your specific computing requirements. Contact our sales team to discuss custom solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}