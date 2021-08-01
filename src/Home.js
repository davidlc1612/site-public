import "./Common.css";
import "./Home.css";
import Common from "./Common.js";
import Typewriter from "typewriter-effect";
import Particles from "react-particles-js";

export default function Home() {
    return (
        <div id="home" className="screen-bg main-font light-text new-page">
            {/*<ParticlesWrapper/>*/}
            <div className="main-text">
                <p className="fs-3">Hello!</p>
                <h1><Typewriter
                    options={{
                        strings: ["My name is " + Common.nameStr + ".", "Welcome to my website."],
                        loop: true,
                        autoStart: true,
                        delay: 75,
                    }}
                /></h1>
            </div>
            <div className="scroll-icon">
                <a href="#about" className="scroll-link"><i className="fa-solid fa-chevrons-down fa-lg"/></a>
            </div>
        </div>
    );
}

function ParticlesWrapper() {
    return (
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "random": true,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": false,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 4
                        }
                    }
                }
            }}
        />
    );
}