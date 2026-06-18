import logo from './logo.svg';
import './App.css';
// named import
import { Filter_name } from './Filter_name.js'
import { Filter_starting } from './Filter_starting.js';
import { FilterUserOlder } from './FilterUserOlder.js';
import { LengthSup } from './LengthSup.js';
import { TestOne } from './TestOne.js';
import { Form } from './Form.js';



function App() {
  return (
    <div className="App">
      <Filter_name />
      <Filter_starting />
      <FilterUserOlder />
      <LengthSup />
      <TestOne />
      <Form />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
