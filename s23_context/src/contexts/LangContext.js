import React from "react";

const Context = React.createContext("EN");

export class LangStore extends React.Component {
  state = { lang: "EN" };

  onLangChange = lang => {
    this.setState({ lang: lang });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLangChange: this.onLangChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
