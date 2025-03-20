import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const marketData = [
  { year: 2023, value: 97 },
  { year: 2024, value: 120 },
  { year: 2025, value: 149 },
  { year: 2026, value: 185 },
  { year: 2027, value: 230 },
];

export default function Investors() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-6">For Investors</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join us in revolutionizing the cloud computing industry through
              decentralization and cutting-edge technology.
            </p>
          </motion.div>

          <Tabs defaultValue="opportunity" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="opportunity">The Opportunity</TabsTrigger>
              <TabsTrigger value="market">Market Analysis</TabsTrigger>
              <TabsTrigger value="financials">Financials</TabsTrigger>
            </TabsList>

            <TabsContent value="opportunity">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Revolutionary Computing Technology
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    GridLinkX is positioned to capture a significant share of the
                    $97B cloud computing market through our innovative decentralized
                    approach.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-lg bg-primary/10">
                      <h3 className="font-semibold mb-2">Asset-Light Model</h3>
                      <p className="text-sm text-muted-foreground">
                        No billion-dollar data centers needed - leveraging existing infrastructure
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10">
                      <h3 className="font-semibold mb-2">Cost Efficiency</h3>
                      <p className="text-sm text-muted-foreground">
                        Up to 70% cost reduction compared to traditional providers
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10">
                      <h3 className="font-semibold mb-2">Network Effects</h3>
                      <p className="text-sm text-muted-foreground">
                        Strong competitive moat through growing provider network
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="market">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Market Growth</h2>
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={marketData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="hsl(var(--primary))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Cloud Computing Market Size (Billions USD)
                  </p>

                  <div className="mt-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Competitive Advantages</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                            <span className="text-green-600">1</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">ESG Alignment</h4>
                            <p className="text-muted-foreground">
                              Reduced carbon footprint through resource reuse and sustainable practices
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                            <span className="text-green-600">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Community-Driven Growth</h4>
                            <p className="text-muted-foreground">
                              Network effect creates strong barriers to entry as community grows
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                            <span className="text-green-600">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Technological Innovation</h4>
                            <p className="text-muted-foreground">
                              Patentable distributed computing technology with multiple applications
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="financials">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Financial Projections</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Investment Overview</h3>
                      <p className="text-muted-foreground">
                        Seeking $10M in Series A funding with projected 15x ROI
                        within 5 years
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Revenue Streams</h3>
                      <ul className="list-disc list-inside text-muted-foreground">
                        <li>Computing resource subscription fees</li>
                        <li>Enterprise solutions</li>
                        <li>API access fees</li>
                        <li>Network participation rewards</li>
                        <li>Value-added services</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">High Margin Business Model</h3>
                      <p className="text-muted-foreground">
                        Asset-light approach with minimal infrastructure costs allows for attractive operating margins and extended runway for product innovation and market capture.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}