import { useState, useEffect } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);
  // Passing in an empty array [] as second argument run the function once for the entire lifecycle of component

  //   return { lat: lat, error: errorMessage };
  return [lat, errorMessage]; //community convention
};
