import "./Common.css";
import "./Experience.css";
import Common from "./Common.js";
import amexLogo from "./assets/amex.png";
import ckiLogo from "./assets/cki.jpg";
import accLogo from "./assets/acc.png";
import uciLogo from "./assets/uci.png";
import resume from "./assets/resume.pdf";

export default function Experience() {
    return (
      <div id="experience" className="light-bg new-page">
          <div className="page-box">
              <Common.Header text="Experience" />
              <div className="page-contents row text-start exp-contents">
                  <div className="col vr-div auto">
                      <FirstColumn />
                  </div>
                  {/* Two columns on bigger screens */}
                  <div className="col exp-col-big">
                      <SecondColumn />
                  </div>
                  {/* One column on smaller screens */}
                  <div className="exp-col-small">
                      <SecondColumn />
                  </div>
              </div>
              <div className="btn-box2">
                  <a rel="noreferrer" target="_blank" href={resume} className="btn btn-lg center-btn">
                  Resume <i className="fa-solid fa-file-arrow-down" />
                  </a>
              </div>
          </div>
      </div>
    );
}

function FirstColumn() {
    return (
        <>
        <h4 className="fw-bold text-center">Employment</h4>
        <ExperienceCard
            img={amexLogo}
            title="Software Engineering Intern"
            info="American Express"
            term="Jun 2021 - Aug 2021"
            body={[
                "Researched and developed for a Proof of Concept on the Enterprise Communication Platform, potentially interacting with tens of millions of customers.",
                "Engineered backend microservices with RxJava, Vert.x, and Couchbase.",
                "Conducted tests and optimizations of RESTful API with Postman.",
            ]}
        />
        <ExperienceCard
            img={ckiLogo}
            title="Technology Intern"
            info="UC Irvine Circle K"
            term="Jun 2020 - Sep 2020"
            body={[
                "Maintained website for hundreds of users with HTML, CSS, PHP, and SQL.",
                "Focused on aspects such as information retrieval and data management.",
            ]}
        />
        <ExperienceCard
            img={accLogo}
            title="Night Desk Assistant"
            info="American Campus Communities"
            term="Sep 2019 - Aug 2020"
            body={[
                "Acted as a point of contact between staff, thousands of residents, and third parties.",
                "Performed office duties such as filing and organizing, along with nightly rounds and securing of facilities.",
                "Mentored new staff, improving quality of service.",
            ]}
        />
        </>
    );
}

function SecondColumn() {
    return (
        <>
        <h4 className="fw-bold text-center">Education</h4>
        <ExperienceCard
            img={uciLogo}
            title="Bachelor of Science, Computer Science"
            info="University of California, Irvine"
            term="Aug 2018 - Jun 2022"
            body={[
                "First generation, fourth year undergraduate with a GPA of 3.76.",
                "Dean's Honor List: 8 quarters.",
                "Courses: Algorithms, Artificial Intelligence, Data Management, Data Structures, Information Retrieval, Machine Learning & Data Mining, System Design.",
            ]}
        />
        <div className="hr-div" />
        <h4 className="fw-bold text-center">Projects</h4>
        <ExperienceCard
            title="FabFlix"
            info="Java, MySQL, JavaScript, Tomcat"
            body={[
                "Collaboratively built a full stack microservices platform, simulating film e-commerce.",
                "Deployed on Amazon Web Services and Google Cloud Platform with scaling.",
                "Performance tuned with JMeter.",
            ]}
        />
        <ExperienceCard
            title="Search Engine"
            info="Python, Spacetime Framework"
            body={[
                "Cooperatively built a search engine, handling tens of thousands of documents.",
                "Developed index and search functions, refining and improving results.",
                "Optimized internal code, handling most queries in under 300 milliseconds.",
            ]}
        />
        <ExperienceCard
            title="Message Board Android Application"
            info="Java, Google Firebase (NoSQL)"
            body={[
                "Forum-like application with up-voting, sorting, replying, deleting, and more.",
                "Data updated in real time.",
            ]}
        />
        </>
    );
}

function ExperienceCard(props) {
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
            <div className="card mb-3 exp-card">

                <div className="row g-0 big-screens">
                    {/*<div className="col-md-8">*/}
                    <div>
                        <div className="card-body big-screens">
                            <Body title={props.title} info={info} term={props.term} items={items}/>
                        </div>
                    </div>
                    {/*<div className="col-md-4">*/}
                    {/*    <img src={props.img} className="img-fluid rounded-start big-screens" alt={props.info + " logo"}/>*/}
                    {/*</div>*/}
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
        <div className="card mb-3 exp-card">
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
    return (
        <>
        <h5 className="card-title">{props.title}</h5>
        <p className="text-primary info-text">{props.info}</p>
        {typeof(props.items) == "string" && props.term != null ? <p className="card-text">{props.items}</p> : <div className="card-text">{props.items}</div>}
        {props.term != null ? <p className="card-text"><small className="text-muted">{props.term}</small></p> : <span />}
        </>
    );
}