var React = require('react');

var WeatherForm = React.createClass({
    getWeather: function (e) {
        e.preventDefault();


        var city = this.refs.city.value;
        if (city.length > 0) {
            this.refs.city.value = '';
            this.props.getWeather(city);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.getWeather}>
                    <h3> Get Weather </h3><br/>
                    <input type="text" placeholder="Enter City Name" ref="city"/><br/>
                    <button> Get Weather </button><br/>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;