import React from "react";
import LangContext from "../contexts/LangContext";
import ColourContext from "../contexts/ColourContext";

class Button extends React.Component {
  // static key adds property to class
  // Button.contextType = LangContext;
  static contextType = LangContext;

  // If logic gets too dense in the Consumer child, use a helper function
  renderSubmit(value) {
    return value === "EN" ? "Submit" : "Voorleggen";
  }

  renderButton(colour) {
    return (
      <button className={`ui button ${colour}`}>
        <LangContext.Consumer>
          {/* Whenever you use a Consumer, pass in a single child equal to a function */}
          {/* That child will be called with whatever data is in that context pipe */}
          {value => (value === "EN" ? "Submit" : "Voorleggen")}
          {/* {value => this.renderSubmit(value)} */}
        </LangContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <div>
        <ColourContext.Consumer>
          {colour => this.renderButton(colour)}
        </ColourContext.Consumer>
      </div>
    );
  }
}

export default Button;
