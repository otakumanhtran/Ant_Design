import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Pagination } from "antd";

const list = ["10", "15", "20"];

class App extends React.Component {
  state = {
    pageSize: 10,
    current: 1
  };

  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
    this.setState({ pageSize });
    console.log("not den day !");
  };

  render() {
    return (
      <div>
        <Pagination
          showSizeChanger
          pageSizeOptions={list}
          pageSize={this.state.pageSize}
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={this.state.current}
          total={120}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
