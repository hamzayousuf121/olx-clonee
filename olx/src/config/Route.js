import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../container/home';
import ProductDetailsContainer from '../container/productDetails'
import Userform from '../container/Userform';
import Posts from '../components/Posts'

function Routing() {
    return (
        <Router>
            <Switch>
                <Route path="/products/:id">
                    <ProductDetailsContainer />
                </Route>

                <Route path="/register">
                    <Userform />
                </Route>

                <Route path="/posts">
                    <Posts />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
export default Routing;