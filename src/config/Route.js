import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../container/home";
import ProductDetailsContainer from "../container/productDetails";
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Posts from "../components/Posts";
import MyAdds from "../components/MyAdds";
import Search from "../components/Search";
import FilterCategory from "../components/FilterCategory";
import NoFound from '../components/Nofound/Nofound'

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/products/:id">
          <ProductDetailsContainer />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/posts">
          <Posts />
        </Route>

        <Route path="/adds">
          <MyAdds />
        </Route>

        <Route path="/search/:search">
          <Search />
        </Route>
        
        <Route path="/category/:category">
          <FilterCategory />
        </Route>
        <Route path="*">
          <NoFound />
        </Route>
      </Switch>
    </Router>
  );
}
export default Routing;
