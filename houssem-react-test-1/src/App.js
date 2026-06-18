import logo from './logo.svg';
import './App.css';
import Select from './Select.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_parent"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Select/>
    </div>
  );
}

export default App;
