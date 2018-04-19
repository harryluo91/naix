import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid } from 'material-ui';
import DataCenterPageWrapper from '../../components/dataCenterPageWrapper/dataCenterPageWrapper';

class AdvancendContainer extends Component {
  render() {
    return (
      <DataCenterPageWrapper>
        <div className="advanced">
          Advanced
        </div>
      </DataCenterPageWrapper>
    );
  }
}

export default AdvancendContainer;
