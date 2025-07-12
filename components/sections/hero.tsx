"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "@/components/ui/aceternity/background-gradient";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Expert Software Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Transform Your Ideas Into{" "}
            <span className="text-primary">Powerful Software</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We specialize in custom software development, AI/ML solutions, and
            enterprise applications that drive business growth and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <BackgroundGradient className="rounded-full">
              <Button size="lg" className="rounded-full">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </BackgroundGradient>
            
            <Button size="lg" variant="outline" className="rounded-full">
              View Our Work
              <Code2 className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <div className="bg-neutral-900 rounded-lg p-8 border border-neutral-800">
            <pre className="text-sm text-neutral-400">
              <code>{`// Building the future, one line at a time
const solution = await develop({
  technology: ["React", "Next.js", "AI/ML", "Cloud"],
  approach: "agile",
  quality: "enterprise-grade"
});`}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}