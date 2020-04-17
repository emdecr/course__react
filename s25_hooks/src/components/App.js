import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  // [pieceOfState, setState] = useState(initialValue)
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>To-Dos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
