var React = require('react');

var WeatherMessage = ({city, temp}) => {

    if (city.length > 0) {
        return (
            <div>
                <h1> It`s {temp} in {city} </h1>
            </div>
        );
    }
    else
    {
        return (
            <div></div>
        );
    }
};

module.exports = WeatherMessage;