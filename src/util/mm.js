class Mutil {
  request(param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || "get",
        url: param.url || "",
        dataType: param.datatype || "json",
        data: param.data || null,
        success(res) {
          //success
          if (0 === res.status) {
            resolve(res.data, res.msg);
          } else if (10 === res.status) {
            //do login
            this.doLogin();
          } else {
            reject(res.msg || res.data);
          }
        },
        error(err) {
          reject(err.statusText);
        }
      });
    });
  }
  doLogin() {
    window.location.href =
      "/login?redirect=" + encodeURLComponent(window.location.pathname);
  }
  //获取URL参数
  getUrlParam(name) {
    //xxxx.com?param=123&param1=456
    let queryString = window.location.search.split("?")[1] || "";
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let result = queryString.match(reg);
    return result ? decodeURIComponent(result[2]) : null;
  }
  //错误提示
  errorTips(errMsg) {
    alert(errMsg || "好像哪里不对了");
  }
}

export default Mutil;
