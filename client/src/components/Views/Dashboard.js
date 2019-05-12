import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <h1 variant="h5" component="h3">
          This is a sheet of paper.
        </h1>
        <h1 component="p">
          Paper can be used to build surface or other elements for your
          application.
        </h1>
      </Paper>
    );
  }
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
    position: 'absolute'
  }
});

export default withStyles(styles)(Dashboard);
