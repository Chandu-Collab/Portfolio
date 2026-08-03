import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import DevelopmentLab from "@/components/sections/DevelopmentLab";
import AILab from "@/components/sections/AILab";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CreativeLab from "@/components/sections/CreativeLab";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-32">
      <Hero />
      <Timeline />
      <DevelopmentLab />
      <AILab />
      <CreativeLab />
      <FeaturedProjects />
    </div>
  );
}
