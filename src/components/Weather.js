import React from "react";

const Weather = props => (
    <div className="Weather__info"> 
        {
        props.city && props.country && <p className="wether__key"> Location:
            <span className="weather__value">{props.city}, {props.country}</span>
        </p>
        } 
        {
        props.temperature && <p className="wether__key">Temperature: 
            <span className="weather__value">{props.temperature}</span>
            </p>
            }
        {
        props.humidity && <p className="wether__key">Humidity: 
            <span className="weather__value">{props.humidity}</span>
        </p>
        }
        {
        props.description && <p className="wether__key">Conditions: 
            <span className="weather__value">{props.description}</span>
            </p>
            }
        {
        props.error && <p className="wether__error">
            <span>{ props.error}</span>
            </p>
            } 
    </div> 
);
        

export default Weather;
