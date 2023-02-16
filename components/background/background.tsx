"use client";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Background = ({ children }: { children: React.ReactNode }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 250,
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              enable: true,
              // speed: $isMobile ? 0.3 : 0.5,
              speed: 0.5,
              direction: "topLeft",
              random: true,
              straight: false,
            },
            number: {
              // value: $isMobile ? 100 : 250,
              value: 400,
              density: {
                enable: true,
                value_area: 1710.2328774690454,
              },
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0,
                sync: false,
              },
            },

            shape: {
              type: "circle",
            },
            size: {
              // value: $isMobile ? 1 : 1.5,
              value: { min: 1, max: 1.5 },
              random: true,
            },
          },
          detectRetina: true,
        }}
      />
      {children}
    </>
  );
};
