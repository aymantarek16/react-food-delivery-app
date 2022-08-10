import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }, []);

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    fontWeight: "bold",
    height: "60vh",
    backgroundColor: "gray",
    color: "#fff",
  };

  return (
    <div>
      <Helmet>
        <title>404 | Page Not Found </title>
      </Helmet>
      <h1 style={styles}>404 - Page Not Found 🙃 </h1>
    </div>
  );
};

export default NotFound;
