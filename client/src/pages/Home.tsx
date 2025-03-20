import { motion } from "framer-motion";
import { Shield, Cloud, Cpu, Zap, Lock, Network, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
            >
              The Future of{" "}
              <span className="block">Distributed Computing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              A revolutionary platform that transforms how computing resources are shared and utilized. Join our community-driven ecosystem that dramatically reduces costs while rewarding resource providers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex justify-center gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Stay Updated
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">Learn More</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Complete Computing Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Cpu}
              title="Distributed Processing"
              description="Share and utilize CPU power across the network, enabling massive parallel computing capabilities."
            />
            <FeatureCard
              icon={Cloud}
              title="Redundant Storage"
              description="Advanced data distribution ensures reliability and instant access through multiple backup nodes."
            />
            <FeatureCard
              icon={Shield}
              title="GPU Computing"
              description="Access powerful GPU resources for AI, rendering, and computational tasks."
            />
            <FeatureCard
              icon={Zap}
              title="Memory Pooling"
              description="Dynamic RAM allocation and sharing for enhanced application performance."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why GridLinkX?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cost Revolution</h3>
              <p className="text-muted-foreground">
                Dramatically reduce computing costs through our community-driven marketplace. Resource providers earn by sharing idle capacity.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Network className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">P2P Architecture</h3>
              <p className="text-muted-foreground">
                Decentralized peer-to-peer network ensures high availability and faster data access through local nodes.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Military-grade encryption and distributed storage ensure your data remains private and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <h3 className="text-xl font-semibold mb-4">Resource Distribution</h3>
              <p className="text-muted-foreground">
                Computing resources are split into micro-units and distributed across our secure network, enabling efficient sharing and utilization.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <h3 className="text-xl font-semibold mb-4">Smart Allocation</h3>
              <p className="text-muted-foreground">
                Advanced algorithms dynamically allocate CPU, GPU, and RAM resources based on real-time demand and availability.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <h3 className="text-xl font-semibold mb-4">Secure Processing</h3>
              <p className="text-muted-foreground">
                End-to-end encryption and blockchain technology ensure secure and transparent resource sharing across the network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our waitlist to receive exclusive updates and be the first to know when our beta program launches.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}