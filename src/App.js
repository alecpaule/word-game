import React, { useState } from "react";
import "./App.scss";
import randomWords from "random-words";

const word = randomWords({
  exactly: 1,
  maxLength: 7,
  formatter: (word) => word.toUpperCase(),
});
console.log(word[0]);

const App = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [isWordFound, setIsWordFound] = useState(false);

  const correctWord = word[0];

  const onClickLetter = (letter) => {
    setIsWordFound(checkIsWordFound);

    if (!isWordFound) {
      setSelectedLetters([...selectedLetters, letter]);
      setTotalGuesses(totalGuesses + 1);
      word[0].indexOf(letter) === -1 &&
        setIncorrectGuesses(incorrectGuesses + 1);
    }

    setIsWordFound(checkIsWordFound);
  };

  const checkIsWordFound = () => {
    for (let letter of correctWord) {
      if (!selectedLetters.includes(letter)) {
        return false;
      }
    }

    return true;
  };

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
        className={"letterButton"}
        key={i}
        onClick={() => onClickLetter(letter)}
      >
        {!selectedLetters.includes(letter.toUpperCase()) &&
          letter.toUpperCase()}
      </button>
    );
  }

  return (
    <div className="App">
      <ul className="word">{renderLetterList()}</ul>
      <ul className="buttons">{buttonList}</ul>
      <p className="guesses">total guesses: {totalGuesses}</p>
      <p className="guesses incorrect">incorrect guesses: {incorrectGuesses}</p>
    </div>
  );
};

export default App;
