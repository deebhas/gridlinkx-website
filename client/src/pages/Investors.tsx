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
  PieChart,
  Pie,
  Cell,
} from "recharts";

const marketData = [
  { year: 2023, value: 97 },
  { year: 2024, value: 120 },
  { year: 2025, value: 149 },
  { year: 2026, value: 185 },
  { year: 2027, value: 230 },
];

const costComparisonData = [
  { name: "Traditional Cloud", value: 100 },
  { name: "GridLinkX", value: 30 },
];

const revenueStreams = [
  { name: "Computing Resources", value: 40 },
  { name: "Enterprise Solutions", value: 25 },
  { name: "API Access", value: 15 },
  { name: "Network Rewards", value: 20 },
];

const COLORS = ['#3b82f6', '#22c55e', '#6366f1', '#f59e0b'];

// Custom tooltip styles
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded-lg shadow-lg">
        <p className="font-semibold">{label}</p>
        <p className="text-primary">{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

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
            <h1 className="text-4xl font-bold mb-6">Investment Opportunity</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join us in revolutionizing the $97B cloud computing industry through
              our innovative decentralized platform.
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
                    GridLinkX introduces a fundamentally new, asset-light model that transforms how cloud computing services are delivered, focusing on sustainability and community-driven growth.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                      <h3 className="font-semibold mb-2">Asset-Light Model</h3>
                      <p className="text-sm text-muted-foreground">
                        No billion-dollar data centers needed - leveraging existing infrastructure worldwide
                      </p>
                    </div>
                    <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                      <h3 className="font-semibold mb-2">Cost Efficiency</h3>
                      <p className="text-sm text-muted-foreground">
                        Up to 70% cost reduction compared to traditional providers
                      </p>
                    </div>
                    <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                      <h3 className="font-semibold mb-2">Network Effects</h3>
                      <p className="text-sm text-muted-foreground">
                        Strong competitive moat through growing provider network
                      </p>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-6">Cost Comparison</h3>
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={costComparisonData} layout="vertical" barSize={30}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis type="number" domain={[0, 100]} />
                          <YAxis dataKey="name" type="category" width={120} />
                          <Tooltip content={<CustomTooltip />} />
                          <Bar 
                            dataKey="value" 
                            radius={[0, 4, 4, 0]}
                            fill="url(#colorGradient)"
                          />
                          <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                              <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.8} />
                            </linearGradient>
                          </defs>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 text-center">
                      Relative Cost Comparison (Traditional Cloud = 100%)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="market">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Market Growth</h2>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={marketData} barSize={40}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar 
                          dataKey="value" 
                          fill="url(#marketGradient)"
                          radius={[4, 4, 0, 0]}
                        />
                        <defs>
                          <linearGradient id="marketGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                            <stop offset="100%" stopColor="#93c5fd" stopOpacity={0.8} />
                          </linearGradient>
                        </defs>
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
                              Significantly reduced carbon footprint by utilizing existing resources and eliminating the need for new data centers
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                            <span className="text-green-600">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Global Scalability</h4>
                            <p className="text-muted-foreground">
                              Rapid expansion capability without traditional infrastructure constraints
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                            <span className="text-green-600">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Network Effect Moat</h4>
                            <p className="text-muted-foreground">
                              Each new participant strengthens the network, creating a powerful competitive advantage
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Revenue Model</h3>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={revenueStreams}
                              dataKey="value"
                              nameKey="name"
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              label
                            >
                              {revenueStreams.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4 text-center">
                        Projected Revenue Distribution
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Investment Highlights</h3>
                      <div className="space-y-4">
                        <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                          <h4 className="font-semibold">Seeking $10M Series A</h4>
                          <p className="text-sm text-muted-foreground">
                            Projected 15x ROI within 5 years
                          </p>
                        </div>
                        <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                          <h4 className="font-semibold">High Operating Margins</h4>
                          <p className="text-sm text-muted-foreground">
                            Asset-light model enables 70%+ gross margins
                          </p>
                        </div>
                        <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                          <h4 className="font-semibold">Multiple Revenue Streams</h4>
                          <p className="text-sm text-muted-foreground">
                            Diversified income from compute resources, enterprise solutions, and network rewards
                          </p>
                        </div>
                      </div>
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