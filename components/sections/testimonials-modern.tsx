"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/aceternity/animated-testimonials";
import { Star, Quote, Award, TrendingUp } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    quote: "TechForge transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300% and saved us millions.",
    name: "Sarah Chen",
    designation: "CTO at FinanceFlow",
    src: "/api/placeholder/400/400",
  },
  {
    quote: "The blockchain solution they built for us is revolutionary. We now process transactions 10x faster with complete transparency.",
    name: "Michael Rodriguez",
    designation: "CEO at LogiChain",
    src: "/api/placeholder/400/400",
  },
  {
    quote: "Their team's expertise in cloud architecture is unmatched. We scaled from 1,000 to 1 million users seamlessly.",
    name: "Emily Johnson",
    designation: "VP Engineering at ScaleUp",
    src: "/api/placeholder/400/400",
  },
  {
    quote: "Working with TechForge was like having a team of tech wizards. They delivered beyond our wildest expectations.",
    name: "David Kim",
    designation: "Founder at InnovateTech",
    src: "/api/placeholder/400/400",
  },
];

const companies = [
  { name: "Microsoft", logo: "🏢" },
  { name: "Google", logo: "🔍" },
  { name: "Amazon", logo: "📦" },
  { name: "Meta", logo: "👥" },
  { name: "Apple", logo: "🍎" },
  { name: "Netflix", logo: "🎬" },
];

export const TestimonialsModern = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const quoteRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 relative overflow-hidden">
      {/* Dynamic background with parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5"
        style={{ y: backgroundY }}
      />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Client Success</span>
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
                backgroundImage: "linear-gradient(135deg, #f59e0b 0%, #a855f7 25%, #3b82f6 50%, #10b981 75%, #ef4444 100%)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Trusted by Innovators
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what industry leaders say about working with us
          </p>
        </motion.div>

        {/* Animated testimonials */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

        {/* Company logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <motion.p
            className="text-center text-muted-foreground mb-8"
            animate={{
              textShadow: [
                "0 0 0px rgba(168, 85, 247, 0)",
                "0 0 8px rgba(168, 85, 247, 0.3)",
                "0 0 0px rgba(168, 85, 247, 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Trusted by leading companies worldwide
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  rotateY: 180,
                  z: 50,
                }}
                className="flex flex-col items-center gap-2 group cursor-pointer relative"
                style={{
                  transformStyle: "preserve-3d",
                  transformPerspective: 1000,
                }}
              >
                <motion.div
                  className="text-5xl group-hover:scale-110 transition-transform relative"
                  animate={{
                    rotateY: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut",
                  }}
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))",
                  }}
                >
                  {company.logo}
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full blur-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 2 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <motion.span
                  className="text-sm text-muted-foreground group-hover:text-primary transition-colors font-medium"
                  animate={{
                    color: ["#6b7280", "#a855f7", "#3b82f6", "#6b7280"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  {company.name}
                </motion.span>
                
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: 0.3 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote decorations with dynamic animations */}
        <motion.div
          className="absolute top-10 left-10 text-primary/20"
          style={{ rotate: quoteRotation }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Quote className="w-32 h-32 rotate-180" />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 right-10 text-primary/20"
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -360]) }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <Quote className="w-32 h-32" />
          </motion.div>
        </motion.div>
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/2 left-5 text-blue-500/10"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star className="w-16 h-16" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-5 text-green-500/10"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Award className="w-12 h-12" />
        </motion.div>
      </div>
    </section>
  );
};