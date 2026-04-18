import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.6 } },
            push: { quantity: 3 },
          },
        },
        particles: {
          color: { value: ["#7dd3fc", "#c4b5fd", "#f0abfc"] },
          links: {
            color: "#7dd3fc",
            distance: 140,
            enable: true,
            opacity: 0.18,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            outModes: { default: "bounce" },
          },
          number: { value: 70, density: { enable: true } },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10"
    />
  );
}
