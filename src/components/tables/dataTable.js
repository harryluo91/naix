import React, { Component } from 'react';
import { Divider, withStyles } from 'material-ui'
import DatePicker from 'material-ui-pickers/DatePicker';
import autoBind from 'react-autobind';
import {
  SortingState,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel
} from '@devexpress/dx-react-grid-material-ui';

import TableRow from './tableRow';
import { fakeTableData } from '../../utils/const';

const styles = theme => ({
  tableStriped: {
    '& tbody tr:nth-of-type(odd)': {
      backgroundColor: theme.palette.primary[50],
    },
  },
});

const TableComponentBase = ({ classes, ...restProps }) => (
  <Table.Table
    {...restProps}
    className={classes.tableStriped}
  />
);

const TableComponent = withStyles(styles, { name: 'TableComponent' })(TableComponentBase);

class DataTable extends Component {
  constructor() {
    super();
    autoBind(this);

    this.state = {
      columns: [
        { name: 'date', title: 'Date' },
        { name: 'temperature', title: 'Temperature' },
        { name: 'quality', title: 'Quality' },
        { name: 'oxygen level', title: 'Oxygen Level' },
      ],
      rows: fakeTableData,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      date: nextProps.date
    };
  }

  handleRowClick(row) {
    console.log(row)
  }

  render() {
    const { rows, columns } = this.state;
    return (
      <div className="data-table">
        <Grid rows={rows} columns={columns}>
          <SortingState
            defaultSorting={[{ columnName: 'temperature', direction: 'asc' }]}
          />
          <PagingState
            defaultCurrentPage={0}
            pageSize={10}
          />
          <IntegratedSorting />
          <IntegratedPaging />
          <Table tableComponent={TableComponent} rowComponent={TableRow} />
          <TableHeaderRow showSortingControls />
          <PagingPanel />
        </Grid>
      </div>
    )
  }
}

export default DataTable;
