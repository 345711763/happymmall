import Mutil from "../util/mm.js";
const _mm = new Mutil();
class Product {
  getProductList(listParam) {
    let url = "";
    let data = {};
    if (listParam.listType === "list") {
      url = "/manage/product/list.do";
      data.pageNum = listParam.pageNum;
    } else if (listParam.listType === "search") {
      url = "/manage/product/search.do";
      data.pageNum = listParam.pageNum;
      data[listParam.searchType] = listParam.keyword;
    }
    return _mm.request({
      type: "post",
      url: url,
      data: data
    });
  }
  //change product status
  setProductStatus(productInfo) {
    return _mm.request({
      type: "post",
      url: "/manage/product/set_sale_status.do",
      data: productInfo
    });
  }

  getCategoryList(parentCategoryId) {
    return _mm.request({
      type: "post",
      url: "/manage/category/get_category.do",
      data: {
        categoryId: parentCategoryId || 0
      }
    });
  }
}
export default Product;
