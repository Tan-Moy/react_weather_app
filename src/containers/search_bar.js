import React, {Component} from 'react';

export default class SearchBar extends Component{
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
    }

    render(){
        return(
            <from onSubmit={this.onFormSubmit} className='input-group'>
                <input
                className="form-control"
                placeholder = "Get a five day forecast"
                value ={ this.state.term}
                onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </from>
        );
    }
}