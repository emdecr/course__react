import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// sub-classing React.Component
// borrowing functionality
class App extends React.Component {
  counter = 0;

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("Mounted");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  render() {
    this.counter++;

    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <p>Render Count: {this.counter}</p>
          <p>Error:{this.state.errorMessage} </p>
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <p>Render Count: {this.counter}</p>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }

    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
