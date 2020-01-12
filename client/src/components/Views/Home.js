import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

class Home extends Component {
  render() {
    //  const { classes } = this.props;
    return (
      <div className="container">
        <CssBaseline />
        <Typography variant="display2" track-click="Home-Title" gutterBottom>
          This is home page
        </Typography>
        <Paper style={{ height: 500 }}>
          <Button track-click="Play-Button">Play Button</Button>
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({});

export default withStyles(styles)(Home);
