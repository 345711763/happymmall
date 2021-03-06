import React from "react";

//Table-list Component
class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstLoading: true
    };
  }
  componentWillReceiveProps() {
    this.setState({
      isFirstLoading: false
    });
  }
  render() {
    //Table Heads
    let tableHeader = this.props.tableHeads.map((tableHead, index) => {
      if (typeof tableHead == "object") {
        return (
          <th width={tableHead.width} key={index}>
            {tableHead.name}
          </th>
        );
      } else if (typeof tableHead == "string") {
        return <th key={index}>{tableHead}</th>;
      }
    });
    let listBody = this.props.children;
    let listInfo = (
      <tr>
        <td colSpan={this.props.tableHeads.length} className="text-center">
          {this.state.isFirstLoading ? "Loading..." : "No Result Found"}
        </td>
      </tr>
    );
    let tableBody = listBody.length > 0 ? listBody : listInfo;
    return (
      <div className="row">
        <div className="col-md-12">
          <table className="table table-striped table-border">
            <thead>
              <tr>{tableHeader}</tr>
            </thead>
            <tbody>{tableBody}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default TableList;
