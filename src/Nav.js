import "./Common.css";
import "./Nav.css";
import Common from "./Common.js";
import profile from "./assets/pic.webp";

export default function Nav() {
    return (
        <div className="navBar light-text main-font">
            <ProfilePicture name={Common.nameStr} img={profile} />
            <div className="buttonContainer">
                <NavButton name="Home" link="#home" />
                <NavButton name="About" link="#about" />
                <NavButton name="Experience" link="#experience" />
                <NavButton name="Contact" link="#contact" />
            </div>
        </div>
    );
}

function NavButton(props) {
    return (
        <a href={props.link} className="navButton">{props.name}</a>
    );
}

function ProfilePicture(props) {
    return (
        <>
        <img src={props.img} className="profileImage" alt=""/>
        <div className="profileText">{props.name}</div>
        </>
    );
}