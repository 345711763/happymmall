import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import ProductList from "./index";
import ProductSave from "./index/save.js";
class ProductRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/product/index" component={ProductList} />
        <Route path="/product/save" component={ProductSave} />
        <Redirect exact from="/product" to="/product/index" />
      </Switch>
    );
  }
}

export default ProductRouter;
