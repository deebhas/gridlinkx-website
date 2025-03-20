import { motion } from "framer-motion";
import { Lock, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: Lock,
      title: "Security First",
      description: "We prioritize the security and privacy of your data above all else.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously pushing the boundaries of cloud storage technology.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a strong, collaborative network of users and contributors.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Founded with a vision to revolutionize cloud storage, GridLinkX
              emerged from the belief that data storage should be secure,
              efficient, and accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full backdrop-blur-lg bg-card/80">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Secure the World's Data
                  </h3>
                  <p className="text-muted-foreground">
                    Providing unbreakable encryption and innovative storage
                    solutions to protect valuable information.
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
                  <h3 className="text-xl font-semibold mb-4">
                    Democratize Storage
                  </h3>
                  <p className="text-muted-foreground">
                    Making secure cloud storage accessible and affordable for
                    everyone around the globe.
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
                  <h3 className="text-xl font-semibold mb-4">
                    Create a New Economy
                  </h3>
                  <p className="text-muted-foreground">
                    Building a sustainable ecosystem where storage providers and
                    users can thrive together.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
