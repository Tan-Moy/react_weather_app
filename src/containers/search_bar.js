import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// hook to action creator
import {fetchWeather} from '../actions/index'

class SearchBar extends Component{
    constructor (props){
        super(props);

        this.state = {term:""};

        //we don't need to bind the function im case of inline arrow functions
        //remember: this is required if passing callbacks that have a ref to "this"
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e){
        console.log(e.target.value);
        this.setState({term: e.target.value});
    }

    onFormSubmit(e){
        e.preventDefault();
        //getting weather data/call the action creator
        this.props.fetchWeather(this.state.term);
        this.setState({term:""});
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input
                className="form-control"
                placeholder = "Get a five day forecast"
                value ={ this.state.term}
                onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

//getting access to action creator
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch)
}

//connecting container/promoted component searchbar through mapDispatch
export default connect(null,mapDispatchToProps)(SearchBar);
//null = this container has no need of the application state maintained by redux