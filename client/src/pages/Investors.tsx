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
              Join us in revolutionizing the cloud storage industry through
              decentralization and cutting-edge technology.
            </p>
          </motion.div>

          <Tabs defaultValue="opportunity" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="opportunity">The Opportunity</TabsTrigger>
              <TabsTrigger value="market">Market Analysis</TabsTrigger>
              <TabsTrigger value="financials">Financials</TabsTrigger>
              <TabsTrigger value="team">Our Team</TabsTrigger>
            </TabsList>

            <TabsContent value="opportunity">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Revolutionary Storage Technology
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    GridLinkX is positioned to capture a significant share of the
                    $97B cloud storage market through our innovative decentralized
                    approach.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-lg bg-primary/10">
                      <h3 className="font-semibold mb-2">Market Disruption</h3>
                      <p className="text-sm text-muted-foreground">
                        Revolutionizing traditional cloud storage with blockchain
                        technology
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10">
                      <h3 className="font-semibold mb-2">Cost Efficiency</h3>
                      <p className="text-sm text-muted-foreground">
                        Up to 70% cost reduction compared to traditional providers
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10">
                      <h3 className="font-semibold mb-2">Global Scale</h3>
                      <p className="text-sm text-muted-foreground">
                        Rapidly expanding network of storage providers worldwide
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
                    Cloud Storage Market Size (Billions USD)
                  </p>
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
                        <li>Storage subscription fees</li>
                        <li>Enterprise solutions</li>
                        <li>API access fees</li>
                        <li>Network participation rewards</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Leadership Team</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4" />
                      <h3 className="font-semibold">Sarah Chen</h3>
                      <p className="text-sm text-muted-foreground">CEO & Founder</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4" />
                      <h3 className="font-semibold">David Martinez</h3>
                      <p className="text-sm text-muted-foreground">CTO</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4" />
                      <h3 className="font-semibold">Emily Thompson</h3>
                      <p className="text-sm text-muted-foreground">COO</p>
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
