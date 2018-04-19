import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid } from 'material-ui';
import DataCenterPageWrapper from '../../components/dataCenterPageWrapper/dataCenterPageWrapper';

class DataSummaryContainer extends Component {
  render() {
    return (
      <DataCenterPageWrapper>
        <div className="data-summary">
          Data Summary
        </div>
      </DataCenterPageWrapper>
    );
  }
}

export default DataSummaryContainer;
