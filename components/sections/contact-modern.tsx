"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "@/components/ui/aceternity/background-gradient";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Zap,
  Sparkles
} from "lucide-react";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

export const ContactModern = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Trigger enhanced confetti
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#a855f7", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
        shapes: ["circle", "square"],
        scalar: 1.2,
      });

      toast.success("🚀 Message sent! We'll get back to you within 24 hours.", {
        style: {
          background: "linear-gradient(135deg, #a855f7, #3b82f6)",
          color: "white",
          border: "1px solid rgba(168, 85, 247, 0.3)",
        },
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 relative overflow-hidden">
      {/* Dynamic background with parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-blue-500/10"
        style={{ y: backgroundY }}
      />
      
      {/* Animated cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          filter: "blur(1px)",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-3 h-3 bg-blue-500 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          filter: "blur(1px)",
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
            <Send className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Get In Touch</span>
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
                backgroundImage: "linear-gradient(135deg, #a855f7 0%, #3b82f6 30%, #10b981 60%, #f59e0b 100%)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Let's Build the Future
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your vision into reality? Let's discuss your project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <BackgroundGradient className="rounded-[22px] p-1">
                <form onSubmit={handleSubmit} className="bg-card rounded-[20px] p-8 space-y-6 relative">
                  {/* Form glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-green-500/5 rounded-[20px]" />
                  
                  <div className="grid md:grid-cols-2 gap-4 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary/50"
                        placeholder="John Doe"
                        whileFocus={{
                          borderColor: "#a855f7",
                          boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)",
                        }}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary/50"
                        placeholder="john@company.com"
                        whileFocus={{
                          borderColor: "#a855f7",
                          boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)",
                        }}
                      />
                    </motion.div>
                  </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Project Type</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a type</option>
                      <option value="ai">AI/ML Solution</option>
                      <option value="blockchain">Blockchain</option>
                      <option value="web">Web Application</option>
                      <option value="mobile">Mobile App</option>
                      <option value="cloud">Cloud Migration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select budget</option>
                    <option value="10-50k">$10,000 - $50,000</option>
                    <option value="50-100k">$50,000 - $100,000</option>
                    <option value="100-500k">$100,000 - $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                  <motion.div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full relative overflow-hidden"
                        disabled={isSubmitting}
                        style={{
                          background: isSubmitting
                            ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                            : "linear-gradient(135deg, #a855f7, #3b82f6)",
                        }}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              >
                                <Send className="ml-2 h-4 w-4" />
                              </motion.div>
                            </>
                          )}
                        </span>

                        {/* Animated background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20"
                          initial={{ x: "-100%" }}
                          animate={{ x: isSubmitting ? ["100%", "-100%"] : "100%" }}
                          transition={{
                            duration: isSubmitting ? 1.5 : 2,
                            repeat: isSubmitting ? Infinity : 0,
                            ease: "linear",
                          }}
                        />

                        {/* Sparkling effect */}
                        {!isSubmitting && (
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <Sparkles className="w-6 h-6 text-white/30" />
                          </motion.div>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              </BackgroundGradient>
            </motion.div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Quick contact */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <motion.a
                href="mailto:hello@techforge.dev"
                whileHover={{ 
                  x: 10,
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors relative overflow-hidden group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <Mail className="w-5 h-5 text-primary" />
                </motion.div>
                <div className="relative z-10">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">hello@techforge.dev</p>
                </div>
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                whileHover={{ 
                  x: 10,
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-blue-500 transition-colors relative overflow-hidden group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <Phone className="w-5 h-5 text-blue-500" />
                </motion.div>
                <div className="relative z-10">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 (234) 567-890</p>
                </div>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.div
                whileHover={{ 
                  x: 10,
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-green-500 transition-colors relative overflow-hidden group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <MapPin className="w-5 h-5 text-green-500" />
                </motion.div>
                <div className="relative z-10">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>

            {/* Book consultation */}
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Book a Consultation</h4>
              <p className="text-muted-foreground mb-4">
                Schedule a free 30-minute call with our experts
              </p>
              <Button variant="outline" className="neon-border">
                Schedule Call
              </Button>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};