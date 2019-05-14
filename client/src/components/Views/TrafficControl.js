import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

class TrafficControl extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <div className="container">
        <h1 variant="h5" component="h3">
          This is traffic
        </h1>
      </div>
    );
  }
}

const styles = theme => ({});

export default withStyles(styles)(TrafficControl);
