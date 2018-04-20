import React, { Component } from 'react';

import {
  Table,
} from '@devexpress/dx-react-grid-material-ui';

class TableRow extends Component {
  render() {
    const { row, ...restProps } = this.props;
    return (
      <Table.Row
        {...restProps}
        // eslint-disable-next-line no-alert
        onClick={this.props.handleRowClick}
        style={{
          cursor: 'pointer'
        }}
      />
    )
  }
}

export default TableRow;
