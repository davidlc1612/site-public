import "./Common.css";
import "./Home.css";
import Common from "./Common.js";
import Typewriter from "typewriter-effect";

function Home() {
    return (
        <div id="home" className="screen-bg main-font light-text">
            <div className="main-text">
                <p className="fs-3">Hello!</p>
                <h1><Typewriter
                    options={{
                        strings: ["My name is " + Common.nameStr + ".", "Welcome to my site."],
                        loop: true,
                        autoStart: true,
                        delay: 75,
                    }}
                /></h1>
                
            </div>
        </div>
    );
}

export default Home;