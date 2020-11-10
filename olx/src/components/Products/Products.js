import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Badge
} from 'reactstrap';
import './style.css';
import {Link, useHistory} from 'react-router-dom'
import { connect } from 'react-redux';

import {getAllProducts} from '../../Redux/Actions/Product';
import { useEffect } from 'react';


function Products(props) {
    const history = useHistory();

    useEffect(() => {
        props.getAllProducts()
    }, [])

    const routeHandler = (item) => {
        history.push(`products/${item.title}/${item.productId}`, {product: item})
    }

    return (
        <div className='container-fluid mx-3'>
            <h2 className='text-dark ml-2'>Fresh recommendations</h2>
            <div className="row productRow">
                {props.products.map((item, i) => (
                    <div className="col-lg-3 col-md-6 col-12" key={i} onClick={() => routeHandler(item)}>
                        <Card>
                        <Badge color="warning" className='product__badge text-uppercase'>Featured</Badge>
                            <CardImg className='CardImg' top width="100%" src={item.images[0]} alt="Card image cap" />
                            <CardBody className='product__cardbody'>
                                <CardTitle>{item.title}</CardTitle>
                                <CardSubtitle>{item.price}</CardSubtitle>
                                <CardSubtitle>{item.category}</CardSubtitle>
                            </CardBody>
                        </Card>
                    </div>
                )
                )}
               
                {/* <div className='col-lg-3 col-md-6 col-12'>
                <Link to="products/1">
                    <Card>
                        <CardImg className='CardImg' top width="100%" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="Card image cap" />
                        <CardBody className='product__cardbody'>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                        </CardBody>
                    </Card>
                    </Link>
                </div >
                <div className='col-lg-3 col-md-6 col-12'>
                <Link to="products/1">
                    <Card>
                        <CardImg className='CardImg' top width="100%" src="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="Card image cap" />
                        <CardBody className='product__cardbody'>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                        </CardBody>
                    </Card>
                    </Link>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                    <Link to="products/1">
                        <Card>
                            <CardImg className='CardImg' top width="100%" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="Card image cap" />
                            <CardBody className='product__cardbody'>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                        </Link>
                    </div> */}
                </div>

            </div>
    )
}

function mapStateToProps(state) {
    return {
      products: state.products,
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
        getAllProducts: () => dispatch(getAllProducts())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Products)
