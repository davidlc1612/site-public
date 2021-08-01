import "./Common.css";
import "./About.css";
import Common from "./Common.js";
import {Button} from "react-bootstrap";

export default function About() {
    return (
        <div id="about" className="bg-white new-page">
            <div className="page-box">
                <Common.Header text="About Me" />
                <div className="page-contents row text-start">
                    <div className="col-8">
                        <h2 className="fw-bold"><span className="sec-text">{Common.nameStr},</span> <span className="dark-text2">Software Engineer</span></h2>
                        <p className="dark-text1">
                            I'm a fourth year, first generation, undergraduate studying Computer Science with a specialization in Information.
                            <br />
                            <br />
                            Out of the entire computer science field, I am most passionate about programming.
                            I wish to create or contribute to projects that have a meaningful impact on the world around me.
                            I enjoy working in cooperative environments where members can build off of each other and have the end product be the best parts of each collaborator.
                            Additionally, my Information specialization plays a significant role in my projects, ensuring that relevant pieces of data are handled correctly and presented where needed;
                            the end goal being that users are properly informed and get the most from my projects.
                        </p>
                        <hr />
                        <div className="row">
                            <div className="col"><span className="fw-bold">Education:</span> University of California, Irvine</div>
                            <div className="col"><span className="fw-bold">From:</span> Alameda, California</div>
                        </div>
                    </div>
                    <div className="col dark-text2">
                        <p className="dark-text1">Here are some skills I'm familiar with!</p>
                        <div className="row">
                            <div className="col">
                                <h5 className="fw-bold">Languages:</h5>
                                <ul>
                                    <li>Python</li>
                                    <li>C/C++</li>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>SQL</li>
                                    <li>NoSQL</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                            <div className="col">
                                <h5 className="fw-bold">Technologies:</h5>
                                <ul>
                                    <li>Android</li>
                                    <li>Linux</li>
                                    <li>React</li>
                                    <li>RxJava</li>
                                    <li>Vert.x</li>
                                    <li>Excel</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row btn-box1">
                            <Button href="#" variant="light" className="center-btn rounded-pill">Resume <i className="fa-solid fa-file-arrow-down" /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}