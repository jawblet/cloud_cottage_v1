import React, { Component } from 'react';
import Particles from "react-tsparticles";

class Dust extends Component {
    render() {
      return (
        <Particles
          id="tsparticles"
          className="dust"
          options={{
            background: {
              color: {
                value: "##00FFFFFF",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
               
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 50,
                  duration: 0.1,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff80",
              },
              links: {
                enable: false,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "bottom",
                enable: true,
                outMode: "out",
                random: false,
                speed: 0.4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 1,
              },
            },
            detectRetina: true,
          }}
        />
      );
    }
  }
export default Dust; 