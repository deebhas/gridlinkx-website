import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "5 GB Storage",
      "Basic encryption",
      "1 user",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    features: [
      "100 GB Storage",
      "Advanced encryption",
      "3 users",
      "Priority support",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "$29.99",
    features: [
      "1 TB Storage",
      "Enterprise-grade encryption",
      "10 users",
      "24/7 support",
      "Advanced API access",
      "Custom domain",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited storage",
      "Custom security features",
      "Unlimited users",
      "Dedicated support team",
      "Full API access",
      "Advanced analytics",
      "SLA guarantee",
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
            <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your storage needs. All plans include our
              core security features and world-class support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                        {plan.price !== "Custom" && (
                          <span className="text-muted-foreground">/month</span>
                        )}
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
                    <Button className="w-full mt-6">
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
