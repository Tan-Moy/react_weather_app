//action creator

import axios from 'axios';

const API_KEY = "5580c03c15e094e308c68b4659e007e5";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?us&appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER"; //to prevent tampering

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);//gets data from api
    //console.log('Request:',request)
    return{
        type: FETCH_WEATHER,
        payload: request
    }
}
