import React from "react";
import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";


const categoryData = [
  {
    name: "Fastfood",
    imgUrl: categoryImg01,
  },

  {
    name: "Pizza",
    imgUrl: categoryImg02,
  },

  {
    name: "Asian Food",
    imgUrl: categoryImg03,
  },

  {
    name: "Row Meat",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="6" key={index} className='mb-3'>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__item__img">
                <img src={item.imgUrl} alt={item.name} />
              </div>
              <h6>{item.name}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
