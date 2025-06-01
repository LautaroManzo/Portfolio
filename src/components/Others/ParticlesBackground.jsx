import { useEffect, useMemo, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: "#DFF6FF",
      },
    },
    particles: {
      number: {
        value: 130,
        density: {
          enable: true,
          area: 400,
        },
      },
      color: {
        value: "#4793AF",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 3 },
      },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "top",
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
        },
        onClick: {
          enable: false,
        },
      },
    },
    detectRetina: true,
  }), []);  

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      style={{ position: "absolute", top: 0 }}
    />
  );

};

export default ParticlesBackground;