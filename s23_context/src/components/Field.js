import React from "react";
import LangContext from "../contexts/LangContext";

class Field extends React.Component {
  static contextType = LangContext;

  render() {
    const text = this.context.lang === "EN" ? "Name" : "Naam";
    return (
      <div>
        <label for="name">{text}:</label>
        <input type="text" id="name" />
      </div>
    );
  }
}

export default Field;
