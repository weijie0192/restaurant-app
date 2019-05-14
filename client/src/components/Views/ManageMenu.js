import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

class ManageMenu extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <div className="container">
        <h1 variant="h5" component="h3">
          This is TManage menu
        </h1>
      </div>
    );
  }
}

const styles = theme => ({});

export default withStyles(styles)(ManageMenu);
