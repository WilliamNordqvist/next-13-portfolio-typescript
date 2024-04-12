"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";

import { loadSlim } from "@tsparticles/slim";

export const Background = ({ children }: { children: React.ReactNode }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return <></>;

  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 250,
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "topLeft",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 400,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 1.5 },
            },
          },
          detectRetina: true,
        }}
      />
      {children}
    </>
  );
};
