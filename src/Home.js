import "./Common.css";
import "./Home.css";
import Common from "./Common.js";
import Typewriter from "typewriter-effect";
import Particles from "react-particles-js";
//change so name is big in front always
// welcome text typewriter
export default function Home() {
    const nameArray = Common.nameStr.split(" ");
    return (
        <div id="home" className="screen-bg main-font light-text new-page">
            <ParticlesWrapper/>
            <div className="main-text">
                <h1 className="big-header"><span className="sec-text">{nameArray[0]}</span> {nameArray[1]}</h1>
                <p className="fs-3"><Typewriter
                    options={{
                        strings: ["Welcome to my website.", "I'm happy to connect!"],
                        loop: true,
                        autoStart: true,
                        delay: 75,
                    }}
                /></p>
            </div>
            <div className="scroll-icon">
                <a href="#about" className="scroll-link"><i className="fa-solid fa-chevrons-down fa-lg"/></a>
            </div>
        </div>
    );
}

function ParticlesWrapper() {
    return (
        <Particles className="particle"
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