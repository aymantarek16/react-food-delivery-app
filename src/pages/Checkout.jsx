import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/Ui/common-section/CommonSection";
import "../styles/checkout.scss";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  let cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  let shippingCost = 30;

  let totalAmount = cartTotalAmount + Number(shippingCost);

  if (cartTotalAmount === 0) {
    shippingCost = 0;
    totalAmount = 0;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    let userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };
    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <div>
      <Helmet>
        <title>Food Delivery | Checkout</title>
      </Helmet>
      <CommonSection title="Checkout" />

      <section className="checkout">
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={enterName}
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={enterEmail}
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    value={enterNumber}
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    value={enterCountry}
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    value={enterCity}
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    required
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <button className="addToCart__btn">Payment</button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout_bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal : <span>{cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping : <span>${shippingCost}</span>
                </h6>

                <div className="checkout_total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total : <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Checkout;
