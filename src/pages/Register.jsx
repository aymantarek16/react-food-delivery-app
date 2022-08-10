import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import CommonSection from "../components/Ui/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.scss";

const Register = () => {
  const signupNameRef = useRef();
  const signupEmail = useRef();
  const signupPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      signupNameRef.current.value,
      signupEmail.current.value,
      signupPasswordRef.current.value
    );
  };

  return (
    <div>
      <Helmet>
        <title>Food Delivery | Register</title>
      </Helmet>
      <CommonSection title="Register" />

      <section className="login">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center log">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    ref={signupNameRef}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmail}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>

                <button type="submit" className="addToCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Register;
