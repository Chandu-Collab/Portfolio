"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import dynamic from "next/dynamic";

const HeroCore = dynamic(() => import("@/components/3d/HeroCore"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20" id="hero">
      <HeroCore />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
            CHANDRA<br />HASA REDDY<span className="text-primary">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mb-10">
            I build intelligent systems and beautiful digital experiences.
            <br className="hidden md:block" />
            From code to products, from concepts to <span className="text-secondary font-medium">SHINKA</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-none hover:bg-primary/90 transition-colors">
              Explore Lab
            </button>
            <a href="/Chandra_Hasa_Reddy_Resume.pdf" target="_blank" rel="noreferrer" className="px-8 py-4 bg-transparent border border-border hover:border-primary text-foreground font-semibold rounded-none transition-colors inline-block text-center">
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 text-muted-foreground">
            <a href="https://github.com/Chandu-Collab" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/chandra-hasa-reddy-729429240/" target="_blank" rel="noreferrer" className="hover:text-[#0077b5] transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/chessmen_67/" target="_blank" rel="noreferrer" className="hover:text-[#e4405f] transition-colors">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative hidden lg:flex justify-end"
        >
          <div className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-primary/20 shadow-[0_0_50px_rgba(0,240,255,0.1)]">
            <Image 
              src="/projects/profile.jpeg" 
              alt="Chandra Hasa Reddy"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
