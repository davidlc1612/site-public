import "./Common.css";
import "./Nav.css";
import Common from "./Common.js";
import profile from "./assets/pic.webp";
import {getjQuery} from "bootstrap/js/src/util";

const $ = getjQuery();

export default function Nav() {
    return (
        <div className="navBar light-text main-font">
            <ProfilePicture name={Common.nameStr} img={profile} />
            <div id="nav" className="buttonContainer">
                <NavButton name="Home" link="#home" active/>
                <NavButton name="About" link="#about" />
                <NavButton name="Experience" link="#experience" />
                <NavButton name="Contact" link="#contact" />
            </div>
        </div>
    );
}

function NavButton(props) {
    const thisId = props.name.toLowerCase() + "-nav";
    return (
        <a id={thisId}
           href={props.link}
           className={props.active ? "navButton active" : "navButton"}
           // onClick={() => {
           //     $("#nav").find("a").removeClass("active");
           //     $("#nav #" + thisId).addClass("active");
           // }}
        >{props.name}</a>
    );
}

function ProfilePicture(props) {
    return (
        <>
        <img src={props.img} className="profileImage" alt=""/>
        <p className="profileText">{props.name}</p>
        </>
    );
}

// Scrolling updates navigation bar
$(window).on("scroll", function() {
    $(".new-page").each(function() {
        if (this != null) {
            console.log("lol");
            if ($(window).scrollTop() >= $(this).offset().top - 5) {
                let id = $(this).attr("id");
                $("#nav a").removeClass("active");
                $("#nav #" + id + "-nav").addClass("active");
            }
        }
    })
});