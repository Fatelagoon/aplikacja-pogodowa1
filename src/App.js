import React from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form"; 
import Weather from "./components/Weather"

const API_KEY = "ad81f6523681e81bafcce379330a02d9"

class App extends React.Component { // poniższe wyświetla zawartość Titles.js, oraz Form.js
  getWeather = async() => {
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}');

    const data = await api_call.json(); // api_call konwertowane na format .json
    console.log(data);
}
  render() {
    return (
      <div>
        <Titles /> 
        <Form />
        <Weather />
      </div>
    )
  }
}

/* import logo from './logo.svg';
import './App.css';

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
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
