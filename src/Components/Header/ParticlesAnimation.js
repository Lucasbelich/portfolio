import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



export default function ParticlesAnimation() {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      className="tsParticles"
      init={particlesInit}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1

      }}
      canvasClassName="canvasParticles"
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            repulse: {
              distance: 150,
              speed: 0.2,
              maxSpeed: 10,
              factor:20
            }
          }
        },
        fullScreen: {
          enable: false,
        },
        particles: {
          collisions: {
            enable: true,
          },
          color: {
            value: "#fafafa",
          },
          rotate: {
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 10,
              sync: false,
            },
          },
          move: {
            direction: "none",
            collisions: true,
            enable: true,
            outModes: {
              default: "bounce",
              bottom: "none",
            },
            random: false,
            speed: 2,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.15,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              startValue: "random",
              sync: false,
            },
          },
          shape: {
            type: "image",
            image: [
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
                
                
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
                
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png",
               
              },
              
            ],
          },

          size: {
            value: 10,
            animation: {
              enable: true,
              speed: 10,
              minimumValue: 10,
              startValue: "random",
              sync: false,
            },
          },
        },
        emitters: {
          direction: "none",
          size: {
            width: 100,
            height: 100,
          },
          position: {
            x: 50,
            y: 150,
          },
          rate: {
            quantity: 1,
            delay: 0.6,
          },
        },
        detectRetina: true,
        pauseOnOutsideViewport: true,
      }}
    />
  );
}
