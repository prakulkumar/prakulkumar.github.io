import React, { Component } from 'react';
import './form.css';

class Form extends Component {
    render() {
        return (
            <div className="sectionTop">
                <div className="countryInput">
                    <label>Country :</label>
                    <input className="form-control" id="countryInput" />
                </div>
                <div className="cityInput">
                    <label>City :</label>
                    <input className="form-control" id="cityInput" />
                </div>
                <div>
                    <button className="btn btn-primary clickButton" onClick={this.props.getWeather}>Search</button>
                </div>
            </div>
        );
    }
}

export default Form;