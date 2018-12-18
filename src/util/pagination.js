import RcPagination from "rc-pagination";
import "rc-pagination/dist/rc-pagination.min.css";
import React from "react";

//Pagination Component
class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let config = {
      items_per_page: "items/page",
      jump_to: "jump to",
      jump_to_confirm: "confirm",
      page: "page",

      // Pagination.jsx
      prev_page: "Previous Page",
      next_page: "Next Page",
      prev_5: "backward 5 pages",
      next_5: "forward 5 pages",
      prev_3: "backward 3 pages",
      next_3: "forward 3 pages"
    };
    return (
      <div className="row">
        <div className="col-md-12">
          <RcPagination
            {...this.props}
            hideOnSinglePage
            showQuickJumper
            locale={config}
          />
        </div>
      </div>
    );
  }
}
export default Pagination;
