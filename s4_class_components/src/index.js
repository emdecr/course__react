import React from "react";
import ReactDOM from "react-dom";

// sub-classing React.Component
// borrowing functionality
class App extends React.Component {
  // React.Component has contructor function of its own
  // When we create a contructor function here, we're over-riding the default function
  constructor(props) {
    // super is a ference to the parent React.Component component
    super(props);

    // This is the only time we do direct assignment to state
    // setState is used afterwards
    this.state = { lat: null, errorMessage: "" };

    this.counter = 0;

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // Whenever state changes, the component re-renders
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidMount() {
    console.log("Mounted");
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
          <p>Latitude: {this.state.lat}</p>
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
