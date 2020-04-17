import React from "react";
import useResources from "./useResources";

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
