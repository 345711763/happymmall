import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, Route, Link } from "react-router-dom";
import Login from "./page/login";
import Home from "./page/home";
import Layout from "./component/layout";
import ErrorPage from "./page/error";
import UserList from "./page/user";
import ProductRouter from "./page/product/router.js";
class App extends React.Component {
  render() {
    let LayoutRouter = (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={ProductRouter} />
          <Route path="/product-category" component={Home} />
          <Route path="/user/index" component={UserList} />
          <Redirect exact from="/user" to="/user/index" />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    );
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={props => LayoutRouter} />
        </Switch>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
