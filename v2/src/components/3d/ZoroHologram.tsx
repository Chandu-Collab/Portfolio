"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, Float } from "@react-three/drei";
import * as THREE from "three";

function ZoroModel() {
  const { scene } = useGLTF('/roronoa.glb');
  const groupRef = useRef<THREE.Group>(null);
  const solidRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Group>(null);
  
  // Clone scene and apply solid material
  const holographicZoro = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        // Make sure geometry is ready
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: '#7B2CBF',
          emissive: '#3a0ca3',
          emissiveIntensity: 0.5,
          transparent: true,
          opacity: 0.85,
          roughness: 0.2,
          metalness: 0.8,
          wireframe: false,
          depthWrite: false
        });
        mesh.frustumCulled = false; 
      }
    });
    return clone;
  }, [scene]);

  // Clone scene and apply points material
  const pointsZoro = useMemo(() => {
    const clone = scene.clone();
    const replacements: { parent: THREE.Object3D, old: THREE.Object3D, new: THREE.Points }[] = [];
    
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const pointsMat = new THREE.PointsMaterial({
          color: '#00F0FF',
          size: 0.02,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          sizeAttenuation: true
        });
        const points = new THREE.Points(mesh.geometry, pointsMat);
        points.position.copy(mesh.position);
        points.rotation.copy(mesh.rotation);
        points.scale.copy(mesh.scale);
        
        if (mesh.parent) {
          replacements.push({ parent: mesh.parent, old: mesh, new: points });
        }
      }
    });
    
    replacements.forEach(({ parent, old, new: p }) => {
      parent.remove(old);
      parent.add(p);
    });
    
    return clone;
  }, [scene]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.15; // smooth rotation
    }

    const time = state.clock.getElapsedTime();
    // Cycle between 0 and 1 over time
    const cycle = (Math.sin(time * 1.2) + 1) / 2;

    if (solidRef.current) {
      solidRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mat = (child as THREE.Mesh).material as THREE.Material;
          mat.opacity = cycle * 0.9; 
        }
      });
    }

    if (pointsRef.current) {
      pointsRef.current.traverse((child) => {
        if ((child as THREE.Points).isPoints) {
          const mat = (child as THREE.Points).material as THREE.Material;
          mat.opacity = (1 - cycle) * 0.8; 
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3} floatingRange={[-0.1, 0.1]}>
        <group ref={solidRef}>
          <primitive object={holographicZoro} />
        </group>
        <group ref={pointsRef}>
          <primitive object={pointsZoro} />
        </group>
      </Float>
    </group>
  );
}

export default function ZoroHologram() {
  return (
    <div className="w-full h-[60vh] md:h-[85vh] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#00F0FF" />
        <directionalLight position={[-5, -5, -5]} intensity={1} color="#7B2CBF" />
        <Suspense fallback={null}>
          <Center scale={11} position={[1.5, -1, 0]}>
            <ZoroModel />
          </Center>
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/roronoa.glb');
