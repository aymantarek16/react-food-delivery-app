import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-card/cartSlice";

const ProductCard = ({ item }) => {
  const btnRef = useRef();
  const { id, title, image01, price } = item;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
    btnRef.current.innerText = "added!";
    setTimeout(() => {
      btnRef.current.innerText = "Add to Cart";
    }, 700);
  };
  return (
    <div className="product__item mb-4">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5 className="product__title">
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>

        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addToCart__btn" onClick={addToCart} ref={btnRef}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
