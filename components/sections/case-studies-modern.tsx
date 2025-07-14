"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";
import { ArrowUpRight, BarChart3, Users, Zap, TrendingUp, Award, DollarSign } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const caseStudies = [
  {
    title: "AI-Powered Analytics Platform",
    client: "FinTech Startup",
    description: "Built a real-time analytics dashboard using machine learning to predict market trends with 94% accuracy",
    image: "/api/placeholder/600/400",
    stats: {
      performance: "+250%",
      users: "50K+",
      uptime: "99.9%",
    },
    tech: ["TensorFlow", "React", "AWS", "Python"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Blockchain Supply Chain",
    client: "Logistics Corp",
    description: "Implemented a transparent supply chain tracking system using blockchain technology",
    image: "/api/placeholder/600/400",
    stats: {
      efficiency: "+180%",
      transactions: "1M+",
      cost: "-45%",
    },
    tech: ["Ethereum", "Solidity", "Node.js", "React"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cloud Migration Success",
    client: "Enterprise SaaS",
    description: "Migrated legacy infrastructure to cloud-native architecture, improving scalability and reducing costs",
    image: "/api/placeholder/600/400",
    stats: {
      speed: "+300%",
      savings: "$2M+",
      reliability: "99.99%",
    },
    tech: ["Kubernetes", "Docker", "AWS", "Terraform"],
    color: "from-green-500 to-emerald-500",
  },
];

export const CaseStudiesModern = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="case-studies" className="py-24 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.05), transparent)",
          y: backgroundY,
        }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-4">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Transformative Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped companies revolutionize their digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  z: 50,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transformPerspective: 1000,
                }}
              >
                <CardSpotlight className="h-full group cursor-pointer">
                  <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-32 h-32 border-4 border-white/20 rounded-lg"
                      />
                      <motion.div
                        animate={{
                          rotate: [360, 0],
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute w-24 h-24 border-4 border-white/30 rounded-full"
                      />
                    </div>
                    
                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="text-white"
                      >
                        <ArrowUpRight className="w-12 h-12" />
                      </motion.div>
                    </motion.div>
                  </div>

                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-sm text-primary mb-4">{study.client}</p>
                <p className="text-muted-foreground mb-6">{study.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(study.stats).map(([key, value], idx) => (
                      <motion.div
                        key={key}
                        className="text-center relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <motion.div
                          className="text-lg font-bold text-primary neon-text"
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {value}
                        </motion.div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        <motion.div
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-primary to-blue-500"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                        />
                      </motion.div>
                    ))}
                  </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                  <motion.button
                    className="group flex items-center gap-2 text-primary hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </motion.button>
                </CardSpotlight>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-muted-foreground mb-4"
            animate={{
              textShadow: [
                "0 0 0px rgba(168, 85, 247, 0)",
                "0 0 10px rgba(168, 85, 247, 0.5)",
                "0 0 0px rgba(168, 85, 247, 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Ready to write your success story?
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors relative overflow-hidden neon-glow-intense"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Start Your Project</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};