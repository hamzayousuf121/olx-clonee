import React from "react";
import ErrorImg from "../images/404.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
function Nofound() {
  return (
    <div>
      <Header />

      <div className="container d-flex justify-content-center ">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <h1 className="display-3">Oops!</h1>
            <h4>We can't seem to find that.</h4>
            <h4>Try searching for it.</h4>
            <p>Error 404</p>
            <p>
              Here are some helpful links: <Link to="/">Home</Link>
            </p>
          </div>
          <div className="col-lg-4 col-md-12 mt-5">
            <img src={ErrorImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Nofound;
