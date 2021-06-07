import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <h1>To-Do App</h1>
      <input type="text" name="" />
      <button>Submit</button>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </div>
  );
};

export default App;
