import "./Common.css";
import Common from "./Common.js";
import Nav from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";
import Experience from "./Experience.js";
import Contact from "./Contact.js";

function App() {
    return (
        <>
        <Nav/>
        <div className="main">
            <Home />
            <About />
            <Experience />
            <Contact />
            <div className="light-bg new-page">
                <div className="page-box dark-text2">
                    Copyright © 2021 {Common.nameStr}. All Rights Reserved.<br />
                    Developed with React.js and Bootstrap.
                </div>
            </div>
        </div>
        </>
    );
}

export default App;
