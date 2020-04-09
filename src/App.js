import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Allproduct from './productClass/allproduct';
import Navigator from './productClass/naviagator';
import About from './productClass/about';

export default class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="container">
        <BrowserRouter>
        <div>
          <Navigator />
          <Switch>
            <Route path="/" component={About} exact/>
            <Route path="/products" component={Allproduct} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
      </Fragment>
    )
  }
}
