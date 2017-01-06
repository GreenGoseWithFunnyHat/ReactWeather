var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        };
    },
    showWeather: function (city) {
        var that = this;

        this.setState({isLoading: true});

            OpenWeatherMap.getTemp(city).then(function (temp) {
                that.setState({
                    city: city,
                    temp: temp,
                    isLoading: false
                });
            }, function (errorMessage) {
                that.setState({isLoading: false});
                alert(errorMessage);
            })
        },
    render: function () {
        var {isLoading, city, temp} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center"> Fetching weather... </h3>;
            } else if (temp && city) {
                return <WeatherMessage city={city} temp={temp}/>;
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm getWeather={this.showWeather}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;