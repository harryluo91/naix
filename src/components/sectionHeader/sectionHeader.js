import React, { Component } from 'react';
import { Grid } from 'material-ui';

const SectionHeader = ({ headerText }) => {
  return (
    <div className="section-header">
      <h1>{ headerText }</h1>
    </div>
  )
}

export default SectionHeader;
