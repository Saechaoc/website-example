"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "@/components/ui/aceternity/background-gradient";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Sparkles } from "@/components/ui/aceternity/sparkles";
import { ArrowRight, Code2, Zap, Shield, Cpu, Rocket, Terminal } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const codeSnippets = [
  `const ai = new TechForgeAI();
await ai.train(data);
const results = ai.predict(input);`,
  `blockchain.deploy({
  contract: "SmartContract",
  network: "ethereum"
});`,
  `const app = await techforge.build({
  stack: ["Next.js", "AI", "Web3"],
  scale: "infinite"
});`,
];

export const HeroModern = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background that follows mouse */}
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.3), transparent 50%)`,
        }}
      />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20" />
      
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Sparkles effect */}
      <div className="absolute inset-0">
        <Sparkles
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={100}
          particleColor="#a855f7"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Next-Gen Development</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
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
                  backgroundImage: "linear-gradient(135deg, #a855f7 0%, #3b82f6 25%, #10b981 50%, #f59e0b 75%, #ef4444 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Build the Future
              </motion.span>
              <br />
              <TypeAnimation
                sequence={[
                  "with AI",
                  2000,
                  "with Blockchain",
                  2000,
                  "with Innovation",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-foreground neon-text"
              />
            </h1>

            <TextGenerateEffect
              words="We craft cutting-edge software solutions that push the boundaries of what's possible. From AI-powered applications to blockchain integrations, we turn visionary ideas into reality."
              className="text-lg text-muted-foreground mb-8"
            />

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="group relative overflow-hidden neon-glow-intense"
                    style={{
                      background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
                    }}
                  >
                    <span className="relative z-10">
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-x-2" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ opacity: 0.2 }}
                    />
                  </Button>
                </motion.div>
              </Link>
              <Link href="#case-studies">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="neon-border pulse-border">
                    <Terminal className="mr-2 h-4 w-4 text-primary" />
                    View Our Work
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { label: "Projects Delivered", value: "200+" },
                { label: "Client Satisfaction", value: "99%" },
                { label: "Years of Innovation", value: "10+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary neon-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Code animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <BackgroundGradient className="rounded-[22px] p-1">
              <div className="bg-zinc-900 rounded-[20px] p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                
                <TypeAnimation
                  sequence={codeSnippets.flatMap((snippet) => [
                    snippet,
                    3000,
                  ])}
                  wrapper="div"
                  speed={75}
                  repeat={Infinity}
                  className="text-sm text-green-400 font-mono whitespace-pre-wrap"
                  cursor={true}
                />
              </div>
            </BackgroundGradient>

            {/* Floating badges */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -right-8 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-lg p-3 neon-glow-intense"
            >
              <Shield className="w-6 h-6 text-primary" />
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-8 -left-8 bg-blue-500/20 backdrop-blur-sm border border-blue-500/50 rounded-lg p-3"
              style={{
                filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))",
              }}
            >
              <Cpu className="w-6 h-6 text-blue-500" />
            </motion.div>
            
            <motion.div
              animate={{
                x: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute top-1/2 -right-16 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg p-3"
              style={{
                filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))",
              }}
            >
              <Rocket className="w-6 h-6 text-green-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};