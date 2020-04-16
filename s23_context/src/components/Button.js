import React from "react";
import LangContext from "../contexts/LangContext";

class Button extends React.Component {
  // static key adds property to class
  // Button.contextType = LangContext;
  static contextType = LangContext;

  render() {
    const text = this.context === "EN" ? "Submit" : "Voorleggen";
    return (
      <div>
        <button className="ui button primary">{text}</button>
      </div>
    );
  }
}

export default Button;
