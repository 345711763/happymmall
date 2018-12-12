import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, Route, Link } from "react-router-dom";
import Login from "./page/login";
import Home from "./page/home";
import Layout from "./component/layout";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => {
              return (
                <Layout>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/product" exact component={Home} />
                    <Route path="/order" exact component={Home} />
                    <Route path="/user" exact component={Home} />
                  </Switch>
                </Layout>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
