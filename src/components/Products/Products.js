import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge,
} from "reactstrap";
import "./style.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Products(props) {
  const history = useHistory();
  const routeHandler = (item) => {
    history.push(`products/${item.title}/${item.productId}`, { product: item });
  };
  return (
    <div className="container-fluid mx-3">
      <h2 className="text-dark ml-2">Fresh recommendations</h2>
      <div className="row productRow">
        {props.products.map((item, i) => (
          <div
            className="col-lg-3 col-md-6 col-sm-6"
            key={i}
            onClick={() => routeHandler(item)}
          >
            <Card>
              {(item.condition === 'New')  && (
                <Badge
                  color="warning"
                  className="product__badge text-uppercase">
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
  );
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     getAllProducts: () => dispatch(getAllProducts()),
//   };
// }

export default connect(mapStateToProps, null)(Products);
