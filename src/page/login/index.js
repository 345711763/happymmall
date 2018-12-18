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
  componentWillMount() {
    document.title = "Login";
  }
  onKeyUpListener(e) {
    if (e.keyCode === 13) {
      this.onSubmit();
    }
  }
  //当用户名发生改变
  onInputChange(e) {
    let inputName = e.target.name;
    this.setState({
      [inputName]: e.target.value
    });
  }
  //当用户提交表单
  onSubmit() {
    let loginInfo = {
      username: this.state.username,
      password: this.state.password
    };
    let checkResult = _user.checkLoginInfo(loginInfo);
    //验证通过
    if (checkResult.status === true) {
      _user
        .login(loginInfo)
        .then(res => {
          _mm.setStorage("userInfo", res);
          this.props.history.push(this.state.redirect);
        })
        .catch(error => {
          _mm.errorTips(error);
        });
    }
    //验证不通过
    else {
      _mm.errorTips(checkResult.msg);
    }
  }
  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">Welcome - MMALL management system</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  onKeyUp={event => this.onKeyUpListener(event)}
                  name="username"
                  className="form-control"
                  placeholder="User Name"
                  onChange={e => this.onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  onKeyUp={event => this.onKeyUpListener(event)}
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
