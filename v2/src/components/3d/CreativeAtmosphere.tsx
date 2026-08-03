"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

export default function CreativeAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 mix-blend-screen opacity-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Sparkles 
          count={200} 
          scale={12} 
          size={3} 
          speed={0.3} 
          opacity={0.5} 
          noise={0.1}
          color="#00F0FF" 
        />
        <Sparkles 
          count={100} 
          scale={15} 
          size={2} 
          speed={0.2} 
          opacity={0.3} 
          noise={0.2}
          color="#7B2CBF" 
        />
      </Canvas>
    </div>
  );
}
