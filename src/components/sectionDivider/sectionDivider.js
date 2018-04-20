import React from 'react';
import { Divider, withStyles } from 'material-ui'

const SectionDivider = ({ color, type, classes }) => {
  const style = {
    border: 0,
    height: '2px',
    background: '#3f51b5',
    backgroundImage: 'linear-gradient(to right, #ccc, #3f51b5, #ccc)'
  }
  return (
    <Divider
      style={style}
    />
  )
}

export default SectionDivider;
