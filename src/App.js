import logo from "./logo.svg";
import "./App.css";
import Sudoku from "./components/Sudoku";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Sudoku />
    </div>
  );
}

export default App;
