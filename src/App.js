import logo from "./logo.svg";
import "./App.scss";

function App() {
  let buttonList = [];
  for (let i = 65; i < 91; i++) {
    buttonList.push(
      <button key={i} onClick={() => console.log(String.fromCharCode(i))}>
        {String.fromCharCode(i)}
      </button>
    );
  }

  return (
    <div className="App">
      <ul className="buttons">{buttonList}</ul>
    </div>
  );
}

export default App;
