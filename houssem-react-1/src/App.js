import logo from './logo.svg';
import './App.css';
//fichier js import 
import Name from './Name';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save.
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
     <Name/>
    </div>
  );
}

export default App;
