import React, { useState } from "react";

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
      {resource}
    </div>
  );
};

export default App;
