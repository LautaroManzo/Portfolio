import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { PRIMARY, BG } from "../../constants/colors";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    background: {
      color: { value: BG },
    },
    particles: {
      number: {
        value: 60,
        density: { enable: true, area: 900 },
      },
      color: { value: PRIMARY },
      shape: { type: "circle" },
      opacity: { value: 0.25 },
      size: { value: { min: 1, max: 2 } },
      links: {
        enable: true,
        color: PRIMARY,
        distance: 160,
        opacity: 0.08,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
      },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
};

export default ParticlesBackground;
