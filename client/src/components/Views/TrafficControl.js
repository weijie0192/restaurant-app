import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Export from '@material-ui/icons/GetApp';
import VisbilityIcon from '@material-ui/icons/Visibility';
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
  VirtualTable,
  Table,
  TableHeaderRow,
  TableRowDetail,
  PagingPanel,
  ColumnChooser,
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
      rows: this.getRows(),
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

  getRows() {
    const arr = [];
    for (var i = 0; i < 1000; i++) {
      arr.push({
        name: 'hawdopawkdpa',
        sex: 'hawdopawkdpa',
        city: 'hawdopawkdpa',
        car: 'hawdopawkdpa',
        name1: 'hawdopawkdpa',
        sex1: 'hawdopawkdpa',
        city1: 'hawdopawkdpa',
        car1: 'hawdopawkdpa'
      });
    }
    return arr;
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
      <br />
    </div>
  );

  render() {
    // const { classes } = this.props;
    const { rows, columns, pageSizes, tableColumnExtensions } = this.state;

    return (
      <div className="container">
        <Typography variant="h5" align="center" gutterBottom>
          Traffic Table
        </Typography>
        <IconButton
          variant="outlined"
          style={{
            color: 'green',
            position: 'absolute',
            left: 80,
            top: 53,
            zIndex: '1000'
          }}
        >
          <Export />
        </IconButton>
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
            <VirtualTable
              columnExtensions={tableColumnExtensions}
              tableComponent={TableComponent}
            />
            <TableHeaderRow showSortingControls />
            <TableColumnVisibility />
            <Toolbar />
            <ColumnChooser
              toggleButtonComponent={props => (
                <IconButton
                  onClick={props.onToggle}
                  buttonRef={props.buttonRef}
                  style={{ position: 'absolute' }}
                >
                  <VisbilityIcon />
                </IconButton>
              )}
            />

            <SearchPanel />
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
      fontSize: 18,
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
