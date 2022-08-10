import React from "react";
import { Helmet } from "react-helmet";
import CommonSection from "../components/Ui/common-section/CommonSection";
import "../styles/cart-page.scss";

import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import { cartActions } from "../store/shopping-card/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div>
      <Helmet>
        <title>Food Delivery | Cart</title>
      </Helmet>
      <CommonSection title="Your Cart" />

      <section className="cart">
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="emptyCart">Your cart is empty 😢</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="cart__page">
                <h6>
                  Subtotal : $<span className='cart__subtotal'>{totalAmount}</span>
                </h6>
                <p className="mt-4 mb-4">Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addToCart__btn me-4">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>

                  <button className="addToCart__btn">
                    <Link to="/checkout">Proceed to Checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr className="car__box">
      <td className="cart__img-box">
        <img src={image01} alt={`img of ${title}`} />
      </td>
      <td>{title}</td>
      <td>$<span style={{color : '#df2020' , fontSize : '1.1rem'}}>{price}</span></td>
      <td>{quantity}px</td>
      <td className="cart__item-del" onClick={deleteItem}>
        <i className="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

export default Cart;
