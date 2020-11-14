import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../container/home";
import ProductDetailsContainer from "../container/productDetails";
import Userform from "../container/Userform";
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
          <Userform />
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
        
        <Route path="/category">
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
