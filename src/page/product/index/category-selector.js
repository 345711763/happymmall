import React from "react";
import "./category-selector.css";
import Mutil from "../../../util/mm";
import Product from "../../../service/product-service";
const _product = new Product();
const _mm = new Mutil();

class CategorySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCategoryList: [],
      firstCategoryId: 0,
      secondCategoryList: [],
      secondCategoryId: 0
    };
  }
  componentDidMount() {
    this.loadFirstCategory();
  }
  loadFirstCategory() {
    _product.getCategoryList().then(
      res => {
        this.setState({
          firstCategoryList: res
        });
      },
      errMsg => {
        _mm.errorTips(errMsg);
      }
    );
  }
  loadSecondCategory() {
    _product.getCategoryList(this.state.firstCategoryId).then(
      res => {
        this.setState({
          secondCategoryList: res
        });
      },
      errMsg => {
        _mm.errorTips(errMsg);
      }
    );
  }
  onFirstCategoryChange(e) {
    let newValue = e.target.value || 0;
    this.setState(
      {
        firstCategoryId: newValue,
        secondCategoryId: 0,
        secondCategoryList: []
      },
      () => {
        //update level#2
        this.loadSecondCategory();
        this.onPropsCategoryChange();
      }
    );
  }
  onSecondCategoryChange(e) {
    let newValue = e.target.value || 0;
    this.setState(
      {
        secondCategoryId: newValue
      },
      () => {
        this.onPropsCategoryChange();
      }
    );
  }
  onPropsCategoryChange() {
    let categoryChangable = typeof this.props.onCategoryChange === "function";
    if (this.state.secondCategoryId) {
      categoryChangable &&
        this.props.onCategoryChange(
          this.state.secondCategoryId,
          this.state.firstCategoryId
        );
    } else {
      categoryChangable &&
        this.props.onCategoryChange(this.state.firstCategoryId, 0);
    }
  }
  render() {
    return (
      <div>
        <select
          className="form-control"
          onChange={e => this.onFirstCategoryChange(e)}
        >
          <option value="">Level#1</option>
          {this.state.firstCategoryList.map((category, index) => (
            <option value={category.id} key={index}>
              {category.name}
            </option>
          ))}
        </select>
        {console.log(this.state.secondCategoryList.length)}
        {this.state.secondCategoryList.length ? (
          <select
            className="form-control"
            onChange={e => this.onSecondCategoryChange(e)}
          >
            <option value="">Level#2</option>
            {this.state.secondCategoryList.map((category, index) => (
              <option value={category.id} key={index}>
                {category.name}
              </option>
            ))}
          </select>
        ) : null}
      </div>
    );
  }
}

export default CategorySelector;
