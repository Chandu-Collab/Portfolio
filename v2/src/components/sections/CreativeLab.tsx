"use client";

import { motion } from "framer-motion";
import { BookOpen, Map, Sparkles, Gamepad2, BrainCircuit, Swords } from "lucide-react";
import dynamic from "next/dynamic";

const CreativeAtmosphere = dynamic(() => import("@/components/3d/CreativeAtmosphere"), {
  ssr: false,
});

export default function CreativeLab() {
  return (
    <section className="py-32 border-t border-border/50 relative overflow-hidden" id="creative-lab">
      <CreativeAtmosphere />
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-[#030b14]"></div>
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-indigo/10 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#00F0FF]/5 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="mb-20 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-6 border border-secondary/20 rounded-full">
          <Sparkles className="w-4 h-4" /> Original Intellectual Property
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">CREATIVE LAB</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A dedicated space for experimental storytelling, narrative systems, and long-term world-building. Where software engineering meets creative R&D.
        </p>
      </div>

      {/* Flagship Project Cinematic Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full rounded-3xl overflow-hidden border border-border bg-card/30 backdrop-blur-sm mb-8 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10"></div>
        {/* Placeholder for future cinematic background image */}
        <div className="absolute inset-0 bg-[#061121] opacity-50 z-0 transition-transform duration-1000 group-hover:scale-105"></div>
        
        <div className="relative z-20 p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20 rounded-full">
              Status: In Development
            </div>
            <h3 className="text-4xl md:text-6xl font-serif italic font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-indigo">
              The Swordsman &<br/>The Mermaid
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              An epic tale exploring the convergence of two disparate worlds. This project serves as a proving ground for narrative design, character arcs, and deep world-building, seamlessly connecting traditional storytelling with interactive potential.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Grid Layout for Project Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        
        {/* Character Profiles & Art */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="md:col-span-2 bg-card/40 border border-border rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Swords className="w-6 h-6 text-primary" />
              <h4 className="text-2xl font-bold">Characters & Artwork</h4>
            </div>
            <p className="text-muted-foreground mb-8">
              Concept art, character profiles, and visual development. Blending profound character flaws with redeeming arcs to craft compelling protagonists.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Character 1 */}
            <div className="aspect-[3/4] rounded-xl border border-border/50 bg-background/50 flex flex-col overflow-hidden group relative">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/projects/swordsman(me).png')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span className="text-sm font-medium tracking-wider uppercase drop-shadow-md">The Swordsman</span>
                <span className="block text-[10px] uppercase tracking-widest text-primary mt-1">Ruthless Guy</span>
              </div>
            </div>
            
            {/* Character 2 */}
            <div className="aspect-[3/4] rounded-xl border border-border/50 bg-background/50 flex flex-col overflow-hidden group relative">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/projects/mermaid(her water form).png')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span className="text-sm font-medium tracking-wider uppercase drop-shadow-md">The Mermaid</span>
                <span className="block text-[10px] uppercase tracking-widest text-secondary mt-1">Water Form</span>
              </div>
            </div>

            {/* Character 3 */}
            <div className="aspect-[3/4] rounded-xl border border-border/50 bg-background/50 flex flex-col overflow-hidden group relative">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/projects/Land form(soul).png')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span className="text-sm font-medium tracking-wider uppercase drop-shadow-md">The Mermaid</span>
                <span className="block text-[10px] uppercase tracking-widest text-primary mt-1">Land Form (Soul)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* World Building & Lore */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="md:col-span-1 bg-card/40 border border-border rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-secondary" />
            <h4 className="text-2xl font-bold">World & Lore</h4>
          </div>
          <p className="text-muted-foreground mb-6">
            Designing geographies, political systems, and mythologies. Creating a living ecosystem where the narrative naturally unfolds.
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 text-foreground/80">
              <Map className="w-5 h-5 text-primary shrink-0" />
              <span>Cartography & Environments</span>
            </li>
            <li className="flex gap-3 text-foreground/80">
              <BookOpen className="w-5 h-5 text-primary shrink-0" />
              <span>Historical Timelines</span>
            </li>
            <li className="flex gap-3 text-foreground/80">
              <Sparkles className="w-5 h-5 text-primary shrink-0" />
              <span>Magic Systems & Rules</span>
            </li>
          </ul>
        </motion.div>

        {/* AI Assisted Workflow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="md:col-span-1 bg-card/40 border border-border rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <BrainCircuit className="w-6 h-6 text-brand-indigo" />
            <h4 className="text-2xl font-bold">AI Workflow</h4>
          </div>
          <p className="text-muted-foreground">
            Leveraging autonomous agents and LLMs for rapid ideation, structural editing, and dialogue refinement. Acting as a creative multiplier rather than a replacement.
          </p>
        </motion.div>

        {/* Future Game Roadmap */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="md:col-span-2 bg-gradient-to-br from-card/40 to-primary/5 border border-border rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute right-0 top-0 opacity-5 -translate-y-1/4 translate-x-1/4 group-hover:scale-110 transition-transform duration-700">
            <Gamepad2 className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Gamepad2 className="w-6 h-6 text-primary" />
              <h4 className="text-2xl font-bold">Game Adaptation Roadmap</h4>
            </div>
            <p className="text-muted-foreground max-w-xl mb-6">
              Connecting narrative design with my Game Development expertise. "The Swordsman & The Mermaid" is structured to naturally evolve into an interactive experience, featuring branching dialogues and emergent gameplay systems.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-background/50 border border-border rounded-lg text-sm font-mono">Phase 1: Lore Bible</div>
              <div className="px-4 py-2 bg-background/50 border border-border rounded-lg text-sm font-mono">Phase 2: Visual Dev</div>
              <div className="px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-lg text-sm font-mono font-bold">Phase 3: Prototype</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
