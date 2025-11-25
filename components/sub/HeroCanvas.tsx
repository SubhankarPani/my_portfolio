"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ParticleEarth from "./ParticleEarth";

export default function HeroCanvas() {
  return (
    <div className="w-full h-[550px] relative">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={1.4} color="#00eaff" />
        <pointLight position={[-3, -2, -3]} intensity={0.8} color="#005eff" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        <ParticleEarth />
      </Canvas>
    </div>
  );
}
