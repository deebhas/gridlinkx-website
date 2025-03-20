import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
}

export default function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 backdrop-blur-lg bg-card/80">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </Card>
    </motion.div>
  );
}
