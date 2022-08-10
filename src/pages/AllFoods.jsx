import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import "../styles/all-foods.scss";
import "../styles/paginations.scss";

import CommonSection from "../components/Ui/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/Ui/product-card/ProductCard";
import ReactPaginate from "react-paginate";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      return item;
  });

  const productPerpage = 8;
  const visitedPage = pageNumber * productPerpage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerpage
  );
  const pageCount = Math.ceil(searchedProduct.length / productPerpage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

 

  return (
    <div>
      <Helmet>
        <title>Food Delivery | Foods</title>
      </Helmet>
      <CommonSection title="All Foods" />
      <Container className="all-foods">
        <Row>
          <Col lg="6" md="6" sm='6' xl='6'>
            <div className="search__widget d-flex align-items-center justify-content-between w-50">
              <input
                type="text"
                placeholder="I'm looking for...."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={searchRef}
                
              />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </Col>

          <Col lg="6" md="6" sm="6" xl='6' className="mb-5">
            <div className="sorting__widget text-end">
              <select className="w-50" >
                <option>Default</option>
                <option value="ascending" >Alphabetically, A-Z</option>
                <option value="descending">Alphabetically, Z-A</option>
                <option value="high-price">High Price</option>
                <option value="low-price">Low Price</option>
              </select>
            </div>
          </Col>

          {displayPage.map((item) => (
            <Col lg="3" md="6" sm="6" xs="12" key={item.id} className="mb-4">
              {" "}
              <ProductCard item={item} />
            </Col>
          ))}

          <div>
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName={"paginationBttns"}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default AllFoods;
