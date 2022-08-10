import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        {/* ===================== Row 1 ===================== */}
        <Row>
          {/* ===================== Col 1 ===================== */}
          <Col lg="3" md="6" sm="6" className="mt-4">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique architecto
              </p>
            </div>
          </Col>
          {/* ===================== Col 2 ===================== */}
          <Col lg="3" md="6" sm="6" className="mt-4">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item ps-0 border-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item ps-0 border-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          {/* ===================== Col 3 ===================== */}
          <Col lg="3" md="6" sm="6" className="mt-4">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item ps-0 border-0">
                <p>Location : ZindaBazar , Shlhet-3100, Bangladesh</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item ps-0 border-0">
                <span>Phone : 01712345678</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item ps-0 border-0">
                <span>Email : example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          {/* ===================== Col 4 ===================== */}
          <Col lg="3" md="6" sm="6" className="mt-4">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        {/* ===================== Row 2 ===================== */}
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Ayman Tarek. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow :</p>
              <span>
                {" "}
                <a href="https://web.facebook.com/aymaantarek/" target="_blank">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                {" "}
                <a href="https://github.com/aymantarek16" target="_blank">
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span>
                {" "}
                <a href="https://www.youtube.com/" target="_blank">
                  <i className="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                {" "}
                <a
                  href="https://www.linkedin.com/in/ayman-tarek-617b21229/"
                  target="_blank"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
