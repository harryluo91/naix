import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid } from 'material-ui';

class DataCenterPageWrapper extends Component {
  render() {
    return (
      <div className="data-center-page-wrapper">
        {
          this.props.children
        }
      </div>
    );
  }
}

export default DataCenterPageWrapper;
