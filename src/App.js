import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import moment from 'moment'
import 'moment/locale/zh-cn';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';


import Routes from './routes';
import './App.css';


class App extends Component {
  render() {
    return (
      <MuiPickersUtilsProvider utils={MomentUtils} moment={moment} locale="zh-cn">
        <Router>
          <Routes />
        </Router>
      </MuiPickersUtilsProvider>
    );
  }
}

export default App;
