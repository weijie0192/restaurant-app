import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Table from './Table';

class CustomTable extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <CssBaseline />
        <Typography variant="display2" gutterBottom>
          This is CustomTable page
        </Typography>
        <Paper style={{ height: 500 }}>
          <Table classes={classes} />
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  paginate: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: 10
  }
});

export default withStyles(styles)(CustomTable);
