import "./Common.css";
import "./Home.css";
import Common from "./Common.js";
import Typewriter from "typewriter-effect";

export default function Home() {
    return (
        <div id="home" className="screen-bg main-font light-text">
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