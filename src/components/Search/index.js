import React from "react";
import "./style.css";
import Header from "../Header/Header";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge,
} from "reactstrap";

function Index() {
  const products = useSelector((state) => state.products);
  const { search } = useParams();
  const history = useHistory();
  const filterCategory = products.filter((item) => item.title.toLowerCase() === search.toLowerCase());

  const routeHandler = (item) => {
    history.replace(`/products/${item.title}/${item.productId}`, { product: item });
  };

  return (
    <>
      <Header />
      <Category />
      <div className="container-fluid mx-3">
        <h2 className="text-dark ml-2">Based On Your Search</h2>
        <div className="row productRow">
          {filterCategory.map((item, i) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              key={i}
              onClick={() => routeHandler(item)}
            >
              <Card>
                {item.condition === "New" && (
                  <Badge
                    color="warning"
                    className="product__badge text-uppercase"
                  >
                    Featured
                  </Badge>
                )}
                <CardImg
                  className="CardImg"
                  top
                  width="100%"
                  src={item.images[0]}
                  alt="Card image cap"
                />
                <CardBody className="product__cardbody">
                  <CardTitle>{item.title}</CardTitle>
                  <CardSubtitle>{item.price}</CardSubtitle>
                  <CardSubtitle>{item.category}</CardSubtitle>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
