import React, { useState } from "react";

const Form = ({ handleForm }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm(userInput);
    setUserInput("");
  };

  const isDisabled = userInput.length === 0;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  );
};

export default Form;
