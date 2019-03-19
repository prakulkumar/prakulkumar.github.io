import React, { Component } from 'react';
import './table.css';
import WeatherInfo from '../weatherInfo/weatherInfo';

class Table extends Component {
    render() {
        return (
            <div className="sectionBottom" id="sectionBottom">
                <div className="row headerStyle">
                    <div className="col center">Weather</div>
                    <div className="col center">Date</div>
                    <div className="col center">Time</div>
                    <div className="col center">Temperature</div>
                    <div className="col center">Humidity</div>
                </div>
                <div className="rowContainer" id="rowContainer">
                    {this.props.data.list.map((data, index) =>
                        <WeatherInfo weatherData={data} key={index}></WeatherInfo>
                    )}
                </div>
            </div>
        );
    }
}

export default Table;