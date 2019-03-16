import React, { Component } from 'react';

import {
  Container,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  Row,
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  Button,
  FormGroup,
  Input,
  Col
} from 'reactstrap';

import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom'
import Forecast from './Forecast'
import Weather from './Weather'
/*
const Header = () => (
    <main>
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route path='/' />
              <Route path='/forecast' component={Forecast}/>
            </Switch>
          </BrowserRouter>
        </div>
    </main>
)
*/
/*class Header extends Component {
  render() {
    return (
      <Navbar dark color="dark">
        <Nav className="mr-auto">
          <NavItem href="/">WeatherWise</NavItem>
          <NavItem href="/forecast">Forecast</NavItem>
        </Nav>
      </Navbar>
    );
  }
}*/

export default Header;
