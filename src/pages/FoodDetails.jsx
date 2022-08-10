import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";

import CommonSection from "../components/Ui/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-card/cartSlice";

import "../styles/product-details.scss";
import ProductCard from "../components/Ui/product-card/ProductCard";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userReview = {
      name: enteredName,
      email: enteredEmail,
      msg: reviewMsg,
    };
    console.log(userReview);
  };

  return (
    <div>
      <Helmet>
        <title>Food Delivery | Food Details</title>
      </Helmet>
      <CommonSection title={title} />

      <section className="food-details">
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img
                    src={product.image01}
                    alt="product-img1"
                    className="img__item-image"
                  />
                </div>

                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img
                    src={product.image02}
                    alt="product-img2"
                    className="img__item-image"
                  />
                </div>

                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img
                    src={product.image03}
                    alt="product-img3"
                    className="img__item-image"
                  />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img
                  src={previewImg}
                  alt="product-main-img"
                  className="w-100"
                />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  Price : <span>${price}</span>
                </p>
                <p className="category mb-5">
                  Category : <span>{category}</span>
                </p>
                <button onClick={addItem} className="addTOCart__btn mb-5">
                  Add to Cart
                </button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={tab === "desc" ? "tab__active" : ""}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={tab === "rev" ? "tab__active" : ""}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {/* Toogle With tap */}
              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3 mt-5">
                  <div className="review">
                    <p className="user__name mb-0">Ayman Tarek</p>
                    <p className="user__email">aymantarekm16@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Ayman Tarek</p>
                    <p className="user__email">aymantarekm16@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Ayman Tarek</p>
                    <p className="user__email">aymantarekm16@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                  <form className="form" onSubmit={handleSubmit}>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form__group">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form__group">
                      <textarea
                        type="text"
                        rows={5}
                        placeholder="Write your review"
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className="addTOCart__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>

            {relatedProducts.map((item) => (
              <Col lg="3" md="6" sm="6" xs="12" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FoodDetails;
