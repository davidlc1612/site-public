import "./Common.css";
import "./Contact.css";
import Common from "./Common.js";

export default function Contact() {
    return (
        <div id="contact" className="bg-white new-page">
            <div className="page-box">
                <Common.Header text="Contact" />
                <div className="page-contents row row-cols-1 row-cols-md-5 g-4">
                    <ContactCard
                        faNames="fa-brands fa-linkedin"
                        details="johndoe123"
                        link="https://www.linkedin.com/in/johndoe123/"
                    />
                    <ContactCard
                        faNames="fa-brands fa-github"
                        details="johndoe123"
                        link="https://github.com/johndoe123/"
                    />
                    <ContactCard
                        faNames="fa-regular fa-at"
                        details="email@email.com"
                        link="mailto:email@email.com"
                    />
                    <ContactCard
                        faNames="fa-regular fa-phone"
                        details="555-555-5555"
                        link="tel:+15555555555"
                    />
                    <ContactCard
                        faNames="fa-regular fa-map-location-dot"
                        details="Irvine, California"
                    />
                </div>
            </div>
        </div>
    );
}

function ContactCard(props) {
    return (
        <div className="col">
            <div className="card contact-card">
                <a
                    href={props.link}
                    target={props.link != null && (props.link.includes("mailto:") || props.link.includes("tel:"))
                        ? "_self" : "_blank"}
                    className="contact-link"
                    rel="noreferrer">
                        <i className={props.faNames + " fa-2x card-img-top contact-img"} />
                        <div className="card-body">
                            <p className="card-text">{props.details}</p>
                        </div>
                </a>
            </div>
        </div>
    );
}