import "./Common.css";
import "./About.css";
import Common from "./Common.js";
import resume from "./assets/resume.pdf";
import profile from "./assets/pic.png";

export default function About() {
    return (
        <div id="about" className="bg-white new-page">
            <div className="page-box">
                <Common.Header text="About" />
                <div className="page-contents text-start">
                    <div className="row about-big">
                        <div className="col-4">
                            <Image />
                            <ResumeButton />
                        </div>
                        <div className="col-8">
                            <Content />
                        </div>
                    </div>

                    <div className="about-small">
                        <Image />
                        <Content />
                        <ResumeButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

function SkillCard(props) {
    return (
        <div className="col">
            <div className="card text-center skill-card">
                <i className={props.faNames + " fa-2x pt-3"} />
                <div className="card-body">
                    <p className="card-text">{props.desc}</p>
                </div>
            </div>
        </div>
    );
}

function Content() {
    return (
        <>
        <h2 className="fw-bold intro"><span className="sec-text">{Common.nameStr},</span> <span className="dark-text2">Software Engineer</span></h2>
        <p className="dark-text1">
            I'm a fourth year, first generation, undergraduate studying Computer Science with a specialization in Information.
            <br />
            <br />
            Out of the entire computer science field, I am most passionate about programming.
            I wish to create or contribute to projects that have a meaningful impact on the world around me.
            I enjoy working in cooperative environments where members can build off of each other and have the end product be the best parts of each collaborator.
            Additionally, my Information specialization plays a significant role in my projects, ensuring that relevant pieces of data are handled correctly and presented where needed;
            the end goal being that users are properly informed and get the most from my projects.
            <br />
            <br />
            Here are some technologies I'm familiar with:
        </p>
        <div className="row row-cols row-cols-md-5 g-2">
            <SkillCard
                faNames="fa-brands fa-python"
                desc="Python"
            />
            <SkillCard
                faNames="devicon-cplusplus-plain"
                desc="C/C++"
            />
            <SkillCard
                faNames="fa-brands fa-java"
                desc="Java"
            />
            <SkillCard
                faNames="fa-brands fa-js-square"
                desc="JavaScript"
            />
            <SkillCard
                faNames="fa-solid fa-database"
                desc="NoSQL/SQL"
            />
            <SkillCard
                faNames="fa-brands fa-android"
                desc="Android"
            />
            <SkillCard
                faNames="fa-brands fa-linux"
                desc="Linux"
            />
            <SkillCard
                faNames="fa-brands fa-react"
                desc="React.js"
            />
            <SkillCard
                faNames="fa-regular fa-code-simple"
                desc="RxJava"
            />
            <SkillCard
                faNames="fa-regular fa-code-simple"
                desc="Vert.x"
            />
        </div>
        </>
    );
}

function Image() {
    return (
        <div className="about-img-box">
            <img src={profile} className="about-img" alt={Common.nameStr}/>
        </div>
    );
}

function ResumeButton() {
    return (
        <div className="btn-box1">
            <a rel="noreferrer" target="_blank" href={resume} className="btn btn-lg center-btn">
                Resume <i className="fa-solid fa-file-arrow-down" />
            </a>
        </div>
    );
}