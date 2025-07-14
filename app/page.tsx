import { HeroModern } from "@/components/sections/hero-modern";
import { ServicesModern } from "@/components/sections/services-modern";
import { CaseStudiesModern } from "@/components/sections/case-studies-modern";
import { TechStackModern } from "@/components/sections/tech-stack-modern";
import { ProcessModern } from "@/components/sections/process-modern";
import { TestimonialsModern } from "@/components/sections/testimonials-modern";
import { ContactModern } from "@/components/sections/contact-modern";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroModern />
      <ServicesModern />
      <CaseStudiesModern />
      <TechStackModern />
      <ProcessModern />
      <TestimonialsModern />
      <ContactModern />
    </main>
  );
}