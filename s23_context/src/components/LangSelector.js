import React from "react";
import LangContext from "../contexts/LangContext";

class LangSelector extends React.Component {
  static contextType = LangContext;
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag ca"
          onClick={() => this.context.onLangChange("EN")}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLangChange("NL")}
        />
      </div>
    );
  }
}

export default LangSelector;
