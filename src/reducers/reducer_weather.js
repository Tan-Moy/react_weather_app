//reducer to handle fetchWeather action
import {FETCH_WEATHER} from "../actions/index"

export default function (state=[],action){
    //console.log("action:", action);
    //action contains resolved promise data from redux promise
    switch (action.type){
        case FETCH_WEATHER:
            return [action.payload.data,...state];
            //to make a list of city we can't do state.push coz states are immutable we can't modify it directly we can use state.concat that returns a new instance of state or we can use the spread operator which puts new city into arrays with new record at front of the array
    }

    return state
}