import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-card/cartUiSlice";

import "../../../styles/shopping-carts.scss";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <div className="cart__container" onClick={toggleCart}>
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No Item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <div className="cart__item-wrapper" key={index}>
                <CartItem item={item} />
              </div>
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          <button>
            <Link to="/checkout" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
