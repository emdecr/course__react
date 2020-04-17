import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  // [pieceOfState, setState] = useState(initialValue)
  const [resourceType, setResourceType] = useState("posts");
  return (
    <div>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("todos")}>To-Dos</button>
      </div>
      <ResourceList resourceType={resourceType} />
    </div>
  );
};

export default App;
