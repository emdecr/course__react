import React from "react";
import UserCreate from "./UserCreate";
import LangContext from "../contexts/LangContext";
import ColourContext from "../contexts/ColourContext";

class App extends React.Component {
  state = { lang: "EN" };

  onLanguageChange = lang => {
    this.setState({ lang: lang });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag ca" onClick={() => this.onLanguageChange("EN")} />
          <i className="flag nl" onClick={() => this.onLanguageChange("NL")} />
          <LangContext.Provider value={this.state.lang}>
            <ColourContext.Provider value="red">
              <UserCreate />
            </ColourContext.Provider>
          </LangContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
