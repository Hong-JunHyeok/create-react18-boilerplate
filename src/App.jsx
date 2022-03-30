import React from "react";
import Batch from "./Batch";
class App extends React.Component {
  state = {
    version: 18,
  };

  handleIncreaseVersion = () => {
    this.setState({
      ...this.state,
      version: this.state.version + 1,
    });
  };

  render() {
    return (
      <>
        <h1 onClick={this.handleIncreaseVersion}>
          React {this.state.version} BoilerPlate
        </h1>
        <Batch />
      </>
    );
  }
}

export default App;
