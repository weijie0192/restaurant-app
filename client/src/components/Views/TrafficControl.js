import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import {
  RowDetailState,
  PagingState,
  IntegratedPaging,
  SortingState,
  IntegratedSorting,
  SearchState,
  IntegratedFiltering
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableRowDetail,
  PagingPanel,
  ColumnChooser,
  TableColumnResizing,
  TableColumnVisibility,
  Toolbar,
  SearchPanel
} from '@devexpress/dx-react-grid-material-ui';

class TrafficControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
        { name: 'name1', title: 'Name1' },
        { name: 'sex1', title: 'Sex1' },
        { name: 'city1', title: 'City1' },
        { name: 'car1', title: 'Car1' }
      ],
      rows: [
        {
          name: 'hsdn adhw ouhdiuwa hdua hiduh aiudh waiuey',
          sex: 'wow',
          id: 1
        },
        { name: 'hey', sex: 'wow' },
        { name: 'hey', car: 'wow' },
        { name: 'hey', city: 'wow' },
        { name: 'hey', sex: 'wow' },
        { name: 'hey', car: 'wow' },
        { name: 'hey', sex: 'wow' },
        { name: 'hey', sex: 'wow' },
        { name: 'hey', car: 'wow' },
        { name: 'hey', city: 'wow' },
        { name: 'hey', sex: 'wow' },
        { name: 'hey', car: 'wow' },
        { name: 'hey', sex: 'wow' },
        { name: 'hey', sex: 'wow' },
        { name: 'hey', car: 'wow' },
        { name: 'hey', city: 'wow' },
        { name: 'hey', sex: 'wow' },
        { name: 'hey', car: 'wow' }
      ],
      pageSizes: [5, 10, 15, 0],
      tableColumnExtensions: [
        { columnName: 'name', width: 180, wordWrapEnabled: true },
        { columnName: 'sex', width: 180, wordWrapEnabled: true },
        { columnName: 'city', width: 400, wordWrapEnabled: true },
        { columnName: 'car', width: 240, wordWrapEnabled: true },
        { columnName: 'name1', width: 180, wordWrapEnabled: true },
        { columnName: 'sex1', width: 180, wordWrapEnabled: true },
        { columnName: 'city1', width: 400, wordWrapEnabled: true },
        { columnName: 'car1', width: 240, wordWrapEnabled: true }
      ]
    };
  }

  RowDetail = ({ row }) => (
    <div>
      <Typography variant="subtitle1">Summary:</Typography>
      <div style={{ paddingLeft: 10 }}>
        for {row.id} from {row.city}
      </div>
      <hr />
      <Button color="primary" variant="outlined">
        More Detail
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button color="secondary" variant="outlined">
        Void
      </Button>
      <br></br>
    </div>
  );

  render() {
    // const { classes } = this.props;
    const {
      rows,
      columns,
      pageSizes,
      defaultColumnWidths,
      tableColumnExtensions
    } = this.state;

    return (
      <div className="container">
        <Typography variant="h5" align="center" gutterBottom>
          All Timeouts
        </Typography>
        <CssBaseline />
        <Paper>
          <Grid rows={rows} columns={columns}>
            <SortingState
              columnExtensions={[{ columnName: 'sex', sortingEnabled: false }]}
            />
            <SearchState />
            <IntegratedFiltering />
            <IntegratedSorting />
            <RowDetailState />
            <PagingState defaultCurrentPage={0} defaultPageSize={10} />
            <IntegratedPaging />
            <Table
              columnExtensions={tableColumnExtensions}
              tableComponent={TableComponent}
            />
            <TableHeaderRow showSortingControls />
            <TableColumnVisibility />
            <Toolbar />

            <SearchPanel
              style={{ position: 'absolute' }}
              className="heywdadhwaiu"
            />
            <ColumnChooser />
            <TableRowDetail contentComponent={this.RowDetail} />
            <PagingPanel pageSizes={pageSizes} />
          </Grid>
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  tableStriped: {
    '& tbody tr:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    '& th': {
      fontSize: 20,
      textAlign: 'center'
    },
    '& td:nth-of-type(n+3)': {
      borderLeft: '1px solid lightgray'
    }
  }
});

const TableComponentBase = ({ classes, ...restProps }) => (
  <Table.Table {...restProps} className={classes.tableStriped} />
);

export const TableComponent = withStyles(styles, { name: 'TableComponent' })(
  TableComponentBase
);

export default withStyles(styles)(TrafficControl);
