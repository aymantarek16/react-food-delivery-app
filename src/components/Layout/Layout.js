import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";
import ScrollTop from "../Ui/Scroll-top/ScrollTop";

import Carts from "../Ui/cart/Carts";

import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <ScrollTop/>
      <Header />

      {
        showCart && <Carts />
      }

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
