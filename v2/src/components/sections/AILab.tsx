"use client";

import { motion } from "framer-motion";
import { Bot, Bug, MonitorPlay, Search, Receipt, MessageSquare, MailOpen } from "lucide-react";
import dynamic from "next/dynamic";

const ShinkaNodes = dynamic(() => import("@/components/3d/ShinkaNodes"), {
  ssr: false,
});

const agents = [
  { 
    icon: <Search className="w-6 h-6 text-secondary" />, 
    title: "AI Research Agent", 
    desc: "Generates comprehensive, unbiased research reports on any topic and emails them.",
    url: "https://shinka-6c.netlify.app/agent/ai-research-agent"
  },
  { 
    icon: <MonitorPlay className="w-6 h-6 text-primary" />, 
    title: "YouTube Repurposer", 
    desc: "Turns any YouTube video into LinkedIn posts, Twitter threads, and blog drafts instantly.",
    url: "https://shinka-6c.netlify.app/agent/youtube-repurposer"
  },
  { 
    icon: <Bug className="w-6 h-6 text-secondary" />, 
    title: "Bug Report Auto-Ticketing", 
    desc: "Analyzes bug reports to generate engineering tickets with AI-driven root cause analysis.",
    url: "https://shinka-6c.netlify.app/agent/ai-bug-reporter"
  },
  { 
    icon: <MessageSquare className="w-6 h-6 text-primary" />, 
    title: "Chatbot with Memory", 
    desc: "Conversational AI assistant that remembers conversation history to provide accurate support.",
    url: "https://shinka-6c.netlify.app/agent/website-chat"
  },
  { 
    icon: <Receipt className="w-6 h-6 text-secondary" />, 
    title: "Invoice & Billing Automation", 
    desc: "Generates invoices, tracks them in Google Sheets, and automatically emails clients.",
    url: "https://shinka-6c.netlify.app/agent/freelancer-invoice"
  },
  { 
    icon: <Bot className="w-6 h-6 text-primary" />, 
    title: "Competitor Intelligence", 
    desc: "Scrapes competitor websites, detects pricing/product changes, and sends email alerts.",
    url: "https://shinka-6c.netlify.app/agent/competitor-intelligence-monitor"
  }
];

export default function AILab() {
  return (
    <section className="py-32 border-t border-border/50 relative overflow-hidden" id="shinka">
      <ShinkaNodes />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-6">
            Next-Gen Autonomous Workforce
          </div>
          <h2 className="text-5xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            SHINKA AI LAB
          </h2>
          <p className="text-muted-foreground text-lg">
            My dedicated lab for intelligent automation. We build AI Agents, business workflows, and production-ready automated systems that drive real business value.
          </p>
        </div>
        <a 
          href="https://shinka-6c.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-4 bg-secondary text-secondary-foreground font-bold rounded-none hover:bg-secondary/90 transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(123,44,191,0.3)] hover:shadow-[0_0_30px_rgba(123,44,191,0.5)]"
        >
          Enter the Playground
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent, i) => (
          <motion.div
            key={agent.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            className="group flex flex-col p-6 bg-card/50 border border-border hover:border-secondary/50 transition-colors cursor-pointer"
            onClick={() => window.open(agent.url, '_blank')}
          >
            <div className="p-3 bg-background rounded-md inline-block w-fit mb-4 group-hover:scale-110 transition-transform">
              {agent.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{agent.title}</h3>
            <p className="text-muted-foreground text-sm flex-1">{agent.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Invitation Letter Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 relative w-full rounded-2xl bg-gradient-to-r from-secondary/10 via-background to-primary/10 border border-secondary/20 p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 cursor-pointer hover:border-secondary/50 transition-colors group"
        onClick={() => window.open('https://surprise-tou.netlify.app/', '_blank')}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none mix-blend-overlay"></div>
        
        <div className="relative z-10 flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-4 border border-secondary/20 rounded-full">
            <MailOpen className="w-4 h-4" /> A Message to You
          </div>
          <h3 className="text-3xl font-black mb-3">The Journey Begins</h3>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Every great journey begins with a single decision. Read the origin story of Shinka-6C and discover the philosophy behind our continuous evolution.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <button className="px-8 py-4 bg-foreground text-background font-bold hover:scale-105 transition-transform shadow-xl">
            Read Invitation
          </button>
        </div>
      </motion.div>
    </section>
  );
}
