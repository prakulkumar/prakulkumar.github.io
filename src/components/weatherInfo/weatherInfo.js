import React, { Component } from 'react';
import './weatherInfo.css';
import moment from 'moment';
import 'open-weather-icons/dist/css/open-weather-icons.css';

class WeatherInfo extends Component {
    render() {
        return (
            <div className="row rowStyle">
                <div className="col center iconStyle">
                    <div className={`owi owi-${this.props.weatherData.weather[0].icon}`} />
                </div>
                <div className="col center padding_5">{moment(this.props.weatherData.dt_txt).format('DD-MMM-YYYY')}</div>
                <div className="col center padding_5">{moment(this.props.weatherData.dt_txt).format('h a')}</div>
                <div className="col center padding_5">{parseInt(this.props.weatherData.main.temp - 273.15)} &deg;C</div>
                <div className="col center padding_5">{this.props.weatherData.main.humidity} %</div>
            </div>
        );
    }
}

export default WeatherInfo;