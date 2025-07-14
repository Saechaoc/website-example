"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Lightbulb, 
  Search, 
  Paintbrush, 
  Code2, 
  TestTube, 
  Rocket,
  CheckCircle,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Deep dive into your requirements and objectives",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Ideation",
    description: "Brainstorm innovative solutions and strategies",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Paintbrush,
    title: "Design",
    description: "Create stunning UI/UX and system architecture",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Build with cutting-edge technologies",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Rigorous QA and performance optimization",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploy and scale your solution",
    color: "from-pink-500 to-rose-500",
  },
];

export const ProcessModern = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="process" className="py-24 relative overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-4">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <motion.span 
              className="gradient-text text-glow-animate inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage: "linear-gradient(135deg, #a855f7 0%, #3b82f6 25%, #10b981 50%, #f59e0b 75%, #ef4444 100%)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              From Vision to Reality
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our battle-tested process ensures your project succeeds from concept to deployment
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line background */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent rounded-full" />
          
          {/* Animated progress line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-blue-500 to-green-500 rounded-full neon-glow-intense"
            style={{
              height: timelineProgress,
              originY: 0,
            }}
          />
          
          {/* Electric pulse effect */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full"
            style={{
              top: timelineProgress,
              filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.8))",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Process steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn(
                    "relative grid md:grid-cols-2 gap-8 items-center",
                    isEven ? "" : "md:text-right"
                  )}
                >
                  {/* Content */}
                  <motion.div
                    className={cn("space-y-4", isEven ? "md:order-1" : "md:order-2")}
                    whileHover={{
                      scale: 1.05,
                      rotateY: isEven ? 5 : -5,
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
                    <div className={cn("flex items-center gap-4", isEven ? "" : "md:justify-end")}>
                      <motion.div
                        className={`p-4 rounded-lg bg-gradient-to-br ${step.color} text-white relative overflow-hidden cursor-pointer`}
                        whileHover={{
                          scale: 1.2,
                          rotate: 360,
                        }}
                        transition={{ duration: 0.5 }}
                        style={{
                          filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))",
                        }}
                      >
                        <Icon className="w-8 h-8 relative z-10" />
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ borderRadius: "50%" }}
                        />
                      </motion.div>
                      <motion.h3
                        className="text-2xl font-bold"
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
                          delay: index * 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        {step.title}
                      </motion.h3>
                    </div>
                    <motion.p
                      className="text-muted-foreground"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>

                  {/* Center node */}
                  <div className={cn("relative flex justify-center", isEven ? "md:order-2" : "md:order-1")}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.3,
                        rotateZ: 180,
                      }}
                      className="relative cursor-pointer"
                      style={{
                        filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))",
                      }}
                    >
                      <motion.div
                        className="w-20 h-20 bg-background border-4 border-primary rounded-full flex items-center justify-center relative z-10"
                        animate={{
                          borderColor: ["#a855f7", "#3b82f6", "#10b981", "#a855f7"],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <motion.span
                          className="text-primary font-bold text-xl"
                          animate={{
                            color: ["#a855f7", "#3b82f6", "#10b981", "#a855f7"],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          {index + 1}
                        </motion.span>
                      </motion.div>
                      
                      {/* Multiple pulse rings */}
                      <motion.div
                        className="absolute inset-0 w-20 h-20 border-2 border-primary rounded-full"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 w-20 h-20 border-2 border-blue-500 rounded-full"
                        animate={{
                          scale: [1, 2.5, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-block p-1 bg-gradient-to-r from-primary via-blue-500 to-green-500 rounded-lg relative overflow-hidden"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            <motion.button
              className="px-8 py-3 bg-background text-primary rounded-md hover:bg-background/90 transition-colors relative z-10 font-bold"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 10px rgba(168, 85, 247, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="flex items-center gap-2"
                animate={{
                  color: ["#a855f7", "#3b82f6", "#10b981", "#a855f7"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Start Your Journey
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Zap className="w-4 h-4" />
                </motion.div>
              </motion.span>
            </motion.button>
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};