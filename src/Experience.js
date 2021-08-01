import "./Common.css";
import "./Experience.css";
import Common from "./Common.js";
import amexLogo from "./assets/amex.png";
import ckiLogo from "./assets/cki.jpg";
import accLogo from "./assets/acc.png";
import uciLogo from "./assets/uci.png";
import {Button} from "react-bootstrap";

export default function Experience() {
    return (
      <div id="experience" className="light-bg new-page">
          <div className="page-box">
              <Common.Header text="Experience" />
              <div className="page-contents row text-start">
                  <div className="col exp-col vr-div auto">
                      <h4 className="fw-bold text-center">Employment</h4>
                      <Card
                          img={amexLogo}
                          title="Software Engineering Intern"
                          info="American Express"
                          term="Jun 2021 - Aug 2021"
                          body="Enterprise Communication Platform"
                      />
                      <Card
                          img={ckiLogo}
                          title="UC Irvine Circle K"
                          info="Technology Intern"
                          term="Jun 2020 - Sep 2020"
                          body={[
                              "Maintained tech platforms for hundreds of users with HTML, CSS, PHP, and SQL.",
                              "Collaborated in small teams, focusing on aspects such as information retrieval and data management.",
                              "Participated in quality assurance efforts, evaluating user experiences.",
                          ]}
                      />
                      <Card
                          img={accLogo}
                          title="American Campus Communities"
                          info="Night Desk Assistant"
                          term="Sep 2019 - Aug 2020"
                          body={[
                              "Acted as a point of contact between housing staff, thousands of residents, and the general public.",
                              "Performed various office duties such as filing and organizing data, along with nightly rounds and securing of facilities.",
                              "Dispatched on-call staff for all incidents, liaising with authorities during emergencies.",
                              "Mentored newly hired staff, improving quality of service.",
                          ]}
                      />
                  </div>
                  <div className="col exp-col">
                      <h4 className="fw-bold text-center">Education</h4>
                      <Card
                          img={uciLogo}
                          title="University of California, Irvine"
                          info="Bachelor of Science, Computer Science"
                          term="Aug 2018 - Jun 2022"
                          body={[
                              "First generation college student.",
                              "Fourth year with a GPA of 3.76.",
                              "Dean's Honor List (7 quarters).",
                          ]}
                      />
                      <div className="hr-div" />
                      <h4 className="fw-bold text-center">Projects</h4>
                      <Card
                          title="FabFlix"
                          body="imdb but better"
                      />
                      <Card
                          title="Chat Server"
                          body="concurrency"
                      />
                      <Card
                          title="Search Engine"
                          body={[
                              "Cooperatively built a search engine using Spacetime framework for Python, handling tens of thousands of documents.",
                              "Developed index and search functions, implementing features to refine and improve results.",
                              "Optimized internal code, handling most queries in under 300 milliseconds.",
                          ]}
                      />
                      <Card
                          title="Message Board Android Application"
                          body={[
                              "Created a forum-like Android application using Java.",
                              "Functionality includes up-voting, sorting, replying, deleting, and more.",
                              "Data updated in real time via Google Firebase (NoSQL).",
                          ]}
                      />
                  </div>
              </div>
              <div className="btn-box2">
                <Button href="#" variant="light" className="center-btn rounded-pill">Resume <i className="fa-solid fa-file-arrow-down" /></Button>
              </div>
          </div>
      </div>
    );
}

function Card(props) {
    let info = "";
    if (props.info != null) {
        info = props.info;
    }
    let items;
    if (Array.isArray(props.body)) {
        items = <li>N/A</li>;
        if (props.body != null) {
            items = props.body.map((x) => <li key={x}>{x}</li>);
        }
        items = <ul>{items}</ul>;
    } else {
        items = props.body;
    }
    if (props.img != null) {
        return (
            <div className="card mb-3 card-div">

                {/* Shows logos on bigger screens */}
                <div className="row g-0 big-screens">
                    <div className="col-md-8">
                        <div className="card-body big-screens">
                            <Body title={props.title}
                                  info={info} term={props.term} items={items}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={props.img} className="img-fluid rounded-start big-screens" alt={props.title + " logo"}/>
                    </div>
                </div>

                {/* Hides logos on smaller screens */}
                <div className="row g-0 small-screens">
                    <div className="col">
                        <div className="card-body small-screens">
                            <Body title={props.title} info={info} term={props.term} items={items}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    return (
        <div className="card mb-3 card-div">
            <div className="row g-0">
                <div className="col">
                    <div className="card-body">
                        <Body title={props.title} info={info} term={props.term} items={items}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Body(props) {
    if (props.term == null) {
        return (
            <>
            <h5 className="card-title">{props.title}</h5>
            <p className="text-primary info-text">{props.info}</p>
            <p className="card-text">{props.items}</p>
            </>
        );
    }
    return (
        <>
        <h5 className="card-title">{props.title}</h5>
        <p className="text-primary info-text">{props.info}</p>
        <p className="card-text">{props.items}</p>
        <p className="card-text"><small className="text-muted">{props.term}</small></p>
        </>
    );
}