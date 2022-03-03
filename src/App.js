import React, { useState } from "react";
import "./App.scss";
import randomWords from "random-words";

const word = randomWords({
  exactly: 1,
  maxLength: 7,
  formatter: (word) => word.toUpperCase()
});
console.log(word[0]);

const App = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [guesses, setGuesses] = useState(0);

  const correctWord = word[0];

  console.log(correctWord);
  // const letterList = [];
  // let j = 0;
  // [...word[0]].forEach((letter) =>
  //   letterList.push(
  //     <li
  //       className={
  //         "letter " +
  //         (selectedLetters.includes(letter.toUpperCase()) ? "isSelected" : "")
  //       }
  //       key={j++}
  //     >
  //       {letter.toUpperCase()}
  //     </li>
  //   )
  // );

  const renderLetterList = () =>
    correctWord.split("").map((letter, index) => (
      <li
        className={
          "letter " +
          (selectedLetters.includes(letter.toUpperCase()) ? "isSelected" : "")
        }
        key={letter + index}
      >
        {selectedLetters.includes(letter.toUpperCase()) && letter.toUpperCase()}
      </li>
    ));

  let buttonList = [];
  for (let i = 65; i < 91; i++) {
    const letter = String.fromCharCode(i).toUpperCase();
    buttonList.push(
      <button
        className={
          "letterButton " +
          (selectedLetters.includes(letter) ? "isSelected" : "")
        }
        key={i}
        onClick={() => {
          setSelectedLetters([...selectedLetters, letter]);
          setGuesses(guesses + 1);
        }}
      >
        {letter}
      </button>
    );
  }

  return (
    <div className="App">
      <ul className="word">{renderLetterList()}</ul>
      <ul className="buttons">{buttonList}</ul>
      <p className="guesses">guesses: {guesses}</p>
    </div>
  );
};

export default App;
