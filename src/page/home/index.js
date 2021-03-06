import React from "react";
import "./index.css";
import PageTitle from "../../component/page-title";
import { Link } from "react-router-dom";
import Mutil from "../../util/mm.js";
import Statistic from "../../service/statistic-service";
const _statistic = new Statistic();
const _mm = new Mutil();
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount: "-",
      productCount: "-",
      orderCount: "-"
    };
  }
  componentDidMount() {
    this.loadCount();
  }
  loadCount() {
    _statistic.getHomeCount().then(
      res => {
        this.setState(res);
      },
      errMsg => {
        _mm.errorTips(errMsg);
      }
    );
  }
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="Home" />
        <div className="row">
          <div className="col-md-4">
            <Link to="/user" className="color-box brown">
              <p className="count">{this.state.userCount}</p>
              <p className="desc">
                <i className="fa fa-user-o" />
                <span>Users</span>
              </p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/user" className="color-box green">
              <p className="count">{this.state.productCount}</p>
              <p className="desc">
                <i className="fa fa-list" />
                <span>Products</span>
              </p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/user" className="color-box blue">
              <p className="count">{this.state.orderCount}</p>
              <p className="desc">
                <i className="fa fa-check-square-o" />
                <span>Orders</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
