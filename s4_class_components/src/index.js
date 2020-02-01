import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    error => console.log(error)
  );
  return <div>Hey there!</div>;
};

// class App extends React.Component {
//   render() {
//     return <div>Hey there!</div>;
//   }
// }

ReactDOM.render(<App />, document.querySelector("#root"));
