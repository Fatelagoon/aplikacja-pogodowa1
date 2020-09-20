import React from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form"; 
import Weather from "./components/Weather.js";

const API_KEY = "49b723e99e2b3029a9a6c975c5f7faaf";

class App extends React.Component { // poniższe wyświetla zawartość Titles.js, oraz Form.js

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json(); // api_call konwertowane na format .json

    if (city && country) {
    console.log(data);

    this.setState({ //ściezki do danych odczytane z konsoli przeglądarki
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
} else {
  this.setState({
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: "Please enter the value."
  });
}
  
}
  render() {
    return (
      <div>
        <Titles /> 
        <Form getWeather={this.getWeather}/>
        <Weather
         temperature={this.state.temperature}
         city={this.state.city}
         country={this.state.country}
         humidity={this.state.humidity}
         description={this.state.description}
         error={this.state.description}
         />
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
