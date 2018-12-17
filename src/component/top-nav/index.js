import React from "react";
import { Link } from "react-router-dom";
import Mutil from "../../util/mm.js";
import User from "../../service/user-service";
const _user = new User();
const _mm = new Mutil();
class NavTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: _mm.getStorage("userInfo").username || ""
    };
  }
  //退出登录
  onLogout() {
    _user.logout().then(
      res => {
        _mm.removeStorage("userInfo");
        window.location.href = "/login";
      },
      errMsg => {
        _mm.errorTips(errMsg);
      }
    );
  }
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
              <i className="fa fa-user fa-fw" />
              {this.state.username ? (
                <span>
                  welcome,
                  {this.state.username}
                </span>
              ) : (
                <span>welcome</span>
              )}
              <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a onClick={() => this.onLogout()}>
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
