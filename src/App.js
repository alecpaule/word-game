import React, { useState } from "react";
import "./App.scss";

function App() {
  const [selectedLetters, setSelectedLetters] = useState([]);

  const word = "billy";
  let letterList = [];
  let j = 0;
  [...word].forEach((letter) =>
    letterList.push(
      <li
        className={
          "letter " +
          (selectedLetters.includes(letter.toUpperCase()) ? "isSelected" : "")
        }
        key={j++}
      >
        {letter.toUpperCase()}
      </li>
    )
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
      <ul className="word">{letterList}</ul>
      <ul className="buttons">{buttonList}</ul>
    </div>
  );
}

export default App;
