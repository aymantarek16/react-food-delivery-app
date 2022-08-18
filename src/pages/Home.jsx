import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import Category from "../components/Ui/category/Category";
import "../styles/home.scss";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/Ui/product-card/ProductCard";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestemonialSlider from "../components/Ui/slider/TestemonialSlider";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus eaque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus eaque.",
  },

  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus eaque.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("All");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = allProducts.filter(
      (item) => item.category === "Pizza"
    );
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, [allProducts]);

  useEffect(() => {
    if (category === "All") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <div>
      <Helmet>
        <title>Food Delivery | Home</title>
      </Helmet>

      {/*  ===================== Section 1 ===================== */}
      <section className="hero">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy Way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY? </span>Just wait food at <span>your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Debitis aut impedit dolore recusandae assumenda mollitia.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>

                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*  ===================== Section 2 ===================== */}
      <section className="pt-0">
        <Category />
      </section>

      {/*  ===================== Section 3 ===================== */}

      <section className="feature">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5
                className="feature__subtitle mb-4"
                style={{ color: "#df2020" }}
              >
                What we serve
              </h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span style={{ color: "#df2020" }}>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text" style={{ color: "#777" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Ullam
                magni
              </p>
              <p className="feature__text" style={{ color: "#777" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Rem ad
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p style={{ color: "#777" }}>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/*  ===================== Section 4 ===================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn ${
                    category === "All" && "foodBtnActive"
                  }`}
                  onClick={() => setCategory("All")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" && "foodBtnActive"
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="burger-img" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" && "foodBtnActive"
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="Pizza-img" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" && "foodBtnActive"
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="Bread-img" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/*  ===================== Section 5 ===================== */}

      <section>
        <Container>
          <Row className="why__tasty-treat">
            <Col lg="6" md="6">
              <img
                src={whyImg}
                alt="why-tasty-treat"
                className="w-100 treat_img"
              />
            </Col>

            <Col lg="6" md="6">
              <div>
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty__treat-desc ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laudantium, voluptatem eum unde vero quidem pariatur repellat
                  accusamus, quam voluptatum facilis et dignissimos magnam
                  cupiditate, aperiam facere ullam ad Cum, quasi!
                </p>

                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-2">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Fresh and tasty foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Maxime, nihil!
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-2">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ratione, quibusdam.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-2">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Order from any location
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ratione, quibusdam.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*  ===================== Section 6 ===================== */}

      {/* <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

      {/*  ===================== Section 7 ===================== */}

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title  mb-4">
                  What our <span>customers</span>are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laboriosam animi blanditiis officiis at praesentium quibusdam
                  pariatur quo incidunt inventore suscipit!
                </p>

                <TestemonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
