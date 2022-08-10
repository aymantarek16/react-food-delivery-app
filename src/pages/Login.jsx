import React , {useRef} from "react";
import { Helmet } from "react-helmet";
import CommonSection from "../components/Ui/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import {Link} from 'react-router-dom';
import "../styles/login.scss";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(loginNameRef.current.value, loginPasswordRef.current.value);
  }

  return (
    <div>
      <Helmet>
        <title>Food Delivery | Login</title>
      </Helmet>
      <CommonSection title="Login" />

      <section className="login">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center log">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input type="email" placeholder="Email" required ref={loginNameRef} />
                </div>

                <div className="form__group">
                  <input type="password" placeholder="Password" required  ref={loginPasswordRef}/>
                </div>

                <button type="submit" className="addToCart__btn">Login</button>
              </form>
              <Link to='/register'>Don't have an account? Create an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Login;
