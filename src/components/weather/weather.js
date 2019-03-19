import React, { Component } from 'react';
import './weather.css';
import Navbar from '../navbar/navbar';
import Form from '../form/form';
import Table from '../table/table';

class Weather extends Component {
    state = {
        weatherData: {}
    }

    componentDidMount() {
        this.getWeatherData('bangalore', 'in');
    }

    getWeatherData = (city, country) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=071408909141fa19ff7d18b73f46bc5b`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const weatherData = data;
                this.setState({ weatherData });

                this.setInputData();
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderTable() {
        if (this.state.weatherData.city) {
            return <Table data={this.state.weatherData}></Table>
        }

        else {
            return (
                <div className="errorDiv">
                    <h2>DATA NOT FOUND</h2>
                </div>
            )
        }
    }

    setInputData() {
        document.getElementById('countryInput').value = this.state.weatherData.city.country;
        document.getElementById('cityInput').value = this.state.weatherData.city.name;
    }

    getWeatherByCity = () => {
        const country = document.getElementById('countryInput').value.toLowerCase();
        const city = document.getElementById('cityInput').value.toLowerCase();
        this.getWeatherData(city, country);
        this.scrollTop();
    }

    scrollTop() {
        if (document.getElementById('rowContainer')) {
            document.getElementById('rowContainer').scrollTop = 0;
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="mainContainer">
                    <Navbar></Navbar>
                    <div className="secoundaryContainer">
                        <div className="card">
                            <Form getWeather={this.getWeatherByCity}></Form>
                            {this.renderTable()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Weather;