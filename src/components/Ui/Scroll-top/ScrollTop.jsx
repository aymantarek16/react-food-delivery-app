import React, { useEffect, useState } from "react";
import "../../../styles/scroll-top.scss";

const ScrollTop = () => {
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    });
  }, []);
  return (
    <div
      className={!scroll ? "scroll-up" : "hidescroll"}
      onClick={() => window.scrollTo(0, 0)}
    >
      <i className="ri-arrow-up-s-line"></i>
    </div>
  );
};

export default ScrollTop;
