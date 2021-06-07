import "./App.css";
import React, { useState } from "react";

import Form from "./components/Form.jsx";

const App = () => {
  const handleForm = (banana) => {
    console.log(banana);
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <Form handleForm={handleForm} />
      {/* <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul> */}
    </div>
  );
};

export default App;
