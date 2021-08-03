import "./Common.css";
import "./Nav.css";
import Common from "./Common.js";
import profile from "./assets/pic.png";
import $ from "jquery";
import {Component} from "react";

export default class Nav extends Component {
    render() {
        return (
            <div className="nav-bar light-text main-font">
                <ProfilePicture name={Common.nameStr} img={profile} />
                <div id="nav" className="button-container">
                    <NavButton name="Home" link="#home" active />
                    <NavButton name="About" link="#about" />
                    <NavButton name="Experience" link="#experience" />
                    <NavButton name="Contact" link="#contact" />
                </div>
            </div>
        );
    }

    componentDidMount() {
        // Scrolling updates navigation bar
        $(window).on("scroll", function() {
            $(".new-page").each(function() {
                // Experiment with values, used to be -5
                if ($(window).scrollTop() >= $(this).offset().top - 365) {
                    let id = $(this).attr("id");
                    $("#nav a").removeClass("active");
                    $("#nav #" + id + "-nav").addClass("active");
                }
            })
        });
    }
}

function NavButton(props) {
    const thisId = props.name.toLowerCase() + "-nav";
    return (
        <a id={thisId}
           href={props.link}
           className={(props.active ? "nav-button active" : "nav-button")}
            // onClick={() => {
            //     $("#nav").find("a").removeClass("active");
            //     $("#nav #" + thisId).addClass("active");
            // }}
        >{props.name}</a>
    );
}

function ProfilePicture(props) {
    return (
        <div className="profile-box">
            <img src={props.img} className="profile-img" alt={Common.nameStr}/>
            <p className="profile-text">{props.name}</p>
            <p className="text-secondary">Open to opportunities</p>
        </div>
    );
}