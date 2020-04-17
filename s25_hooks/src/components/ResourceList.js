import React, { useState, useEffect } from "react";
import axios from "axios";

const useResources = resourceType => {
  const [resources, setResources] = useState([]);

  // If second argument [] changes, the arrow function is called
  //   Like what was happening with if statement in didComponentUpdate when this was a class comp
  useEffect(() => {
    (async resourceType => {
      const res = await axios.get(
        `https:jsonplaceholder.typicode.com/${resourceType}`
      );
      setResources(res.data);
    })(resourceType);
  }, [resourceType]);
  // NTS: if you pass in an empty array, the function only gets called once
  //   Like making the call in componentDidMount
  // NTS: if you don't pass in an array, the function keeps getting called
  return resources;
};

const ResourceList = ({ resourceType }) => {
  const resources = useResources(resourceType);

  return (
    <ul>
      {resources.map(r => (
        <li key={r.id}>{r.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
