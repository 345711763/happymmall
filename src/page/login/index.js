import React from "react";
import "./index.css";
import Mutil from "../../util/mm.js";
import User from "../../service/user-service";
const _user = new User();
const _mm = new Mutil();
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: _mm.getUrlParam("redirect") || "/"
    };
  }
  onInputChange(e) {
    let inputName = e.target.name;
    this.setState({
      [inputName]: e.target.value
    });
  }
  onSubmit(e) {
    _user
      .login({
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.props.history.push(this.state.redirect);
      })
      .catch(error => {
        _mm.errorTips(error);
      });
  }
  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">欢迎登陆 - MMALL管理系统</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  name="username"
                  className="form-control"
                  placeholder="User Name"
                  onChange={e => this.onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={e => this.onInputChange(e)}
                />
              </div>
              <button
                className="btn btn-primary"
                onClick={() => this.onSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
