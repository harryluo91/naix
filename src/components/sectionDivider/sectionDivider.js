import React from 'react';
import { Divider, withStyles } from 'material-ui'
import PropTypes from 'prop-types';

const SectionDivider = ({ color, type, classes, width }) => {
  const style = {
    border: 0,
    height: '2px',
    background: '#3f51b5',
    backgroundImage: 'linear-gradient(to right, #ccc, #3f51b5, #ccc)'
  }
  style.width = `${width}%`;
  return (
    <Divider
      style={style}
    />
  )
}

SectionDivider.prototypes = {
  width: PropTypes.number.isRequired
}

export default SectionDivider;
