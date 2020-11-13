import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import noAdds from "../images/myadds.webp";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Badge,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import './style.css';
function MyAdds() {
    const currentUser = useSelector((state) => state.currentUser);
    const history = useHistory();
    if(Object.keys(currentUser).length < 1){
            history.push('/')
    }
    const products = useSelector((state) => state.products);
    const routeHandler = (item) => {
        history.push(`products/${item.title}/${item.productId}`, { product: item });
    };
    console.log(products, "curent User From no Adds");
    const [userProducts, setUserProducts] = useState([])
    const [userHaveProducts, setUserHaveProducts] = useState(false)
    useEffect(() => {
        if (Object.keys(currentUser.length > 0)) {
            const filterProduct = products.filter((item) => item.uid === currentUser.uid)
            setUserProducts(filterProduct)
            if(filterProduct !== []){
                setUserHaveProducts(true)
            }
        }
    }, [])

    return (
        <div className="">
            <Header />
            {
                (userHaveProducts) ?
                    <div className="container-fluid mx-3">
                        <h2 className="text-dark ml-2">Your Ads</h2>
                        <div className="row productRow">
                            {userProducts.map((item, i) => (
                                <div
                                    className="col-lg-3 col-md-6 col-sm-6"
                                    key={i}
                                    onClick={() => routeHandler(item)}
                                >
                                    <Card>
                                        {(item.condition === 'New') && (
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
                    :
                    <center className="mb-5">
                        <img
                            src={noAdds}
                            alt=""
                            className="img-fluid"
                            width="200"
                            height="auto"
                        />
                        <h6 className="adds__heading">You haven't listed anything yet</h6>
                        <p className="adds__text mb-0">Let's go of what you</p>
                        <p className="adds__text">don't use anymore</p>
                        <button className="adds-btn">start selling</button>
                    </center>
            }

            <Footer />
        </div>
    );
}

export default MyAdds;
