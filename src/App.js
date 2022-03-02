import React, { useState } from "react";
import "./App.scss";

function App() {
  const [letter, setLetter] = useState("");
  const [selectedLetters, setSelectedLetters] = useState([]);

  const word = "hello";
  let charList = [];
  let j = 0;
  [...word].forEach((char) =>
    charList.push(<li key={j++}>{char.toUpperCase()}</li>)
  );

  let buttonList = [];
  for (let i = 65; i < 91; i++) {
    buttonList.push(
      <button
        className={
          "letterButton " +
          (selectedLetters.includes(String.fromCharCode(i).toUpperCase())
            ? "isSelected"
            : "")
        }
        key={i}
        onClick={() =>
          setSelectedLetters([
            ...selectedLetters,
            String.fromCharCode(i).toUpperCase(),
          ])
        }
      >
        {String.fromCharCode(i)}
      </button>
    );
  }

  return (
    <div className="App">
      <ul className="word">{charList}</ul>
      <ul className="buttons">{buttonList}</ul>
    </div>
  );
}

export default App;
