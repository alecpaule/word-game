import React, { useState } from "react";
import "./App.scss";
import randomWords from "random-words";

const word = randomWords({
  exactly: 1,
  maxLength: 7,
  formatter: (word) => word.toLowerCase(),
});
console.log(word[0]);

const App = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);

  let letterList = [];
  let j = 0;
  [...word[0]].forEach((letter) =>
    letterList.push(
      <li
        className={
          "letter " +
          (selectedLetters.includes(letter.toLowerCase()) ? "isSelected" : "")
        }
        key={j++}
      >
        {letter.toLowerCase()}
      </li>
    )
  );

  let buttonList = [];
  for (let i = 97; i < 123; i++) {
    buttonList.push(
      <button
        className={
          "letterButton " +
          (selectedLetters.includes(String.fromCharCode(i).toLowerCase())
            ? "isSelected"
            : "")
        }
        key={i}
        onClick={() =>
          setSelectedLetters([
            ...selectedLetters,
            String.fromCharCode(i).toLowerCase(),
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
};

export default App;
