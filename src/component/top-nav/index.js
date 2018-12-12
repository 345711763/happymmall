import React from "react";
import { Link } from "react-router-dom";
class NavTop extends React.Component {
  constructor(props) {
    super(props);
  }
  //退出登录
  onLogout() {}
  render() {
    return (
      <div className="navbar navbar-default top-navbar" role="navigation">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <b>HAPPY</b>
            MMALL
          </Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" href="javascript:;">
              <i className="fa fa-user fa-fw" /> <span>欢迎admin</span>
              <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a onClick={this.onLogout()}>
                  <i className="fa fa-sign-out fa-fw" /> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavTop;
