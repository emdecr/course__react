import React from "react";
import ReactDOM from "react-dom";

const seasonConfig = {
  summer: { text: "Holy hell, it's hot!", iconName: "sun" },
  winter: { text: "Brr...it's cold in here!", iconName: "snowflake" }
};

// Extract as much login from functional components
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth);
  //   deconstruct it!
  const { text, iconName } = seasonConfig[season]; // { text, iconName }
  return (
    <div>
      <i className={`${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
