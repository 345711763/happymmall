import Mutil from "../util/mm.js";
const _mm = new Mutil();
class User {
  //用户登录
  login(loginInfo) {
    return _mm.request({
      url: "/manage/user/login.do",
      type: "post",
      data: loginInfo
    });
  }
  //检查登录接口的数据是不是合法
  checkLoginInfo(loginInfo) {
    let username = $.trim(loginInfo.username);
    let password = $.trim(loginInfo.password);
    //验证用户名
    if (typeof username !== "string" || username.length === 0) {
      return {
        status: false,
        msg: "用户不能为空!"
      };
    }
    //验证密码
    if (typeof password !== "string" || password.length === 0) {
      return {
        status: false,
        msg: "密码不能为空!"
      };
    }
    return {
      status: true,
      msg: "验证通过"
    };
  }
  //sign out
  logout() {
    return _mm.request({
      type: "post",
      url: "/user/logout.do"
    });
  }
}
export default User;
