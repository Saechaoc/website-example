"use client";

import { BentoGrid } from "@/components/ui/aceternity/bento-grid";
import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code,
  Database,
  Globe,
  Lock,
  Rocket,
  Smartphone,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions including RAG, LLMs, and custom ML models",
    icon: Brain,
    className: "md:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
    ),
  },
  {
    title: "Blockchain Development",
    description: "Smart contracts, DeFi, and Web3 integration",
    icon: Lock,
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
    ),
  },
  {
    title: "Cloud Architecture",
    description: "Scalable cloud solutions on AWS, Azure, and GCP",
    icon: Cloud,
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
    ),
  },
  {
    title: "Custom Software",
    description: "Bespoke applications tailored to your unique needs",
    icon: Code,
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />
    ),
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    icon: Smartphone,
    className: "md:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
    ),
  },
];

const BentoGridItem = ({
  className,
  title,
  description,
  icon: Icon,
  background,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: any;
  background?: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: -5,
        z: 50,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition-all duration-200 shadow-input dark:shadow-none p-6 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 relative overflow-hidden cursor-pointer perspective-1000",
        "hover:border-primary/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] neon-border",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
    >
      {background}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.1), transparent 70%)",
        }}
      />
      
      <div className="group-hover/bento:translate-z-4 transition-all duration-200 relative z-10">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4"
        >
          <Icon className="h-10 w-10 text-primary neon-glow-intense" />
        </motion.div>
        
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-lg">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
          {description}
        </div>
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0 }}
        />
      </div>
    </motion.div>
  );
};

export const ServicesModern = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-4">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <motion.span 
              className="gradient-text text-glow-animate inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage: "linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #a855f7 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Futuristic Solutions
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build tomorrow's digital infrastructure today
          </p>
        </motion.div>

        <BentoGrid className="max-w-7xl mx-auto md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <BentoGridItem
                title={service.title}
                description={service.description}
                icon={service.icon}
                className={service.className}
                background={service.background}
              />
            </motion.div>
          ))}
        </BentoGrid>

        {/* Tech stack floating animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center items-center gap-8 flex-wrap"
        >
          {[Database, Globe, Cpu].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
              className="p-4 bg-primary/10 rounded-lg border border-primary/20"
            >
              <Icon className="w-8 h-8 text-primary" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};