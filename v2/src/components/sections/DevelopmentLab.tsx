"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Smartphone, Cloud, Code, Blocks } from "lucide-react";

const labs = [
  { 
    icon: <Code className="w-8 h-8 text-primary" />, 
    title: "Web Architecture & Frontend", 
    desc: "React, Next.js, Three.js, Tailwind, TypeScript",
    tags: ["React Native", "Flutter", "Framer Motion", "GSAP"]
  },
  { 
    icon: <Database className="w-8 h-8 text-secondary" />, 
    title: "Backend & Systems", 
    desc: "Node.js, Express, Fastify, Python, REST APIs",
    tags: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase"]
  },
  { 
    icon: <Cloud className="w-8 h-8 text-primary" />, 
    title: "Cloud & DevOps", 
    desc: "AWS, Vercel, Netlify, Render, Azure",
    tags: ["Firebase Hosting", "Git", "GitHub Actions"]
  },
  { 
    icon: <Blocks className="w-8 h-8 text-secondary" />, 
    title: "AI & Automation Tools", 
    desc: "n8n Workflows, Zapier, Make",
    tags: ["LLM Integration", "Prompt Engineering", "OpenAI API"]
  },
];

export default function DevelopmentLab() {
  return (
    <section className="py-32 border-t border-border/50" id="lab">
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Development Lab</h2>
        <p className="text-muted-foreground max-w-xl">
          The foundation of my engineering capabilities. Building robust, scalable, and beautiful systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {labs.map((lab, i) => (
          <motion.div
            key={lab.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
            className="p-8 bg-card border border-border hover:border-primary/50 transition-colors group cursor-pointer"
          >
            <div className="mb-6 bg-background p-4 inline-block rounded-lg group-hover:scale-110 transition-transform">
              {lab.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{lab.title}</h3>
            <p className="text-muted-foreground mb-6">{lab.desc}</p>
            
            <div className="flex flex-wrap gap-2">
              {lab.tags.map(tag => (
                <span key={tag} className="text-xs font-mono bg-background px-3 py-1 text-muted-foreground border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
