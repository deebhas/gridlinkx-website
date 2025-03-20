import { motion } from "framer-motion";
import { Shield, Cloud, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import StatsCard from "@/components/StatsCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold"
            >
              The Future of{" "}
              <span className="text-primary">Cloud Storage</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              A decentralized cloud storage platform that revolutionizes how data is stored and secured, offering unparalleled security and efficiency.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex justify-center gap-4"
            >
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Shield}
              title="End-to-End Encryption"
              description="Your data is encrypted before it leaves your device, ensuring maximum security and privacy."
            />
            <FeatureCard
              icon={Cloud}
              title="Decentralized Storage"
              description="Files are split and distributed across our global network for enhanced reliability."
            />
            <FeatureCard
              icon={Lock}
              title="Zero-Knowledge Privacy"
              description="We never have access to your encryption keys or unencrypted data."
            />
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Advanced algorithms ensure quick access to your files from anywhere."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Platform Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Active Users"
              value="15,000+"
              description="Growing community of users worldwide"
            />
            <StatsCard
              title="Data Stored"
              value="8 PB+"
              description="Total data securely stored on our network"
            />
            <StatsCard
              title="Uptime"
              value="99.9%"
              description="Reliable platform availability"
            />
            <StatsCard
              title="Daily Traffic"
              value="150 TB+"
              description="Data transferred through our network daily"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust GridLinkX for their storage needs.
            Experience the future of cloud storage today.
          </p>
          <Button size="lg">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}
