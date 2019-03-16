const request = require('request-promise');

const API_KEY = '428e9631b578f4e13b91240323361413';

require('dotenv').config();

class Forecast {
  static retrieveByCity (city, callback) {
    request({
      //https://api.openweathermap.org/data/2.5/forecast?q=London&APPID=428e9631b578f4e13b91240323361413&units=imperial
      uri: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=imperial`,
      json: true
    }).then((res) => {
      callback(res);
    }).catch((err) => {
      console.log(err);
      callback({ error: 'Could not reach OpenWeatherMap API.' });
    });
  }
}

module.exports = Forecast;
