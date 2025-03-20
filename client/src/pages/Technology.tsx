import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Network, Shield, Cpu, Database, Gauge } from "lucide-react";

export default function Technology() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-6">Our Technology</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how GridLinkX revolutionizes distributed computing through
              advanced technology and innovative resource sharing.
            </p>
          </motion.div>

          {/* Architecture Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">System Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full backdrop-blur-lg bg-card/80">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Network className="h-6 w-6 text-primary" />
                      P2P Network Layer
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Our peer-to-peer network connects providers and users globally,
                      enabling direct resource sharing without central bottlenecks.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Automatic node discovery and connection</li>
                      <li>Intelligent routing for optimal performance</li>
                      <li>Real-time network health monitoring</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full backdrop-blur-lg bg-card/80">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Shield className="h-6 w-6 text-primary" />
                      Security Framework
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Military-grade encryption and advanced security protocols protect
                      all resources and data within the network.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>End-to-end encryption for all data</li>
                      <li>Secure resource isolation</li>
                      <li>Blockchain-based verification</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Resource Management */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Resource Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full backdrop-blur-lg bg-card/80">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Cpu className="h-6 w-6 text-primary" />
                      CPU Sharing
                    </h3>
                    <p className="text-muted-foreground">
                      Dynamic CPU allocation allows providers to share processing power
                      while maintaining their system's responsiveness. Advanced
                      scheduling ensures optimal resource utilization.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full backdrop-blur-lg bg-card/80">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Database className="h-6 w-6 text-primary" />
                      Memory Pooling
                    </h3>
                    <p className="text-muted-foreground">
                      Innovative memory virtualization technology enables secure
                      sharing of RAM resources across the network, with instant
                      scaling capabilities.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card className="h-full backdrop-blur-lg bg-card/80">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Gauge className="h-6 w-6 text-primary" />
                      Performance Optimization
                    </h3>
                    <p className="text-muted-foreground">
                      AI-driven load balancing and resource allocation ensures
                      maximum efficiency and minimal latency across the network.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
            <div className="space-y-8">
              <Card className="backdrop-blur-lg bg-card/80">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">1. Resource Discovery</h3>
                  <p className="text-muted-foreground">
                    When a provider joins the network, their available resources are
                    automatically indexed and made available to the marketplace. Our
                    AI algorithms continuously monitor resource availability and
                    optimize distribution.
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-lg bg-card/80">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">2. Smart Allocation</h3>
                  <p className="text-muted-foreground">
                    When a user requests resources, our system instantly matches them
                    with the optimal providers based on factors like location,
                    latency, and capacity. Resources are allocated in real-time
                    through secure channels.
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-lg bg-card/80">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">3. Secure Processing</h3>
                  <p className="text-muted-foreground">
                    All computation and data transfer occur within isolated,
                    encrypted environments. Our blockchain-based verification system
                    ensures transparent resource usage tracking and fair
                    compensation for providers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}