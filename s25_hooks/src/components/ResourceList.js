import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);
  const fetchResource = async resource => {
    const res = await axios.get(
      `https:jsonplaceholder.typicode.com/${resource}`
    );
    setResources(res.data);
  };

  // If second argument [] changes, the arrow function is called
  //   Like what was happening with if statement in didComponentUpdate when this was a class comp
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);
  // NTS: if you pass in an empty array, the function only gets called once
  //   Like making the call in componentDidMount
  // NTS: if you don't pass in an array, the function keeps getting called

  return <div>Resource count:{resources.length}</div>;
};

export default ResourceList;
