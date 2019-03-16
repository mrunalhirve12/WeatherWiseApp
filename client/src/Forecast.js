
import React from 'react';
import { Row, Col, Table } from 'reactstrap';

const Forecast = (props) => {
  const { data } = props;

  if (!data)
    return <div></div>;

  return (
    <Row className="weather">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <h2>{data.city.name}</h2>
        <img src={`http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`} alt="Weather Icon"/>
        <span>{data.list[0].weather[0].main}</span>&nbsp;
        <span>{Math.floor(data.list[0].main.temp)}&deg;F</span>
        <Table>
          <tbody>
            <tr>
              <td>Winds</td>
              <td>{Math.floor(data.list[0].wind.speed)} km/h</td>
            </tr>
            <tr>
              <td>Pressures</td>
              <td>{Math.floor(data.list[0].main.pressure)} hPa</td>
            </tr>
            <tr>
              <td>Humidities</td>
              <td>{Math.floor(data.list[0].main.humidity)}%</td>
            </tr>
            <tr>
              <td>Min Temps</td>
              <td>{Math.floor(data.list[0].main.temp_min)}&deg;F</td>
            </tr>
            <tr>
              <td>Max Temps</td>
              <td>{Math.floor(data.list[0].main.temp_max)}&deg;F</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default Forecast;
