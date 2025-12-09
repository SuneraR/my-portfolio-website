"use client";

import dynamic from "next/dynamic";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import TextType from "./Text/TextType";
const StarsCanvas = dynamic(() => import("./StarsCanvas"), {
  ssr: false,
});

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Hero() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%,${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeOut",
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });
  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-800 px-4 py-24 text-gray-200"
    >
      <div className="flex flex-col gap-6 text-center max-w-3xl z-10">
        <p className="text-gray-300">Building Fast & Modern Web Experiences</p>
        <h1 className="mt-4 text-5xl font-bold">
          Hi, I'm Sunera — a <br />{" "}
          <TextType
            text={["MERN Stack Developer.", "Computer Science Student."]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
         
        </h1>
        <p>
          I focus on crafting clean UIs, efficient backends, and smooth user
          experiences using React, Next.js, Node.js, MongoDB and MySql.
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>
    </motion.section>
  );
}
