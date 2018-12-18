import React from "react";
import { Link, NavLink } from "react-router-dom";
class NavSide extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar-default navbar-side">
        <div className="sidebar-collapse">
          <ul className="nav">
            <li>
              <NavLink exact activeClassName="active-menu" to="/">
                <i className="fa fa-dashboard" /> Home
              </NavLink>
            </li>

            <li className="active">
              <Link to="/product">
                <i className="fa fa-list" />
                <span>Product</span>
                <span className="fa arrow" />
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink activeClassName="active-menu" to="/product">
                    Manage Product
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active-menu" to="/product-category">
                    Manage Category
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="active">
              <Link to="/order">
                <i className="fa fa-check-square-o" />
                <span>Orders</span>
                <span className="fa arrow" />
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink activeClassName="active-menu" to="/order">
                    Manage Orders
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="active">
              <Link to="/user">
                <i className="fa fa-user-o" />
                <span>Users</span>
                <span className="fa arrow" />
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink activeClassName="active-menu" to="/user">
                    Manage Users
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavSide;
