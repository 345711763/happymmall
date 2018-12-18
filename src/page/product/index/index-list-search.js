import React from "react";
class ListSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: "productId", //productId or productName
      searchKeyword: ""
    };
  }
  onSearchTypeChange(e) {
    this.setState({
      searchType: e.target.value
    });
  }
  onKeywordChange(e) {
    let keyword = e.target.value.trim();
    this.setState({
      searchKeyword: keyword
    });
  }
  onSearch() {
    this.props.onSearch(this.state.searchType, this.state.searchKeyword);
  }
  render() {
    return (
      <div className="row search-wrap">
        <div className="col-md-12" />
        <div className="form-inline">
          <select
            onChange={e => this.onSearchTypeChange(e)}
            className="form-control"
          >
            <option value="productId">Search On ProductID</option>
            <option value="productName">Search On Name</option>
          </select>

          <div className="input-group mb-2 mr-sm-2">
            <input
              onChange={e => this.onKeywordChange(e)}
              type="text"
              className="form-control"
              placeholder="keywords"
            />
          </div>

          <button
            onClick={() => this.onSearch()}
            className="btn btn-primary mb-2"
          >
            Seacrh
          </button>
        </div>
      </div>
    );
  }
}

export default ListSearch;
