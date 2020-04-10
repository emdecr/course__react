import "./Loader.css";
// Behind the scenes webpack will put the css into index.html
import React from "react";

const Loader = props => {
  return (
    <div className="loader-container">
      <div className="ui segment">
        <div className="ui active dimmer">
          <div className="ui text loader">{props.message}</div>
        </div>
        <p></p>
      </div>
    </div>
  );
};

Loader.defaultProps = {
  message: "Loading..."
};

export default Loader;
