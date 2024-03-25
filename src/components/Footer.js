import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo4.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/meghana-raikar-515088210/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/meghana-raikar">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://leetcode.com/meghana-raikar/">
                <img src={navIcon3} alt="" />
              </a>
              <a href="https://drive.google.com/file/d/1daq5L-8WoMoGKpZeYm2dSxXgFJ3o6_bm/view?usp=sharing">
                <img src={navIcon4} alt="" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
