import Mutil from "../util/mm.js";
const _mm = new Mutil();
class User {
  login(loginInfo) {
    return _mm.request({
      url: "/manage/user/login.do",
      type: "post",
      data: {
        username: loginInfo.username,
        password: loginInfo.password
      }
    });
  }
}
export default User;
