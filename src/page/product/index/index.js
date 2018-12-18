import React from "react";
import PageTitle from "../../../component/page-title";
import TableList from "../../../util/table-list";
import Pagination from "../../../util/pagination";
import Mutil from "../../../util/mm.js";
import Product from "../../../service/product-service";
import ListSearch from "./index-list-search";
import { Link } from "react-router-dom";
import "./index.css";
const _product = new Product();
const _mm = new Mutil();
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pageNum: 1,
      listType: "list"
    };
  }
  componentDidMount() {
    this.loadProductList();
  }
  loadProductList() {
    let listParam = {};
    listParam.listType = this.state.listType;
    listParam.pageNum = this.state.pageNum;
    //如果是"search"类型，传入searchType 和 searchKeyword
    if (this.state.listType === "search") {
      listParam.searchType = this.state.searchType;
      listParam.keyword = this.state.searchKeyword;
    }
    _product.getProductList(listParam).then(
      res => {
        this.setState(res);
      },
      errMsg => {
        this.setState({
          list: []
        });
        _mm.errorTips(errMsg);
      }
    );
  }
  onPageNumChange(pageNum) {
    this.setState(
      {
        pageNum: pageNum
      },
      () => {
        this.loadProductList();
      }
    );
  }
  onSearch(searchType, searchKeyword) {
    let listType = searchKeyword === "" ? "list" : "search";
    this.setState(
      {
        listType: listType,
        pageNum: 1,
        searchType: searchType,
        searchKeyword: searchKeyword
      },
      () => {
        this.loadProductList();
      }
    );
  }
  onSetProductStatus(e, productId, currentStatus) {
    let newStatus = currentStatus === 1 ? 2 : 1,
      confirmTips =
        currentStatus == 1
          ? "Confirm to stop selling"
          : "Confirm to start selling";
    if (window.confirm(confirmTips)) {
      _product
        .setProductStatus({
          productId: productId,
          status: newStatus
        })
        .then(
          res => {
            _mm.successTips(res);
            this.loadProductList();
          },
          errMsg => {
            _mm.errorTips(errMsg);
          }
        );
    }
  }
  render() {
    let tableHeads = [
      { name: "ProductID", width: "10%" },
      { name: "Description", width: "50%" },
      { name: "Price", width: "10%" },
      { name: "Status", width: "15%" },
      { name: "Operations", width: "15%" }
    ];
    return (
      <div id="page-wrapper">
        <PageTitle title="Product List">
          <div className="page-header-right">
            <Link to="/product/save" className="btn btn-primary">
              <i className="fa fa-plus" />
              <span>Add Product</span>
            </Link>
          </div>
        </PageTitle>
        <ListSearch
          onSearch={(searchType, searchKeyword) => {
            this.onSearch(searchType, searchKeyword);
          }}
        />
        <TableList tableHeads={tableHeads}>
          {this.state.list.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>
                  <p>{product.name}</p>
                  <p>{product.subtitle}</p>
                </td>
                <td>¥{product.price}</td>
                <td>
                  <p>
                    {product.status === 1 ? "On Sale" : "Not Available Anymore"}
                  </p>
                  <button
                    className="btn btn-xs btn-warning"
                    onClick={e => {
                      this.onSetProductStatus(e, product.id, product.status);
                    }}
                  >
                    {product.status === 1 ? "Stop Selling" : "Start Selling"}
                  </button>
                </td>
                <td>
                  <Link className="opera" to={`/product/detail/${product.id}`}>
                    Details
                  </Link>
                  <Link className="opera" to={`/product/save/${product.id}`}>
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </TableList>
        <Pagination
          current={this.state.pageNum}
          total={this.state.total}
          onChange={pageNum => this.onPageNumChange(pageNum)}
        />
      </div>
    );
  }
}

export default ProductList;
