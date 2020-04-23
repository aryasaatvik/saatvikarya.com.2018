import React from 'react';
import Link from 'gatsby-link';
import Socials from '../components/socials';
import Particles from 'react-particles-js';

const IndexPage = () => (
<div>

<Particles className="particles"
    params={{
      "particles": {
        "number": {
          "value": 800,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#FFFAE4"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 50,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 40
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }} />
  <div className="Hero">
    <div className="HeroGroup">
      <img id="profile" width="150" src={require("../images/profile.png")}></img>
      <h1>Saatvik Arya</h1>
      <p id="description">I am a sophomore studying Informatics and Psychology at the University of Washington. I am passionate about product focused development for change.</p>
      <Socials />
    </div>
  </div>
</div>

)

export default IndexPage
