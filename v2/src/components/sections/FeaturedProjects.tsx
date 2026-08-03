"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Kizuna Verse",
    role: "3D Experience Developer",
    desc: "An immersive, real-time 3D web experience designed to create emotional storytelling through interactive environments.",
    tags: ["Three.js", "React", "Next.js", "GSAP", "Framer Motion", "WebGL", "Blender", "Vercel", "Netlify"],
    colSpan: "md:col-span-2",
    image: "/projects/kizunaverse.png",
    liveUrl: "https://kizuna-verse.netlify.app/",
    githubUrl: "https://github.com/Chandu-Collab/kizunaverse",
  },
  {
    title: "TaurusAI",
    role: "Full Stack Engineer",
    desc: "Intelligent job automation platform leveraging AI to streamline the job application process.",
    tags: ["Flutter", "Node.js", "Firebase", "AI Integration", "REST APIs"],
    colSpan: "md:col-span-1",
    image: "/projects/taurus-ai.png",
    liveUrl: "https://taurusai-bba31.web.app/",
    githubUrl: "#",
  },
  {
    title: "Haunted AI",
    role: "AI Engineer",
    desc: "Real-time AI-powered chatbot offering an immersive, personality-driven conversational experience.",
    tags: ["React", "TypeScript", "Node.js", "Express.js", "Socket.IO", "Supabase", "Gemini API", "Tailwind CSS", "Framer Motion"],
    colSpan: "md:col-span-1",
    image: "/projects/haunted-ai.png",
    liveUrl: "https://haunted-ai.netlify.app/",
    githubUrl: "https://github.com/Chandu-Collab/haunted-ai",
  },
  {
    title: "Yumetabi",
    role: "3D Web Developer",
    desc: "Interactive 3D hub connecting multiple themed environments with cinematic transitions.",
    tags: ["Three.js", "React.js", "React Three Fiber", "@react-three/drei", "GSAP", "GLTFLoader"],
    colSpan: "md:col-span-2",
    image: "/projects/yumetabi.png",
    liveUrl: "https://yume-tabi.netlify.app",
    githubUrl: "https://github.com/Chandu-Collab/yumetabi",
  },
  {
    title: "Mahjong",
    role: "Frontend Engineer",
    desc: "Modern multiplayer Mahjong with real-time sync, cooperative modes, and smooth UX.",
    tags: ["React (Vite)", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase (PostgreSQL)", "Supabase Auth", "Supabase Realtime"],
    colSpan: "md:col-span-2",
    image: "/projects/mahjong.png",
    liveUrl: "https://mahjong-u.netlify.app/",
    githubUrl: "https://github.com/Chandu-Collab/Mahjong",
  },
  {
    title: "Lanterns of Eid",
    role: "Creative Developer",
    desc: "Immersive real-time 3D web experience to celebrate Eid through interactive visuals.",
    tags: ["Three.js", "React", "Next.js", "WebGL", "GSAP", "Framer Motion", "Blender", "HTML5", "CSS3", "Netlify"],
    colSpan: "md:col-span-1",
    image: "/projects/eid.png",
    liveUrl: "https://lanterns-of-eid.netlify.app/",
    githubUrl: "https://github.com/Chandu-Collab/lanterns-of-eid",
  },
  {
    title: "Fruitcee",
    role: "Mobile Developer",
    desc: "Premium fresh fruit delivery service app with customizable bowls and curated health packs.",
    tags: ["Flutter", "Firebase", "Firestore", "Real-time DB", "Push Notifications"],
    colSpan: "md:col-span-1",
    image: "/projects/fruitcee.png",
    liveUrl: "https://fruitcee.in",
    githubUrl: "#",
  },
  {
    title: "Peony",
    role: "Frontend Engineer",
    desc: "A visually engaging and interactive birthday gift web application with smooth UI animations.",
    tags: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Netlify", "Responsive Design", "UI Animation"],
    colSpan: "md:col-span-1",
    image: "/projects/peony-thumb.png",
    liveUrl: "https://peony-birthday-gift.netlify.app",
    githubUrl: "https://github.com/Chandu-Collab/gift",
  },
  {
    title: "School Management",
    role: "Full Stack Developer",
    desc: "AI-enhanced school platform featuring comprehensive academic tracking and AI-powered teaching assistance.",
    tags: ["React", "Node.js", "MySQL", "AI Integration", "Express"],
    colSpan: "md:col-span-1",
    image: "", 
    liveUrl: "",
    githubUrl: "https://github.com/Chandu-Collab/school1",
  },
  {
    title: "A Little Escape With You",
    role: "Creative Developer",
    desc: "A comforting virtual space designed to help a friend take a break and breathe. A personal and emotional 3D web experience.",
    tags: ["React", "Three.js", "Web Audio API", "Tailwind CSS"],
    colSpan: "md:col-span-2",
    image: "", // Needs image
    liveUrl: "https://little-escape.netlify.app/",
    githubUrl: "#",
  },
  {
    title: "Cinematic Birthday Story",
    role: "Storyteller & Developer",
    desc: "A premium cinematic birthday surprise built as an emotional private story. Showcasing observation and creative writing.",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Storytelling"],
    colSpan: "md:col-span-1",
    image: "", // Needs image
    liveUrl: "https://cute-bird.netlify.app/",
    githubUrl: "#",
  }
];

export default function FeaturedProjects() {
  const handleProjectClick = (url?: string, fallbackUrl?: string) => {
    const finalUrl = url && url !== "#" ? url : (fallbackUrl && fallbackUrl !== "#" ? fallbackUrl : null);
    if (finalUrl) {
      window.open(finalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-32 border-t border-border/50" id="projects">
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Featured Work</h2>
        <p className="text-muted-foreground max-w-xl">
          Real products, real problems solved. Click any card to view the live deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            onClick={() => handleProjectClick(project.liveUrl, project.githubUrl)}
            className={`group relative p-8 bg-card border border-border overflow-hidden cursor-pointer hover:border-primary/50 transition-colors flex flex-col justify-end min-h-[400px] ${project.colSpan}`}
          >
            {project.image ? (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-20 group-hover:opacity-40 transition-all duration-700" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <ArrowUpRight className="w-6 h-6 text-primary" />
            </div>
            
            <div className="relative z-10 mt-12 flex flex-col h-full justify-end">
              <div>
                <p className="text-xs text-primary mb-2 font-mono uppercase tracking-wider">{project.role}</p>
                <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 max-w-lg">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-background/50 backdrop-blur-md px-3 py-1 text-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex gap-4 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); window.open(project.liveUrl, '_blank', 'noopener,noreferrer'); }}
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </button>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); window.open(project.githubUrl, '_blank', 'noopener,noreferrer'); }}
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <FaGithub className="w-4 h-4" /> Source Code
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
