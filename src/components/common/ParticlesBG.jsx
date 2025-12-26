import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBG = () => {
  const init = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={init}
      options={{
        fpsLimit: 60,
        particles: {
          number: { value: 40 },
          color: { value: ["#22c55e", "#38bdf8", "#a855f7"] },
          opacity: { value: 0.25 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.6 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }
          }
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1
      }}
    />
  );
};

export default ParticlesBG;