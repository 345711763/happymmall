import Mutil from "../util/mm.js";
const _mm = new Mutil();
class Statistic {
  //HomePage data Collection
  getHomeCount() {
    return _mm.request({
      url: "/manage/statistic/base_count.do"
    });
  }
}
export default Statistic;
