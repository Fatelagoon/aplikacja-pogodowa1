import React from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form"; 
import Weather from "./components/Weather"

const  API_KEY = "49b723e99e2b3029a9a6c975c5f7faaf"

class App extends React.Component { // poniższe wyświetla zawartość Titles.js, oraz Form.js
  getWeather = async(e) => {
    e.preventDefault();
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=&{API_KEY}&units=metric');

    const data = await api_call.json(); // api_call konwertowane na format .json
    console.log(data);
}
  render() {
    return (
      <div>
        <Titles /> 
        <Form getWeather={this.getWeather}/>
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
