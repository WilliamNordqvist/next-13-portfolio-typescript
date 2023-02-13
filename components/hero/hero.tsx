"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export const Hero = () => {
  const William = useAnimationControls();
  const Nordqvist = useAnimationControls();
  const P = useAnimationControls();

  useEffect(() => {
    const runAnim = async () => {
      William.start(() => ({
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 75, mass: 0.4, delay: 1.5 },
      }));

      Nordqvist.start(() => ({
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 75, mass: 0.4, delay: 1.5 },
      }));

      await P.start(() => ({
        opacity: 1,
        transition: { duration: 1, delay: 2.5 },
      }));
    };
    runAnim();
  }, [Nordqvist, P, William]);

  return (
    <div className="flex flex-col items-center uppercase font-thin tracking-widest ">
      <motion.h1
        initial={{ x: 1800 }}
        className="text-5xl sm:text-8xl"
        animate={William}
      >
        william
      </motion.h1>
      <motion.h1
        initial={{ x: -1800 }}
        animate={Nordqvist}
        className="text-5xl sm:text-8xl"
      >
        nordqvist
      </motion.h1>

      <motion.p
        className="mt-5 text-1xl sm:text-2xl font-extralight"
        initial={{
          opacity: 0,
        }}
        animate={P}
      >
        front end developer
      </motion.p>
    </div>
  );
};
