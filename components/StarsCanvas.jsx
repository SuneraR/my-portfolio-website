
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarsCanvas() {
  return (
    <Canvas>
      <Stars
        radius={50}
        count={3500}
        factor={4}
        fade
        speed={1}
      />
    </Canvas>
  );
}
