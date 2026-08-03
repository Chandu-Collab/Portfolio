"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Wireframe } from "@react-three/drei";
import * as THREE from "three";

function CoreMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial color="#00F0FF" wireframe={true} transparent opacity={0.3} />
        {/* Inner solid core */}
        <mesh>
          <icosahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color="#7B2CBF" wireframe={true} transparent opacity={0.6} />
        </mesh>
      </mesh>
    </Float>
  );
}

export default function HeroCore() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 opacity-60 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <CoreMesh />
      </Canvas>
    </div>
  );
}
