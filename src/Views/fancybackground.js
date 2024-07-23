import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

function ParticleComponent() {
  const setParticles = useCallback(async main => {
    console.log(main);
    await loadFull(main);
  }, []);

  const loadParticles = useCallback(container => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={setParticles}
      loaded={loadParticles}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true, // enable for hover effect
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0.4,
              size: 10,
            },
            push: {
              quantity: 20,
            },
            repulse: {
              distance: 80,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#FF0000",
          },
          links: {
            color: "#FF0000",
            distance: 20,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 450,
            },
            value: 50,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "polygon",
          },
          size: {
            value: 5,
            random: true,
          },
        },
        detectRetina: true,
      }}
      className="particles"
    />
  );
}

export default ParticleComponent;