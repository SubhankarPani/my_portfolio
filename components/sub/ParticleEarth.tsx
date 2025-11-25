"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleEarth() {
  const ref = useRef<THREE.Points>(null!);
  const time = useRef(0);
  const { viewport, mouse } = useThree();

  // Perfect sphere positions (NEVER changed)
  const { geometry, sphere } = useMemo(() => {
    const count = 3000;
    const radius = 1.2;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.set([x, y, z], i * 3);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    return { geometry: geo, sphere: Float32Array.from(positions) };
  }, []);

  useFrame((state, delta) => {
    const pts = ref.current;
    const pos = pts.geometry.attributes.position;
    const orig = sphere;

    time.current += delta;
    const t = time.current;

    // Mouse movement
    const mx = mouse.x * viewport.width * 0.3;
    const my = mouse.y * viewport.height * 0.3;

    for (let i = 0; i < pos.count; i++) {
      const ox = orig[i * 3];
      const oy = orig[i * 3 + 1];
      const oz = orig[i * 3 + 2];

      // BASE: perfect sphere
      let x = ox;
      let y = oy;
      let z = oz;

      // 💥 EXPLOSION magnitude (go out → come back)
      const explodeAmt = (Math.sin(t * 1.2) + 1) / 2; // 0 → 1
      const explosion = explodeAmt * 0.6; // outward

      x += ox * explosion;
      y += oy * explosion;
      z += oz * explosion;

      // 🔥 PLASMA SURFACE NOISE (doesn't break sphere)
      const plasma =
        Math.sin(ox * 4 + t * 2) * 0.08 +
        Math.sin(oy * 3 + t * 1.5) * 0.08;
      x += plasma * (ox / 1.2);
      y += plasma * (oy / 1.2);
      z += plasma * (oz / 1.2);

      // 🌀 SWIRL ROTATION ON SURFACE (true orbit)
      const swirl = t * 0.3 + i * 0.01;
      const sx = Math.sin(swirl) * 0.05;
      const sz = Math.cos(swirl) * 0.05;

      // swirl is applied on top without breaking sphere
      x += sx;
      z += sz;

      // 🖱 MOUSE ATTRACTION (small)
      x += (mx - x) * 0.003;
      y += (my - y) * 0.003;

      pos.array[i * 3] = x;
      pos.array[i * 3 + 1] = y;
      pos.array[i * 3 + 2] = z;
    }

    pos.needsUpdate = true;

    // 🌍 GLOBAL EARTH ROTATION
    pts.rotation.y += delta * 0.35;
    pts.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.02}
        color="#1befff"
        opacity={0.95}
        transparent
        sizeAttenuation
      />
    </points>
  );
}
