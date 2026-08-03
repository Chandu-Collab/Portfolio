"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ZoroHologram = dynamic(() => import("@/components/3d/ZoroHologram"), {
  ssr: false,
});

const milestones = [
  { role: "Developer", desc: "Writing code, learning syntax, fixing bugs." },
  { role: "Engineer", desc: "System design, scalable architecture, clean code." },
  { role: "Builder", desc: "End-to-end product delivery, UI/UX, full stack." },
  { role: "Automation Architect", desc: "Workflow automation, LLMs, AI Agents, n8n." },
  { role: "Founder of SHINKA", desc: "Business value, intelligent systems, digital innovation." }
];

export default function Timeline() {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Evolution</h2>
        <p className="text-muted-foreground max-w-xl">
          From writing lines of code to orchestrating intelligent digital systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Milestones */}
        <div className="relative border-l border-border ml-4 md:ml-0 md:pl-8 space-y-12">
          {milestones.map((m, i) => (
            <motion.div 
              key={m.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-[21px] md:-left-[37px] top-1.5 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#00F0FF]" />
              <h3 className="text-2xl font-bold text-foreground">{m.role}</h3>
              <p className="text-muted-foreground mt-2">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Zoro */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square md:aspect-auto lg:sticky lg:top-32"
        >
          <div className="absolute inset-0 bg-brand-indigo/10 blur-[100px] rounded-full" />
          <ZoroHologram />
        </motion.div>
      </div>
    </section>
  );
}
