import React, { useEffect, useRef } from "react";
import "../../styles/header.scss";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-card/cartUiSlice";

const nav_links = [
  {
    display: "Home",
    path: "/home",
  },

  {
    display: "Foods",
    path: "/foods",
  },

  {
    display: "Cart",
    path: "/cart",
  },

  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const titleRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); 
  const dispatch = useDispatch();

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };

  const toggleCart = ()=> {
    dispatch(cartUiActions.toggle());
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        document.querySelector(".header").classList.add("header__sticky");
        titleRef.current.classList.add("hideTitle");
      } else {
        document.querySelector(".header").classList.remove("header__sticky");
        titleRef.current.classList.remove("hideTitle");
      }
    });
  }, []);
  return (
    <div>
      <header className="header">
        <Container>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h5 ref={titleRef}>Tasty Treat</h5>
            </div>

            {/* ======= Menu ======= */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active_menu" : ""
                    }
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* ======= Nav Right icons ======= */}
            <div className="nav__right d-flex align-items-center gap-4">
              <span className="cart__icon" onClick={toggleCart}>
                <i className="ri-shopping-basket-line"></i>
                <span className="cart__badge"><h6>{totalQuantity}</h6></span>
              </span>

              <span className="user">
                <Link to="/login">
                  <i className="ri-user-line"></i>{" "}
                </Link>
              </span>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
