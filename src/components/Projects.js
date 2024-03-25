import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img11.png";
import projImg2 from "../assets/img/project-img12.png";
import projImg3 from "../assets/img/project-img13.png";
import projImg4 from "../assets/img/project-img14.png";
import projImg5 from "../assets/img/project-img15.png";
import projImg6 from "../assets/img/project-img16.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Movie App",
      description: "HTML, CSS, JS, and REACT",
      imgUrl: projImg1,
    },
    {
      title: "Amazon Clone",
      description: "HTML and CSS",
      imgUrl: projImg2,
    },
    {
      title: "Case-Converter",
      description: "HTML, CSS, JS, and REACT",
      imgUrl: projImg3,
    },
    {
      title: "Rock Paper Scissors Game",
      description: "HTML, CSS, and JS",
      imgUrl: projImg4,
    },
    {
      title: "Contact Form",
      description: "HTML, CSS, JS, and REACT",
      imgUrl: projImg5,
    },
    {
      title: "Product Page",
      description: "HTML, CSS, JS, and REACT",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore my portfolio showcasing a variety of web projects,
                    each highlighting specific skills and functionalities. From
                    the 'Movie App' and 'Case-Converter' demonstrating
                    proficiency in HTML, CSS, JavaScript, and React, to the
                    'Amazon Clone' showcasing layout design with HTML and CSS.
                    Additionally, enjoy browser-based games like the 'Rock Paper
                    Scissors Game,' and interactive elements in the 'Contact
                    Form' and 'Product Page.' These projects encapsulate my
                    technical abilities and commitment to crafting engaging web
                    solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
