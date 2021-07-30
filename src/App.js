import "./Common.css";
import "./App.css";
import Common from "./Common.js";
import Nav from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";

function App() {
    return (
        <>
        <Nav/>
        <div className="main">
            <Home/>
            <About/>
            {Common.filler}
        </div>
        </>
    );
}

export default App;
