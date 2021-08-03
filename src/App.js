import "./Common.css";
import Nav from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";
import Experience from "./Experience.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

function App() {
    return (
        <>
        <Nav />
        <div className="main">
            <Home />
            <About />
            <Experience />
            <Contact />
            <Footer />
        </div>
        </>
    );
}

export default App;
