import React from "react";
import PageTitle from "../../../component/page-title";
import Product from "../../../service/product-service";
import Mutil from "../../../util/mm";
import CategorySelector from "./category-selector";
import FileUploader from "../../../util/file-uploader";
import "./save.css";
const _product = new Product();
const _mm = new Mutil();
class ProductSave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: 0,
      parentCategoryId: 0,
      subImages: []
    };
  }
  onUploadSuccess(res) {
    let subImages = this.state.subImages;
    subImages.push(res);
    this.setState({
      subImages: subImages
    });
  }
  onUploadError(err) {
    _mm.errorTips(err.message || "upload failed");
  }
  onCategoryChange(categoryId, parentCategoryId) {
    console.log(categoryId);
    console.log(parentCategoryId);
  }
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="Add Product" />
        <div>
          <div className="form-group">
            <label>Product Name</label>
            <input className="form-control" placeholder="Product Name..." />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input className="form-control" placeholder="Description..." />
          </div>
          <div className="form-group">
            <label>Category</label>
            <CategorySelector
              onCategoryChange={(categoryId, parentCategoryId) => {
                this.onCategoryChange(categoryId, parentCategoryId);
              }}
            />
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input type="number" className="form-control" placeholder="¥" />
          </div>
          <div className="form-group">
            <label>In stock</label>
            <input
              type="number"
              className="form-control"
              placeholder="Number of the product in stock"
            />
          </div>
          <div className="form-group">
            <label>Photo</label>
            <div>
              {this.state.subImages.length ? (
                this.state.subImages.map((image, index) => (
                  <div key={index} className="img-con">
                    <img src={image.url} />
                  </div>
                ))
              ) : (
                <div>Please Upload Images</div>
              )}
            </div>
            <FileUploader
              onSuccess={res => {
                this.onUploadSuccess(res);
              }}
              onError={err => {
                this.onUploadError(err);
              }}
            />
          </div>
          <div className="form-group">
            <label>Details</label>
            <div>xxxxx</div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default ProductSave;
