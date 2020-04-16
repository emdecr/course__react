import React from "react";
import LangContext from "../contexts/LangContext";

class Button extends React.Component {
  // static key adds property to class
  // Button.contextType = LangContext;
  static contextType = LangContext;

  // If logic gets too dense in the Consumer child, use a helper function
  renderSubmit(value) {
    return value === "EN" ? "Submit" : "Voorleggen";
  }

  render() {
    return (
      <div>
        <button className="ui button primary">
          <LangContext.Consumer>
            {/* Whenever you use a Consumer, pass in a single child equal to a function */}
            {/* That child will be called with whatever data is in that context pipe */}
            {value => (value === "EN" ? "Submit" : "Voorleggen")}
            {/* {value => this.rendersubmit(value)} */}
          </LangContext.Consumer>
        </button>
      </div>
    );
  }
}

export default Button;
