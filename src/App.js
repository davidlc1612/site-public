import "./Common.css";
import Common from "./Common.js";
import Nav from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";
import Experience from "./Experience.js";

function App() {
    return (
        <>
        <Nav/>
        <div className="main bg-warning">
            <Home />
            <About />
            <Experience />
        </div>
        </>
    );
}

export default App;
