"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards";
import { Cpu, Layers } from "lucide-react";

const techCategories = {
  frontend: [
    { name: "React", logo: "⚛️" },
    { name: "Next.js", logo: "▲" },
    { name: "Vue.js", logo: "💚" },
    { name: "TypeScript", logo: "📘" },
    { name: "Tailwind CSS", logo: "🎨" },
    { name: "Three.js", logo: "🎭" },
  ],
  backend: [
    { name: "Node.js", logo: "💚" },
    { name: "Python", logo: "🐍" },
    { name: "Go", logo: "🐹" },
    { name: "Rust", logo: "🦀" },
    { name: "GraphQL", logo: "◈" },
    { name: "PostgreSQL", logo: "🐘" },
  ],
  cloud: [
    { name: "AWS", logo: "☁️" },
    { name: "Google Cloud", logo: "🌥️" },
    { name: "Azure", logo: "☁️" },
    { name: "Docker", logo: "🐳" },
    { name: "Kubernetes", logo: "☸️" },
    { name: "Terraform", logo: "🏗️" },
  ],
  ai: [
    { name: "TensorFlow", logo: "🧠" },
    { name: "PyTorch", logo: "🔥" },
    { name: "OpenAI", logo: "🤖" },
    { name: "LangChain", logo: "🔗" },
    { name: "Hugging Face", logo: "🤗" },
    { name: "Pinecone", logo: "🌲" },
  ],
};

export const TechStackModern = () => {
  const allTech = Object.values(techCategories).flat();
  const techItems = allTech.map((tech) => ({
    quote: tech.logo,
    name: tech.name,
  }));

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-4">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <motion.span 
              className="gradient-text text-glow-animate inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage: "linear-gradient(135deg, #f59e0b 0%, #ef4444 25%, #a855f7 50%, #3b82f6 75%, #10b981 100%)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Powered by Innovation
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We use the latest and most powerful technologies to build scalable, future-proof solutions
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {Object.entries(techCategories).map(([category, techs], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: -5,
                z: 50,
              }}
              className="relative group cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                transformPerspective: 1000,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl group-hover:blur-2xl transition-all neon-glow-intense" />
              <motion.div
                className="relative bg-card border border-border rounded-lg p-6 group-hover:border-primary/50 transition-all duration-300"
                whileHover={{ rotateX: 5, rotateY: -5 }}
              >
                <motion.h3
                  className="text-lg font-semibold mb-4 capitalize"
                  animate={{
                    color: ["#ffffff", "#a855f7", "#3b82f6", "#ffffff"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {category}
                </motion.h3>
                <div className="grid grid-cols-2 gap-3">
                  {techs.slice(0, 4).map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ scale: 1.1, x: 5 }}
                    >
                      <motion.span
                        className="text-2xl"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.3,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {tech.logo}
                      </motion.span>
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Bottom glow line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-b-lg"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Infinite scrolling tech */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <InfiniteMovingCards
            items={techItems}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="mb-8"
          />
          <InfiniteMovingCards
            items={[...techItems].reverse()}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </motion.div>

        {/* Interactive element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center gap-4 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 neon-border cursor-pointer"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
            }}
            animate={{
              borderColor: ["rgba(168, 85, 247, 0.2)", "rgba(168, 85, 247, 0.8)", "rgba(168, 85, 247, 0.2)"],
            }}
            transition={{
              borderColor: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Layers className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm">
              <motion.span
                className="text-primary font-semibold text-lg"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(168, 85, 247, 0)",
                    "0 0 10px rgba(168, 85, 247, 0.8)",
                    "0 0 0px rgba(168, 85, 247, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                50+
              </motion.span>{" "}
              technologies mastered
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};