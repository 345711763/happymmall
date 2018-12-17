import React from "react";
import PageTitle from "../../component/page-title";
import { Link } from "react-router-dom";
class Error extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="Error Page" />
        <div className="row">
          <div className="col-md-12">
            <span>Can not find the route,</span>
            <Link to="/">click to return to homepage</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
