import React, { useState } from "react";
import ResourceList from './ResourceList';

const App = () => {
    const [resource,setResource] = useState('posts') //Array destructuring
  return (
    <div className="ui container">
      <div>
        <button onClick={() => setResource('posts' )}>
          Posts
        </button>
        <button onClick={() => setResource('todos')}>
          Todo
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
