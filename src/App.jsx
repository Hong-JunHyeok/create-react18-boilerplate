import React from "react";

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
      <h1 onClick={this.handleIncreaseVersion}>
        React {this.state.version} BoilerPlate
      </h1>
    );
  }
}

export default App;
