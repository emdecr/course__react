import React from "react";
import UserCreate from "./UserCreate";
import { LangStore } from "../contexts/LangContext";
import ColourContext from "../contexts/ColourContext";
import LangSelector from "./LangSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LangStore>
          <LangSelector />
          <ColourContext.Provider value="red">
            <UserCreate />
          </ColourContext.Provider>
        </LangStore>
      </div>
    );
  }
}

export default App;
