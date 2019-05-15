import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class Home extends Component {
  render() {
    //  const { classes } = this.props;
    return (
      <div className="container">
        <CssBaseline />
        <Typography variant="display2" gutterBottom>
          This is home page
        </Typography>
        <Paper style={{ height: 500 }} />
      </div>
    );
  }
}

const styles = theme => ({});

export default withStyles(styles)(Home);
